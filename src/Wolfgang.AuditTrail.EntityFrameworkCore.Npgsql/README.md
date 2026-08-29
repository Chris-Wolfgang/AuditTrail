# Wolfgang.AuditTrail.EntityFrameworkCore.Npgsql

PostgreSQL `COPY`-protocol bulk writer for [Wolfgang.AuditTrail.EntityFrameworkCore](https://www.nuget.org/packages/Wolfgang.AuditTrail.EntityFrameworkCore). Implements `IAuditBulkWriter` via `NpgsqlBinaryImporter`, so a large audit batch bypasses EF Core's per-entity insert while staying inside the same transaction as the caller's `SaveChanges`.

## Usage

```csharp
services.AddEfCoreAuditing<ExampleUserProvider>(options =>
{
    options.BulkInsertRowThreshold = 50; // opt in — omit to keep the standard EF Core insert path
});
services.AddNpgsqlAuditBulkWriter();
```

Only takes effect on PostgreSQL contexts (`NpgsqlCopyAuditBulkWriter.CanHandle` checks the active provider) and only once a save's pending header count meets `BulkInsertRowThreshold`. Every other save — and every non-Postgres provider — uses the standard EF Core insert path unchanged.

See the [project README](https://github.com/Chris-Wolfgang/AuditTrail) for full documentation.
