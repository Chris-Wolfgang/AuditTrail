# Release Workflow Setup Guide

This guide explains how to configure a repository to use the standard `release.yaml` workflow. The same checklist applies whether you are bootstrapping a new repo from `repo-template` or auditing an existing one.

## Overview

The release workflow triggers when you **publish a GitHub Release** and implements a comprehensive validation and automatic deployment process that:
- ✅ Tests all target frameworks per test project on Windows
- ✅ Enforces 90% code coverage threshold
- ✅ Validates NuGet package integrity with smoke tests
- ✅ Automatically publishes to NuGet.org after validation passes
- ✅ Eliminates duplicate build work for faster releases

## Required Configuration

Complete the following one-time setup so that the workflow can publish releases:

### Configure NuGet.org Trusted Publishing (OIDC)

This repo does **not** use a long-lived `NUGET_API_KEY` secret. `publish-nuget` authenticates via [NuGet.org Trusted Publishing](https://learn.microsoft.com/nuget/nuget-org/trusted-publishing) — `NuGet/login@v1` exchanges this workflow run's GitHub OIDC token for a short-lived push token at publish time, so there is no long-lived credential stored in the repo at all.

**One-time setup:**

1. On [nuget.org](https://www.nuget.org/account/trustedpublishing), create a Trusted Publishing policy scoped to `Chris-Wolfgang/AuditTrail` and the `release.yaml` workflow.
2. In the repo, go to Settings → Secrets and variables → Actions → **Variables** (not Secrets) and add `NUGET_USER` set to the nuget.org account username the policy above belongs to.

**What this does:** `publish-nuget` reads `vars.NUGET_USER`, fails fast with a clear error if it's unset (*"vars.NUGET_USER is not set..."*), and otherwise calls `NuGet/login` to mint a push token scoped to this one run — nothing to rotate, nothing that outlives the job.

### Verify Branch Protection Rules

**Location:** Settings → Branches → main (or Settings → Rules → Rulesets)

> **Note:** Repos created from `repo-template` ship with `scripts/Setup-BranchRuleset.ps1`, which configures branch protection interactively (option `[1]` for single-developer mode, `[2]` for multi-developer mode). The script may not be present in older repos — if it is missing, configure the equivalent settings manually using the checklist below.

Ensure the following settings are enabled:

- ✅ **Require a pull request before merging**
  - **Single developer repos:** 0 approvals (default)
  - **Multi-developer repos:** 1+ approvals (recommended)
- ✅ **Require status checks to pass before merging**
  - Required checks should include the following status check contexts:
    - "Stage 1: Linux Tests (.NET 5.0-10.0) + Coverage Gate"
    - "Stage 2: Windows Tests (.NET 5.0-10.0, Framework 4.6.2-4.8.1)"
    - "Stage 3: macOS Tests (.NET 6.0-10.0)"
    - "Security Scan (DevSkim)"
    - "Security Scan (CodeQL)"
- ✅ **Require branches to be up to date before merging**
- ✅ **Require conversation resolution before merging**
- ✅ **Do not allow bypassing the above settings** (recommended, even for admins)
- ✅ **Restrict deletions**
- ✅ **Require linear history** (optional but recommended)

**What this does:** Ensures all code merged to `main` has passed comprehensive validation, preventing broken releases.

## Testing the Release Workflow

After completing the setup, test the workflow by creating a GitHub Release:

1. Go to your repository's **Releases** page
2. Click **"Draft a new release"**
3. Choose or create a tag (e.g., `v0.0.1-test`)
4. Add a title and description (optional for a test)
5. Check **"Set as a pre-release"** for test releases
6. Click **"Publish release"**

The workflow triggers automatically when the release is published.

### Expected Workflow Behavior

1. **Job 1: validate-release** (3-10 minutes, Windows-only — see the note in Key Improvements below)
   - Runs all framework tests with coverage
   - Enforces 90% coverage threshold
   - Uploads coverage report
   - ✅ Auto-passes if tests succeed

2. **Job 2: pack-and-validate** (2-5 minutes)
   - Packs NuGet packages
   - Performs smoke test installation
   - Uploads packages as artifacts
   - ✅ Auto-passes if packages are valid

3. **Job 3: publish-nuget** (1-2 minutes)
   - Fails fast if `vars.NUGET_USER` isn't set
   - Exchanges this run's OIDC token for a short-lived NuGet.org push token via Trusted Publishing
   - Publishes packages to NuGet.org
   - ✅ Auto-completes if the variable is set and the Trusted Publishing policy is configured

4. **Job 4: trigger-docs** (parallel with pack-and-validate, after validate-release)
   - Calls `docfx.yaml` to build and deploy versioned API docs to `gh-pages`

5. **Job 5: update-release-artifacts** (after publish-nuget)
   - Attaches the packed `.nupkg`s and coverage report to the GitHub Release
   - Generates the reproducible-build manifest (per-package SHA-256) and attests SLSA build provenance

### Monitoring the Workflow

- **Actions Tab:** Shows workflow progress in real-time
- **Artifacts:** Each job uploads artifacts (coverage reports, packages)
- **Releases:** Check the Releases page after successful completion

## Troubleshooting

### "vars.NUGET_USER is not set" Error

**Problem:** The `publish-nuget` job fails immediately with this error.

**Solution:**
1. Add the `NUGET_USER` repository **variable** (Settings → Secrets and variables → Actions → Variables), not a secret — see [Configure NuGet.org Trusted Publishing](#configure-nugetorg-trusted-publishing-oidc) above.
2. Confirm a matching Trusted Publishing policy exists on nuget.org for `Chris-Wolfgang/AuditTrail` / `release.yaml`.
3. Re-run the workflow from the Actions tab (do not re-publish the release).

### Tests Fail on Specific Framework

**Problem:** Tests pass on some frameworks but fail on others (e.g., net462).

**Solution:**
1. Check the test logs for framework-specific issues
2. Fix compatibility issues in your code
3. Test locally: `dotnet test --framework net462`
4. Push fix, then re-publish the release (or re-run the workflow from the Actions tab)

### Coverage Below 90% Threshold

**Problem:** Workflow fails at coverage validation step.

**Solution:**
1. Review `CoverageReport/Summary.txt` artifact
2. Add tests for uncovered code paths
3. Ensure tests run on all frameworks
4. Push fix, then re-publish the release (or re-run the workflow from the Actions tab)

### Smoke Test Fails to Install Package

**Problem:** Package packs successfully but fails smoke test installation.

**Solution:**
1. Check package dependencies in `.csproj`
2. Verify framework compatibility in `<TargetFrameworks>`
3. Test locally: `dotnet pack` then try installing in a test project
4. Fix packaging issues and re-publish the release (or re-run the workflow from the Actions tab)

## Production Release Checklist

Before creating a production GitHub Release (e.g., `v1.0.0`):

- [ ] All tests pass on all platforms (pr.yaml workflow)
- [ ] Code coverage meets 90% threshold
- [ ] Security scan shows no critical issues
- [ ] Version numbers updated in `.csproj` files
- [ ] `CHANGELOG.md` updated with release notes (if applicable)
- [ ] All PRs merged to `main` branch
- [ ] Local build succeeds: `dotnet build --configuration Release`
- [ ] Local tests pass: `dotnet test --configuration Release`

**Create a production release:**
1. Go to your repository's **Releases** page
2. Click **"Draft a new release"**
3. Choose or create the version tag (e.g., `v1.0.0`) targeting `main`
4. Add a title and release notes
5. Click **"Publish release"**

**After workflow completes:**
- [ ] Verify packages appear on NuGet.org
- [ ] Test installing package from NuGet.org in a clean project
- [ ] Announce release (if applicable)

## Workflow Architecture

```
┌─────────────────────────────────────────────────────────────┐
│  Trigger: Published GitHub Release                          │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│  Job 1: validate-release (Windows)                          │
│  • Restore & Build                                          │
│  • Test all frameworks (net5.0-10.0, net462-481)           │
│  • Collect coverage                                         │
│  • Enforce 90% threshold                                    │
│  • Upload coverage artifacts                                │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼ (only if tests pass)
┌─────────────────────────────────────────────────────────────┐
│  Job 2: pack-and-validate (Windows)                         │
│  • Restore & Build (fresh)                                  │
│  • Pack NuGet packages                                      │
│  • Smoke test installation                                  │
│  • Upload package artifacts                                 │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼ (only if packing succeeds)
┌─────────────────────────────────────────────────────────────┐
│  Job 3: publish-nuget (Windows)                             │
│  • Download packages                                        │
│  • Exchange OIDC token for a NuGet.org push token            │
│  • Publish to NuGet.org (Trusted Publishing)                 │
└─────────────────────────────────────────────────────────────┘
                            │
              ┌─────────────┴─────────────┐
              ▼                           ▼
┌───────────────────────────┐  ┌───────────────────────────────┐
│  Job 4: trigger-docs       │  │  Job 5: update-release-        │
│  (after validate-release,  │  │  artifacts (after publish-     │
│  runs in parallel with     │  │  nuget)                        │
│  pack-and-validate)        │  │  • Attach packages + coverage  │
│  • Build & deploy docs to  │  │    to the GitHub Release       │
│    gh-pages via docfx.yaml │  │  • Reproducible-build manifest │
│                             │  │  • SLSA provenance attestation │
└───────────────────────────┘  └───────────────────────────────┘
```

## Key Improvements Over Previous Workflow

| Issue | Before | After |
|-------|--------|-------|
| **Framework Coverage** | Default framework only | All frameworks (net5.0-10.0, net462-481) |
| **Code Coverage** | Not enforced | 90% threshold enforced |
| **Package Validation** | None | Smoke test installation |
| **Deployment** | Incomplete publish script | Automatic publishing after validation |
| **Publish credential** | None | NuGet.org Trusted Publishing (OIDC) — no long-lived secret; fails fast if `vars.NUGET_USER` is unset |
| **GitHub Releases** | Not used as trigger | Workflow triggered by published release |
| **Build Efficiency** | Duplicate builds in each job | Build once per job with dependencies |
| **Test Logging** | No logger parameter | Console logging with verbosity |
| **Permissions** | Read-only | Write access for releases |

## Support

If you encounter issues not covered in this guide:

1. Check the [Actions tab](../../actions) for detailed logs
2. Review artifacts uploaded by failed jobs
3. Consult the [GitHub Actions documentation](https://docs.github.com/en/actions)
4. Open an issue in this repository with:
   - Workflow run URL
   - Error message and logs
   - Steps to reproduce
