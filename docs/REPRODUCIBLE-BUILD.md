# Reproducible build — third-party verification

This library builds deterministically, so anyone can rebuild a released version
from source and confirm the compiled assemblies match what was published to NuGet.
This page is the **consumer-side** procedure: how *you* independently verify the
claim, without trusting our CI.

Tracks issue #65. Pairs with the internal round-3 reproducibility check
(`.github/workflows/reproducible-build.yaml`), which builds every TFM of every
packable project on Ubuntu and on Windows and fails unless every `.dll` and `.pdb`
is byte-identical.

## What makes the build reproducible

`Directory.Build.props` sets the determinism knobs that remove machine- and
time-dependent inputs from the compiled output:

- `<Deterministic>true</Deterministic>` — no timestamps / random GUIDs in the assembly.
- `ContinuousIntegrationBuild=true` — set automatically in CI; normalizes embedded
  source paths. Pass it explicitly when rebuilding locally (see below).
- `<EmbedUntrackedSources>true</EmbedUntrackedSources>` + `Microsoft.SourceLink.GitHub`
  — source references resolve to the exact commit rather than local paths.

`Directory.Build.targets` removes the last OS-dependent input: the SDK writes its
generated sources (`<Project>.AssemblyInfo.cs`, `*.AssemblyAttributes.cs`,
`*.GlobalUsings.g.cs`) with the build machine's newline, and the portable PDB
embeds and hashes them, so a Windows build and a Linux build used to differ in the
PDB, and through the PDB checksum and module version id in the DLL too. Its
`NormalizeGeneratedLineEndings` target rewrites those files to LF before compiling
the packable projects.

## What is guaranteed

Given the same source commit, the same .NET SDK **and the same .NET runtime patch
running the compiler**, the **compiled assemblies and symbols (`.dll` and `.pdb`,
every target framework)** are byte-for-byte identical on Linux, macOS and Windows.

The package files (`.nupkg` / `.snupkg`) are **not** byte-reproducible and are not
part of the guarantee: NuGet stamps the pack time into every zip entry, so two packs
of one commit differ even on one machine. Compare the assemblies inside them.

The runtime patch matters because the compiler records the version of the runtime it
ran on in the PDB. The SDK rolls the compiler forward to the newest installed patch
runtime, so a machine with a newer `Microsoft.NETCore.App` patch than the SDK's own
produces different PDB bytes. Set `DOTNET_ROLL_FORWARD=Disable` to pin the compiler
to the SDK's bundled runtime when comparing.

## Tooling

| Tool | Version |
| --- | --- |
| .NET SDK | 10.0.x (latest patch — the released packages are packed with the 10.0 SDK) |
| OS | Any (Linux/macOS/Windows). `.dll` / `.pdb` match cross-OS; see [What is guaranteed](#what-is-guaranteed). |

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

3. **Compare the compiled assemblies with the published package.** The `.nupkg`
   file itself never matches (pack time is stamped into it), so extract both
   packages and diff the `.dll` hashes (and the `.pdb` hashes from the `.snupkg`).
   The `reproducible-build-manifest.json` attached to each release lists the SHA-256
   of the published `.nupkg` files: use it to confirm the package you downloaded is
   the one that was released, not to compare with your own pack.

   ```bash
   sha256sum published.nupkg   # compare with reproducible-build-manifest.json
   ```

   Then compare the assemblies:

   ```bash
   unzip -o your.nupkg -d local && unzip -o published.nupkg -d published
   diff <(cd local && find . -name '*.dll' -exec sha256sum {} + | sort) \
        <(cd published && find . -name '*.dll' -exec sha256sum {} + | sort)
   ```

## Interpreting a mismatch

A different `.dll` or `.pdb` is not by itself proof of tampering: first rule out a
different SDK, a different runtime patch running the compiler (see
[What is guaranteed](#what-is-guaranteed)) or a different commit. A mismatch in the
`.dll` built from the release tag with the same SDK and runtime patch is the signal
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
