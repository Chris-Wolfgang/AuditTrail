using System.Diagnostics.CodeAnalysis;
using Microsoft.EntityFrameworkCore;
using Wolfgang.AuditTrail;
using Wolfgang.AuditTrail.EntityFrameworkCore.Schema.Tests.Integration.TestSupport;
using Wolfgang.AuditTrail.Entities;
using Wolfgang.AuditTrail.Schema;
using Wolfgang.AuditTrail.Serializers;
using Xunit;

namespace Wolfgang.AuditTrail.EntityFrameworkCore.Schema.Tests.Integration;



/// <summary>
/// Shared facts that <see cref="AuditSchemaMigrator"/> must satisfy on every
/// relational provider. Each concrete subclass binds the same body to a
/// provider-specific <see cref="ISchemaProviderFixture"/> via xunit's
/// <see cref="IClassFixture{TFixture}"/>.
/// </summary>
[ExcludeFromCodeCoverage]
public abstract class AuditSchemaMigratorIntegrationTestsBase
{
    private readonly ISchemaProviderFixture _fixture;



    protected AuditSchemaMigratorIntegrationTestsBase(ISchemaProviderFixture fixture)
    {
        _fixture = fixture ?? throw new ArgumentNullException(nameof(fixture));
    }



    private static AuditOptions BuildOptions(string? schema = null, string? header = null, string? detail = null) => new()
    {
        Schema              = schema,
        HeaderTableName     = header ?? "AuditHeader",
        DetailTableName     = detail ?? "AuditDetail",
        ValueSerializer     = new StringAuditValueSerializer(),
        EntityKeySerializer = new PipeDelimitedEntityKeySerializer(),
    };



    [Fact]
    public async Task RunAsync_on_fresh_database_creates_audit_tables_and_stamps_version()
    {
        var options = BuildOptions();
        await using var context = await _fixture.CreateContextAsync(options);

        await AuditSchemaMigrator.RunAsync(context);

        var tables = await _fixture.ListTablesAsync(schema: null);
        Assert.Contains(tables, t => string.Equals(t.Name, "AuditHeader", StringComparison.Ordinal));
        Assert.Contains(tables, t => string.Equals(t.Name, "AuditDetail", StringComparison.Ordinal));
        Assert.Contains(tables, t => string.Equals(t.Name, AuditSchemaConstants.VersionTableName, StringComparison.Ordinal));

        var version = await context.Set<AuditSchemaVersion>().AsNoTracking().SingleAsync();
        Assert.Equal(AuditSchemaConstants.CurrentSchemaVersion, version.Version);
    }



    [Fact]
    public async Task RunAsync_honors_custom_schema_and_table_names()
    {
        var options = BuildOptions(
            schema: _fixture.CustomSchema,
            header: "CustomHeader",
            detail: "CustomDetail");

        await using var context = await _fixture.CreateContextAsync(options);

        await AuditSchemaMigrator.RunAsync(context);

        var tables = await _fixture.ListTablesAsync(_fixture.CustomSchema);
        Assert.Contains(tables, t => string.Equals(t.Schema, _fixture.CustomSchema, StringComparison.Ordinal) && string.Equals(t.Name, "CustomHeader", StringComparison.Ordinal));
        Assert.Contains(tables, t => string.Equals(t.Schema, _fixture.CustomSchema, StringComparison.Ordinal) && string.Equals(t.Name, "CustomDetail", StringComparison.Ordinal));
        Assert.Contains(tables, t => string.Equals(t.Schema, _fixture.CustomSchema, StringComparison.Ordinal) && string.Equals(t.Name, AuditSchemaConstants.VersionTableName, StringComparison.Ordinal));

        // And no spurious AuditHeader/AuditDetail under any schema.
        Assert.DoesNotContain(tables, t => string.Equals(t.Name, "AuditHeader", StringComparison.Ordinal));
        Assert.DoesNotContain(tables, t => string.Equals(t.Name, "AuditDetail", StringComparison.Ordinal));
    }



