using System.Data.Common;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using Wolfgang.Audit.Entities;
using Wolfgang.Audit.Serializers;
using Wolfgang.Audit.Tests.Unit.TestSupport;
using Xunit;

namespace Wolfgang.Audit.Tests.Unit;

public class AuditAtomicityAndConcurrencyTests
{
    // TODO: with EF Core's *implicit* transaction, SavedChangesAsync fires AFTER the
    // user's data is committed — so a throw inside the audit save propagates but the
    // user's INSERT is already persisted. Atomicity therefore requires either:
    //   (a) the consumer opening an explicit transaction (the contract this test pins), or
    //   (b) the interceptor opening its own transaction in SavingChangesAsync (planned fix).
    // The (b) fix is a focused PR of its own. (a) is what this test exercises.
    [Fact]
    public async Task SaveChangesAsync_when_value_serializer_throws_inside_a_user_transaction_rolls_back_the_user_save()
    {
        var options = new AuditOptions
        {
            ValueSerializer = new FailingAuditValueSerializer(),
            EntityKeySerializer = new PipeDelimitedEntityKeySerializer(),
        };

        var interceptor = new AuditSaveChangesInterceptor(
            new StaticAuditUserProvider("test-user"),
            options);

        DbConnection connection = new SqliteConnection("Filename=:memory:");
        await connection.OpenAsync();
        try
        {
            TestDbContext NewContext() => new(
                new DbContextOptionsBuilder<TestDbContext>()
                    .UseSqlite(connection)
                    .AddInterceptors(interceptor)
                    .Options,
                options);

            await using (var seed = NewContext())
            {
                await seed.Database.EnsureCreatedAsync();
            }

            await using (var ctx = NewContext())
            {
                await using var tx = await ctx.Database.BeginTransactionAsync();
                ctx.Customers.Add(new Customer { Name = "Alice" });

                await Assert.ThrowsAsync<InvalidOperationException>(() => ctx.SaveChangesAsync());
                // Transaction disposed without Commit -> rollback.
            }

            await using var verify = NewContext();
            Assert.Empty(await verify.Customers.ToListAsync());
            Assert.Empty(await verify.Set<AuditHeader>().ToListAsync());
        }
        finally
        {
            await connection.DisposeAsync();
        }
    }

    [Fact]
    public async Task SaveChangesAsync_when_called_repeatedly_each_save_gets_a_distinct_TransactionId()
    {
        // TODO: true concurrent SaveChanges on the same SQLite connection trips
        // "cannot start a transaction within a transaction" — SQLite serializes
        // writes per-connection. Testing real concurrency cleanly requires the
        // integration suite (different providers, separate connections per
        // DbContext). This test instead pins the AsyncLocal isolation contract:
        // separate save flows generate separate TransactionIds with no leakage.

        using var fixture = new AuditFixture();

        for (var i = 0; i < 3; i++)
        {
            await using var ctx = fixture.CreateContext();
            ctx.Customers.Add(new Customer { Name = $"User{i}" });
            await ctx.SaveChangesAsync();
        }

        await using var verify = fixture.CreateContext();
        var headers = await verify.Set<AuditHeader>().ToListAsync();

        Assert.Equal(3, headers.Count);
        Assert.Equal(3, headers.Select(h => h.TransactionId).Distinct().Count());
    }

    [Fact]
    public async Task SaveChangesAsync_uses_the_consumer_supplied_IAuditEntityKeySerializer()
    {
        var options = new AuditOptions
        {
            ValueSerializer = new StringAuditValueSerializer(),
            EntityKeySerializer = new JsonEntityKeySerializer(),
        };
        var interceptor = new AuditSaveChangesInterceptor(
            new StaticAuditUserProvider("test-user"),
            options);

        DbConnection connection = new SqliteConnection("Filename=:memory:");
        await connection.OpenAsync();
        try
        {
            TestDbContext NewContext() => new(
                new DbContextOptionsBuilder<TestDbContext>()
                    .UseSqlite(connection)
                    .AddInterceptors(interceptor)
                    .Options,
                options);

            await using (var seed = NewContext())
            {
                await seed.Database.EnsureCreatedAsync();
            }

            await using (var ctx = NewContext())
            {
                ctx.OrderLines.Add(new OrderLine { OrderId = 7, LineNumber = 3, Description = "Widget" });
                await ctx.SaveChangesAsync();
            }

            await using var verify = NewContext();
            var header = await verify.Set<AuditHeader>().SingleAsync();

            Assert.Equal("[7,3]", header.EntityKey);
        }
        finally
        {
            await connection.DisposeAsync();
        }
    }
}
