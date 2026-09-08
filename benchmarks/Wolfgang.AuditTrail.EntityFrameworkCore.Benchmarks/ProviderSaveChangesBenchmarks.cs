using System.Reflection;
using System.Runtime.InteropServices;
using BenchmarkDotNet.Attributes;
using IBM.Data.Db2;
using IBM.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;
using Testcontainers.Db2;
using Testcontainers.MsSql;
using Testcontainers.Oracle;
using Testcontainers.PostgreSql;
using Wolfgang.AuditTrail.Npgsql;
using Wolfgang.AuditTrail.Serializers;

namespace Wolfgang.AuditTrail.Benchmarks;



/// <summary>
/// Which database engine a benchmark iteration runs against.
/// </summary>
public enum BenchmarkProvider
{
    Sqlite,
    SqlServer,
    PostgreSQL,
    Oracle,
    Db2,
}



/// <summary>
/// Compares unaudited <c>SaveChangesAsync</c> against audited
/// <c>SaveChangesAsync</c> (via <see cref="AuditingDbContext"/>) across each of
/// the supported providers. Each <see cref="BenchmarkProvider"/> value spins
/// up its own engine — Testcontainers for SQL Server / PostgreSQL / Oracle / Db2,
/// in-memory for SQLite — in <c>GlobalSetup</c> and reuses it across iterations.
/// </summary>
/// <remarks>
/// <para>
/// <strong>MySQL is intentionally excluded.</strong> Pomelo
/// (<c>Pomelo.EntityFrameworkCore.MySql</c>) ships stable for EF Core 8 and 9
/// (latest stable as of 2026-05: <c>9.0.0</c>) but no EF Core 10 release yet,
/// while this benchmark project targets net10.0 / EF Core 10. Re-add once
/// Pomelo ships a 10.x stable; the BenchmarkProvider enum just needs a MySQL
/// value and the GlobalSetup switch needs the container wiring.
/// </para>
/// <para>
/// <strong>Docker required</strong> for every provider except SQLite — same
/// prerequisite as Tests.Integration.
/// </para>
/// </remarks>
[MemoryDiagnoser]
public class ProviderSaveChangesBenchmarks
{
    // On Linux, IBM.EntityFrameworkCore-lnx's native driver (clidriver/lib/*.so) is
    // copied nested under the build output rather than the output root, so .NET's
    // default native-library probing never finds it -- DllNotFoundException on
    // libdb2.so. Loading it by absolute path here sidesteps that: libdb2.so's own
    // sibling dependencies inside clidriver/lib then resolve via its
    // $ORIGIN-relative rpath. Mirrors Tests.Integration's Db2Fixture, which
    // verified this exact mechanism against a real container. Windows resolves its
    // native driver (clidriver/bin/*.dll) without any of this, so the resolver is
    // Linux-only.
    static ProviderSaveChangesBenchmarks()
    {
        if (!OperatingSystem.IsWindows())
        {
            NativeLibrary.SetDllImportResolver(typeof(DB2Connection).Assembly, ResolveDb2NativeLibrary);
        }
    }



    private static IntPtr ResolveDb2NativeLibrary(string libraryName, Assembly assembly, DllImportSearchPath? searchPath)
    {
        var candidate = Path.Combine(AppContext.BaseDirectory, "clidriver", "lib", libraryName);
        return File.Exists(candidate) && NativeLibrary.TryLoad(candidate, out var handle) ? handle : IntPtr.Zero;
    }



    private MsSqlContainer? _sqlServerContainer;
    private PostgreSqlContainer? _postgresContainer;
    private OracleContainer? _oracleContainer;
    private Db2Container? _db2Container;
    private Microsoft.Data.Sqlite.SqliteConnection? _sqliteConnection;
    private string _connectionString = string.Empty;

    private AuditOptions _options = null!;
    private StaticAuditUserProvider _userProvider = null!;
    private Customer[] _existingRows = Array.Empty<Customer>();
    private IAuditBulkWriter? _bulkWriter;



    [Params(BenchmarkProvider.Sqlite, BenchmarkProvider.SqlServer, BenchmarkProvider.PostgreSQL, BenchmarkProvider.Oracle, BenchmarkProvider.Db2)]
    public BenchmarkProvider Provider { get; set; }


