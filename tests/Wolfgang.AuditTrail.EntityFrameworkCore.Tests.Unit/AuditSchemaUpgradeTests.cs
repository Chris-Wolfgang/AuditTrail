#if NET8_0_OR_GREATER
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations.Operations;
using Microsoft.Extensions.DependencyInjection;
using Wolfgang.AuditTrail.Entities;
using Wolfgang.AuditTrail.Schema;
using Wolfgang.AuditTrail.Serializers;
using Xunit;

namespace Wolfgang.AuditTrail.Tests.Unit;



/// <summary>
/// Covers the version-to-version upgrade path in <see cref="AuditSchemaMigrator"/>.
/// </summary>
/// <remarks>
/// <para>
/// The library currently ships exactly one schema version, so there is no real
/// v1 to v2 step to drive these tests with. They use the migrator's internal
/// <see cref="IAuditSchemaUpgrades"/> seam to supply a synthetic version
/// sequence instead. Everything below the seam is production code: the real
/// version store, the real transaction and execution-strategy wrapper, and the
/// provider's own <c>IMigrationsSqlGenerator</c> turning the operations into
/// DDL that is executed against a real (in-memory SQLite) database.
/// </para>
/// <para>
/// SQLite is used because it ships a migrations SQL generator, runs in-process,
/// and applies DDL inside a transaction, which is what the atomicity test needs.
/// </para>
/// </remarks>
public sealed class AuditSchemaUpgradeTests : IDisposable
{
    private const string AddedColumn       = "SequenceNumber";
    private const string SecondAddedColumn = "SequenceNumber2";

    private readonly SqliteConnection _connection;
    private readonly AuditOptions _options;



    public AuditSchemaUpgradeTests()
    {
        _connection = new SqliteConnection("DataSource=:memory:");
        _connection.Open();

        _options = new AuditOptions
        {
            ValueSerializer     = new StringAuditValueSerializer(),
            EntityKeySerializer = new PipeDelimitedEntityKeySerializer(),
        };
    }



    public void Dispose()
    {
        _connection.Dispose();
    }



    private AuditMigrationsDbContext CreateContext()
    {
        var builder = new DbContextOptionsBuilder<AuditMigrationsDbContext>()
            .UseSqlite(_connection);
        return new AuditMigrationsDbContext(builder.Options, _options);
    }



    /// <summary>
    /// Brings the database to schema version 1 using the shipping migrator, so
    /// every upgrade test starts from a genuine v1 install rather than a
    /// hand-built approximation of one.
    /// </summary>
    private async Task InstallVersion1Async()
    {
        await using var context = CreateContext();
        await AuditSchemaMigrator.RunAsync(context);
    }



    private static MigrationOperation AddNullableLongColumn(string table, string? schema, string name)
    {
        return new AddColumnOperation
        {
            Table      = table,
            Schema     = schema,
            Name       = name,
            ClrType    = typeof(long),
            IsNullable = true,
        };
    }



    private async Task<IReadOnlyList<string>> GetColumnNamesAsync(string table)
    {
        var columns = new List<string>();
        await using var command = _connection.CreateCommand();
        command.CommandText = $"PRAGMA table_info(\"{table}\")";
        await using var reader = await command.ExecuteReaderAsync();
        while (await reader.ReadAsync())
        {
            columns.Add(reader.GetString(1));
        }
        return columns;
    }



    private async Task<int> ReadVersionAsync()
    {
        await using var context = CreateContext();
        var row = await context.Set<AuditSchemaVersion>().AsNoTracking().SingleAsync();
        return row.Version;
    }



    /// <summary>
    /// Stand-in for the shipping <see cref="AuditSchemaUpgrades"/>. Supplies a
    /// synthetic <c>CurrentVersion</c> and step body, and records which versions
    /// the migrator asked for so ordering can be asserted.
    /// </summary>
    private sealed class StubUpgrades : IAuditSchemaUpgrades
    {
        private readonly Func<int, AuditSchemaUpgradeContext, IReadOnlyList<MigrationOperation>> _step;



        public StubUpgrades
        (
            int currentVersion,
            Func<int, AuditSchemaUpgradeContext, IReadOnlyList<MigrationOperation>> step
        )
        {
            CurrentVersion = currentVersion;
            _step          = step;
        }



        public int CurrentVersion { get; }



        public List<int> RequestedVersions { get; } = new();



