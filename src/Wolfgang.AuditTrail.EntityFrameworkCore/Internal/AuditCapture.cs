using System.Reflection;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.EntityFrameworkCore.Metadata;
using Wolfgang.AuditTrail.Entities;

namespace Wolfgang.AuditTrail.Internal;



/// <summary>
/// Shared snapshot / materialize logic used by both the <see cref="AuditingDbContext"/>
/// base class and the auto-transaction save-changes interceptor. Capturing the
/// change-tracker state in a single place keeps the two integration models
/// behaviorally identical.
/// </summary>
internal static class AuditCapture
{
    /// <summary>
    /// Walks <see cref="DbContext.ChangeTracker"/> and produces a snapshot of every
    /// entity that should produce an audit header. Skips the audit entities themselves
    /// and anything carrying <see cref="NotAuditedAttribute"/>.
    /// </summary>
    public static List<PendingAuditEntry> CapturePending
    (
        DbContext context,
        AuditOptions options
    )
    {
        var pending = new List<PendingAuditEntry>();

        // Enumerated directly (no intermediate .ToList()) -- this runs on every
        // SaveChanges/SaveChangesAsync call, including ones with no audit-relevant
        // work, so the extra full-array copy of the change tracker's live entry
        // set isn't worth it just for a capacity hint.
        foreach (var entry in context.ChangeTracker.Entries())
        {
            var captured = TryCaptureEntry(entry, options);
            if (captured is not null)
            {
                pending.Add(captured);
            }
        }

        return pending;
    }



    private static PendingAuditEntry? TryCaptureEntry(EntityEntry entry, AuditOptions options)
    {
        var clrType = entry.Metadata.ClrType;
        if (clrType == typeof(AuditHeader) || clrType == typeof(AuditDetail))
        {
            return null;
        }

        if (clrType.GetCustomAttribute<NotAuditedAttribute>(inherit: false) is not null)
        {
            return null;
        }

        var operation = entry.State switch
        {
            EntityState.Added    => (AuditOperation?)AuditOperation.Insert,
            EntityState.Modified => AuditOperation.Update,
            EntityState.Deleted  => AuditOperation.Delete,
            _                    => null,
        };

        if (operation is null)
        {
            return null;
        }

        var changedValues = CaptureValues(entry, operation.Value, options);

        // Skip Updates whose only modified properties are [NotAudited] —
        // CaptureValues filters them out and returns an empty list. A header
        // with zero detail rows isn't informative ("something on this row
        // changed but we can't tell you what") and pollutes the audit table.
        // Inserts and Deletes still produce a header (record-of-creation /
        // record-of-deletion is meaningful even without column-level changes).
        if (operation.Value == AuditOperation.Update && changedValues.Count == 0)
        {
            return null;
        }

        var keyProperties = entry.Metadata.FindPrimaryKey()?.Properties;
        var keyValuesBeforeSave = keyProperties is null
            ? (IReadOnlyList<object?>)Array.Empty<object?>()
            : ReadKeyValues(entry, keyProperties);

        return new PendingAuditEntry
        {
            Entry = entry,
            Operation = operation.Value,
            EntityType = clrType.FullName ?? clrType.Name,
            EntityTable = entry.Metadata.GetSchemaQualifiedTableName() ?? entry.Metadata.GetTableName() ?? clrType.Name,
            ChangedValues = changedValues,
            KeyValuesBeforeSave = keyValuesBeforeSave,
        };
    }



    /// <summary>
    /// Materializes <see cref="AuditHeader"/> + <see cref="AuditDetail"/> entities from
    /// the pending snapshot, then either bulk-writes them via <paramref name="bulkWriter"/>
    /// (when applicable — see <see cref="TryGetBulkWriter"/>) or attaches them to
    /// <paramref name="context"/> for the caller's subsequent <c>SaveChanges</c>. See
    /// <see cref="AddAuditEntitiesAsync"/> for the async counterpart used by the async
    /// save path.
    /// </summary>
    public static void AddAuditEntities
    (
        DbContext context,
        List<PendingAuditEntry> pending,
        IAuditUserProvider userProvider,
        AuditOptions options,
        Guid transactionId,
        IAuditBulkWriter? bulkWriter
    )
    {
        var headers = BuildHeaders(pending, userProvider, options, transactionId);

        if (TryGetBulkWriter(context, options, bulkWriter, headers.Count, out var writer))
        {
            writer.Write(context, headers);
            return;
        }

        foreach (var header in headers)
        {
            context.Add(header);
        }
    }



