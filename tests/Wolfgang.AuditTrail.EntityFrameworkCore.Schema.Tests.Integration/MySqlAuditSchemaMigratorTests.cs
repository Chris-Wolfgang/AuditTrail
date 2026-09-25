using System.Diagnostics.CodeAnalysis;
using Microsoft.EntityFrameworkCore;
using Wolfgang.AuditTrail;
using Wolfgang.AuditTrail.EntityFrameworkCore.Schema.Tests.Integration.TestSupport;
using Wolfgang.AuditTrail.Schema;
using Wolfgang.AuditTrail.Serializers;
using Xunit;

namespace Wolfgang.AuditTrail.EntityFrameworkCore.Schema.Tests.Integration;



[ExcludeFromCodeCoverage]
public sealed class MySqlAuditSchemaMigratorTests
    : AuditSchemaMigratorIntegrationTestsBase, IClassFixture<MySqlSchemaFixture>
{
    private readonly MySqlSchemaFixture _fixture;



    public MySqlAuditSchemaMigratorTests(MySqlSchemaFixture fixture)
        : base(fixture)
    {
        _fixture = fixture;
    }



    /// <summary>
    /// Pins the documented MySQL caveat to observed behaviour instead of
    /// leaving it as a claim in a doc comment: MySQL implicitly commits DDL, so
    /// a step that fails part-way leaves the earlier operations persisted while
    /// the version row still reads the old value. That is why
    /// <see cref="AuditSchemaMigrator"/> tells MySQL users recovery is manual
    /// rather than "re-run it".
    /// </summary>
    /// <remarks>
    /// If MySQL ever makes multi-statement DDL transactional this test fails,
    /// which is the correct signal: the caveat in the migrator's remarks would
    /// then be wrong and should be removed.
    /// </remarks>
    [Fact]
    public async Task RunAsync_when_a_step_fails_part_way_leaves_earlier_DDL_committed()
    {
        const string addedColumn = "SequenceNumber";

        var options = new AuditOptions
        {
            HeaderTableName     = "AuditHeader",
            DetailTableName     = "AuditDetail",
            ValueSerializer     = new StringAuditValueSerializer(),
            EntityKeySerializer = new PipeDelimitedEntityKeySerializer(),
        };

        await using var context = await _fixture.CreateContextAsync(options);

        await AuditSchemaMigrator.RunAsync(context);

        // Second operation targets a table that does not exist, so it fails at
        // execution time, after the first ALTER has already been committed.
        var upgrades = new StubSchemaUpgrades(
            currentVersion: 2,
            step: (_, ctx) => new[]
            {
                StubSchemaUpgrades.AddHeaderColumn(ctx, addedColumn)[0],
                StubSchemaUpgrades.AddColumn("NoSuchTable", ctx.Schema, addedColumn),
            });

        await Assert.ThrowsAnyAsync<Exception>(
            async () => await AuditSchemaMigrator.RunAsync(context, upgrades, dryRun: false, CancellationToken.None));

        // The rollback that SQL Server and PostgreSQL give for free did not
        // happen here: the column from the first operation is still there.
        var columns = await _fixture.ListColumnsAsync(schema: null, table: "AuditHeader");
        Assert.Contains(addedColumn, columns, StringComparer.Ordinal);

        // And the version row never moved, so a re-run would replay the step
        // and fail on the column that now exists.
        context.ChangeTracker.Clear();
        var version = await context.Set<AuditSchemaVersion>().AsNoTracking().SingleAsync();
        Assert.Equal(1, version.Version);
    }
}
