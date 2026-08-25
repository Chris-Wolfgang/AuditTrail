using Microsoft.EntityFrameworkCore;
using Wolfgang.AuditTrail.Entities;

namespace Wolfgang.AuditTrail;

/// <summary>
/// Optional provider-specific fast path for writing a large batch of audit rows,
/// bypassing EF Core's per-entity tracked-entity insert. Register an implementation
/// in DI as <see cref="IAuditBulkWriter"/> (e.g. <c>services.AddSingleton&lt;IAuditBulkWriter, TWriter&gt;()</c>)
/// — <c>UseAuditing</c> and <see cref="AuditingDbContext"/>'s constructor both resolve
/// it via <c>serviceProvider.GetService&lt;IAuditBulkWriter&gt;()</c> at registration
/// time and pass it through as an ordinary constructor parameter. Consulted only when
/// <see cref="AuditOptions.BulkInsertRowThreshold"/> is set and the pending header
/// count meets or exceeds it; the standard EF Core insert path is used otherwise,
/// including whenever no writer is registered.
/// </summary>
public interface IAuditBulkWriter
{
    /// <summary>
    /// Returns <c>true</c> if this writer can handle bulk-inserting audit rows for
    /// <paramref name="context"/> (typically a check against the active provider).
    /// Consulted before every bulk-insert attempt — a <c>false</c> result falls back
    /// to the standard EF Core insert path for that save.
    /// </summary>
    bool CanHandle(DbContext context);

    /// <summary>
    /// Writes <paramref name="headers"/> (each with its <see cref="AuditHeader.Details"/>
    /// already populated) directly to the database, within <paramref name="context"/>'s
    /// current transaction. Must not use <c>context.Add</c> or otherwise touch the
    /// change tracker — the caller does not run a subsequent save for these entities.
    /// </summary>
    Task WriteAsync(DbContext context, IReadOnlyList<AuditHeader> headers, CancellationToken cancellationToken);

    /// <summary>
    /// Synchronous counterpart to <see cref="WriteAsync"/>, used by the sync
    /// <c>SaveChanges</c> path.
    /// </summary>
    void Write(DbContext context, IReadOnlyList<AuditHeader> headers);
}