        public IReadOnlyList<MigrationOperation> StepFrom(int fromVersion, AuditSchemaUpgradeContext context)
        {
            RequestedVersions.Add(fromVersion);
            return _step(fromVersion, context);
        }
    }



    [Fact]
    public async Task RunAsync_when_the_database_is_behind_the_current_version_applies_the_upgrade_step()
    {
        await InstallVersion1Async();

        var upgrades = new StubUpgrades(
            currentVersion: 2,
            step: (_, ctx) => new[] { AddNullableLongColumn(ctx.HeaderTable, ctx.Schema, AddedColumn) });

        await using (var context = CreateContext())
        {
            await AuditSchemaMigrator.RunAsync(context, upgrades, dryRun: false, CancellationToken.None);
        }

        var columns = await GetColumnNamesAsync("AuditHeader");
        Assert.Contains(AddedColumn, columns, StringComparer.Ordinal);

        Assert.Equal
        (
            2,
            await ReadVersionAsync()
        );
    }



    [Fact]
    public async Task RunAsync_when_upgrading_preserves_the_rows_already_in_the_audit_tables()
    {
        await InstallVersion1Async();

        var headerId = Guid.NewGuid();

        await using (var seed = CreateContext())
        {
            seed.Set<AuditHeader>().Add(new AuditHeader
            {
                HeaderId      = headerId,
                TransactionId = Guid.NewGuid(),
                AuditedAtUtc  = new DateTime(2026, 9, 24, 12, 0, 0, DateTimeKind.Utc),
                UserId        = "tester",
                EntityType    = "Order",
                EntityTable   = "Orders",
                EntityKey     = "1",
                Operation     = AuditOperation.Insert,
                Details =
                {
                    new AuditDetail
                    {
                        ColumnName = "Total",
                        ValueText  = "9.99",
                        ValueType  = "System.Decimal",
                    },
                },
            });
            await seed.SaveChangesAsync();
        }

        var upgrades = new StubUpgrades(
            currentVersion: 2,
            step: (_, ctx) => new[] { AddNullableLongColumn(ctx.HeaderTable, ctx.Schema, AddedColumn) });

        await using (var context = CreateContext())
        {
            await AuditSchemaMigrator.RunAsync(context, upgrades, dryRun: false, CancellationToken.None);
        }

        await using var verify = CreateContext();

        var header = await verify.Set<AuditHeader>().AsNoTracking().SingleAsync();
        Assert.Equal(headerId, header.HeaderId);
        Assert.Equal("tester", header.UserId);

        var detail = await verify.Set<AuditDetail>().AsNoTracking().SingleAsync();
        Assert.Equal("Total", detail.ColumnName);
        Assert.Equal(headerId, detail.HeaderId);
    }



    [Fact]
    public async Task RunAsync_when_several_versions_behind_applies_every_step_in_version_order()
    {
        await InstallVersion1Async();

        var upgrades = new StubUpgrades(
            currentVersion: 3,
            step: (from, ctx) => new[]
            {
                AddNullableLongColumn(
                    ctx.HeaderTable,
                    ctx.Schema,
                    from == 1 ? AddedColumn : SecondAddedColumn),
            });

        await using (var context = CreateContext())
        {
            await AuditSchemaMigrator.RunAsync(context, upgrades, dryRun: false, CancellationToken.None);
        }

        Assert.Equal(new[] { 1, 2 }, upgrades.RequestedVersions);

        var columns = await GetColumnNamesAsync("AuditHeader");
        Assert.Contains(AddedColumn, columns, StringComparer.Ordinal);
        Assert.Contains(SecondAddedColumn, columns, StringComparer.Ordinal);

        Assert.Equal
        (
            3,
            await ReadVersionAsync()
        );
    }



    [Fact]
    public async Task RunAsync_when_upgrading_with_dryRun_returns_the_sql_without_applying_it()
    {
        await InstallVersion1Async();

        var upgrades = new StubUpgrades(
            currentVersion: 2,
            step: (_, ctx) => new[] { AddNullableLongColumn(ctx.HeaderTable, ctx.Schema, AddedColumn) });

        string script;
        await using (var context = CreateContext())
        {
            script = await AuditSchemaMigrator.RunAsync(context, upgrades, dryRun: true, CancellationToken.None);
        }

        Assert.Contains("ALTER TABLE", script, StringComparison.OrdinalIgnoreCase);
        Assert.Contains(AddedColumn, script, StringComparison.Ordinal);

        var columns = await GetColumnNamesAsync("AuditHeader");
        Assert.DoesNotContain(AddedColumn, columns, StringComparer.Ordinal);

        Assert.Equal
        (
            1,
            await ReadVersionAsync()
        );
    }



