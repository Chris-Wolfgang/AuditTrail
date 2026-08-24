namespace Wolfgang.AuditTrail;

/// <summary>
/// Configures how the audit interceptor captures changes and how the schema installer
/// creates the audit tables.
/// </summary>
public sealed class AuditOptions
{
    /// <summary>
    /// Database schema for the <c>AuditHeader</c> and <c>AuditDetail</c> tables.
    /// <c>null</c> (the default) uses the provider's default schema: <c>dbo</c> on
    /// SQL Server, <c>public</c> on PostgreSQL, none on SQLite/MySQL.
    /// </summary>
    public string? Schema { get; set; }

    /// <summary>
    /// Name of the header table. Defaults to <c>AuditHeader</c>.
    /// </summary>
    public string HeaderTableName { get; set; } = "AuditHeader";

    /// <summary>
    /// Name of the detail table. Defaults to <c>AuditDetail</c>.
    /// </summary>
    public string DetailTableName { get; set; } = "AuditDetail";

    /// <summary>
    /// When <c>true</c>, <see cref="AuditOperation.Delete"/> operations write detail
    /// rows containing the pre-delete column values. When <c>false</c> (the default),
    /// Delete operations write only a header row.
    /// </summary>
    /// <remarks>
    /// <para>
    /// <strong>Important — stub-attached deletes:</strong> the captured values come
    /// from <c>PropertyEntry.OriginalValue</c>, which is meaningful only when the
    /// entity was actually loaded (or had its originals seeded) before deletion.
    /// The classic "stub delete" pattern —
    /// <code>context.Set&lt;Customer&gt;().Remove(new Customer { Id = 5 })</code>
    /// — attaches an entity whose non-key properties are CLR defaults, so the
    /// detail rows would record those defaults rather than the actual row state.
    /// When this flag is on, consumers should load the row first (or call
    /// <c>entry.Reload()</c>) before removing it. The captured values are
    /// fundamentally a snapshot of what EF Core knew at delete time, not a
    /// database read-back.
    /// </para>
    /// </remarks>
    public bool CaptureDeletedValues { get; set; }

    /// <summary>
    /// The value serializer used by the interceptor to encode column values into
    /// detail rows, and (via the schema installer) to drive the detail table's column
    /// shape. When left <c>null</c> it defaults to <c>StringAuditValueSerializer</c> —
    /// applied by <c>AddEfCoreAuditing</c> and, for non-DI construction, by the
    /// <c>AuditingDbContext</c> / <c>AuditSaveChangesInterceptor</c> constructors.
    /// </summary>
    public IAuditValueSerializer? ValueSerializer { get; set; }

    /// <summary>
    /// The entity-key serializer used to render primary-key values into the
    /// <c>EntityKey</c> column on <c>AuditHeader</c>. When left <c>null</c> it defaults
    /// to <c>PipeDelimitedEntityKeySerializer</c> — applied by <c>AddEfCoreAuditing</c>
    /// and, for non-DI construction, by the <c>AuditingDbContext</c> /
    /// <c>AuditSaveChangesInterceptor</c> constructors.
    /// </summary>
    public IAuditEntityKeySerializer? EntityKeySerializer { get; set; }

    /// <summary>
    /// Minimum number of pending audit headers in a single save before the interceptor
    /// tries a provider-specific bulk-insert fast path instead of the normal EF Core
    /// tracked-entity insert. <c>null</c> (the default) disables bulk insert entirely —
    /// every save uses the standard path regardless of size.
    /// </summary>
    /// <remarks>
    /// Only takes effect when a provider-specific <c>IAuditBulkWriter</c> is registered
    /// (e.g. via a provider integration package) AND that writer's <c>CanHandle</c>
    /// returns <c>true</c> for the current context. Providers with no registered writer,
    /// or a writer that declines, always use the standard EF Core insert path regardless
    /// of this threshold.
    /// </remarks>
    public int? BulkInsertRowThreshold { get; set; }
}
