using Microsoft.EntityFrameworkCore;

namespace Wolfgang.AuditTrail.Tests.Smoke.TestSupport;

public class SmokeDbContext : AuditingDbContext
{
    public SmokeDbContext
    (
        DbContextOptions<SmokeDbContext> options,
        IAuditUserProvider userProvider,
        AuditOptions auditOptions
    )
        : base(options, userProvider, auditOptions)
    {
    }



    public DbSet<Order> Orders => Set<Order>();
}
