using Microsoft.EntityFrameworkCore;
using Wolfgang.AuditTrail;
using Wolfgang.AuditTrail.AotSmoke;
using Wolfgang.AuditTrail.Entities;

// Native-AOT / trim smoke consumer for Wolfgang.AuditTrail.EntityFrameworkCore
// (#53). Runs a real SaveChanges -> audit-capture -> serialize -> persist ->
// read-back cycle against a compiled EF Core model + precompiled query
// interceptors (required under Native AOT — see the sibling .Setup project
// and the csproj comment for why).
//
// DELIBERATELY no `.UseModel(AppDbContextModel.Instance)` / no `using ...
// CompiledModels` here: `dotnet ef dbcontext optimize --project` (this
// project, so --precompile-queries can see the query call sites below) has
// to build THIS project first, before CompiledModels/ exists, to find those
// call sites. Referencing the not-yet-generated type here would make that
// impossible — a circular dependency. EF Core auto-discovers the compiled
// model at runtime via a `[DbContextModel]` assembly attribute the generator
// also emits, so the explicit call was never required.
//
// The database schema is created (and the schema migrator separately
// verified) by Wolfgang.AuditTrail.EntityFrameworkCore.AotSmoke.Setup before
// this binary runs — see aot-smoke.yaml.

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
        .Options;

    await using (var ctx = new AppDbContext(contextOptions, userProvider, auditOptions))
    {
        var widget = new Product { Name = "Widget", Price = 9.99m, InternalNotes = "seed" };
        ctx.Products.Add(widget);
        await ctx.SaveChangesAsync().ConfigureAwait(false);

        widget.Price = 12.49m;
        await ctx.SaveChangesAsync().ConfigureAwait(false);

        ctx.Products.Remove(widget);
        await ctx.SaveChangesAsync().ConfigureAwait(false);
    }

    await using (var ctx = new AppDbContext(contextOptions, userProvider, auditOptions))
    {
        // Two plain queries instead of .Include(h => h.Details), joined
        // client-side below: EF's experimental query-precompilation
        // generator (--precompile-queries) emits broken C# for the
        // relationship-fixup code an Include on a one-to-many navigation
        // needs (undeclared `left`/`right` identifiers referenced outside
        // the lambdas that define them) -- a real bug in this still-
        // experimental feature, not something fixable from this project.
        // No .Where(EntityKey == ...) either: the translator separately
        // can't resolve a captured local variable inside a lambda.
        // Both are unneeded anyway -- dbPath is a dedicated, freshly created
        // database for this one run, so every row in it belongs to this
        // Product.
        var headers = await ctx.Set<AuditHeader>()
            .OrderBy(h => h.AuditedAtUtc)
            .ToListAsync()
            .ConfigureAwait(false);
        var details = await ctx.Set<AuditDetail>()
            .ToListAsync()
            .ConfigureAwait(false);
        var detailsByHeaderId = details.ToLookup(d => d.HeaderId);

        Assert(headers.Count == 3, $"expected 3 audit headers (I/U/D), got {headers.Count}");
        Assert(headers[0].Operation == AuditOperation.Insert, "header[0] should be Insert");
        Assert(headers[1].Operation == AuditOperation.Update, "header[1] should be Update");
        Assert(headers[2].Operation == AuditOperation.Delete, "header[2] should be Delete");
        Assert(string.Equals(headers[0].UserId, "alice@example.com", StringComparison.Ordinal), "UserId should round-trip");

        var insertDetails = detailsByHeaderId[headers[0].HeaderId].ToDictionary(d => d.ColumnName, d => d.ValueText);
        Assert(insertDetails.ContainsKey(nameof(Product.Name)), "insert should capture Name");
        Assert(insertDetails.ContainsKey(nameof(Product.Price)), "insert should capture Price");
        Assert(!insertDetails.ContainsKey(nameof(Product.InternalNotes)), "[NotAudited] property must be excluded");

        Assert(detailsByHeaderId[headers[2].HeaderId].Any(), "delete with CaptureDeletedValues=true should write detail rows");

        Console.WriteLine($"{headers.Count} headers, {details.Count} details.");
    }
}

static void Assert(bool condition, string message)
{
    if (!condition)
    {
        throw new InvalidOperationException(message);
    }
}
