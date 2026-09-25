#if NET8_0_OR_GREATER
using Microsoft.EntityFrameworkCore.Migrations.Operations;

namespace Wolfgang.AuditTrail.Schema;



/// <summary>
/// The upgrade steps this build of the library ships.
/// </summary>
/// <remarks>
/// <para>
/// Adding a schema version is two edits: bump
/// <see cref="AuditSchemaConstants.CurrentSchemaVersion"/>, and add the arm to
/// <see cref="StepFrom"/> that takes the previous version to the new one. The
/// test <c>Every_version_below_current_has_an_upgrade_step</c> fails if only the
/// first edit is made.
/// </para>
/// <para>
/// Steps are written as explicit <see cref="MigrationOperation"/>s rather than
/// derived from a model diff. A diff needs a faithful snapshot of every past
/// version to compare against, and nothing would detect a snapshot that drifted
/// from what that version actually shipped. An explicit step is readable,
/// reviewable, and testable on its own. EF Core's
/// <see cref="Microsoft.EntityFrameworkCore.Migrations.IMigrationsSqlGenerator"/>
/// still turns the operations into provider-appropriate DDL, so no
/// hand-written per-provider SQL is involved.
/// </para>
/// </remarks>
internal sealed class AuditSchemaUpgrades : IAuditSchemaUpgrades
{
    /// <summary>The instance <see cref="AuditSchemaMigrator"/> uses in production.</summary>
    public static readonly AuditSchemaUpgrades Instance = new();



    /// <inheritdoc />
    public int CurrentVersion => AuditSchemaConstants.CurrentSchemaVersion;



    /// <inheritdoc />
    /// <exception cref="ArgumentNullException">If <paramref name="context"/> is <c>null</c>.</exception>
    public IReadOnlyList<MigrationOperation> StepFrom(int fromVersion, AuditSchemaUpgradeContext context)
    {
        ArgumentNullException.ThrowIfNull(context);

        // Version 1 is the only audit schema this library has ever installed,
        // so there are no steps yet and every call lands on the throw below.
        // The first arm arrives with the SequenceNumber column (#344):
        //
        //     if (fromVersion == 1)
        //     {
        //         return new MigrationOperation[]
        //         {
        //             new AddColumnOperation
        //             {
        //                 Table      = context.HeaderTable,
        //                 Schema     = context.Schema,
        //                 Name       = nameof(AuditHeader.SequenceNumber),
        //                 ClrType    = typeof(long),
        //                 IsNullable = false,
        //             },
        //         };
        //     }
        throw new NotSupportedException
        (
            $"No upgrade step is defined from audit schema version {fromVersion}. " +
            $"This build installs audit schema version {CurrentVersion}.");
    }
}
#endif
