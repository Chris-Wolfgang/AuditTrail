using System.Diagnostics.CodeAnalysis;
using IBM.EntityFrameworkCore.Storage.Internal;
using Microsoft.EntityFrameworkCore.Storage;

namespace Wolfgang.AuditTrail.Tests.Integration.TestSupport;

/// <summary>
/// Replaces Db2's database-level Create()/Delete() with table-only equivalents.
/// </summary>
/// <remarks>
/// Db2 LUW has no CREATE/DROP DATABASE SQL statement, so IBM.EntityFrameworkCore's
/// Db2DatabaseCreator.Create()/Delete() both call a driver-level admin RPC
/// (DB2ConnPool.CreateDatabase/DropDatabase) instead of running SQL -- confirmed by
/// decompiling the provider. That RPC works the first time in a process but fails
/// on every subsequent call with SQL30082N reason 17 ("UNSUPPORTED FUNCTION"), which
/// breaks the shared test pattern of EnsureDeletedAsync+EnsureCreatedAsync before
/// every test.
///
/// This mirrors the strategy Oracle's own official provider already uses for the
/// identical class of problem: OracleDatabaseCreator.Create() throws
/// NotSupportedException (the database/user is assumed to already exist) and
/// Delete() only cleans up schema objects via plain SQL, never touching the
/// database itself. Db2Fixture's container provisions "auditdb" once at startup,
/// so Create() here is a no-op, and Delete() drops tables via plain SQL read from
/// SYSCAT.TABLES (the same catalog view Db2DatabaseCreator.HasTables() already
/// uses) instead of the database.
/// </remarks>
[ExcludeFromCodeCoverage]
#pragma warning disable EF1001 // Db2DatabaseCreator/IDb2SqlConnection are EF Core's own internal extension points for this exact scenario (see Oracle's official provider precedent in the remarks above) -- there is no public alternative to subclass.
internal sealed class Db2TableOnlyDatabaseCreator : Db2DatabaseCreator
{
    private readonly IDb2SqlConnection _connection;

    public Db2TableOnlyDatabaseCreator
    (
        RelationalDatabaseCreatorDependencies dependencies,
        IDb2SqlConnection connection,
        IRawSqlCommandBuilder rawSqlCommandBuilder
    )
        : base(dependencies, connection, rawSqlCommandBuilder)
    {
        _connection = connection;
    }
#pragma warning restore EF1001



    public override void Create()
    {
        // The container already created "auditdb" at startup (Db2Fixture); the
        // driver-level CreateDatabase RPC this would otherwise call is what's
        // unreliable, and is never actually needed here.
    }



    public override Task CreateAsync(CancellationToken cancellationToken = default) => Task.CompletedTask;



#pragma warning disable VSTHRD002 // Delete() is a synchronous override required by RelationalDatabaseCreator's contract -- no async counterpart exists to route through instead.
    public override void Delete() => DropAllTablesAsync(CancellationToken.None).GetAwaiter().GetResult();
#pragma warning restore VSTHRD002



    public override Task DeleteAsync(CancellationToken cancellationToken = default) => DropAllTablesAsync(cancellationToken);



    private async Task DropAllTablesAsync(CancellationToken cancellationToken)
    {
        await _connection.OpenAsync(cancellationToken).ConfigureAwait(false);
        try
        {
            var tables = await ReadTableNamesAsync(cancellationToken).ConfigureAwait(false);

            // FK dependencies (e.g. AuditDetail -> AuditHeader) mean a table can fail
            // to drop before its dependents are gone; retry remaining tables across
            // multiple passes rather than hand-modeling the dependency graph.
            for (var pass = 0; tables.Count > 0 && pass < tables.Count; pass++)
            {
                var stillRemaining = new List<(string Schema, string Table)>();
                foreach (var (schema, table) in tables)
                {
                    if (!await TryDropTableAsync(schema, table, cancellationToken).ConfigureAwait(false))
                    {
                        stillRemaining.Add((schema, table));
                    }
                }

                tables = stillRemaining;
            }

            if (tables.Count > 0)
            {
                var remaining = string.Join(", ", tables.Select(t => $"\"{t.Schema}\".\"{t.Table}\""));
                throw new InvalidOperationException($"Db2TableOnlyDatabaseCreator could not drop the following tables after exhausting all retry passes: {remaining}.");
            }
        }
        finally
        {
            await _connection.CloseAsync().ConfigureAwait(false);
        }
    }



    private async Task<List<(string Schema, string Table)>> ReadTableNamesAsync(CancellationToken cancellationToken)
    {
        var result = new List<(string, string)>();
        var command = _connection.DbConnection.CreateCommand();
        command.CommandText =
            "SELECT TABSCHEMA, TABNAME FROM SYSCAT.TABLES WHERE TABSCHEMA NOT IN(" +
            "'SYSCAT', 'SYSFUN', 'SYSPROC', 'SYSIBM', 'SYSIBMADM', 'SYSSTAT', 'SYSTOOLS', 'SQLJ', 'SYSPUBLIC') AND TYPE != 'V'";

        await using (command.ConfigureAwait(false))
        {
            var reader = await command.ExecuteReaderAsync(cancellationToken).ConfigureAwait(false);
            await using (reader.ConfigureAwait(false))
            {
                while (await reader.ReadAsync(cancellationToken).ConfigureAwait(false))
                {
                    result.Add((reader.GetString(0).Trim(), reader.GetString(1).Trim()));
                }
            }
        }

        return result;
    }



    private async Task<bool> TryDropTableAsync(string schema, string table, CancellationToken cancellationToken)
    {
        var command = _connection.DbConnection.CreateCommand();
        command.CommandText = $"DROP TABLE \"{schema}\".\"{table}\"";

        await using (command.ConfigureAwait(false))
        {
            try
            {
                await command.ExecuteNonQueryAsync(cancellationToken).ConfigureAwait(false);
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
    }
}