    [Params(1, 10, 50)]
    public int BatchSize { get; set; }


#pragma warning disable S125 // explanatory comment below reads as commented-out code to Sonar's heuristic
    // Only PostgreSQL has a registered IAuditBulkWriter (NpgsqlCopyAuditBulkWriter);
    // true on Sqlite/SqlServer is a no-op -- CanHandle declines and every save falls
    // back to the standard path, same as false. Kept in the cross-product anyway so
    // the PostgreSQL rows are directly comparable per #148's original ask, without a
    // separate benchmark class just for the provider that has a writer.
#pragma warning restore S125
    [Params(false, true)]
    public bool UseBulkInsert { get; set; }



    [GlobalSetup]
    public async Task GlobalSetup()
    {
        _options = new AuditOptions
        {
            ValueSerializer = new StringAuditValueSerializer(),
            EntityKeySerializer = new PipeDelimitedEntityKeySerializer(),
        };
        _userProvider = new StaticAuditUserProvider();

        if (UseBulkInsert)
        {
            // Threshold of 1 means every save -- even BatchSize:1 -- takes the bulk
            // path when a writer is registered, so the comparison shows the COPY
            // protocol's fixed handshake cost at small batches too, not just its
            // payoff at large ones.
            _options.BulkInsertRowThreshold = 1;
            _bulkWriter = Provider == BenchmarkProvider.PostgreSQL ? new NpgsqlCopyAuditBulkWriter() : null;
        }

        await StartProviderAsync().ConfigureAwait(false);

        using var seed = CreateAuditedContext();
        await seed.Database.EnsureCreatedAsync().ConfigureAwait(false);
    }



    private async Task StartProviderAsync()
    {
        switch (Provider)
        {
            case BenchmarkProvider.Sqlite:
                _sqliteConnection = new Microsoft.Data.Sqlite.SqliteConnection("Filename=:memory:");
                await _sqliteConnection.OpenAsync().ConfigureAwait(false);
                _connectionString = _sqliteConnection.ConnectionString;
                break;

            case BenchmarkProvider.SqlServer:
                // Pin to the same exact image as Tests.Integration's SqlServerFixture
                // so benchmark numbers can't drift when MSFT publishes a new "latest"
                // build under us. Bump intentionally + record a baseline reset when
                // updating.
                _sqlServerContainer = new MsSqlBuilder("mcr.microsoft.com/mssql/server:2022-CU14-ubuntu-22.04")
                    .Build();
                await _sqlServerContainer.StartAsync().ConfigureAwait(false);
                _connectionString = _sqlServerContainer.GetConnectionString();
                break;

            case BenchmarkProvider.PostgreSQL:
                // Pin to the same exact image as Tests.Integration's PostgresFixture
                // for the same reproducibility reason as the SQL Server case above.
                _postgresContainer = new PostgreSqlBuilder("postgres:16.4-alpine3.20")
                    .WithDatabase("auditbench")
                    .Build();
                await _postgresContainer.StartAsync().ConfigureAwait(false);
                _connectionString = _postgresContainer.GetConnectionString();
                break;

            case BenchmarkProvider.Oracle:
                // Pin to the same exact image as Tests.Integration's OracleFixture
                // for the same reproducibility reason as the other providers above.
                _oracleContainer = new OracleBuilder("gvenzl/oracle-xe:21.3.0-slim-faststart").Build();
                await _oracleContainer.StartAsync().ConfigureAwait(false);
                _connectionString = _oracleContainer.GetConnectionString();
                break;

            case BenchmarkProvider.Db2:
                // Pin to the same exact image as Tests.Integration's Db2Fixture
                // for the same reproducibility reason as the other providers above.
                // Db2 database names are capped at 8 characters (SQL1001N on
                // anything longer, confirmed against a real container) --
                // "auditbench" is too long, so this uses the same "auditdb"
                // Tests.Integration's Db2Fixture already settled on.
                _db2Container = new Db2Builder("icr.io/db2_community/db2:12.1.0.0")
                    .WithAcceptLicenseAgreement(true)
                    .WithDatabase("auditdb")
                    .Build();
                await _db2Container.StartAsync().ConfigureAwait(false);
                _connectionString = _db2Container.GetConnectionString();
                break;

            default:
                throw new NotSupportedException($"Unknown provider {Provider}");
        }
    }



