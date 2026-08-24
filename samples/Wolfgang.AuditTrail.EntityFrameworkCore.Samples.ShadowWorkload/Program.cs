using System.Globalization;
using System.Text.Json;
using Microsoft.EntityFrameworkCore;
using Wolfgang.AuditTrail;
using Wolfgang.AuditTrail.Samples.ShadowWorkload;
using Wolfgang.AuditTrail.Serializers;

// Realistic mixed-traffic workload for shadow-testing (#43) -- distinct from
// benchmarks/ (curated micro-benchmarks graphed on every push to main): this
// replays END-TO-END scenarios (varying batch sizes, sync AND async save
// paths, concurrent callers) and reports mean latency + mean allocated bytes
// per scenario, comparable across two runs of this same program (see the
// csproj's UseBaselinePackage/BaselineVersion toggle and shadow.yaml).
//
// NOT exercised: retry/backoff under transient failures. SQLite has no
// practical way to inject the kind of transient fault EnableRetryOnFailure
// targets (that needs a real network-backed provider, e.g. SQL Server behind
// a fault-injecting proxy) -- deliberately out of scope for this iteration,
// not silently dropped.

var outputPath = args.Length > 0 ? args[0] : "shadow-results.json";
var iterations = args.Length > 1 && int.TryParse(args[1], out var n) ? n : 100;
const int WarmupIterations = 5;
const int ConcurrentCallers = 20;

var results = new Dictionary<string, ScenarioResult>();

results["SingleInsert"] = await MeasureAsync("SingleInsert", iterations, SingleInsertAsync).ConfigureAwait(false);
results["BatchInsert50"] = await MeasureAsync("BatchInsert50", iterations, BatchInsert50Async).ConfigureAwait(false);
results["UpdateThenDelete"] = await MeasureAsync("UpdateThenDelete", iterations, UpdateThenDeleteAsync).ConfigureAwait(false);
results["SyncSave"] = await MeasureAsync("SyncSave", iterations, SyncSaveAsync).ConfigureAwait(false);
results["ConcurrentSaves20"] = await MeasureConcurrentAsync("ConcurrentSaves20", iterations, ConcurrentCallers, SingleInsertAsync).ConfigureAwait(false);

var report = new ShadowReport
(
    DateTime.UtcNow,
    typeof(AuditingDbContext).Assembly.GetName().Version?.ToString() ?? "unknown",
    results
);

var json = JsonSerializer.Serialize(report, ShadowJsonContext.Default.ShadowReport);
await File.WriteAllTextAsync(outputPath, json).ConfigureAwait(false);
Console.WriteLine($"Wrote {outputPath} ({results.Count} scenarios, {iterations} iterations each, library {report.LibraryVersion}).");

return 0;



static async Task<ScenarioResult> MeasureAsync(string name, int iterationCount, Func<Task> operation)
{
    for (var i = 0; i < WarmupIterations; i++)
    {
        await operation().ConfigureAwait(false);
    }

    var elapsedMs = new double[iterationCount];
    var allocatedBytes = new long[iterationCount];

    for (var i = 0; i < iterationCount; i++)
    {
        var allocatedBefore = GC.GetAllocatedBytesForCurrentThread();
        var startedAt = DateTime.UtcNow;

        await operation().ConfigureAwait(false);

        elapsedMs[i] = (DateTime.UtcNow - startedAt).TotalMilliseconds;
        allocatedBytes[i] = GC.GetAllocatedBytesForCurrentThread() - allocatedBefore;
    }

    Console.WriteLine($"{name}: {iterationCount} iterations done.");
    return new ScenarioResult(iterationCount, elapsedMs.Average(), allocatedBytes.Average());
}



