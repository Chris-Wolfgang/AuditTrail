using BenchmarkDotNet.Attributes;
using Microsoft.EntityFrameworkCore;
#if NET10_0
using Testcontainers.MsSql;
using Testcontainers.PostgreSql;
using Wolfgang.AuditTrail.Npgsql;
#endif
#if NET8_0
using Testcontainers.MySql;
#endif
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
    MySQL,
}



/// <summary>
/// Compares unaudited <c>SaveChangesAsync</c> against audited
/// <c>SaveChangesAsync</c> (via <see cref="AuditingDbContext"/>) across each of
/// the supported providers. Each <see cref="BenchmarkProvider"/> value spins
/// up its own engine — Testcontainers for SQL Server / PostgreSQL / MySQL, in-memory
/// for SQLite — in <c>GlobalSetup</c> and reuses it across iterations.
/// </summary>
/// <remarks>
/// <para>
/// <strong>MySQL runs on a separate net8.0 build.</strong> Pomelo
/// (<c>Pomelo.EntityFrameworkCore.MySql</c>) is still capped at EF Core 9 as of
/// this writing, while Sqlite/SqlServer/PostgreSQL use EF Core 10 (net10.0-only
/// packages). The PR regression gate compares each provider's own numbers
/// between two commits on the same TFM, never across providers, so this split
/// doesn't affect comparability — see #272. <c>Provider</c>'s valid values are
/// TFM-scoped via <c>NET10_0</c>/<c>NET8_0</c> conditionals below; fold MySQL
/// back into the net10.0-only matrix once Pomelo ships an EF Core 10 stable.
/// </para>
/// <para>
/// <strong>Docker required</strong> for every provider except SQLite — same
/// prerequisite as Tests.Integration.
/// </para>
/// </remarks>
[MemoryDiagnoser]
public class ProviderSaveChangesBenchmarks
{
#if NET10_0
    private MsSqlContainer? _sqlServerContainer;
    private PostgreSqlContainer? _postgresContainer;
#endif
#if NET8_0
    private MySqlContainer? _mySqlContainer;
    private ServerVersion? _mySqlServerVersion;
#endif
#if NET10_0
    private Microsoft.Data.Sqlite.SqliteConnection? _sqliteConnection;
#endif
    private string _connectionString = string.Empty;

    private AuditOptions _options = null!;
    private StaticAuditUserProvider _userProvider = null!;
    private Customer[] _existingRows = Array.Empty<Customer>();
    private IAuditBulkWriter? _bulkWriter;



#if NET10_0
    [Params(BenchmarkProvider.Sqlite, BenchmarkProvider.SqlServer, BenchmarkProvider.PostgreSQL)]
#elif NET8_0
    [Params(BenchmarkProvider.MySQL)]
#endif
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
#if NET10_0
            _bulkWriter = Provider == BenchmarkProvider.PostgreSQL ? new NpgsqlCopyAuditBulkWriter() : null;
#else
            _bulkWriter = null;
#endif
        }

        switch (Provider)
        {
#if NET10_0
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
#endif

#if NET8_0
            case BenchmarkProvider.MySQL:
                // Pin to the same exact image as Tests.Integration's MySqlFixture
                // for the same reproducibility reason as the other providers above.
                _mySqlContainer = new MySqlBuilder("mysql:8.0.39").Build();
                await _mySqlContainer.StartAsync().ConfigureAwait(false);
                _connectionString = _mySqlContainer.GetConnectionString();
                // AutoDetect opens a real connection to probe the server version --
                // cached once here rather than recomputed on every context creation.
                _mySqlServerVersion = await ServerVersion.AutoDetectAsync(_connectionString).ConfigureAwait(false);
                break;
#endif

            default:
                throw new NotSupportedException($"Unknown provider {Provider}");
        }

        using var seed = CreateAuditedContext();
        await seed.Database.EnsureCreatedAsync().ConfigureAwait(false);
    }



    [GlobalCleanup]
    public async Task GlobalCleanup()
    {
#if NET10_0
        if (_sqlServerContainer is not null)
        {
            await _sqlServerContainer.DisposeAsync().ConfigureAwait(false);
        }
        if (_postgresContainer is not null)
        {
            await _postgresContainer.DisposeAsync().ConfigureAwait(false);
        }
#endif
#if NET8_0
        if (_mySqlContainer is not null)
        {
            await _mySqlContainer.DisposeAsync().ConfigureAwait(false);
        }
#endif
#if NET10_0
        if (_sqliteConnection is not null)
        {
            await _sqliteConnection.DisposeAsync().ConfigureAwait(false);
        }
#endif
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
        // Provider-specific identifier quoting; DELETE works on all three.
        var customerTable = Provider switch
        {
            BenchmarkProvider.PostgreSQL => "\"Customers\"",
            _ => "Customers",
        };
        var detailTable = Provider switch
        {
            BenchmarkProvider.PostgreSQL => "\"AuditDetail\"",
            _ => "AuditDetail",
        };
        var headerTable = Provider switch
        {
            BenchmarkProvider.PostgreSQL => "\"AuditHeader\"",
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
#if NET10_0
            case BenchmarkProvider.Sqlite:
                builder.UseSqlite(_sqliteConnection!);
                break;
            case BenchmarkProvider.SqlServer:
                builder.UseSqlServer(_connectionString);
                break;
            case BenchmarkProvider.PostgreSQL:
                builder.UseNpgsql(_connectionString);
                break;
#endif
#if NET8_0
            case BenchmarkProvider.MySQL:
                builder.UseMySql(_connectionString, _mySqlServerVersion!);
                break;
#endif
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
