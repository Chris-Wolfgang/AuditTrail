using Microsoft.EntityFrameworkCore;

namespace Wolfgang.AuditTrail.Example.Console;

public class Product
{
    public int ProductId { get; set; }

    public string Name { get; set; } = string.Empty;

    public decimal Price { get; set; }

    /// <summary>
    /// <c>[NotAudited]</c> keeps this column out of the audit details: no
    /// detail row is written for it on insert, update or delete.
    /// </summary>
    [NotAudited]
    public string? InternalNotes { get; set; }
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