    [GlobalCleanup]
    public async Task GlobalCleanup()
    {
        if (_sqlServerContainer is not null)
        {
            await _sqlServerContainer.DisposeAsync().ConfigureAwait(false);
        }
        if (_postgresContainer is not null)
        {
            await _postgresContainer.DisposeAsync().ConfigureAwait(false);
        }
        if (_oracleContainer is not null)
        {
            await _oracleContainer.DisposeAsync().ConfigureAwait(false);
        }
        if (_db2Container is not null)
        {
            await _db2Container.DisposeAsync().ConfigureAwait(false);
        }
        if (_sqliteConnection is not null)
        {
            await _sqliteConnection.DisposeAsync().ConfigureAwait(false);
        }
    }



    [IterationSetup(Targets = new[]
    {
        nameof(Insert_without_audit),
        nameof(Insert_with_audit),
        nameof(Lifecycle_without_audit),
        nameof(Lifecycle_with_audit),
    })]
    public void ResetTablesBeforeInsertAndLifecycle()
    {
        TruncateAllTables();
    }



    [IterationSetup(Targets = new[]
    {
        nameof(MixedStates_per_save_without_audit),
        nameof(MixedStates_per_save_with_audit),
    })]
    public void ResetAndSeedBeforeMixedStates()
    {
        TruncateAllTables();
        SeedExistingRowsUnaudited();
    }



    private void TruncateAllTables()
    {
        using var ctx = CreateUnauditedContext();
        // Provider-specific identifier quoting: Postgres/Oracle fold unquoted
        // identifiers (lower/upper respectively), but EF creates their tables with
        // quotes preserving the exact mixed-case C# type name -- so unquoted DELETE
        // would look for a differently-cased, nonexistent object on those two.
        // Db2 is deliberately NOT in that group: its EF provider does not quote its
        // generated DDL, so Db2's real tables are unquoted-folded -- confirmed
        // against a real container, where quoting Db2 here threw SQL0204N
        // ("AuditDetail" undefined). Db2 needs the same unquoted access as
        // Sqlite/SqlServer below.
        var customerTable = Provider switch
        {
            BenchmarkProvider.PostgreSQL or BenchmarkProvider.Oracle => "\"Customers\"",
            _ => "Customers",
        };
        var detailTable = Provider switch
        {
            BenchmarkProvider.PostgreSQL or BenchmarkProvider.Oracle => "\"AuditDetail\"",
            _ => "AuditDetail",
        };
        var headerTable = Provider switch
        {
            BenchmarkProvider.PostgreSQL or BenchmarkProvider.Oracle => "\"AuditHeader\"",
            _ => "AuditHeader",
        };
#pragma warning disable EF1002, S2077 // Static SQL, table names are hardcoded provider literals with no user input.
        ctx.Database.ExecuteSqlRaw($"DELETE FROM {detailTable}");
        ctx.Database.ExecuteSqlRaw($"DELETE FROM {headerTable}");
        ctx.Database.ExecuteSqlRaw($"DELETE FROM {customerTable}");
#pragma warning restore EF1002, S2077
    }



    private void SeedExistingRowsUnaudited()
    {
        using var seedCtx = CreateUnauditedContext();
        var rows = new Customer[BatchSize];
        for (var i = 0; i < BatchSize; i++)
        {
            rows[i] = new Customer { Name = $"E{i}", LoyaltyPoints = i };
            seedCtx.Customers.Add(rows[i]);
        }
        seedCtx.SaveChanges();
        _existingRows = rows;
    }



    private AuditedBenchmarkDbContext CreateAuditedContext()
    {
        var builder = new DbContextOptionsBuilder<AuditedBenchmarkDbContext>();
        ApplyProvider(builder);
        return new AuditedBenchmarkDbContext(builder.Options, _userProvider, _options, _bulkWriter);
    }



    private UnauditedBenchmarkDbContext CreateUnauditedContext()
    {
        var builder = new DbContextOptionsBuilder<UnauditedBenchmarkDbContext>();
        ApplyProvider(builder);
        return new UnauditedBenchmarkDbContext(builder.Options);
    }



    private void ApplyProvider<TContext>(DbContextOptionsBuilder<TContext> builder)
        where TContext : DbContext
    {
        switch (Provider)
        {
            case BenchmarkProvider.Sqlite:
                builder.UseSqlite(_sqliteConnection!);
                break;
            case BenchmarkProvider.SqlServer:
                builder.UseSqlServer(_connectionString);
                break;
            case BenchmarkProvider.PostgreSQL:
                builder.UseNpgsql(_connectionString);
                break;
            case BenchmarkProvider.Oracle:
                builder.UseOracle(_connectionString);
                break;
            case BenchmarkProvider.Db2:
                builder
                    .UseDb2(_connectionString, Db2OptionsAction: null)
                    .ReplaceService<IRelationalTransactionFactory, Db2NoSavepointsTransactionFactory>();
                break;
            default:
                throw new NotSupportedException($"Unknown provider {Provider}");
        }
    }