    [Fact]
    public async Task RunAsync_is_idempotent_when_called_twice()
    {
        var options = BuildOptions();
        await using var context = await _fixture.CreateContextAsync(options);

        await AuditSchemaMigrator.RunAsync(context);
        // If the migrator tried to re-run the CREATE TABLEs it would throw
        // (object already exists). A clean no-op proves the version-check
        // early-out works on the real provider.
        await AuditSchemaMigrator.RunAsync(context);

        var version = await context.Set<AuditSchemaVersion>().AsNoTracking().SingleAsync();
        Assert.Equal(AuditSchemaConstants.CurrentSchemaVersion, version.Version);
    }



    [Fact]
    public async Task RunAsync_dryRun_returns_script_without_creating_tables()
    {
        var options = BuildOptions();
        await using var context = await _fixture.CreateContextAsync(options);

        var script = await AuditSchemaMigrator.RunAsync(context, dryRun: true);

        Assert.False(string.IsNullOrWhiteSpace(script));
        Assert.Contains("AuditHeader", script, StringComparison.Ordinal);
        Assert.Contains("AuditDetail", script, StringComparison.Ordinal);

        var tables = await _fixture.ListTablesAsync(schema: null);
        Assert.DoesNotContain(tables, t => string.Equals(t.Name, "AuditHeader", StringComparison.Ordinal));
        Assert.DoesNotContain(tables, t => string.Equals(t.Name, "AuditDetail", StringComparison.Ordinal));
        Assert.DoesNotContain(tables, t => string.Equals(t.Name, AuditSchemaConstants.VersionTableName, StringComparison.Ordinal));
    }



    /// <summary>
    /// The case a fresh-database test can never cover: an existing install,
    /// with rows in it, taken forward a version. Asserts the table really was
    /// altered and that the data survived, rather than trusting the version row.
    /// </summary>
    /// <remarks>
    /// The library ships one schema version, so the step comes from
    /// <see cref="StubSchemaUpgrades"/>. Everything it drives is production
    /// code, including the provider's own migrations SQL generator.
    /// </remarks>
    [Fact]
    public async Task RunAsync_upgrades_a_populated_database_and_preserves_its_rows()
    {
        const string addedColumn = "SequenceNumber";

        var options = BuildOptions();
        await using var context = await _fixture.CreateContextAsync(options);

        await AuditSchemaMigrator.RunAsync(context);

        var headerId = Guid.NewGuid();
        context.Set<AuditHeader>().Add(new AuditHeader
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
        await context.SaveChangesAsync();
        context.ChangeTracker.Clear();

        var upgrades = new StubSchemaUpgrades(
            currentVersion: 2,
            step: (_, ctx) => StubSchemaUpgrades.AddHeaderColumn(ctx, addedColumn));

        await AuditSchemaMigrator.RunAsync(context, upgrades, dryRun: false, CancellationToken.None);

        var columns = await _fixture.ListColumnsAsync(schema: null, table: "AuditHeader");
        Assert.Contains(addedColumn, columns, StringComparer.Ordinal);

        context.ChangeTracker.Clear();

        var header = await context.Set<AuditHeader>().AsNoTracking().SingleAsync();
        Assert.Equal(headerId, header.HeaderId);
        Assert.Equal("tester", header.UserId);

        var detail = await context.Set<AuditDetail>().AsNoTracking().SingleAsync();
        Assert.Equal("Total", detail.ColumnName);
        Assert.Equal(headerId, detail.HeaderId);

        var version = await context.Set<AuditSchemaVersion>().AsNoTracking().SingleAsync();
        Assert.Equal(2, version.Version);
    }



    [Fact]
    public async Task RunAsync_when_the_database_is_ahead_of_this_build_throws()
    {
        var options = BuildOptions();
        await using var context = await _fixture.CreateContextAsync(options);

        // Install straight to a version this build does not know about.
        var future = new StubSchemaUpgrades(
            currentVersion: 5,
            step: (_, _) => Array.Empty<Microsoft.EntityFrameworkCore.Migrations.Operations.MigrationOperation>());

        await AuditSchemaMigrator.RunAsync(context, future, dryRun: false, CancellationToken.None);

        var exception = await Assert.ThrowsAsync<InvalidOperationException>(
            async () => await AuditSchemaMigrator.RunAsync(context));

        Assert.Contains("version 5", exception.Message, StringComparison.Ordinal);
    }
}
