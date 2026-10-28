using Microsoft.EntityFrameworkCore;
using Wolfgang.AuditTrail;
using Wolfgang.AuditTrail.Entities;
using Wolfgang.AuditTrail.Example.Console;

// The defaults (StringAuditValueSerializer + PipeDelimitedEntityKeySerializer)
// are all this demo needs.
var auditOptions = new AuditOptions();

var userProvider = new StaticAuditUserProvider("alice@example.com");

var contextOptions = new DbContextOptionsBuilder<AppDbContext>()
    .UseSqlite("DataSource=audit-example.db")
    .Options;

await using (var setup = new AppDbContext(contextOptions, userProvider, auditOptions))
{
    // EnsureCreatedAsync creates this demo's own Products table and, because
    // AuditingDbContext maps them, the audit tables in one go. A real app that
    // manages its tables with EF Core Migrations (or any other tool) installs
    // and upgrades just the audit tables with setup.MigrateAuditSchemaAsync().
    await setup.Database.EnsureDeletedAsync();
    await setup.Database.EnsureCreatedAsync();
}

await using (var ctx = new AppDbContext(contextOptions, userProvider, auditOptions))
{
    ctx.Products.Add(new Product { Name = "Widget", Price = 9.99m, InternalNotes = "never audited" });
    await ctx.SaveChangesAsync();

    var widget = await ctx.Products.SingleAsync();
    widget.Price = 12.49m;
    await ctx.SaveChangesAsync();
}

await using (var ctx = new AppDbContext(contextOptions, userProvider, auditOptions))
{
    Console.WriteLine("Audit history:");
    var headers = await ctx.Set<AuditHeader>()
        .Include(h => h.Details)
        .OrderBy(h => h.AuditedAtUtc)
        .ToListAsync();

    foreach (var header in headers)
    {
        Console.WriteLine($"  [{header.AuditedAtUtc:u}] {header.Operation} {header.EntityType} key={header.EntityKey} by {header.UserId}");
        foreach (var detail in header.Details)
        {
            Console.WriteLine($"      {detail.ColumnName} = {detail.ValueText} ({detail.ValueType})");
        }
    }
}
