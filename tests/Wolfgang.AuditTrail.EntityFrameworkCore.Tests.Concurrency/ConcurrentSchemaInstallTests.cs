using Microsoft.Coyote;
using Microsoft.Coyote.SystematicTesting;
using Microsoft.EntityFrameworkCore;
using Wolfgang.AuditTrail;
using Wolfgang.AuditTrail.Schema;
using Xunit;

namespace Wolfgang.AuditTrail.Tests.Concurrency;

/// <summary>
/// Systematic exploration of the schema-installer's first-time-install path
/// (#46) — the realistic production scenario is several replicas of the same
/// app starting up simultaneously against a shared, not-yet-provisioned
/// database, each racing to install the audit schema.
/// </summary>
public class ConcurrentSchemaInstallTests
{
    // This project is auto-discovered by pr.yaml's `find ./tests -name
    // *.csproj` test loop, so it runs on every PR with NO `coyote rewrite`
    // step — a real, if uncontrolled, execution of the concurrent scenario.
    // The dedicated coyote.yaml workflow rewrites both assemblies first (for
    // genuine systematic interleaving exploration) and overrides
    // COYOTE_ITERATIONS to a much larger budget. Default here is deliberately
    // modest — same convention as Tests.Fuzz's FUZZ_CASES — so the
    // auto-discovered run stays cheap and reliable rather than repeating an
    // uncontrolled scenario thousands of times for no extra coverage.
    private static readonly uint Iterations =
        uint.TryParse(Environment.GetEnvironmentVariable("COYOTE_ITERATIONS"), out var n) ? n : 5;



    [Fact]
    public void ConcurrentFirstTimeSchemaInstalls_do_not_throw()
    {
        // WithPotentialDeadlocksReportedAsBugs(false): this scenario does real
        // SQLite disk I/O, which Coyote can never control (it can only
        // rewrite managed .NET IL, not native P/Invoke calls) — its periodic
        // deadlock-detection heuristic mistakes normal I/O latency for a
        // hang. Real bugs still fail the test via the try/catch below or an
        // unhandled exception; this only disables the unreliable heuristic.
        var config = Configuration.Create()
            .WithTestingIterations(Iterations)
            .WithPotentialDeadlocksReportedAsBugs(false);
        var engine = TestingEngine.Create(config, RunConcurrentInstallsAsync);
        engine.Run();

        Assert.True(engine.TestReport.NumOfFoundBugs == 0, engine.TestReport.GetText(config));
    }



    private static async Task RunConcurrentInstallsAsync()
    {
        var dbPath = Path.Combine(Path.GetTempPath(), $"coyote-schema-install-{Guid.NewGuid():N}.db");
        var connectionString = $"Data Source={dbPath}";

        try
        {
            var first = InstallAsync(connectionString);
            var second = InstallAsync(connectionString);
            await Task.WhenAll(first, second).ConfigureAwait(false);
        }
        finally
        {
            // Best-effort cleanup: SQLite connection-pool teardown can outlive
            // `await using`'s DisposeAsync, so an immediate delete can lose a
            // race against the native file handle still closing. That's a
            // harness cleanup detail, not the thing under test.
            try
            {
                File.Delete(dbPath);
            }
            catch (IOException)
            {
            }
        }
    }



    private static async Task InstallAsync(string connectionString)
    {
        var auditOptions = new AuditOptions();
        var dbOptions = new DbContextOptionsBuilder<AuditMigrationsDbContext>()
            .UseSqlite(connectionString)
            .Options;

        await using var context = new AuditMigrationsDbContext(dbOptions, auditOptions);
        await AuditSchemaMigrator.RunAsync(context, dryRun: false).ConfigureAwait(false);
    }
}
