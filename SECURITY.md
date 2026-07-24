# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability, please follow these steps:

1. **Do not** create a public issue on this repository.
2. In the top navigation of this repository, click the **Security** tab.
3. In the top right, click the **Report a vulnerability** button.
4. Fill out the provided form with:
   - A description of the vulnerability
   - Steps to reproduce the issue
   - Potential impact
   - Suggested fix (if you have one)

## Response Timeline

We will acknowledge your report within 48 hours and provide an estimated timeline for a fix.

## Thank You

Your help is greatly appreciated!
Responsible disclosure of security vulnerabilities helps protect our entire community.

## Release path & compromise scope

Facts a maintainer would need at 2am if the release identity is compromised. Generic incident-response steps (rotating credentials, revoking OAuth apps, publishing advisories, unlisting NuGet packages) are not duplicated here — GitHub's and NuGet's own docs update faster than a checked-in runbook.

- **Release path**: OIDC / NuGet Trusted Publishing via `NuGet/login@v1` in `.github/workflows/release.yaml`. The workflow mints an ephemeral push token per run via OIDC — the release path does not depend on a long-lived API key stored in GitHub secrets or on the NuGet account. During an incident, check the NuGet account for any long-lived API keys anyway (they can be created outside of CI) and delete anything you don't recognize.
- **Fallback**: none. If Trusted Publishing is compromised, the incident is at the GitHub-account level (the OIDC identity is `Chris-Wolfgang/AuditTrail`).
- **Owner**: @Chris-Wolfgang.
- **Downstream consumers**: no known `Wolfgang.*` dependents — AuditTrail is a leaf library; unknown external consumers may exist on nuget.org.
- **Package coordinates for unlisting** (the CLI, `Wolfgang.AuditTrail.Cli`, is `IsPackable=false` and not published):
  - `Wolfgang.AuditTrail.Abstractions` — https://www.nuget.org/packages/Wolfgang.AuditTrail.Abstractions/
  - `Wolfgang.AuditTrail.EntityFrameworkCore` — https://www.nuget.org/packages/Wolfgang.AuditTrail.EntityFrameworkCore/
  - `Wolfgang.AuditTrail.TestKit.Xunit` — https://www.nuget.org/packages/Wolfgang.AuditTrail.TestKit.Xunit/

## Verifying the supply chain

Every release publishes evidence that the packages on NuGet were built from this
repository, unmodified. Consumers (and enterprise procurement) can verify each link:

- **Build provenance (SLSA).** `release.yaml` generates a signed provenance
  attestation for every `.nupkg` via `actions/attest-build-provenance`. It proves
  the package was built by this repo's release workflow at a specific commit.
  Verify a downloaded package with the GitHub CLI:

  ```bash
  gh attestation verify Wolfgang.AuditTrail.EntityFrameworkCore.<version>.nupkg \
    --repo Chris-Wolfgang/AuditTrail
  ```

- **Repository signature.** NuGet.org applies a repository signature to every
  published package. Verify it with:

  ```bash
  nuget verify -Signatures Wolfgang.AuditTrail.EntityFrameworkCore.<version>.nupkg
  ```

  > Author (code-signing-certificate) signing is not currently applied — packages
  > carry NuGet.org's repository signature plus the build-provenance attestation
  > above. Author signing may be added later; it requires a code-signing certificate.

- **SBOM.** A CycloneDX SBOM (`*.bom.json`) for each package is attached to the
  GitHub Release, listing the exact dependency set the package was built against.

- **Reproducible build.** Rebuild from the tag and compare hashes — see
  [docs/REPRODUCIBLE-BUILD.md](docs/REPRODUCIBLE-BUILD.md).
