using System.Diagnostics.CodeAnalysis;
using Microsoft.EntityFrameworkCore;

namespace Wolfgang.AuditTrail.Tests.Integration.TestSupport;

[ExcludeFromCodeCoverage]
public class TestDbContext : AuditingDbContext
{
    public TestDbContext
    (
        DbContextOptions<TestDbContext> options,
        IAuditUserProvider userProvider,
        AuditOptions auditOptions
    )
        : base(options, userProvider, auditOptions)
    {
    }



    public DbSet<Customer> Customers => Set<Customer>();



    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        ArgumentNullException.ThrowIfNull(modelBuilder);

        base.OnModelCreating(modelBuilder);

        // IBM.EntityFrameworkCore's default relational type mapping for Guid
        // emits SQL Server's "uniqueidentifier" verbatim, which Db2 doesn't
        // recognize (SQL0204N "UNIQUEIDENTIFIER" is an undefined name) -- Db2
        // has no native GUID type. Converting to a string column sidesteps
        // the gap; scoped to Db2 only so SQL Server/PostgreSQL/MySQL keep
        // their native GUID-ish column types unchanged.
        if (string.Equals(Database.ProviderName, "IBM.EntityFrameworkCore", StringComparison.Ordinal))
        {
            modelBuilder.Entity<Entities.AuditHeader>().Property(h => h.HeaderId).HasConversion<string>();
            modelBuilder.Entity<Entities.AuditHeader>().Property(h => h.TransactionId).HasConversion<string>();
            modelBuilder.Entity<Entities.AuditDetail>().Property(d => d.HeaderId).HasConversion<string>();
        }
    }
}
