# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- `AuditOptions.ValueSerializer` and `EntityKeySerializer` now default to
  `StringAuditValueSerializer` / `PipeDelimitedEntityKeySerializer` when left
  `null` — applied by the `AuditingDbContext` and `AuditSaveChangesInterceptor`
  constructors (in addition to `AddEfCoreAuditing`). Non-DI construction such as
  unit-test context factories and `IDesignTimeDbContextFactory` now works with a
  plain `new AuditOptions()`; previously it threw two sequential
  `ArgumentException`s. ([#185](https://github.com/Chris-Wolfgang/AuditTrail/issues/185))

### Known issues

- **Performance:** the `Microsoft.EntityFrameworkCore.SqlServer` 8→9 and
  `Microsoft.Data.SqlClient` 6→7 dependency bumps show a possible ~2.4× slowdown
  on the `Insert_with_audit(BatchSize: 50)` benchmark (~50 ms vs ~21 ms). The
  baseline measurement is noisy (±50%), so the exact factor is unconfirmed.
  Tracked in [#195](https://github.com/Chris-Wolfgang/AuditTrail/issues/195) for
  investigation and possible mitigation before the next release.

## [0.1.1] — 2026-07-02

Maintenance release: dependency updates plus substantial internal test, CI, and
documentation hardening. **No public API changes** — a drop-in upgrade from 0.1.0.

### Changed

- `Wolfgang.AuditTrail.TestKit.Xunit` now depends on **FsCheck.Xunit 3.x**
  (was 2.16.x). Consumers inheriting the contract-test bases receive FsCheck 3.x
  transitively; the TestKit public surface is unchanged.
- Bumped shipped dependencies (`System.Memory`, `Microsoft.Extensions.*`) and
  test infrastructure (`Npgsql`, `Testcontainers.*`, `coverlet.collector`,
  `xunit.runner.visualstudio`, `Serilog.Settings.Configuration`).

### Fixed

- Testcontainers integration fixtures use the image-parameter builder
  constructors (the parameterless ones are obsolete — `CS0618`).
- Cleared a `VSTHRD103` false positive on `DbSet.Add` surfaced by the analyzer
  bump (EF Core's `AddAsync` is only for special value generators).

### Internal (no consumer impact)

- **Mutation testing (Stryker)** wired as a scheduled release-quality gate; the
  EF Core mutation score was hardened from 63.9% to ~79% via targeted tests
  (model configuration, serializer wire format, capture/schema branches,
  interceptor exception messages and sync path, null guards).
- New CI workflows: license audit (generates `THIRD-PARTY-NOTICES`), OSSF
  Scorecard, workflow-security (actionlint + zizmor), and build-reproducibility
  verification. All GitHub Actions are SHA-pinned.
- New docs: Architecture Decision Records (`docs/adr/`), a STRIDE threat model,
  a major-version migration-guide template, and a mutation-testing guide.

## [0.1.0] — 2026-06-28

First tagged release. The `Wolfgang.AuditTrail.*` package family is published to
NuGet.org. Multi-targets `netstandard2.0`, `net6.0`, `net8.0`, `net10.0` for
source projects; tests cover net462 → net10.0 inclusive.

### Added

- `Wolfgang.AuditTrail.Abstractions` — shared contracts (`IAuditUserProvider`,
  `IAuditValueSerializer`, `IAuditEntityKeySerializer`, `AuditOptions`,
  `[NotAudited]`, `AuditHeader` / `AuditDetail` entities).
- `Wolfgang.AuditTrail.EntityFrameworkCore` — two integration models:
  - **`AuditingDbContext`** base class (recommended): derive your context from it
    and call `SaveChangesAsync` as usual; audit rows are written atomically in the
    same transaction via `IExecutionStrategy.ExecuteInTransactionAsync` (composes
    correctly with `EnableRetryOnFailure`).
  - **`AuditSaveChangesInterceptor`** + `UseAuditing(serviceProvider)`: for
    contexts already inheriting from a third-party base (`IdentityDbContext<TUser>`,
    multi-tenant bases, etc.). Routes capture through `SavingChanges`/`SavedChanges`.
- `StringAuditValueSerializer` — v1 default value serializer (single
  `ValueText nvarchar(max)`).
- `PipeDelimitedEntityKeySerializer` — v1 default composite-key serializer.
- `Wolfgang.AuditTrail.TestKit.Xunit` — `AuditValueSerializerContractTests<T>` base for
  validating custom `IAuditValueSerializer` implementations.
- `Wolfgang.AuditTrail.EntityFrameworkCore.Schema.AuditSchemaMigrator` — provider-agnostic
  schema installer using EF Core's own `IMigrationsModelDiffer` +
  `IMigrationsSqlGenerator`. Supports SQL Server, PostgreSQL, MySQL, and SQLite
  from one codebase. Idempotent + transactional + version-stamped via
  `__AuditSchemaVersion`.
- `MigrateAuditSchemaAsync()` extension on `AuditingDbContext` for consumers
  who want to install the schema from application code without invoking the CLI.
- `Wolfgang.AuditTrail.Cli` — `audit` command-line tool. Provider auto-detected from
  the connection string; `--dry-run` prints the SQL without applying.
- Benchmarks: `Wolfgang.AuditTrail.EntityFrameworkCore.Benchmarks` (BenchmarkDotNet) covering
  Insert / Lifecycle / MixedStates workloads with SQLite, plus cross-RDBMS via
  Testcontainers (`ProviderSaveChangesBenchmarks`). Charts auto-publish to
  [gh-pages/dev/bench](https://Chris-Wolfgang.github.io/AuditTrail/dev/bench/).
- Two end-to-end example apps under `examples/` (Console, ASP.NET Core WebApi).
- Documentation:
  - `README.md` with quick-start, two-model integration matrix, retry-strategy
    caveat, benchmark numbers
  - `docs/POSTGRES-PERFORMANCE.md` — PostgreSQL `MaxBatchSize` tuning recipe
  - `docs/IDENTITY-SUBPACKAGE-DESIGN.md` — roadmap for the future
    `AuditingIdentity*DbContext` sub-package

### Notes for the first tagged release

- MySQL is **not** wired in the CLI as of this snapshot: Pomelo
  `EntityFrameworkCore.MySql` 9.0.0 caps at EF Core 9.x while the CLI targets
  EF Core 10. The CLI's `migrate` subcommand throws `NotSupportedException`
  with a clear message when invoked with `--provider mysql`. Re-enable when
  Pomelo ships an EF Core 10 release.
- `Wolfgang.AuditTrail.EntityFrameworkCore` targets `net6.0;net8.0;net10.0`. The schema
  migrator (`AuditSchemaMigrator`, `MigrateAuditSchemaAsync`) is gated on
  `NET8_0_OR_GREATER` because EF Core's design-time model API requires the
  newer runtime.

---

[Unreleased]: https://github.com/Chris-Wolfgang/AuditTrail/compare/initial-dev...HEAD
