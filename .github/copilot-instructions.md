# Copilot Coding Agent Instructions

## Repository Summary

**Wolfgang.AuditTrail** is a real, released .NET library that adds atomic audit-row capture to EF Core `SaveChanges`/`SaveChangesAsync`. It intercepts the change tracker, writes a header row plus per-changed-column detail rows into the **same transaction** as the user's save, and ships as a family of NuGet packages plus a companion CLI tool.

**Repository Type**: Library (released, versioned — currently `v0.2.1` on NuGet.org)
**Target Platforms**: `netstandard2.0`, `net6.0`, `net8.0`, `net10.0` depending on project (see per-project TFMs below); test projects additionally span `net462`–`net481`
**Primary Language**: C#
**Size**: 4 shippable src projects, 10 test projects, 1 benchmarks project, 3 example projects, ~35 documentation files

## Project Layout and Architecture

```
root/
├── AuditTrail.slnx
├── src/
│   ├── Wolfgang.AuditTrail.Abstractions/          # Shared contracts, no EF Core dependency
│   ├── Wolfgang.AuditTrail.EntityFrameworkCore/   # AuditingDbContext, interceptor, serializers, schema installer
│   ├── Wolfgang.AuditTrail.Cli/                   # `audittrail migrate` CLI (not yet packed/published)
│   └── Wolfgang.AuditTrail.TestKit.Xunit/         # Shipped xunit contract-test base for custom serializers
├── tests/
│   ├── Wolfgang.AuditTrail.Cli.Tests.Unit/
│   ├── Wolfgang.AuditTrail.EntityFrameworkCore.Tests.Unit/       # SQLite in-memory, runs on every PR
│   ├── Wolfgang.AuditTrail.EntityFrameworkCore.Tests.Integration/ # Testcontainers: SQL Server, PostgreSQL, MySQL
│   ├── Wolfgang.AuditTrail.EntityFrameworkCore.Schema.Tests.Integration/
│   ├── Wolfgang.AuditTrail.EntityFrameworkCore.Tests.Smoke/
│   ├── Wolfgang.AuditTrail.EntityFrameworkCore.Tests.Fuzz/        # FsCheck property-based fuzzing
│   ├── Wolfgang.AuditTrail.EntityFrameworkCore.Tests.Concurrency/ # Coyote systematic concurrency testing
│   ├── Wolfgang.AuditTrail.EntityFrameworkCore.Tests.DocExamples/ # Compiles every XML-doc <example> block
│   └── Wolfgang.AuditTrail.EntityFrameworkCore.AotSmoke(.Setup)/  # Native AOT publish-and-run smoke test
├── benchmarks/Wolfgang.AuditTrail.EntityFrameworkCore.Benchmarks/
├── examples/    # Console, WebApi, AdventureWorks (SQL Server via Testcontainers) sample apps
├── docs/        # ADRs, threat model, release/formatting/reproducible-build guides
└── .github/workflows/  # 22 workflows — see below
```

## Build and Validation Instructions

### Prerequisites
- .NET 10.0 SDK (the src projects multi-target up to `net10.0`; building every TFM requires the .NET 10 SDK)
- Docker, for the Testcontainers-backed integration/schema-integration test projects (optional for a quick inner loop)

### Build

```bash
dotnet restore
dotnet build AuditTrail.slnx --configuration Release
```

Release builds treat all analyzer warnings as errors (`<TreatWarningsAsErrors>true</TreatWarningsAsErrors>` in `Directory.Build.props`).

### Test

```bash
# Fast unit suites (no Docker required)
dotnet test AuditTrail.slnx --configuration Release

# Integration tests (Docker required)
RunIntegrationTests=true dotnet test tests/Wolfgang.AuditTrail.EntityFrameworkCore.Tests.Integration
```

### Format

```bash
dotnet format --verify-no-changes   # CI check
pwsh ./scripts/format.ps1           # apply fixes
```

## Continuous Integration Pipeline

`pr.yaml` is the main gate — a 3-stage matrix (Linux → Windows → macOS) covering every TFM the src projects ship, plus a coverage gate (90% on `src`, gated separately on test-assembly classes as of #232), gitleaks/DevSkim security scanning, and CodeQL. `pr-benchmarks.yaml` adds a per-PR performance regression gate (delta vs. the PR's merge-base) for changes touching `src/`/`benchmarks/`. `release.yaml` triggers on a published GitHub Release and runs validate → pack → publish (NuGet.org via Trusted Publishing/OIDC, no long-lived API key) → docs deploy → artifact attestation. See `docs/RELEASE-WORKFLOW-SETUP.md` for the full release-process breakdown and `docs/WORKFLOW_SECURITY.md` for the security posture of the workflow files themselves.

## Agent Guidelines

- Follow `.editorconfig` (Allman braces, file-scoped namespaces, 4-space indent) and CLAUDE.md-style conventions already present throughout `src/` — 3 blank lines between members, multi-line argument lists with the opening paren on its own line.
- New async code must carry `ConfigureAwait(false)` on every `await` (including `await foreach`), thread `CancellationToken` through, and never use sync I/O — `BannedSymbols.txt` enforces this.
- Public API changes need a corresponding entry in `PublicAPI.Unshipped.txt` for the affected project (Abstractions, EntityFrameworkCore, and TestKit.Xunit all run `Microsoft.CodeAnalysis.PublicApiAnalyzers`).
- Before submitting changes: `dotnet build -c Release` (0 warnings), `dotnet test -c Release`, and `dotnet format --verify-no-changes` should all pass locally — CI runs the same gates plus the full 3-OS matrix.
