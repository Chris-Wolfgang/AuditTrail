using System.Diagnostics.CodeAnalysis;
using Microsoft.EntityFrameworkCore.Migrations.Operations;
using Wolfgang.AuditTrail.Schema;

namespace Wolfgang.AuditTrail.EntityFrameworkCore.Schema.Tests.Integration.TestSupport;



/// <summary>
/// Stand-in for the shipping <c>AuditSchemaUpgrades</c>, supplying a synthetic
/// version sequence so the upgrade path can be driven against a real database
/// before a second production schema version exists. Everything below this
/// seam is production code: the real version store, the real transaction, and
/// the provider's own migrations SQL generator.
/// </summary>
[ExcludeFromCodeCoverage]
internal sealed class StubSchemaUpgrades : IAuditSchemaUpgrades
{
    private readonly Func<int, AuditSchemaUpgradeContext, IReadOnlyList<MigrationOperation>> _step;



    public StubSchemaUpgrades
    (
        int currentVersion,
        Func<int, AuditSchemaUpgradeContext, IReadOnlyList<MigrationOperation>> step
    )
    {
        CurrentVersion = currentVersion;
        _step          = step;
    }



    public int CurrentVersion { get; }



    public IReadOnlyList<MigrationOperation> StepFrom(int fromVersion, AuditSchemaUpgradeContext context)
    {
        return _step(fromVersion, context);
    }



    /// <summary>
    /// A step shaped like the one #344 will ship: one nullable <c>bigint</c>
    /// column added to whichever table the model says holds the audit headers.
    /// </summary>
    public static IReadOnlyList<MigrationOperation> AddHeaderColumn(AuditSchemaUpgradeContext context, string name)
    {
        return new[] { AddColumn(context.HeaderTable, context.Schema, name) };
    }



    /// <summary>
    /// One nullable <c>bigint</c> column on an arbitrary table. Nullable so the
    /// operation applies to a populated table without a default.
    /// </summary>
    public static MigrationOperation AddColumn(string table, string? schema, string name)
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
}
