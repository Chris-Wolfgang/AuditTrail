namespace Wolfgang.AuditTrail.Schema;



/// <summary>
/// One-row record tracking the audit schema version currently installed in the
/// target database. The row is upserted by <c>AuditSchemaMigrator</c>
/// after a successful migration apply.
/// </summary>
public sealed class AuditSchemaVersion
{
    /// <summary>
    /// Single-row primary key. Always <c>1</c>. Modelled this way so EF Core's
    /// model differ treats the row as a fixed identity (and so the version table
    /// always has exactly one row regardless of how many times we upsert).
    /// </summary>
    public int Id { get; set; } = 1;

    /// <summary>
    /// The installed schema version. Increments only when a release bumps
    /// <see cref="AuditSchemaConstants.CurrentSchemaVersion"/> and ships the
    /// matching upgrade step.
    /// </summary>
    public int Version { get; set; }
}
