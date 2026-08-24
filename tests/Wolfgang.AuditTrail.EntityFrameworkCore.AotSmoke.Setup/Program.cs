using Microsoft.EntityFrameworkCore;
using Wolfgang.AuditTrail;
using Wolfgang.AuditTrail.AotSmoke;
using Wolfgang.AuditTrail.Schema;

// Design-time + pre-AOT setup for the #53 Native-AOT smoke test.
//
// Two jobs, both of which need EF Core's real runtime model builder and
// therefore cannot run inside the AOT-published sibling project:
//
//   1. `dotnet ef dbcontext optimize` targets AppDbContext (defined below) in
//      THIS project to generate the compiled model the AotSmoke project uses
//      via `.UseModel(AppDbContextModel.Instance)`.
//   2. At workflow run time, this Program creates the SQLite schema the
//      AOT-published binary will read/write (EnsureCreatedAsync), and
//      separately verifies the schema-installer path (MigrateAuditSchemaAsync)
//      against its own throwaway database. EF Core's compiled models
//      explicitly don't support the migrations-diff pipeline
//      (IMigrationsModelDiffer / IDesignTimeModel) — that is a real, permanent
//      constraint, not a gap to close later. A production app publishing with
//      Native AOT installs/migrates its schema out-of-band (this library's
//      Wolfgang.AuditTrail.Cli `migrate` command, itself never AOT-published)
//      and only uses the compiled model for runtime CRUD.

var dbPath = args.Length > 0 ? args[0] : Environment.GetEnvironmentVariable("AOT_SMOKE_DB_PATH");
if (string.IsNullOrWhiteSpace(dbPath))
{
    Console.Error.WriteLine("Usage: AotSmoke.Setup <db-path> (or set AOT_SMOKE_DB_PATH)");
    return 1;
}

try
{
    await CreateSchemaAsync(dbPath).ConfigureAwait(false);
    await VerifySchemaMigratorAsync(dbPath).ConfigureAwait(false);

    Console.WriteLine("AOT smoke setup: PASS");
    return 0;
}
catch (Exception ex)
{
    Console.Error.WriteLine($"AOT smoke setup: FAIL - {ex}");
    return 1;
}

static async Task CreateSchemaAsync(string dbPath)
{
    var auditOptions = new AuditOptions();
    var userProvider = new StaticAuditUserProvider("alice@example.com");
    var contextOptions = new DbContextOptionsBuilder<AppDbContext>()
        .UseSqlite($"Data Source={dbPath}")
        .Options;

    await using var context = new AppDbContext(contextOptions, userProvider, auditOptions);
    await context.Database.EnsureCreatedAsync().ConfigureAwait(false);

    Console.WriteLine($"Schema created at {dbPath}.");
}

static async Task VerifySchemaMigratorAsync(string dbPath)
{
    // A separate, never-created database so this is a real "fresh install"
    // diff (source model null -> CREATE TABLE operations), not a diff against
    // the schema CreateSchemaAsync already applied.
    var migratorDbPath = dbPath + ".migrator-check";
    var auditOptions = new AuditOptions();
    var userProvider = new StaticAuditUserProvider("migrator");
    var contextOptions = new DbContextOptionsBuilder<AppDbContext>()
        .UseSqlite($"Data Source={migratorDbPath}")
        .Options;

    await using var context = new AppDbContext(contextOptions, userProvider, auditOptions);
    var sql = await context.MigrateAuditSchemaAsync(dryRun: true).ConfigureAwait(false);

    if (string.IsNullOrWhiteSpace(sql))
    {
        throw new InvalidOperationException("MigrateAuditSchemaAsync dry-run returned no DDL.");
    }

    if (!sql.Contains(auditOptions.HeaderTableName, StringComparison.OrdinalIgnoreCase))
    {
        throw new InvalidOperationException("MigrateAuditSchemaAsync dry-run DDL does not reference the header table.");
    }

    Console.WriteLine($"MigrateAuditSchemaAsync dry-run: {sql.Length} chars of DDL generated.");
}

namespace Wolfgang.AuditTrail.AotSmoke
{
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
}
