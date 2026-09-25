#if NET8_0_OR_GREATER
using Microsoft.EntityFrameworkCore.Migrations.Operations;

namespace Wolfgang.AuditTrail.Schema;



/// <summary>
/// Supplies the ordered, per-version operations that take an installed audit
/// schema from one version to the next. Split out from
/// <see cref="AuditSchemaMigrator"/> so the migrator's apply/transaction
/// machinery can be exercised against a synthetic version sequence in tests,
/// without the production step table having to grow a fake version.
/// </summary>
internal interface IAuditSchemaUpgrades
{
    /// <summary>
    /// The schema version this set of steps installs and upgrades to. In
    /// production this is always <see cref="AuditSchemaConstants.CurrentSchemaVersion"/>.
    /// </summary>
    int CurrentVersion { get; }



    /// <summary>
    /// Returns the operations that take the schema from
    /// <paramref name="fromVersion"/> to <c>fromVersion + 1</c>: one step, not
    /// the whole journey. <see cref="AuditSchemaMigrator"/> chains the steps.
    /// </summary>
    /// <param name="fromVersion">The version currently installed in the database.</param>
    /// <param name="context">Table and schema names resolved from the live model.</param>
    /// <exception cref="NotSupportedException">
    /// If no step is defined for <paramref name="fromVersion"/>.
    /// </exception>
    IReadOnlyList<MigrationOperation> StepFrom(int fromVersion, AuditSchemaUpgradeContext context);
}
#endif
