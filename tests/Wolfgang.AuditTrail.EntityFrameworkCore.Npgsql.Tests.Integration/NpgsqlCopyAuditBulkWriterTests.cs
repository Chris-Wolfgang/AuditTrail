using Microsoft.EntityFrameworkCore;
using Wolfgang.AuditTrail.Entities;
using Wolfgang.AuditTrail.Npgsql.Tests.Integration.TestSupport;
using Wolfgang.AuditTrail.Serializers;
using Xunit;

namespace Wolfgang.AuditTrail.Npgsql.Tests.Integration;

public sealed class NpgsqlCopyAuditBulkWriterTests : IClassFixture<PostgresFixture>, IAsyncLifetime
{
    private readonly PostgresFixture _fixture;

    public NpgsqlCopyAuditBulkWriterTests(PostgresFixture fixture)
    {
        _fixture = fixture;
    }

    // Runs before each test method -- the fixture's container (and schema) is
    // shared across the whole test class, so tests must not see rows left
    // behind by an earlier test.
    public Task InitializeAsync() => _fixture.TruncateAllTablesAsync();

    public Task DisposeAsync() => Task.CompletedTask;



    private TestDbContext CreateContext(int? bulkInsertRowThreshold)
    {
        var options = new AuditOptions
        {
            ValueSerializer = new StringAuditValueSerializer(),
            EntityKeySerializer = new PipeDelimitedEntityKeySerializer(),
            BulkInsertRowThreshold = bulkInsertRowThreshold,
        };
        var userProvider = new StaticAuditUserProvider("bulk-writer-tests@example.com");

        return new TestDbContext(_fixture.CreateContextOptions(), userProvider, options, new NpgsqlCopyAuditBulkWriter());
    }



    private TestDbContext CreateVerifyContext()
    {
        var options = new AuditOptions
        {
            ValueSerializer = new StringAuditValueSerializer(),
            EntityKeySerializer = new PipeDelimitedEntityKeySerializer(),
        };
        return new TestDbContext(_fixture.CreateContextOptions(), new StaticAuditUserProvider("verify"), options, bulkWriter: null);
    }



    [Fact]
    public void CanHandle_returns_true_for_Npgsql_context()
    {
        using var context = CreateContext(bulkInsertRowThreshold: null);
        var writer = new NpgsqlCopyAuditBulkWriter();

        Assert.True(writer.CanHandle(context));
    }



    [Fact]
    public void CanHandle_returns_false_for_non_Npgsql_context()
    {
        var sqliteOptions = new DbContextOptionsBuilder<TestDbContext>()
            .UseSqlite("Filename=:memory:")
            .Options;
        var userProvider = new StaticAuditUserProvider("bulk-writer-tests@example.com");
        using var context = new TestDbContext(sqliteOptions, userProvider, new AuditOptions
        {
            ValueSerializer = new StringAuditValueSerializer(),
            EntityKeySerializer = new PipeDelimitedEntityKeySerializer(),
        }, bulkWriter: null);
        var writer = new NpgsqlCopyAuditBulkWriter();

        Assert.False(writer.CanHandle(context));
    }



    [Fact]
    public async Task SaveChangesAsync_below_threshold_uses_standard_insert_path_not_bulk_writer()
    {
        await using var context = CreateContext(bulkInsertRowThreshold: 10);

        // Below the threshold -- BuildHeaders still runs, but TryGetBulkWriter declines,
        // so this exercises the ordinary context.Add(header) tracked-entity path.
        context.Customers.Add(new Customer { Name = "Below Threshold", Email = "below@x.com" });
        await context.SaveChangesAsync();

        var header = await context.Set<AuditHeader>().SingleAsync();
        Assert.Equal(AuditOperation.Insert, header.Operation);
    }



    [Fact]
    public async Task SaveChangesAsync_at_or_above_threshold_bulk_writes_correct_header_and_detail_rows()
    {
        await using var context = CreateContext(bulkInsertRowThreshold: 3);

        for (var i = 0; i < 5; i++)
        {
            context.Customers.Add(new Customer { Name = $"Bulk{i}", Email = $"bulk{i}@x.com" });
        }
        await context.SaveChangesAsync();

        await using var verify = CreateVerifyContext();

        var headers = await verify.Set<AuditHeader>()
            .Include(h => h.Details)
            .ToListAsync();

        Assert.Equal(5, headers.Count);
        Assert.All(headers, h => Assert.Equal(AuditOperation.Insert, h.Operation));
        Assert.All(headers, h => Assert.Equal("bulk-writer-tests@example.com", h.UserId));
        // Name + Email changed -> 2 detail rows per header (CustomerId is the key, not a captured column).
        Assert.All(headers, h => Assert.Equal(2, h.Details.Count));

        var firstHeader = headers.OrderBy(h => h.EntityKey, StringComparer.Ordinal).First();
        Assert.Contains(firstHeader.Details, d => string.Equals(d.ColumnName, "Name", StringComparison.Ordinal) && string.Equals(d.ValueText, "Bulk0", StringComparison.Ordinal));
        Assert.Contains(firstHeader.Details, d => string.Equals(d.ColumnName, "Email", StringComparison.Ordinal) && string.Equals(d.ValueText, "bulk0@x.com", StringComparison.Ordinal));
    }



    [Fact]
    public async Task SaveChangesAsync_bulk_write_stays_in_the_same_transaction_as_the_tracked_save()
    {
        await using var context = CreateContext(bulkInsertRowThreshold: 2);

        for (var i = 0; i < 3; i++)
        {
            context.Customers.Add(new Customer { Name = $"Txn{i}" });
        }
        await context.SaveChangesAsync();

        await using var verify = CreateVerifyContext();

        // If the bulk COPY ran outside the ambient transaction, either the Customer
        // rows or the AuditHeader rows could be visible without the other after a
        // partial failure. Both landing together on a successful save is the
        // observable proxy for "shared the transaction" without needing to force
        // an artificial rollback.
        var customerCount = await verify.Customers.CountAsync();
        var headerCount = await verify.Set<AuditHeader>().CountAsync();
        Assert.Equal(3, customerCount);
        Assert.Equal(3, headerCount);
    }



    [Fact]
    public void SaveChanges_sync_path_bulk_writes_correctly()
    {
        using var context = CreateContext(bulkInsertRowThreshold: 2);

        for (var i = 0; i < 4; i++)
        {
            context.Customers.Add(new Customer { Name = $"Sync{i}" });
        }
        context.SaveChanges();

        using var verify = CreateVerifyContext();

        Assert.Equal(4, verify.Set<AuditHeader>().Count());
    }
}
