type: feature

`MigrateAuditSchemaAsync` (and `AuditSchemaMigrator.RunAsync`) now upgrade an existing audit schema version by version instead of only creating one from nothing, and throw rather than silently doing nothing when the database was written by a newer build of the library.
