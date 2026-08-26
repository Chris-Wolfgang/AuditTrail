using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using Wolfgang.AuditTrail.Entities;
using Wolfgang.AuditTrail.Serializers;
using Wolfgang.AuditTrail.Tests.Unit.TestSupport;
using Xunit;

namespace Wolfgang.AuditTrail.Tests.Unit;



/// <summary>
/// Proves the TimeProvider / Guid-provider constructor seam actually closes the
/// testability gap it was added for: with both injected, <c>AuditHeader.HeaderId</c>
/// and <c>AuditHeader.AuditedAtUtc</c> are asserted against exact expected values
/// instead of just "some Guid" / "some recent timestamp".
/// </summary>
public class AuditingDbContextDeterministicSeamTests
{
    private sealed class FixedTimeProvider : TimeProvider
    {
        private readonly DateTimeOffset _now;

        public FixedTimeProvider(DateTimeOffset now) => _now = now;

        public override DateTimeOffset GetUtcNow() => _now;
    }



    [Fact]
    public async Task SaveChangesAsync_when_TimeProvider_and_GuidProvider_are_injected_produces_deterministic_HeaderId_and_AuditedAtUtc()
    {
        var expectedAuditedAt = new DateTimeOffset(2026, 1, 2, 3, 4, 5, TimeSpan.Zero);
        var expectedHeaderId = Guid.Parse("11111111-1111-1111-1111-111111111111");
        var expectedTransactionId = Guid.Parse("22222222-2222-2222-2222-222222222222");

        var guids = new Queue<Guid>([expectedTransactionId, expectedHeaderId]);
        Guid GuidProvider() => guids.Dequeue();

        var auditOptions = new AuditOptions
        {
            ValueSerializer = new StringAuditValueSerializer(),
            EntityKeySerializer = new PipeDelimitedEntityKeySerializer(),
        };
        var userProvider = new StaticAuditUserProvider("test-user");

        using var connection = new SqliteConnection("Filename=:memory:");
        connection.Open();
        var options = new DbContextOptionsBuilder<TestDbContext>().UseSqlite(connection).Options;

        await using (var seed = new TestDbContext(options, userProvider, auditOptions, timeProvider: null, guidProvider: null))
        {
            await seed.Database.EnsureCreatedAsync();
        }

        await using (var context = new TestDbContext(
            options,
            userProvider,
            auditOptions,
            new FixedTimeProvider(expectedAuditedAt),
            GuidProvider))
        {
            context.Customers.Add(new Customer { Name = "Alice", Email = "alice@example.com" });
            await context.SaveChangesAsync();
        }

        await using var verify = new TestDbContext(options, userProvider, auditOptions, timeProvider: null, guidProvider: null);
        var header = await verify.Set<AuditHeader>().SingleAsync();

        Assert.Equal(expectedHeaderId, header.HeaderId);
        Assert.Equal(expectedTransactionId, header.TransactionId);
        Assert.Equal(expectedAuditedAt.UtcDateTime, header.AuditedAtUtc);
    }
}
