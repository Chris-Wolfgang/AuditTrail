using Microsoft.EntityFrameworkCore;
using Wolfgang.AuditTrail;

namespace Wolfgang.AuditTrail.AotSmoke;

public class Product
{
    public int ProductId { get; set; }

    public string Name { get; set; } = string.Empty;

    public decimal Price { get; set; }

    [NotAudited]
    public string InternalNotes { get; set; } = string.Empty;
}

public class AppDbContext : AuditingDbContext
{
    public AppDbContext
    (
        DbContextOptions<AppDbContext> options,
        IAuditUserProvider userProvider,
        AuditOptions auditOptions
    )
        : base(options, userProvider, auditOptions)
    {
    }

    public DbSet<Product> Products => Set<Product>();
}

public sealed class StaticAuditUserProvider : IAuditUserProvider
{
    private readonly AuditUser _user;

    public StaticAuditUserProvider(string userId) => _user = new AuditUser(userId);

    public AuditUser GetCurrentUser() => _user;
}
