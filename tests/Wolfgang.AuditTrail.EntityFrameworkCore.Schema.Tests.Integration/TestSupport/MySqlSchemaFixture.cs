using System.Diagnostics.CodeAnalysis;
using Microsoft.EntityFrameworkCore;
using MySqlConnector;
using Testcontainers.MySql;
using Wolfgang.AuditTrail;
using Wolfgang.AuditTrail.Schema;
using Xunit;

namespace Wolfgang.AuditTrail.EntityFrameworkCore.Schema.Tests.Integration.TestSupport;



/// <summary>
/// MySQL fixture for the shared schema-migrator facts. Lives on the net8.0 TFM
/// slot because Pomelo has no EF Core 10 build.
/// </summary>
/// <remarks>
/// MySQL has no schema namespace separate from the database, so
/// <see cref="CustomSchema"/> is <c>null</c> here and the shared custom-naming
/// fact asserts on table names alone. Queries against
/// <c>information_schema</c> span the whole server rather than one database,
/// so every lookup is scoped with <c>DATABASE()</c>.
/// </remarks>
[ExcludeFromCodeCoverage]
public sealed class MySqlSchemaFixture : IAsyncLifetime, ISchemaProviderFixture
{
    // Pinned to a specific patch tag so reruns are reproducible, matching
    // MySqlFixture in Wolfgang.AuditTrail.EntityFrameworkCore.Tests.Integration.
    // Runs as root because each test creates its own database.
    private readonly MySqlContainer _container = new MySqlBuilder("mysql:8.0.39")
        .WithDatabase("audit_root")
        .WithUsername("root")
        .Build();

    private string _currentDatabase = "audit_root";
    private ServerVersion? _serverVersion;

    public string ProviderName => "MySQL";

    public string? CustomSchema => null;



    public async Task InitializeAsync()
    {
        await _container.StartAsync();

        // Detect once at fixture init: AutoDetect opens its own connection, and
        // doing it per context would add latency and a failure surface to every
        // test.
        _serverVersion = ServerVersion.AutoDetect(ConnectionStringFor("audit_root"));
    }



    public Task DisposeAsync() => _container.DisposeAsync().AsTask();



    private string ConnectionStringFor(string database)
    {
        var b = new MySqlConnectionStringBuilder(_container.GetConnectionString())
        {
            Database = database,
        };
        return b.ConnectionString;
    }



    public async Task<AuditMigrationsDbContext> CreateContextAsync(AuditOptions options)
    {
        _currentDatabase = $"audit_{DateTime.UtcNow.Ticks}";
        await CreateDatabaseAsync(_currentDatabase);

        var dbOpts = new DbContextOptionsBuilder<AuditMigrationsDbContext>()
            .UseMySql(
                ConnectionStringFor(_currentDatabase),
                _serverVersion ?? throw new InvalidOperationException("Fixture has not been initialized."))
            .Options;

        return new AuditMigrationsDbContext(dbOpts, options);
    }



    public async Task<IReadOnlyList<TableInfo>> ListTablesAsync(string? schema)
    {
        var rows = new List<TableInfo>();
        await using var conn = new MySqlConnection(ConnectionStringFor(_currentDatabase));
        await conn.OpenAsync();
        await using var cmd = conn.CreateCommand();
        // DATABASE() rather than the caller's schema: on MySQL the schema IS
        // the database, and information_schema covers every database on the
        // server, so an unscoped query would see other tests' tables.
        cmd.CommandText =
            "SELECT TABLE_SCHEMA, TABLE_NAME FROM information_schema.TABLES " +
            "WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_SCHEMA = DATABASE()";
        await using var reader = await cmd.ExecuteReaderAsync();
        while (await reader.ReadAsync())
        {
            rows.Add(new TableInfo(reader.GetString(0), reader.GetString(1)));
        }
        return rows;
    }



    public async Task<IReadOnlyList<string>> ListColumnsAsync(string? schema, string table)
    {
        var columns = new List<string>();
        await using var conn = new MySqlConnection(ConnectionStringFor(_currentDatabase));
        await conn.OpenAsync();
        await using var cmd = conn.CreateCommand();
        cmd.CommandText =
            "SELECT COLUMN_NAME FROM information_schema.COLUMNS " +
            "WHERE TABLE_NAME = @table AND TABLE_SCHEMA = DATABASE()";
        cmd.Parameters.AddWithValue("@table", table);
        await using var reader = await cmd.ExecuteReaderAsync();
        while (await reader.ReadAsync())
        {
            columns.Add(reader.GetString(0));
        }
        return columns;
    }



    private async Task CreateDatabaseAsync(string database)
    {
        await using var conn = new MySqlConnection(ConnectionStringFor("audit_root"));
        await conn.OpenAsync();
        await using var cmd = conn.CreateCommand();
        // Name is generated from a tick count, not caller input.
        cmd.CommandText = $"CREATE DATABASE IF NOT EXISTS `{database}`";
        await cmd.ExecuteNonQueryAsync();
    }
}
