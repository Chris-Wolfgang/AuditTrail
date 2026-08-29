using System.Diagnostics.CodeAnalysis;
using Microsoft.EntityFrameworkCore;
using Testcontainers.PostgreSql;
using Wolfgang.AuditTrail.Serializers;
using Xunit;

namespace Wolfgang.AuditTrail.Npgsql.Tests.Integration.TestSupport;

// Pinned to the same exact image as the core package's Tests.Integration
// PostgresFixture for the same reproducibility reason documented there.
[ExcludeFromCodeCoverage]
public sealed class PostgresFixture : IAsyncLifetime
{
    private readonly PostgreSqlContainer _container = new PostgreSqlBuilder("postgres:16.4-alpine3.20")
        .WithDatabase("auditnpgsqldb")
        .Build();

    public async Task InitializeAsync()
    {
        await _container.StartAsync();

        // Create the schema once for the whole fixture lifetime; individual tests
        // truncate between runs instead of re-creating it (see TruncateAllTablesAsync).
        var options = new AuditOptions
        {
            ValueSerializer = new StringAuditValueSerializer(),
            EntityKeySerializer = new PipeDelimitedEntityKeySerializer(),
        };
        await using var context = new TestDbContext(CreateContextOptions(), new StaticAuditUserProvider("schema-init"), options, bulkWriter: null);
        await context.Database.EnsureCreatedAsync();
    }

    public Task DisposeAsync() => _container.DisposeAsync().AsTask();

    public DbContextOptions<TestDbContext> CreateContextOptions()
    {
        return new DbContextOptionsBuilder<TestDbContext>()
            .UseNpgsql(_container.GetConnectionString())
            .Options;
    }

    // Runs before each test method (called from the test class's own IAsyncLifetime)
    // so tests don't see rows left behind by earlier tests sharing this one container.
    public async Task TruncateAllTablesAsync()
    {
        var options = new AuditOptions
        {
            ValueSerializer = new StringAuditValueSerializer(),
            EntityKeySerializer = new PipeDelimitedEntityKeySerializer(),
        };
        await using var context = new TestDbContext(CreateContextOptions(), new StaticAuditUserProvider("truncate"), options, bulkWriter: null);
#pragma warning disable EF1002, S2077 // Static SQL, table names are hardcoded literals with no user input.
        await context.Database.ExecuteSqlRawAsync("TRUNCATE TABLE \"AuditDetail\", \"AuditHeader\", \"Customers\" RESTART IDENTITY CASCADE");
#pragma warning restore EF1002, S2077
    }
}