    /// <summary>
    /// Async counterpart to <see cref="AddAuditEntities"/> — awaits the bulk writer's
    /// <see cref="IAuditBulkWriter.WriteAsync"/> instead of blocking on it, when a bulk
    /// write applies. Otherwise identical.
    /// </summary>
    public static async Task AddAuditEntitiesAsync
    (
        DbContext context,
        List<PendingAuditEntry> pending,
        IAuditUserProvider userProvider,
        AuditOptions options,
        Guid transactionId,
        IAuditBulkWriter? bulkWriter,
        CancellationToken cancellationToken
    )
    {
        var headers = BuildHeaders(pending, userProvider, options, transactionId);

        if (TryGetBulkWriter(context, options, bulkWriter, headers.Count, out var writer))
        {
            await writer.WriteAsync(context, headers, cancellationToken).ConfigureAwait(false);
            return;
        }

        foreach (var header in headers)
        {
            context.Add(header);
        }
    }



    private static List<AuditHeader> BuildHeaders
    (
        List<PendingAuditEntry> pending,
        IAuditUserProvider userProvider,
        AuditOptions options,
        Guid transactionId
    )
    {
        var user = userProvider.GetCurrentUser();
        var auditedAt = DateTime.UtcNow;

        // AuditingDbContext / AuditSaveChangesInterceptor default these on
        // construction (EnsureDefaultSerializers), so they're only null here if
        // a caller mutated the shared AuditOptions instance back to null after
        // registration -- surface that clearly rather than an unexplained NRE.
        var keySerializer = options.EntityKeySerializer
            ?? throw new InvalidOperationException(
                "AuditOptions.EntityKeySerializer was null when building audit headers. " +
                "It's defaulted to PipeDelimitedEntityKeySerializer at construction time -- " +
                "something set it back to null on the shared AuditOptions instance afterward.");
        var valueSerializer = options.ValueSerializer
            ?? throw new InvalidOperationException(
                "AuditOptions.ValueSerializer was null when building audit headers. " +
                "It's defaulted to StringAuditValueSerializer at construction time -- " +
                "something set it back to null on the shared AuditOptions instance afterward.");
        var headers = new List<AuditHeader>(pending.Count);

        foreach (var entry in pending)
        {
            var keyValues = entry.Operation == AuditOperation.Delete
                ? entry.KeyValuesBeforeSave
                : ResolvePostSaveKey(entry);

            var header = new AuditHeader
            {
                HeaderId = Guid.NewGuid(),
                TransactionId = transactionId,
                AuditedAtUtc = auditedAt,
                UserId = user.UserId,
                OnBehalfOfUserId = user.OnBehalfOfUserId,
                EntityType = entry.EntityType,
                EntityTable = entry.EntityTable,
                EntityKey = keySerializer.Serialize(keyValues),
                Operation = entry.Operation,
            };

            foreach (var changed in entry.ChangedValues)
            {
                var detail = new AuditDetail
                {
                    HeaderId = header.HeaderId,
                    ColumnName = changed.ColumnName,
                };

                var detailValue = ResolveDetailValue(entry, changed);

                var columnWriter = new ColumnValueWriter(detail);
                detail.ValueType = valueSerializer.Encode(detailValue, changed.ClrType, columnWriter);
                header.Details.Add(detail);
            }

            headers.Add(header);
        }

        return headers;
    }



    // Bulk insert only applies when the caller opted in (BulkInsertRowThreshold set),
    // the batch meets that threshold, a provider-specific writer was actually supplied,
    // and that writer accepts the current context. Any missing piece falls back to the
    // standard EF Core tracked-entity insert -- bulk insert is strictly an opt-in
    // fast path, never a behavior change consumers didn't ask for.
    private static bool TryGetBulkWriter
    (
        DbContext context,
        AuditOptions options,
        IAuditBulkWriter? candidate,
        int headerCount,
        [System.Diagnostics.CodeAnalysis.NotNullWhen(true)] out IAuditBulkWriter? writer
    )
    {
        writer = null;

        if (candidate is null)
        {
            return false;
        }

        if (options.BulkInsertRowThreshold is not { } threshold || headerCount < threshold)
        {
            return false;
        }

        if (!candidate.CanHandle(context))
        {
            return false;
        }

        writer = candidate;
        return true;
    }



    private static IReadOnlyList<PendingAuditValue> CaptureValues
    (
        EntityEntry entry,
        AuditOperation operation,
        AuditOptions options
    )
    {
        if (operation == AuditOperation.Delete && !options.CaptureDeletedValues)
        {
            return Array.Empty<PendingAuditValue>();
        }

        // entry.CurrentValues.Properties is already a materialized IReadOnlyList
        // on EF Core's side, so .Count here is O(1) -- a safe upper-bound
        // capacity hint (actual count is <= this, since PK/[NotAudited]
        // properties get filtered out below) at no extra enumeration cost.
        var values = new List<PendingAuditValue>(entry.CurrentValues.Properties.Count);
        foreach (var property in entry.Properties)
        {
            var propInfo = property.Metadata.PropertyInfo;
            if (propInfo is not null && propInfo.GetCustomAttribute<NotAuditedAttribute>(inherit: false) is not null)
            {
                continue;
            }

            if (property.Metadata.IsPrimaryKey())
            {
                continue;
            }

            var captured = CapturePropertyValue(property, operation);
            if (captured is not null)
            {
                values.Add(captured);
            }
        }

        return values;
    }



