using System.Diagnostics.CodeAnalysis;
using Microsoft.EntityFrameworkCore;

namespace Wolfgang.AuditTrail.Npgsql.Tests.Unit.TestSupport;

[ExcludeFromCodeCoverage]
public class TestDbContext : AuditingDbContext
{
    public TestDbContext
    (
        DbContextOptions<TestDbContext> options,
        IAuditUserProvider userProvider,
        AuditOptions auditOptions,
        IAuditBulkWriter? bulkWriter = null
    )
        : base(options, userProvider, auditOptions, bulkWriter)
    {
    }

    public DbSet<Customer> Customers => Set<Customer>();
}
