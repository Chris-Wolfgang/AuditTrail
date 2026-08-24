using Microsoft.EntityFrameworkCore;
using Wolfgang.AuditTrail;
using Wolfgang.AuditTrail.AotSmoke;
using Wolfgang.AuditTrail.AotSmoke.CompiledModels;
using Wolfgang.AuditTrail.Entities;

// Native-AOT / trim smoke consumer for Wolfgang.AuditTrail.EntityFrameworkCore
// (#53). Runs a real SaveChanges -> audit-capture -> serialize -> persist ->
// read-back cycle against a compiled EF Core model (required under Native
// AOT — see the sibling .Setup project and the csproj comment for why).
//
// The database schema and the compiled model itself are prepared by
// Wolfgang.AuditTrail.EntityFrameworkCore.AotSmoke.Setup before this binary
// is published/run — see aot-smoke.yaml.

var dbPath = args.Length > 0 ? args[0] : Environment.GetEnvironmentVariable("AOT_SMOKE_DB_PATH");
if (string.IsNullOrWhiteSpace(dbPath))
{
    Console.Error.WriteLine("Usage: AotSmoke <db-path> (or set AOT_SMOKE_DB_PATH)");
    return 1;
}

try
{
    await RunAsync(dbPath).ConfigureAwait(false);
    Console.WriteLine("AOT smoke: PASS");
    return 0;
}
catch (Exception ex)
{
    Console.Error.WriteLine($"AOT smoke: FAIL - {ex}");
    return 1;
}

static async Task RunAsync(string dbPath)
{
    var auditOptions = new AuditOptions { CaptureDeletedValues = true };
    var userProvider = new StaticAuditUserProvider("alice@example.com");
    var contextOptions = new DbContextOptionsBuilder<AppDbContext>()
        .UseSqlite($"Data Source={dbPath}")
        .UseModel(AppDbContextModel.Instance)
        .Options;

    int productId;
    await using (var ctx = new AppDbContext(contextOptions, userProvider, auditOptions))
    {
        var widget = new Product { Name = "Widget", Price = 9.99m, InternalNotes = "seed" };
        ctx.Products.Add(widget);
        await ctx.SaveChangesAsync().ConfigureAwait(false);
        productId = widget.ProductId;

        widget.Price = 12.49m;
        await ctx.SaveChangesAsync().ConfigureAwait(false);

        ctx.Products.Remove(widget);
        await ctx.SaveChangesAsync().ConfigureAwait(false);
    }

    await using (var ctx = new AppDbContext(contextOptions, userProvider, auditOptions))
    {
        var key = productId.ToString(System.Globalization.CultureInfo.InvariantCulture);
        var headers = await ctx.Set<AuditHeader>()
            .Include(h => h.Details)
            .Where(h => h.EntityKey == key)
            .OrderBy(h => h.AuditedAtUtc)
            .ToListAsync()
            .ConfigureAwait(false);

        Assert(headers.Count == 3, $"expected 3 audit headers (I/U/D), got {headers.Count}");
        Assert(headers[0].Operation == AuditOperation.Insert, "header[0] should be Insert");
        Assert(headers[1].Operation == AuditOperation.Update, "header[1] should be Update");
        Assert(headers[2].Operation == AuditOperation.Delete, "header[2] should be Delete");
        Assert(string.Equals(headers[0].UserId, "alice@example.com", StringComparison.Ordinal), "UserId should round-trip");

        var insertDetails = headers[0].Details.ToDictionary(d => d.ColumnName, d => d.ValueText);
        Assert(insertDetails.ContainsKey(nameof(Product.Name)), "insert should capture Name");
        Assert(insertDetails.ContainsKey(nameof(Product.Price)), "insert should capture Price");
        Assert(!insertDetails.ContainsKey(nameof(Product.InternalNotes)), "[NotAudited] property must be excluded");

        Assert(headers[2].Details.Count > 0, "delete with CaptureDeletedValues=true should write detail rows");

        Console.WriteLine($"{headers.Count} headers, {headers.Sum(h => h.Details.Count)} details.");
    }
}

static void Assert(bool condition, string message)
{
    if (!condition)
    {
        throw new InvalidOperationException(message);
    }
}
