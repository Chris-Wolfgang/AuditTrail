#if NET8_0_OR_GREATER
using System;
using System.Collections.Generic;
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
        // A first step is a branch on fromVersion returning the operations that
        // take that version to the next one -- for a new column, an
        // AddColumnOperation whose Table and Schema come from the context
        // rather than from AuditOptions, because the caller may have renamed
        // either.
        //
        // Two constraints on such a column, both measured against SQL Server,
        // PostgreSQL, MySQL and SQLite rather than assumed:
        //
        // A non-nullable column must carry a DefaultValue. The target is an
        // existing, populated table, and ADD COLUMN NOT NULL without a default
        // fails on every row already there.
        //
        // It must not rely on the database to generate per-row values. Marking
        // the property ValueGeneratedOnAdd and letting the provider emit its
        // own identity syntax looks portable and is not: MySQL rejects a
        // non-key AUTO_INCREMENT column outright, even on a fresh CREATE TABLE,
        // so it would need an extra index led by that column; SQLite has no
        // identity concept for a non-primary-key column, so EF omits the column
        // from INSERTs expecting generation that never happens and the write
        // fails at runtime; and PostgreSQL does backfill existing rows but not
        // in insert order, so historical rows get values that misstate their
        // order rather than merely being absent. Assign such values in
        // AuditCapture, where HeaderId is already assigned, and let the column
        // be a plain NOT NULL with a default that marks pre-upgrade rows.
        throw new NotSupportedException
        (
            $"No upgrade step is defined from audit schema version {fromVersion}. " +
            $"This build installs audit schema version {CurrentVersion}.");
    }
}
#endif
