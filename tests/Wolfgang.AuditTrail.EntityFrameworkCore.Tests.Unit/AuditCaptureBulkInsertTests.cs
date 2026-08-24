using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using Wolfgang.AuditTrail.Entities;
using Wolfgang.AuditTrail.Serializers;
using Wolfgang.AuditTrail.Tests.Unit.TestSupport;
using Xunit;

namespace Wolfgang.AuditTrail.Tests.Unit;



/// <summary>
/// Exercises the <see cref="AuditOptions.BulkInsertRowThreshold"/> / <see cref="IAuditBulkWriter"/>
/// opt-in fast path (#148 abstraction) via <see cref="AuditingDbContext"/>. The writer
/// is passed directly to the context's constructor, so these tests observe it as a
/// plain instance rather than needing DI/EF-internal-service resolution.
/// </summary>
public sealed class AuditCaptureBulkInsertTests : IDisposable
{
    private readonly SqliteConnection _connection;
    private readonly StaticAuditUserProvider _userProvider;

    public AuditCaptureBulkInsertTests()
    {
        _connection = new SqliteConnection("Filename=:memory:");
        _connection.Open();
        _userProvider = new StaticAuditUserProvider("test-user");

        using var seed = CreateContext(NewOptions(threshold: null), bulkWriter: null);
        seed.Database.EnsureCreated();
    }



    public void Dispose() => _connection.Dispose();



    private static AuditOptions NewOptions(int? threshold) => new()
    {
        BulkInsertRowThreshold = threshold,
        ValueSerializer = new StringAuditValueSerializer(),
        EntityKeySerializer = new PipeDelimitedEntityKeySerializer(),
    };



    private TestDbContext CreateContext(AuditOptions options, IAuditBulkWriter? bulkWriter)
    {
        var builder = new DbContextOptionsBuilder<TestDbContext>().UseSqlite(_connection);
        return new TestDbContext(builder.Options, _userProvider, options, bulkWriter);
    }



    [Fact]
    public async Task SaveChangesAsync_below_threshold_uses_normal_insert_path_even_with_accepting_writer()
    {
        var options = NewOptions(threshold: 100);
        var writer = new RecordingBulkWriter { CanHandleResult = true };

        await using (var ctx = CreateContext(options, writer))
        {
            ctx.Customers.Add(new Customer { Name = "A", Email = "a@x.com" });
            await ctx.SaveChangesAsync();
        }

        Assert.Equal(0, writer.WriteAsyncCallCount);
        await using var verify = CreateContext(options, bulkWriter: null);
        Assert.Single(await verify.Set<AuditHeader>().ToListAsync());
    }



    [Fact]
    public async Task SaveChangesAsync_at_threshold_with_accepting_writer_uses_bulk_path_and_skips_normal_insert()
    {
        var options = NewOptions(threshold: 1);
        var writer = new RecordingBulkWriter { CanHandleResult = true };

        await using (var ctx = CreateContext(options, writer))
        {
            ctx.Customers.Add(new Customer { Name = "A", Email = "a@x.com" });
            await ctx.SaveChangesAsync();
        }

        Assert.Equal(1, writer.WriteAsyncCallCount);
        Assert.Equal(0, writer.WriteCallCount);
        Assert.NotNull(writer.LastHeaders);
        Assert.Single(writer.LastHeaders);

        // The bulk writer no-ops (never inserts), so the normal tracked-entity path
        // must genuinely have been skipped -- no AuditHeader row exists.
        await using var verify = CreateContext(options, bulkWriter: null);
        Assert.Empty(await verify.Set<AuditHeader>().ToListAsync());
    }



    [Fact]
    public void SaveChanges_sync_at_threshold_with_accepting_writer_uses_bulk_path()
    {
        var options = NewOptions(threshold: 1);
        var writer = new RecordingBulkWriter { CanHandleResult = true };

        using (var ctx = CreateContext(options, writer))
        {
            ctx.Customers.Add(new Customer { Name = "A", Email = "a@x.com" });
            ctx.SaveChanges();
        }

        Assert.Equal(1, writer.WriteCallCount);
        Assert.Equal(0, writer.WriteAsyncCallCount);

        using var verify = CreateContext(options, bulkWriter: null);
        Assert.Empty(verify.Set<AuditHeader>().ToList());
    }



    [Fact]
    public async Task SaveChangesAsync_at_threshold_with_declining_writer_falls_back_to_normal_insert_path()
    {
        var options = NewOptions(threshold: 1);
        var writer = new RecordingBulkWriter { CanHandleResult = false };

        await using (var ctx = CreateContext(options, writer))
        {
            ctx.Customers.Add(new Customer { Name = "A", Email = "a@x.com" });
            await ctx.SaveChangesAsync();
        }

        Assert.Equal(0, writer.WriteAsyncCallCount);
        await using var verify = CreateContext(options, bulkWriter: null);
        Assert.Single(await verify.Set<AuditHeader>().ToListAsync());
    }



    [Fact]
    public async Task SaveChangesAsync_at_threshold_with_no_writer_registered_falls_back_to_normal_insert_path()
    {
        var options = NewOptions(threshold: 1);

        await using (var ctx = CreateContext(options, bulkWriter: null))
        {
            ctx.Customers.Add(new Customer { Name = "A", Email = "a@x.com" });
            await ctx.SaveChangesAsync();
        }

        await using var verify = CreateContext(options, bulkWriter: null);
        Assert.Single(await verify.Set<AuditHeader>().ToListAsync());
    }



    [Fact]
    public async Task SaveChangesAsync_when_threshold_is_null_never_consults_the_writer_even_for_large_batches()
    {
        var options = NewOptions(threshold: null);
        var writer = new RecordingBulkWriter { CanHandleResult = true };

        await using (var ctx = CreateContext(options, writer))
        {
            ctx.Customers.Add(new Customer { Name = "A", Email = "a@x.com" });
            await ctx.SaveChangesAsync();
        }

        Assert.Equal(0, writer.WriteAsyncCallCount);
    }



    private sealed class RecordingBulkWriter : IAuditBulkWriter
    {
        public bool CanHandleResult { get; set; } = true;

        public int WriteCallCount { get; private set; }

        public int WriteAsyncCallCount { get; private set; }

        public IReadOnlyList<AuditHeader>? LastHeaders { get; private set; }

        public bool CanHandle(DbContext context) => CanHandleResult;

        public void Write(DbContext context, IReadOnlyList<AuditHeader> headers)
        {
            WriteCallCount++;
            LastHeaders = headers;
        }

        public Task WriteAsync(DbContext context, IReadOnlyList<AuditHeader> headers, CancellationToken cancellationToken)
        {
            WriteAsyncCallCount++;
            LastHeaders = headers;
            return Task.CompletedTask;
        }
    }
}
