# Reproducible build — third-party verification

This library builds deterministically, so anyone can rebuild a released version
from source and confirm the compiled assemblies match what was published to NuGet.
This page is the **consumer-side** procedure: how *you* independently verify the
claim, without trusting our CI.

Tracks issue #65. Pairs with the internal round-3 reproducibility check
(`.github/workflows/reproducible-build.yaml`), which proves our own builds are
byte-stable across runners.

## What makes the build reproducible

`Directory.Build.props` sets the determinism knobs that remove machine- and
time-dependent inputs from the compiled output:

- `<Deterministic>true</Deterministic>` — no timestamps / random GUIDs in the assembly.
- `ContinuousIntegrationBuild=true` — set automatically in CI; normalizes embedded
  source paths. Pass it explicitly when rebuilding locally (see below).
- `<EmbedUntrackedSources>true</EmbedUntrackedSources>` + `Microsoft.SourceLink.GitHub`
  — source references resolve to the exact commit rather than local paths.

The **managed IL** in each assembly is therefore expected to be byte-for-byte
identical given the same source commit and a matching compiler (SDK) version.

## Tooling

| Tool | Version |
| --- | --- |
| .NET SDK | 10.0.x (latest patch — the released packages are packed with the 10.0 SDK) |
| OS | Any (Linux/macOS/Windows). Managed IL is expected to match cross-OS; see the advisory note below. |

There is no `global.json` SDK pin, so use the latest **.NET 10** SDK. The Roslyn
compiler ships with the SDK, so a different SDK *major* can change the emitted IL;
stay on 10.0.x to reproduce a package built during the 0.2.0+ cycle.

## Verify a release

1. **Clone the source at the exact release tag** (replace `v0.2.0`):

   ```bash
   git clone --depth 1 --branch v0.2.0 https://github.com/Chris-Wolfgang/AuditTrail.git
   cd AuditTrail
   ```

2. **Pack in Release with the CI determinism flag:**

   ```bash
   dotnet pack src/Wolfgang.AuditTrail.Abstractions/Wolfgang.AuditTrail.Abstractions.csproj -c Release -p:ContinuousIntegrationBuild=true
   dotnet pack src/Wolfgang.AuditTrail.EntityFrameworkCore/Wolfgang.AuditTrail.EntityFrameworkCore.csproj -c Release -p:ContinuousIntegrationBuild=true
   dotnet pack src/Wolfgang.AuditTrail.TestKit.Xunit/Wolfgang.AuditTrail.TestKit.Xunit.csproj -c Release -p:ContinuousIntegrationBuild=true
   ```

3. **Compare against the published hashes.** Each release attaches a
   `reproducible-build-manifest.json` listing the expected SHA-256 of every
   published `.nupkg`. Download it from the release page and compare:

   ```bash
   # your local package hash
   sha256sum src/Wolfgang.AuditTrail.Abstractions/bin/Release/*.nupkg
   # expected hash from the release
   cat reproducible-build-manifest.json
   ```

   For the most robust check, compare the **compiled assemblies** rather than the
   `.nupkg` wrapper (the wrapper's zip framing can vary by SDK patch even when the
   IL is identical). Extract both packages and diff the `.dll` hashes:

   ```bash
   unzip -o your.nupkg -d local && unzip -o published.nupkg -d published
   diff <(cd local && find . -name '*.dll' -exec sha256sum {} + | sort) \
        <(cd published && find . -name '*.dll' -exec sha256sum {} + | sort)
   ```

## Advisory, not a guarantee

Per the round-3 internal check, managed-IL differences are treated as
**investigate-worthy**, not proof of tampering — a different SDK patch or OS can
introduce benign wrapper/native differences while the IL still matches. A
mismatch in the **managed `.dll`** content built with a matching SDK is the signal
that warrants a report.

## Report a discrepancy

If a rebuilt assembly's IL does not match the published package built with the
same SDK and commit, **do not** open a public issue with details first — follow
the [security policy](../SECURITY.md) and report privately via the repository's
Security tab. Include: the release tag, your exact `dotnet --version`, your OS,
and the differing file hashes.

## Independent attestations

Third parties are encouraged to publish verification attestations using
[Reproducible Builds](https://reproducible-builds.org/) project conventions (or a
service such as [vouchsafe.io](https://vouchsafe.io/)), pointing at the release
tag and the `reproducible-build-manifest.json` they verified against.
