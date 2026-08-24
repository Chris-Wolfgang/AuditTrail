using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace Wolfgang.AuditTrail.AotSmoke;

/// <summary>
/// Design-time factory so `dotnet ef dbcontext optimize` can construct
/// <see cref="AppDbContext"/> without a DI container — it takes constructor
/// parameters beyond the bare <c>DbContextOptions</c>. The database backing
/// this instance is never touched by the tool; it only reflects over the
/// model.
/// </summary>
public sealed class AppDbContextFactory : IDesignTimeDbContextFactory<AppDbContext>
{
    public AppDbContext CreateDbContext(string[] args)
    {
        var options = new DbContextOptionsBuilder<AppDbContext>()
            .UseSqlite("Data Source=design-time-only.db")
            .Options;

        return new AppDbContext(options, new StaticAuditUserProvider("design-time"), new AuditOptions());
    }
}
