using System.Diagnostics.CodeAnalysis;
using Microsoft.EntityFrameworkCore;

namespace Wolfgang.AuditTrail.Benchmarks;

[ExcludeFromCodeCoverage]
public class Customer
{
    public int CustomerId { get; set; }

    public string Name { get; set; } = string.Empty;

    public string? Email { get; set; }

    public int LoyaltyPoints { get; set; }
}

// Two separate concrete context types — one audited, one unaudited — for two
// independent reasons:
//
//  1. The audited variant must derive from AuditingDbContext to mirror what real
//     consumers do; the unaudited variant derives from DbContext as the baseline.
//     C# is single-inheritance, so the audit semantics force separate inheritance
//     chains regardless of caching concerns.
//
//  2. EF Core's default model cache is keyed by the concrete DbContext type. A
//     shared abstract base with separate concrete subclasses would already give
//     each variant its own cache entry — so the cache is not what drives the
//     design here; #1 is. Documenting both so future refactors don't conflate
//     them.

[ExcludeFromCodeCoverage]
public sealed class UnauditedBenchmarkDbContext : DbContext
{
    public UnauditedBenchmarkDbContext(DbContextOptions<UnauditedBenchmarkDbContext> options)
        : base(options)
    {
    }



    public DbSet<Customer> Customers => Set<Customer>();
}

[ExcludeFromCodeCoverage]
public sealed class AuditedBenchmarkDbContext : AuditingDbContext
{
    public AuditedBenchmarkDbContext
    (
        DbContextOptions<AuditedBenchmarkDbContext> options,
        IAuditUserProvider userProvider,
        AuditOptions auditOptions,
        IAuditBulkWriter? bulkWriter = null
    )
        : base(options, userProvider, auditOptions, bulkWriter)
    {
    }



    public DbSet<Customer> Customers => Set<Customer>();



    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        ArgumentNullException.ThrowIfNull(modelBuilder);

        base.OnModelCreating(modelBuilder);

        // IBM.EntityFrameworkCore's default relational type mapping for Guid emits
        // SQL Server's "uniqueidentifier" verbatim, which Db2 doesn't recognize
        // (SQL0204N) -- Db2 has no native GUID type. Mirrors Tests.Integration's
        // TestDbContext, scoped to Db2 only.
        if (string.Equals(Database.ProviderName, "IBM.EntityFrameworkCore", StringComparison.Ordinal))
        {
            modelBuilder.Entity<Entities.AuditHeader>().Property(h => h.HeaderId).HasConversion<string>();
            modelBuilder.Entity<Entities.AuditHeader>().Property(h => h.TransactionId).HasConversion<string>();
            modelBuilder.Entity<Entities.AuditDetail>().Property(d => d.HeaderId).HasConversion<string>();
        }
    }
}

[ExcludeFromCodeCoverage]
public sealed class StaticAuditUserProvider : IAuditUserProvider
{
    public AuditUser GetCurrentUser() => new("benchmark-user");
}
