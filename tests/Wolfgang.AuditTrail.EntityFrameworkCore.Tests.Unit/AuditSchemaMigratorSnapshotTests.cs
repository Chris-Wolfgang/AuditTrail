#if NET10_0
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using VerifyXunit;
using Wolfgang.AuditTrail.Schema;
using Wolfgang.AuditTrail.Serializers;
using Xunit;
using static VerifyXunit.Verifier;

namespace Wolfgang.AuditTrail.Tests.Unit;

/// <summary>
/// Approval (snapshot) tests for the migration DDL that
/// <see cref="AuditSchemaMigrator"/> generates. The targeted
/// <c>Assert.Contains("AuditHeader", …)</c> checks in
/// <see cref="AuditSchemaMigratorTests"/> prove the right tables appear, but they
/// can't catch format drift in the rest of the script — a column type that
/// changes, a constraint that disappears, the version-stamp <c>INSERT</c> that
/// stops emitting. The full script is captured here as a <c>.verified.txt</c>
/// snapshot so any unintended change to the generated SQL fails the build and is
/// reviewed deliberately.
///
/// Pinned to net10.0 (see the project file): the exact SQLite DDL EF Core emits
/// can shift between EF versions, and a single-TFM snapshot avoids maintaining a
/// separate approved file per target framework.
/// </summary>
public sealed class AuditSchemaMigratorSnapshotTests
{
    // Snapshots live under tests/.../Snapshots/ rather than beside this file.
    private static SettingsTask VerifyScript(string script) =>
        Verify(script, extension: "sql").UseDirectory("Snapshots");



    private static async Task<string> GenerateScriptAsync(AuditOptions options)
    {
        using var connection = new SqliteConnection("DataSource=:memory:");
        connection.Open();

        var builder = new DbContextOptionsBuilder<AuditMigrationsDbContext>()
            .UseSqlite(connection);
        await using var context = new AuditMigrationsDbContext(builder.Options, options);

        return await AuditSchemaMigrator.RunAsync(context, dryRun: true);
    }



    [Fact]
    public async Task Migration_script_with_default_options_matches_snapshot()
    {
        var options = new AuditOptions
        {
            ValueSerializer     = new StringAuditValueSerializer(),
            EntityKeySerializer = new PipeDelimitedEntityKeySerializer(),
        };

        var script = await GenerateScriptAsync(options);

        await VerifyScript(script);
    }



    [Fact]
    public async Task Migration_script_with_custom_table_names_matches_snapshot()
    {
        var options = new AuditOptions
        {
            HeaderTableName     = "MyHeader",
            DetailTableName     = "MyDetail",
            ValueSerializer     = new StringAuditValueSerializer(),
            EntityKeySerializer = new PipeDelimitedEntityKeySerializer(),
        };

        var script = await GenerateScriptAsync(options);

        await VerifyScript(script);
    }
}
#endif