    [Benchmark(Baseline = true)]
    public async Task Insert_without_audit()
    {
        using var ctx = CreateUnauditedContext();
        for (var i = 0; i < BatchSize; i++)
        {
            ctx.Customers.Add(new Customer { Name = $"User{i}", Email = $"u{i}@x.com", LoyaltyPoints = i });
        }
        await ctx.SaveChangesAsync().ConfigureAwait(false);
    }



    [Benchmark]
    public async Task Insert_with_audit()
    {
        using var ctx = CreateAuditedContext();
        for (var i = 0; i < BatchSize; i++)
        {
            ctx.Customers.Add(new Customer { Name = $"User{i}", Email = $"u{i}@x.com", LoyaltyPoints = i });
        }
        await ctx.SaveChangesAsync().ConfigureAwait(false);
    }



    [Benchmark]
    public async Task Lifecycle_without_audit()
    {
        using var ctx = CreateUnauditedContext();
        var rows = new Customer[BatchSize];
        for (var i = 0; i < BatchSize; i++)
        {
            rows[i] = new Customer { Name = $"L{i}", Email = $"l{i}@x.com", LoyaltyPoints = i };
            ctx.Customers.Add(rows[i]);
        }
        await ctx.SaveChangesAsync().ConfigureAwait(false);

        for (var i = 0; i < BatchSize; i++)
        {
            rows[i].Email = $"updated-{i}@x.com";
        }
        await ctx.SaveChangesAsync().ConfigureAwait(false);

        for (var i = 0; i < BatchSize; i++)
        {
            ctx.Customers.Remove(rows[i]);
        }
        await ctx.SaveChangesAsync().ConfigureAwait(false);
    }



    [Benchmark]
    public async Task Lifecycle_with_audit()
    {
        using var ctx = CreateAuditedContext();
        var rows = new Customer[BatchSize];
        for (var i = 0; i < BatchSize; i++)
        {
            rows[i] = new Customer { Name = $"L{i}", Email = $"l{i}@x.com", LoyaltyPoints = i };
            ctx.Customers.Add(rows[i]);
        }
        await ctx.SaveChangesAsync().ConfigureAwait(false);

        for (var i = 0; i < BatchSize; i++)
        {
            rows[i].Email = $"updated-{i}@x.com";
        }
        await ctx.SaveChangesAsync().ConfigureAwait(false);

        for (var i = 0; i < BatchSize; i++)
        {
            ctx.Customers.Remove(rows[i]);
        }
        await ctx.SaveChangesAsync().ConfigureAwait(false);
    }



    [Benchmark]
    public async Task MixedStates_per_save_without_audit()
    {
        using var ctx = CreateUnauditedContext();
        ctx.Customers.AttachRange(_existingRows);
        for (var i = 0; i < BatchSize / 2; i++)
        {
            _existingRows[i].Email = $"u{i}@x.com";
            ctx.Entry(_existingRows[i]).State = EntityState.Modified;
        }
        for (var i = BatchSize / 2; i < BatchSize; i++)
        {
            ctx.Customers.Remove(_existingRows[i]);
        }
        for (var i = 0; i < BatchSize; i++)
        {
            ctx.Customers.Add(new Customer { Name = $"N{i}", LoyaltyPoints = i });
        }
        await ctx.SaveChangesAsync().ConfigureAwait(false);
    }



    [Benchmark]
    public async Task MixedStates_per_save_with_audit()
    {
        using var ctx = CreateAuditedContext();
        ctx.Customers.AttachRange(_existingRows);
        for (var i = 0; i < BatchSize / 2; i++)
        {
            _existingRows[i].Email = $"u{i}@x.com";
            ctx.Entry(_existingRows[i]).State = EntityState.Modified;
        }
        for (var i = BatchSize / 2; i < BatchSize; i++)
        {
            ctx.Customers.Remove(_existingRows[i]);
        }
        for (var i = 0; i < BatchSize; i++)
        {
            ctx.Customers.Add(new Customer { Name = $"N{i}", LoyaltyPoints = i });
        }
        await ctx.SaveChangesAsync().ConfigureAwait(false);
    }
}
