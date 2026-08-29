# 0005 — Provider-specific bulk writers live in companion packages, never core

- **Status:** Accepted
- **Date:** 2026-08-27
- **Deciders:** Chris Wolfgang

## Context and problem statement

`IAuditBulkWriter` (v0.3.0, [#148](https://github.com/Chris-Wolfgang/AuditTrail/issues/148)) lets a
provider-specific fast path bypass EF Core's per-entity insert for large audit batches. The core
`Wolfgang.AuditTrail.EntityFrameworkCore` package ships the abstraction only — zero concrete writers —
deliberately, so the package's dependency graph stays provider-neutral: a SQL Server or SQLite consumer
should never pull in `Npgsql` transitively just because the interface exists.

[#248](https://github.com/Chris-Wolfgang/AuditTrail/issues/248) built the first concrete
implementation, `NpgsqlCopyAuditBulkWriter`, as its own package
(`Wolfgang.AuditTrail.EntityFrameworkCore.Npgsql`). This ADR records that packaging choice as a
general rule so it doesn't need re-deriving the next time a provider-specific optimization comes up.

## Considered options

- **Bundle every provider writer into the core package**, gated behind optional `PackageReference`s
  the consumer must still pull in manually to use. Simpler repo layout, but the core package's
  `.csproj` accumulates provider-specific dependencies (`Npgsql`, `Microsoft.Data.SqlClient`, ...)
  even for consumers who never reference them, and each one still ships in the core `.nupkg`'s
  dependency metadata.
- **One companion package per provider**, mirroring `Wolfgang.AuditTrail.EntityFrameworkCore.Npgsql`'s
  shape: its own `IAuditBulkWriter` implementation, DI registration helper, csproj, tests, and release
  cadence. Zero new dependencies land on consumers who don't install the package.

## Decision

**Provider-specific `IAuditBulkWriter` implementations always ship as their own companion package,
never as an addition to `Wolfgang.AuditTrail.EntityFrameworkCore`.** Each companion package:

- Depends on the provider's own EF Core package (e.g. `Npgsql.EntityFrameworkCore.PostgreSQL`) plus
  `Wolfgang.AuditTrail.EntityFrameworkCore` — nothing else new in core's own dependency graph.
- Registers itself via a `services.Add<Provider>AuditBulkWriter()` extension mirroring
  `AddEfCoreAuditing`'s shape.
- Follows the same csproj / `PublicAPI.Shipped.txt` / README / CI-wiring conventions as any other
  package in this repo, and ships/versions independently.

### Per-provider disposition (as of this ADR)

| Provider | Native bulk-load mechanism | Disposition |
|---|---|---|
| PostgreSQL | `COPY` binary protocol | Shipped: `Wolfgang.AuditTrail.EntityFrameworkCore.Npgsql` ([#248](https://github.com/Chris-Wolfgang/AuditTrail/issues/248)) |
| SQL Server | `SqlBulkCopy` | Not built — no demand yet. Would ship as `Wolfgang.AuditTrail.EntityFrameworkCore.SqlServer`, same shape, if requested. |
| SQLite | None worth exploiting | No companion package planned. SQLite's fastest path is already batched inserts inside a transaction, which the standard EF Core insert path covers; `IAuditBulkWriter` simply stays unregistered. |
| MySQL / other | TBD | Same rule applies whenever one is built: own package, never core. |

## Rationale

- **Consumers only pay for what they use.** A SQL Server-only application never resolves an
  `Npgsql`-flavored assembly, transitively or otherwise.
- **Independent release cadence.** A bug fix in the Postgres writer doesn't force a version bump —
  or a CI run — of the core package, and vice versa.
- **Precedent already set.** `Wolfgang.AuditTrail.EntityFrameworkCore.Npgsql` is the reference shape;
  copying it for the next provider is mechanical, not a design exercise.

## Consequences

- **Positive:** core package dependency graph stays exactly what it is today regardless of how many
  provider writers eventually exist; each companion package can iterate/release independently.
- **Negative:** a consumer wanting bulk insert on a new provider has to wait for (or write) a whole
  new package rather than flipping a feature flag in an existing dependency.
- **Follow-ups:** none scheduled. A SQL Server companion package is a real future candidate but has
  no open demand as of this ADR; build it only if/when requested, following this same shape.
