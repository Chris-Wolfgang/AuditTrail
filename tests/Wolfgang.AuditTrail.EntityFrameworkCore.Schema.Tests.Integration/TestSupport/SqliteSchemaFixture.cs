using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Wolfgang.AuditTrail;
using Wolfgang.AuditTrail.Schema;
using Xunit;

namespace Wolfgang.AuditTrail.EntityFrameworkCore.Schema.Tests.Integration.TestSupport;



/// <summary>
/// In-memory SQLite fixture for the shared schema-migrator facts. Needs no
/// container, but lives here rather than in the unit-test project so that the
/// same facts, fixtures and schema comparison cover all four providers.
/// </summary>
/// <remarks>
/// An in-memory SQLite database lives exactly as long as its connection, so
/// every connection <see cref="CreateContextAsync"/> opens is kept open until
/// the fixture is disposed. SQLite has no schema namespace, so
/// <see cref="CustomSchema"/> is <c>null</c> and the shared custom-naming fact
/// asserts on table names alone.
/// </remarks>
public sealed class SqliteSchemaFixture : IAsyncLifetime, ISchemaProviderFixture
{
    private readonly List<SqliteConnection> _connections = [];
    private SqliteConnection? _current;

    public string ProviderName => "SQLite";

    public string? CustomSchema => null;

#pragma warning disable EF1001 // Provider design-time services are the documented way to reach IDatabaseModelFactory outside `dotnet ef`.
    public IDesignTimeServices DesignTimeServices { get; } = new Microsoft.EntityFrameworkCore.Sqlite.Design.Internal.SqliteDesignTimeServices();
#pragma warning restore EF1001



    public Task InitializeAsync() => Task.CompletedTask;



    public async Task DisposeAsync()
    {
        foreach (var connection in _connections)
        {
            await connection.DisposeAsync();
        }
    }



    public async Task<AuditMigrationsDbContext> CreateContextAsync(AuditOptions options)
    {
        var connection = new SqliteConnection("DataSource=:memory:");
        await connection.OpenAsync();
        _connections.Add(connection);
        _current = connection;

        var dbOpts = new DbContextOptionsBuilder<AuditMigrationsDbContext>()
            .UseSqlite(connection)
            .Options;

        return new AuditMigrationsDbContext(dbOpts, options);
    }



    public async Task<IReadOnlyList<TableInfo>> ListTablesAsync(string? schema)
    {
        var rows = new List<TableInfo>();
        await using var cmd = Current().CreateCommand();
        cmd.CommandText = "SELECT name FROM sqlite_master WHERE type = 'table' AND name NOT LIKE 'sqlite_%'";
        await using var reader = await cmd.ExecuteReaderAsync();
        while (await reader.ReadAsync())
        {
            rows.Add(new TableInfo(Schema: null, reader.GetString(0)));
        }
        return rows;
    }



    public async Task<IReadOnlyList<string>> ListColumnsAsync(string? schema, string table)
    {
        var columns = new List<string>();
        await using var cmd = Current().CreateCommand();
        // PRAGMA takes no parameters; the table name comes from the test, not
        // from user input.
        cmd.CommandText = $"PRAGMA table_info(\"{table}\")";
        await using var reader = await cmd.ExecuteReaderAsync();
        while (await reader.ReadAsync())
        {
            columns.Add(reader.GetString(reader.GetOrdinal("name")));
        }
        return columns;
    }



    private SqliteConnection Current()
    {
        return _current ?? throw new InvalidOperationException("CreateContextAsync has not been called.");
    }
}
