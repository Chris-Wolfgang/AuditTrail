# Introduction

Welcome to Wolfgang.AuditTrail!

## Overview

Wolfgang.AuditTrail adds an audit trail to applications that use Entity Framework Core. Every Insert, Update and Delete that goes through `SaveChanges` / `SaveChangesAsync` is captured from the `ChangeTracker` and written as:

- one **`AuditHeader`** row per changed entity (operation, entity type and key, user, timestamp, and a `TransactionId` shared by everything one save changed), and
- one **`AuditDetail`** row per changed column (column name, value, value type).

The audit rows are written **in the same transaction** as the user's save, through EF Core's `IExecutionStrategy`, so either both commit or both roll back. Call sites do not change.

## Key Features

- **Atomic audit writes** - no orphaned audit history after a rollback.
- **Two integration models** - derive from `AuditingDbContext`, or attach the auto-transaction `AuditSaveChangesInterceptor` to a context that already has another base class (for example `IdentityDbContext<TUser>`).
- **Opt-out with `[NotAudited]`** - on an entity class to exclude the entity, or on a property to exclude one column.
- **Pluggable serializers** - `IAuditValueSerializer` (detail values) and `IAuditEntityKeySerializer` (entity keys); the defaults are `StringAuditValueSerializer` and `PipeDelimitedEntityKeySerializer`.
- **Configurable schema and table names** - `AuditOptions.Schema`, `HeaderTableName`, `DetailTableName`.
- **Schema install and upgrade** - `MigrateAuditSchemaAsync()` creates or upgrades just the audit tables (also available as the `audittrail migrate` CLI command, built from source).
- **Optional PostgreSQL bulk path** - `Wolfgang.AuditTrail.EntityFrameworkCore.Npgsql` writes large batches with `COPY` above `AuditOptions.BulkInsertRowThreshold`.

## Getting Help

If you need help with Wolfgang.AuditTrail, please:

- Check the [Getting Started](getting-started.md) guide
- Review the [API Reference](../api/index.md)
- Visit the [GitHub repository](https://github.com/Chris-Wolfgang/AuditTrail)
- Open an issue on [GitHub Issues](https://github.com/Chris-Wolfgang/AuditTrail/issues)
