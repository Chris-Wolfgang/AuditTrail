using System;
using Microsoft.EntityFrameworkCore;

namespace Wolfgang.AuditTrail.Tests.Smoke.TestSupport;

public class SmokeDbContext : AuditingDbContext
{
    public SmokeDbContext
    (
        DbContextOptions<SmokeDbContext> options,
        IAuditUserProvider userProvider,
        AuditOptions auditOptions,
        TimeProvider timeProvider
    )
        : base(options, userProvider, auditOptions, bulkWriter: null, timeProvider, guidProvider: null)
    {
    }



    public DbSet<Order> Orders => Set<Order>();
}