    [Fact]
    public async Task RunAsync_when_the_database_is_ahead_of_this_build_throws()
    {
        // Install straight to a version this build does not know about, then
        // ask the shipping migrator (version 1) to run against it.
        var future = new StubUpgrades(
            currentVersion: 5,
            step: (_, _) => Array.Empty<MigrationOperation>());

        await using (var install = CreateContext())
        {
            await AuditSchemaMigrator.RunAsync(install, future, dryRun: false, CancellationToken.None);
        }

        await using var context = CreateContext();

        var exception = await Assert.ThrowsAsync<InvalidOperationException>(
            async () => await AuditSchemaMigrator.RunAsync(context));

        Assert.Contains("version 5", exception.Message, StringComparison.Ordinal);
        Assert.Contains("Downgrading", exception.Message, StringComparison.Ordinal);
    }



    [Fact]
    public async Task RunAsync_when_an_upgrade_step_fails_leaves_the_recorded_version_unchanged()
    {
        await InstallVersion1Async();

        // Targets a table that does not exist, so the ALTER fails when it is
        // executed rather than when it is generated.
        var upgrades = new StubUpgrades(
            currentVersion: 2,
            step: (_, ctx) => new[]
            {
                AddNullableLongColumn(ctx.HeaderTable, ctx.Schema, AddedColumn),
                AddNullableLongColumn("NoSuchTable", ctx.Schema, AddedColumn),
            });

        await using (var context = CreateContext())
        {
            await Assert.ThrowsAnyAsync<Exception>(
                async () => await AuditSchemaMigrator.RunAsync(context, upgrades, dryRun: false, CancellationToken.None));
        }

        Assert.Equal
        (
            1,
            await ReadVersionAsync()
        );

        // The first, valid operation must have been rolled back with the second.
        var columns = await GetColumnNamesAsync("AuditHeader");
        Assert.DoesNotContain(AddedColumn, columns, StringComparer.Ordinal);
    }



    [Fact]
    public async Task RunAsync_when_upgrading_targets_the_table_names_the_consumer_configured()
    {
        _options.HeaderTableName = "MyHeader";
        _options.DetailTableName = "MyDetail";

        await InstallVersion1Async();

        var upgrades = new StubUpgrades(
            currentVersion: 2,
            step: (_, ctx) => new[] { AddNullableLongColumn(ctx.HeaderTable, ctx.Schema, AddedColumn) });

        await using (var context = CreateContext())
        {
            await AuditSchemaMigrator.RunAsync(context, upgrades, dryRun: false, CancellationToken.None);
        }

        var columns = await GetColumnNamesAsync("MyHeader");
        Assert.Contains(AddedColumn, columns, StringComparer.Ordinal);
    }



    [Fact]
    public async Task RunAsync_when_the_schema_is_already_current_does_nothing()
    {
        await InstallVersion1Async();

        var upgrades = new StubUpgrades(
            currentVersion: 1,
            step: (_, _) => throw new InvalidOperationException("No step should be requested."));

        await using var context = CreateContext();

        Assert.Equal
        (
            string.Empty,
            await AuditSchemaMigrator.RunAsync(context, upgrades, dryRun: false, CancellationToken.None)
        );

        Assert.Empty(upgrades.RequestedVersions);
    }



    [Fact]
    public async Task RunAsync_when_upgrades_is_null_throws()
    {
        await using var context = CreateContext();

        await Assert.ThrowsAsync<ArgumentNullException>(
            async () => await AuditSchemaMigrator.RunAsync(context, upgrades: null!, dryRun: false, CancellationToken.None));
    }



    [Fact]
    public void StepFrom_when_no_step_is_defined_for_the_version_throws_NotSupportedException()
    {
        using var context = CreateContext();
        var upgradeContext = AuditSchemaUpgradeContext.FromModel(DesignTimeModel(context));

        var exception = Assert.Throws<NotSupportedException>(
            () => AuditSchemaUpgrades.Instance.StepFrom(int.MaxValue, upgradeContext));

        Assert.Contains("No upgrade step is defined", exception.Message, StringComparison.Ordinal);
    }