// GC.GetAllocatedBytesForCurrentThread() is per-thread; once work fans out
// across Task.WhenAll (with no ConfigureAwait(false) guarantee of staying on
// one thread), attributing allocations to "the operation" stops being
// meaningful. Concurrent scenarios report wall-clock latency only.
static async Task<ScenarioResult> MeasureConcurrentAsync
(
    string name,
    int iterationCount,
    int concurrentCallers,
    Func<Task> operation
)
{
    for (var i = 0; i < WarmupIterations; i++)
    {
        await operation().ConfigureAwait(false);
    }

    var elapsedMs = new double[iterationCount];

    for (var i = 0; i < iterationCount; i++)
    {
        var startedAt = DateTime.UtcNow;

        var tasks = new Task[concurrentCallers];
        for (var c = 0; c < concurrentCallers; c++)
        {
            tasks[c] = operation();
        }

        await Task.WhenAll(tasks).ConfigureAwait(false);

        elapsedMs[i] = (DateTime.UtcNow - startedAt).TotalMilliseconds;
    }

    Console.WriteLine($"{name}: {iterationCount} iterations of {concurrentCallers} concurrent callers done.");
    return new ScenarioResult(iterationCount, elapsedMs.Average(), AllocatedBytesMean: null);
}



static AppDbContext OpenContext(string dbPath)
{
    var auditOptions = new AuditOptions
    {
        ValueSerializer = new StringAuditValueSerializer(),
        EntityKeySerializer = new PipeDelimitedEntityKeySerializer(),
        CaptureDeletedValues = true,
    };
    var userProvider = new StaticAuditUserProvider("shadow-workload@example.com");
    var options = new DbContextOptionsBuilder<AppDbContext>()
        .UseSqlite($"Data Source={dbPath}")
        .Options;

    return new AppDbContext(options, userProvider, auditOptions);
}



static async Task<string> NewDatabaseAsync()
{
    var dbPath = Path.Combine(Path.GetTempPath(), $"shadow-workload-{Guid.NewGuid():N}.db");
    await using var setup = OpenContext(dbPath);
    await setup.Database.EnsureCreatedAsync().ConfigureAwait(false);
    return dbPath;
}



static void DeleteDatabase(string dbPath)
{
    try
    {
        File.Delete(dbPath);
    }
    catch (IOException)
    {
    }
}



static async Task SingleInsertAsync()
{
    var dbPath = await NewDatabaseAsync().ConfigureAwait(false);
    try
    {
        await using var ctx = OpenContext(dbPath);
        ctx.Products.Add(new Product { Name = "Widget", Price = 9.99m });
        await ctx.SaveChangesAsync().ConfigureAwait(false);
    }
    finally
    {
        DeleteDatabase(dbPath);
    }
}



static async Task BatchInsert50Async()
{
    var dbPath = await NewDatabaseAsync().ConfigureAwait(false);
    try
    {
        await using var ctx = OpenContext(dbPath);
        for (var i = 0; i < 50; i++)
        {
            ctx.Products.Add(new Product { Name = $"Widget {i.ToString(CultureInfo.InvariantCulture)}", Price = 9.99m + i });
        }

        await ctx.SaveChangesAsync().ConfigureAwait(false);
    }
    finally
    {
        DeleteDatabase(dbPath);
    }
}



static async Task UpdateThenDeleteAsync()
{
    var dbPath = await NewDatabaseAsync().ConfigureAwait(false);
    try
    {
        int productId;
        await using (var ctx = OpenContext(dbPath))
        {
            var widget = new Product { Name = "Widget", Price = 9.99m };
            ctx.Products.Add(widget);
            await ctx.SaveChangesAsync().ConfigureAwait(false);
            productId = widget.ProductId;
        }

        await using (var ctx = OpenContext(dbPath))
        {
            var widget = await ctx.Products.SingleAsync(p => p.ProductId == productId).ConfigureAwait(false);
            widget.Price = 12.49m;
            await ctx.SaveChangesAsync().ConfigureAwait(false);

            ctx.Products.Remove(widget);
            await ctx.SaveChangesAsync().ConfigureAwait(false);
        }
    }
    finally
    {
        DeleteDatabase(dbPath);
    }
}



static async Task SyncSaveAsync()
{
    // Setup/teardown stay async (matching every other scenario's measured
    // unit of work); only the save itself exercises the synchronous
    // SaveChanges() API path, which is the point of this scenario.
    var dbPath = await NewDatabaseAsync().ConfigureAwait(false);
    try
    {
        using var ctx = OpenContext(dbPath);
        ctx.Products.Add(new Product { Name = "Widget", Price = 9.99m });

        // CA1849: this scenario's entire point is measuring the synchronous
        // SaveChanges() API path, not a bug to fix.
#pragma warning disable CA1849
        ctx.SaveChanges();
#pragma warning restore CA1849
    }
    finally
    {
        DeleteDatabase(dbPath);
    }
}
