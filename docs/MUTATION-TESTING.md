# Mutation testing

[Stryker.NET](https://stryker-mutator.io/docs/stryker-net/introduction/) runs on
a schedule (`.github/workflows/stryker.yaml`, weekly + `workflow_dispatch`) and,
via the root [`stryker-config.json`](../stryker-config.json), **fails that
scheduled run** if the mutation score drops below the configured `break`
threshold.

Note: it is **not** wired into `pr.yaml`, so it does **not** block individual PR
merges — it's a scheduled regression signal (surfaced when the workflow goes
red), not a per-PR gate. Promoting it to a per-PR check is a possible follow-up.

## Scope

The gate mutates **`Wolfgang.AuditTrail.EntityFrameworkCore`** — the project that
carries the substantive audit-capture logic — exercised by the unit test project
(`…EntityFrameworkCore.Tests.Unit`) on `net8.0`. The integration and smoke test
projects are excluded from the mutation run (they need Docker / are trivial), and
`Wolfgang.AuditTrail.Abstractions` is not yet gated (mostly POCOs and interfaces
with low mutation value).

## The floor

| | Score |
|---|---|
| Measured baseline (umbrella config, net8.0, local) | **~76–79 %** |
| `thresholds.break` (gate) | **70 %** |

> The score climbed from an initial 63.9% → 76.5% (last clean full run) → ~79%
> (estimated after the migrations/installer hardening) as the suite was hardened
> against surviving mutants: model configuration, serializer wire format,
> interceptor exception messages, capture skip/delete branches, null guards, and
> the schema version-store / installer paths. `ConfigureAwait` is excluded via
> `ignore-methods` (equivalent boolean mutant on every awaited call). The
> remaining survivors are dominated by the interceptor's async/transaction
> branches and genuine equivalent mutants; ~80% is the practical killable ceiling.

The floor is set **below** the current baseline on purpose:

- Mutation scores vary a few points run-to-run (mutant timeouts, test parallelism)
  and CI's smaller runners tend to score slightly lower than a local run.
- Per the "start at the current score, only ratchet up" principle, the gate should
  catch **regressions** without false-failing on normal variance at introduction.

**Ratchet policy:** once a few CI runs establish a stable CI baseline, raise
`break` toward it (e.g. baseline − 3). Only ever increase it.

## Running locally

```bash
dotnet tool install --global dotnet-stryker
dotnet stryker --config-file stryker-config.json
```

The HTML report is written under `StrykerOutput/` and uploaded as a workflow
artifact on each scheduled run.
