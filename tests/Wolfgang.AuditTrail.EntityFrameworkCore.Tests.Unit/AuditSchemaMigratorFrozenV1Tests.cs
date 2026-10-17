#if NET10_0
using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using Wolfgang.AuditTrail.Schema;
using Wolfgang.AuditTrail.Serializers;
using Xunit;

namespace Wolfgang.AuditTrail.Tests.Unit;

/// <summary>
/// Proves the frozen version-1 SQLite install script under <c>Fixtures/V1/</c>
/// is what the migrator actually installs today.
/// </summary>
/// <remarks>
/// <para>
/// The file is the exact output of <see cref="AuditSchemaMigrator.RunAsync"/>
/// with <c>dryRun: true</c>, captured while the library installed schema
/// version 1. Unlike the Verify snapshots in
/// <see cref="AuditSchemaMigratorSnapshotTests"/>, which are regenerated
/// whenever the model changes on purpose, this file must <strong>never</strong>
/// be regenerated: once version 2 ships it is the only faithful record of what
/// version 1 installed, and it is what an "upgrade from v1" test replays to
/// obtain a genuine v1 database. The provider-backed equivalents (SQL Server,
/// PostgreSQL, MySQL) live in
/// <c>Wolfgang.AuditTrail.EntityFrameworkCore.Schema.Tests.Integration</c>.
/// </para>
/// <para>
/// This fact holds exactly as long as the library installs version 1. The PR
/// that ships version 2 replaces it with a convergence test (replay v1, stamp 1,
/// run the migrator, compare the schema to a fresh install), which at version 1
/// degenerates to this comparison.
/// </para>
/// <para>
/// Pinned to net10.0 for the same reason the snapshot tests are: the SQLite DDL
/// EF Core emits can shift between EF versions, and the script was captured on
/// EF Core 10.
/// </para>
/// </remarks>
public sealed class AuditSchemaMigratorFrozenV1Tests
{
    [Fact]
    public async Task Migration_script_with_default_options_matches_the_frozen_v1_install_script()
    {
        using var connection = new SqliteConnection("DataSource=:memory:");
        connection.Open();

        var builder = new DbContextOptionsBuilder<AuditMigrationsDbContext>()
            .UseSqlite(connection);
        var options = new AuditOptions
        {
            ValueSerializer     = new StringAuditValueSerializer(),
            EntityKeySerializer = new PipeDelimitedEntityKeySerializer(),
        };
        await using var context = new AuditMigrationsDbContext(builder.Options, options);

        var expected = await ReadFrozenScriptAsync("V1.SQLite.sql");
        var actual   = NormaliseLineEndings(await AuditSchemaMigrator.RunAsync(context, dryRun: true));

        Assert.Equal(1, AuditSchemaConstants.CurrentSchemaVersion);
        Assert.Equal(expected, actual);
    }



    private static async Task<string> ReadFrozenScriptAsync(string resourceName)
    {
        // Assert rather than `?? throw`: the test assembly's coverage gate is
        // 100%, and a throw arm for a resource that is always embedded could
        // never be executed.
        var stream = typeof(AuditSchemaMigratorFrozenV1Tests).Assembly.GetManifestResourceStream(resourceName);
        Assert.NotNull(stream);

        await using var _ = stream;
        using var reader = new StreamReader(stream);
        return NormaliseLineEndings(await reader.ReadToEndAsync());
    }



    // EF Core joins generated DDL with Environment.NewLine, so a script captured
    // on Windows and one generated on Linux differ only in line endings.
    private static string NormaliseLineEndings(string script)
    {
        return script.Replace("\r\n", "\n", StringComparison.Ordinal);
    }
}
#endif