    [Fact]
    public void StepFrom_when_context_is_null_throws()
    {
        Assert.Throws<ArgumentNullException>(
            () => AuditSchemaUpgrades.Instance.StepFrom(1, context: null!));
    }



    /// <summary>
    /// Fails the moment <see cref="AuditSchemaConstants.CurrentSchemaVersion"/>
    /// is raised without the matching arm being added to
    /// <see cref="AuditSchemaUpgrades.StepFrom"/>. Vacuous while there is only
    /// one version, which is the point: it starts asserting by itself.
    /// </summary>
    [Fact]
    public void Every_version_below_current_has_an_upgrade_step()
    {
        using var context = CreateContext();
        var upgradeContext = AuditSchemaUpgradeContext.FromModel(DesignTimeModel(context));

        // Read the bound off the instance rather than the const: the const
        // folds to `version < 1` today, which analysers flag as an expression
        // that is always false. The property carries the same value and keeps
        // the loop honest once the version moves.
        var currentVersion = AuditSchemaUpgrades.Instance.CurrentVersion;

        Assert.Equal(AuditSchemaConstants.CurrentSchemaVersion, currentVersion);

        for (var version = 1; version < currentVersion; version++)
        {
            var operations = AuditSchemaUpgrades.Instance.StepFrom(version, upgradeContext);

            Assert.NotEmpty(operations);
        }
    }



    [Fact]
    public void FromModel_reads_the_table_and_schema_names_out_of_the_model()
    {
        _options.Schema          = "audit";
        _options.HeaderTableName = "MyHeader";
        _options.DetailTableName = "MyDetail";

        using var context = CreateContext();

        var upgradeContext = AuditSchemaUpgradeContext.FromModel(DesignTimeModel(context));

        Assert.Equal("MyHeader", upgradeContext.HeaderTable);
        Assert.Equal("MyDetail", upgradeContext.DetailTable);
        Assert.Equal("audit", upgradeContext.Schema);
    }



    [Fact]
    public void FromModel_when_model_is_null_throws()
    {
        Assert.Throws<ArgumentNullException>(() => AuditSchemaUpgradeContext.FromModel(model: null!));
    }



    [Fact]
    public void FromModel_when_the_model_has_no_audit_entities_throws()
    {
        using var context = new NoAuditEntitiesContext(_connection);

        var exception = Assert.Throws<InvalidOperationException>(
            () => AuditSchemaUpgradeContext.FromModel(context.GetService<IDesignTimeModel>().Model));

        Assert.Contains("ApplyAuditing", exception.Message, StringComparison.Ordinal);
    }



    [Fact]
    public void FromModel_when_the_audit_entities_map_to_no_table_throws()
    {
        using var context = new UnmappedAuditEntitiesContext(_connection, _options);

        var exception = Assert.Throws<InvalidOperationException>(
            () => AuditSchemaUpgradeContext.FromModel(context.GetService<IDesignTimeModel>().Model));

        Assert.Contains("no table", exception.Message, StringComparison.Ordinal);
    }



    /// <summary>A model that was never run through <c>ApplyAuditing</c>.</summary>
    private sealed class NoAuditEntitiesContext : DbContext
    {
        private readonly SqliteConnection _connection;



        public NoAuditEntitiesContext(SqliteConnection connection)
        {
            _connection = connection;
        }



        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite(_connection);
        }



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AuditSchemaVersion>().HasKey(v => v.Id);
        }
    }



    /// <summary>Audit entities present but mapped to no table.</summary>
    private sealed class UnmappedAuditEntitiesContext : DbContext
    {
        private readonly SqliteConnection _connection;
        private readonly AuditOptions _options;



        public UnmappedAuditEntitiesContext(SqliteConnection connection, AuditOptions options)
        {
            _connection = connection;
            _options    = options;
        }



        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite(_connection);
        }



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyAuditing(_options);
            modelBuilder.Entity<AuditHeader>().ToTable((string?)null);
            modelBuilder.Entity<AuditDetail>().ToTable((string?)null);
        }
    }



    private static IModel DesignTimeModel(AuditMigrationsDbContext context)
    {
        return context.GetService<IDesignTimeModel>().Model;
    }
}
#endif
