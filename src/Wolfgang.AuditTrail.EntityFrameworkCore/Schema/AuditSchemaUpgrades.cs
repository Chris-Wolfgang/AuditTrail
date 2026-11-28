#if NET8_0_OR_GREATER
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations.Operations;
using Wolfgang.AuditTrail.Entities;

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

        // Version 2 adds AuditHeader.Ordinal: the 0-based position of a header within
        // its transaction. Table and Schema come from the context rather than from
        // AuditOptions, because the caller may have renamed either since install.
        //
        // The column is a plain NOT NULL int with a default, not a database-generated
        // one, and both halves of that matter. The default is required at all: the
        // target is an existing, populated table, and ADD COLUMN NOT NULL without one
        // fails on every row already there. And generation must stay client-side --
        // marking the property ValueGeneratedOnAdd and letting each provider emit its
        // own identity syntax looks portable and is not. Measured against SQL Server,
        // PostgreSQL, MySQL and SQLite: MySQL rejects a non-key AUTO_INCREMENT column
        // outright, even on a fresh CREATE TABLE; SQLite has no identity concept for a
        // non-primary-key column, so EF omits it from INSERTs expecting generation that
        // never happens and the write fails at runtime; and PostgreSQL does backfill
        // existing rows, but not in insert order, so historical rows would get values
        // that misstate their order rather than merely being absent. AuditCapture
        // assigns it instead, beside HeaderId.
        //
        // Existing rows therefore read 0, which is why AuditHeader.Ordinal documents 0
        // as "unknown" as much as "first" on pre-upgrade data.
        if (fromVersion == 1)
        {
            return new MigrationOperation[]
            {
                new AddColumnOperation
                {
                    Table      = context.HeaderTable,
                    Schema     = context.Schema,
                    Name       = nameof(AuditHeader.Ordinal),
                    ClrType    = typeof(int),
                    IsNullable = false,

                    // Also backfills every pre-existing row.
                    DefaultValue = 0,
                },

                // Matches the model's (TransactionId, Ordinal) index so an upgraded
                // database can replay a save in order without a sort, exactly as a
                // fresh install can. The name follows EF's convention for the index
                // this step creates, so the two paths agree.
                new CreateIndexOperation
                {
                    Table   = context.HeaderTable,
                    Schema  = context.Schema,
                    Name    = $"IX_{context.HeaderTable}_{nameof(AuditHeader.TransactionId)}_{nameof(AuditHeader.Ordinal)}",
                    Columns = new[] { nameof(AuditHeader.TransactionId), nameof(AuditHeader.Ordinal) },
                },
            };
        }

        throw new NotSupportedException
        (
            $"No upgrade step is defined from audit schema version {fromVersion}. " +
            $"This build installs audit schema version {CurrentVersion}.");
    }
}
#endif
