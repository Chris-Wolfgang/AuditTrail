using System.Data.Common;
using BenchmarkDotNet.Attributes;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using Wolfgang.Audit.Serializers;

namespace Wolfgang.Audit.Benchmarks;

/// <summary>
/// Compares <c>SaveChangesAsync</c> (unaudited baseline) with
/// <c>SaveChangesWithAuditAsync</c> across Insert, Lifecycle, and MixedStates
/// workloads. SQLite is used for a consistent, dependency-free baseline; the
/// relative delta is what matters, not absolute numbers.
/// </summary>
[MemoryDiagnoser]
public class SaveChangesBenchmarks
{
    private DbConnection _connection = null!;
    private AuditOptions _options = null!;
    private StaticAuditUserProvider _userProvider = null!;

    [Params(1, 10, 50)]
    public int BatchSize { get; set; }

    [GlobalSetup]
    public void GlobalSetup()
    {
        _connection = new SqliteConnection("Filename=:memory:");
        _connection.Open();

        _options = new AuditOptions
        {
            ValueSerializer = new StringAuditValueSerializer(),
            EntityKeySerializer = new PipeDelimitedEntityKeySerializer(),
        };
        _userProvider = new StaticAuditUserProvider();

        using var seed = CreateContext(auditEnabled: true);
        seed.Database.EnsureCreated();
    }

    [GlobalCleanup]
    public void GlobalCleanup()
    {
        _connection.Dispose();
    }

    private BenchmarkDbContext CreateContext(bool auditEnabled)
    {
        return new BenchmarkDbContext(
            new DbContextOptionsBuilder<BenchmarkDbContext>()
                .UseSqlite(_connection)
                .Options,
            auditOptions: auditEnabled ? _options : null);
    }

    private void Save(BenchmarkDbContext ctx, bool audited)
    {
        if (audited)
        {
            ctx.SaveChangesWithAuditAsync(_userProvider, _options).GetAwaiter().GetResult();
        }
        else
        {
            ctx.SaveChanges();
        }
    }

    [Benchmark(Baseline = true)]
    public void Insert_without_audit()
    {
        using var ctx = CreateContext(auditEnabled: false);
        for (var i = 0; i < BatchSize; i++)
        {
            ctx.Customers.Add(new Customer { Name = $"User{i}", Email = $"u{i}@x.com", LoyaltyPoints = i });
        }
        Save(ctx, audited: false);
    }

    [Benchmark]
    public void Insert_with_audit()
    {
        using var ctx = CreateContext(auditEnabled: true);
        for (var i = 0; i < BatchSize; i++)
        {
            ctx.Customers.Add(new Customer { Name = $"User{i}", Email = $"u{i}@x.com", LoyaltyPoints = i });
        }
        Save(ctx, audited: true);
    }

    [Benchmark]
    public void Lifecycle_without_audit()
    {
        using var ctx = CreateContext(auditEnabled: false);
        var rows = new Customer[BatchSize];
        for (var i = 0; i < BatchSize; i++)
        {
            rows[i] = new Customer { Name = $"L{i}", Email = $"l{i}@x.com", LoyaltyPoints = i };
            ctx.Customers.Add(rows[i]);
        }
        Save(ctx, audited: false);

        for (var i = 0; i < BatchSize; i++)
        {
            rows[i].Email = $"updated-{i}@x.com";
        }
        Save(ctx, audited: false);

        for (var i = 0; i < BatchSize; i++)
        {
            ctx.Customers.Remove(rows[i]);
        }
        Save(ctx, audited: false);
    }

    [Benchmark]
    public void Lifecycle_with_audit()
    {
        using var ctx = CreateContext(auditEnabled: true);
        var rows = new Customer[BatchSize];
        for (var i = 0; i < BatchSize; i++)
        {
            rows[i] = new Customer { Name = $"L{i}", Email = $"l{i}@x.com", LoyaltyPoints = i };
            ctx.Customers.Add(rows[i]);
        }
        Save(ctx, audited: true);

        for (var i = 0; i < BatchSize; i++)
        {
            rows[i].Email = $"updated-{i}@x.com";
        }
        Save(ctx, audited: true);

        for (var i = 0; i < BatchSize; i++)
        {
            ctx.Customers.Remove(rows[i]);
        }
        Save(ctx, audited: true);
    }

    [Benchmark]
    public void MixedStates_per_save_without_audit()
    {
        using var seedCtx = CreateContext(auditEnabled: false);
        var existing = new Customer[BatchSize];
        for (var i = 0; i < BatchSize; i++)
        {
            existing[i] = new Customer { Name = $"E{i}", LoyaltyPoints = i };
            seedCtx.Customers.Add(existing[i]);
        }
        Save(seedCtx, audited: false);
        seedCtx.Dispose();

        using var ctx = CreateContext(auditEnabled: false);
        ctx.Customers.AttachRange(existing);
        for (var i = 0; i < BatchSize / 2; i++)
        {
            existing[i].Email = $"u{i}@x.com";
            ctx.Entry(existing[i]).State = EntityState.Modified;
        }
        for (var i = BatchSize / 2; i < BatchSize; i++)
        {
            ctx.Customers.Remove(existing[i]);
        }
        for (var i = 0; i < BatchSize; i++)
        {
            ctx.Customers.Add(new Customer { Name = $"N{i}", LoyaltyPoints = i });
        }
        Save(ctx, audited: false);
    }

    [Benchmark]
    public void MixedStates_per_save_with_audit()
    {
        using var seedCtx = CreateContext(auditEnabled: true);
        var existing = new Customer[BatchSize];
        for (var i = 0; i < BatchSize; i++)
        {
            existing[i] = new Customer { Name = $"E{i}", LoyaltyPoints = i };
            seedCtx.Customers.Add(existing[i]);
        }
        Save(seedCtx, audited: true);
        seedCtx.Dispose();

        using var ctx = CreateContext(auditEnabled: true);
        ctx.Customers.AttachRange(existing);
        for (var i = 0; i < BatchSize / 2; i++)
        {
            existing[i].Email = $"u{i}@x.com";
            ctx.Entry(existing[i]).State = EntityState.Modified;
        }
        for (var i = BatchSize / 2; i < BatchSize; i++)
        {
            ctx.Customers.Remove(existing[i]);
        }
        for (var i = 0; i < BatchSize; i++)
        {
            ctx.Customers.Add(new Customer { Name = $"N{i}", LoyaltyPoints = i });
        }
        Save(ctx, audited: true);
    }
}
