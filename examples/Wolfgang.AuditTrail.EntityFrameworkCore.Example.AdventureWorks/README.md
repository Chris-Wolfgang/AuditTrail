# AdventureWorks demo

End-to-end demo of `Wolfgang.AuditTrail.EntityFrameworkCore` against a realistic schema. Spins up SQL Server 2022 via Testcontainers, restores the canonical [AdventureWorks2022 .bak](https://github.com/Microsoft/sql-server-samples/releases/tag/adventureworks), then exercises a few realistic operations:

1. **Update** — rename an employee (`Person.LastName`).
2. **Update** — change their email (`EmailAddress.EmailAddress`).
3. **Insert + Delete** — add then immediately remove a secondary email address for that same person. (Uses `EmailAddress` rather than a second `Person` row — a stub `Person` insert would trip AdventureWorks's FK constraints.)

The demo prints the resulting `AuditHeader` + `AuditDetail` rows so you can see exactly what the library captures against production-style data.

## Prerequisites

- Docker Desktop running (Testcontainers needs the daemon).
- ~2 GB free disk for the SQL Server container + AdventureWorks data.

## Running

```bash
dotnet run --project examples/Wolfgang.AuditTrail.EntityFrameworkCore.Example.AdventureWorks
```

First run takes ~60–90 sec because it pulls the SQL Server image and restores the `.bak`. Subsequent runs reuse the cached image and run in ~15 sec.

## What the output looks like

```
📦 Starting SQL Server container + restoring AdventureWorks2022...

✏️  Renaming an employee...
  Before: Ken J Sánchez (type=EM)
  After:  Ken J Sánchez-Smith

📧  Updating their email...
  Before: ken0@adventure-works.com
  After:  ken.sanchez-smith@adventure-works.com

➕  Adding then immediately removing a secondary email...
  Added secondary email id=105
  Removed secondary email id=105

📜 Audit history for affected rows:

  [2026-05-18 02:14:31Z] UPDATE on Person key=1 by hr-admin@adventure-works.com
      LastName = Sánchez-Smith  (String)

  [2026-05-18 02:14:31Z] UPDATE on EmailAddress key=1|1 by hr-admin@adventure-works.com
      EmailAddress = ken.sanchez-smith@adventure-works.com  (String)

  [2026-05-18 02:14:31Z] INSERT on EmailAddress key=1|105 by hr-admin@adventure-works.com
      EmailAddress = ken.alt@adventure-works.com  (String)

  [2026-05-18 02:14:31Z] DELETE on EmailAddress key=1|105 by hr-admin@adventure-works.com
      (no detail rows — CaptureDeletedValues=false)

✅  Done — 4 audit rows captured atomically with the user data.
```

## What this demonstrates

1. **Composite keys** — `EmailAddress` has `(BusinessEntityID, EmailAddressID)`; the audit log captures it as `"1|1"` via `PipeDelimitedEntityKeySerializer`.
2. **Custom audit schema** — the `Audit` schema lives alongside AdventureWorks's own `Person`, `Sales`, etc. schemas. Configurable via `AuditOptions.Schema`.
3. **Single-transaction atomicity** — each save's data change + audit rows commit together. Roll back the consumer's transaction and the audit rows roll back too.
4. **Real-world non-ASCII data** — `Sánchez` round-trips correctly through the `StringAuditValueSerializer` (UTF-8 / `nvarchar(max)`).
5. **Delete behavior** — the default `CaptureDeletedValues = false` emits the delete header but no detail rows. Set `auditOptions.CaptureDeletedValues = true` in `Program.cs` to capture the pre-delete column values for forensic audits.

## What this does NOT demonstrate (intentionally)

- The auto-transaction interceptor model (the `AdventureWorksContext` derives from `AuditingDbContext` for simplicity). For an interceptor example see [the WebApi example](../Wolfgang.AuditTrail.EntityFrameworkCore.Example.WebApi).
- `[NotAudited]` opt-out — no example project currently demonstrates this; see the attribute's own XML doc in `Wolfgang.AuditTrail.Abstractions` for usage.
- The `on-behalf-of` pattern — the [WebApi example](../Wolfgang.AuditTrail.EntityFrameworkCore.Example.WebApi) covers that.