    // IProperty metadata objects are stable for the lifetime of a DbContext
    // type's compiled model (EF Core caches and shares the compiled model
    // across instances of the same context type/options), so the resolved
    // column name is safe to cache keyed on the IProperty reference itself
    // rather than re-deriving it via StoreObjectIdentifier on every changed
    // column of every save. ConcurrentDictionary: DbContext instances of the
    // same type can run this concurrently across threads (e.g. concurrent
    // web requests).
    private static readonly System.Collections.Concurrent.ConcurrentDictionary<IProperty, string> ColumnNameCache = new();

    /// <summary>
    /// Returns the database column name EF Core mapped the property to, honouring
    /// <c>[Column]</c> / <c>HasColumnName(...)</c> overrides. Falls back to the
    /// CLR property name for providers / shapes where no column mapping exists
    /// (e.g. owned-entity edge cases), matching pre-fix behaviour.
    /// </summary>
    private static string GetMappedColumnName(PropertyEntry property)
        => ColumnNameCache.GetOrAdd(property.Metadata, static metadata => ResolveMappedColumnName(metadata));

    private static string ResolveMappedColumnName(IProperty metadata)
    {
        // Use the StoreObjectIdentifier overload (available net6+ and not
        // obsolete) — the parameterless GetColumnName() was marked obsolete
        // on EF Core 7+ because it didn't disambiguate inheritance / table-
        // sharing scenarios. The StoreObjectIdentifier created here resolves
        // to the property's primary table mapping. EF Core 8+ moved the
        // declaring-type accessor from DeclaringEntityType (obsolete) to
        // DeclaringType (returns ITypeBase) which the conditional below picks
        // depending on TFM.
#if NET8_0_OR_GREATER
        if (metadata.DeclaringType is IEntityType entityType)
#else
        var entityType = metadata.DeclaringEntityType;
        if (entityType is not null)
#endif
        {
            var storeObject = StoreObjectIdentifier.Create(entityType, StoreObjectType.Table);
            if (storeObject is not null)
            {
                var name = metadata.GetColumnName(storeObject.Value);
                if (!string.IsNullOrEmpty(name))
                {
                    return name;
                }
            }
        }
        return metadata.Name;
    }



    /// <summary>
    /// Builds the per-operation <see cref="PendingAuditValue"/> for one property.
    /// Inserts/Updates record <c>CurrentValue</c> (re-read post-save), Deletes
    /// record <c>OriginalValue</c> (the only authoritative source after detach),
    /// and Updates with <c>!IsModified</c> are skipped.
    /// </summary>
    private static PendingAuditValue? CapturePropertyValue(PropertyEntry property, AuditOperation operation)
    {
        return operation switch
        {
            AuditOperation.Insert => Build(property, property.CurrentValue),
            AuditOperation.Update => property.IsModified ? Build(property, property.CurrentValue) : null,
            AuditOperation.Delete => Build(property, property.OriginalValue),
            _ => null,
        };

        static PendingAuditValue Build(PropertyEntry property, object? value) => new()
        {
            ColumnName   = GetMappedColumnName(property),
            ClrType      = property.Metadata.ClrType,
            PropertyName = property.Metadata.Name,
            Value        = value,
        };
    }



    /// <summary>
    /// For Inserts and Updates, re-reads <c>CurrentValue</c> from the still-tracked
    /// <see cref="EntityEntry"/> after the user's <c>SaveChanges</c> has run.
    /// This is the only way to capture database-generated values (defaults,
    /// computed columns, identity columns, server-side <c>ValueConverter</c>
    /// output) — the pre-save snapshot only has the CLR default.
    /// For Deletes the snapshot is authoritative (the entry has detached).
    /// </summary>
    private static object? ResolveDetailValue(PendingAuditEntry entry, PendingAuditValue changed)
    {
        if (entry.Operation == AuditOperation.Delete)
        {
            return changed.Value;
        }

        try
        {
            return entry.Entry.Property(changed.PropertyName).CurrentValue;
        }
        catch (InvalidOperationException)
        {
            // The entry is no longer tracking this property (rare — e.g. owned
            // entity re-shaping mid-save). Fall back to the pre-save snapshot
            // so the audit row is still emitted, just with the pre-save value.
            return changed.Value;
        }
    }



    private static IReadOnlyList<object?> ResolvePostSaveKey(PendingAuditEntry entry)
    {
        var keyProperties = entry.Entry.Metadata.FindPrimaryKey()?.Properties;
        return keyProperties is null
            ? entry.KeyValuesBeforeSave
            : ReadKeyValues(entry.Entry, keyProperties);
    }



    private static IReadOnlyList<object?> ReadKeyValues(EntityEntry entry, IReadOnlyList<IProperty> keyProperties)
        => keyProperties.Select(p => entry.Property(p.Name).CurrentValue).ToList();
}
