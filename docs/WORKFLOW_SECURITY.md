# Workflow Security

## Overview

This document describes the security model of the GitHub Actions workflows in this repository: how the PR validation workflow (`.github/workflows/pr.yaml`) runs untrusted pull-request code safely, and how the separate protected-files guard (`.github/workflows/protected-files.yaml`) stops a PR from weakening the checks it is subject to.

The short version:

- `pr.yaml` runs on `pull_request`. It builds and tests the PR's own code with the PR's own copies of the workflow and configuration files, using a read-only token and no secrets.
- `protected-files.yaml` runs on `pull_request_target` but never checks out or executes PR content. It lists the PR's changed files through the API and fails any PR that changes a protected (CI-shaping) file together with anything else.

## Security Architecture

### 1. Untrusted code runs on `pull_request` with a read-only token

**Mechanism**: `pull_request` trigger + `permissions: contents: read`

```yaml
on:
  pull_request:
    branches:
      - main
  push:
    branches:
      - main

permissions:
  contents: read
```

- The PR's code, and its own copies of `pr.yaml` and of every analyzer/config file, are what get built and tested.
- GitHub gives a `pull_request` run a read-only `GITHUB_TOKEN`, and no secrets for PRs from forks. Nothing in `pr.yaml` uses a secret.
- `permissions: contents: read` is the workflow default, so same-repo PRs get the same read-only token.

The previous model ran `pr.yaml` on `pull_request_target` (main's copy of the workflow) and then checked out `refs/pull/N/head` in the same job, overwriting configuration files with main's copies. That is the pattern OpenSSF Scorecard flags as *DangerousWorkflow*: trusted context (a token that can write, secrets) and untrusted code meet in one job. It has been retired.

### 2. Gate integrity: the protected-files guard

**Mechanism**: `.github/workflows/protected-files.yaml` (`pull_request_target`, no checkout)

Because `pr.yaml` runs on the PR's own copies of the files that decide what CI checks, a PR could otherwise relax a rule and pass the relaxed check in the same change. The guard prevents that:

- It runs from `main` (a PR cannot edit it) on `pull_request_target`, and **never checks out or executes anything from the PR**. Its token has only `contents: read` and `pull-requests: read`.
- It lists the PR's changed files with `gh api repos/<repo>/pulls/<n>/files` and classifies the PR:
  - no protected file changed: **pass** (`pr.yaml` validated everything);
  - only protected files changed: **pass with a notice**. This is a configuration-only PR, and a maintainer reviews the diff itself;
  - protected files **and** anything else: **fail**. Split the PR so the configuration change merges on its own review first.
- It fails closed: if the file list cannot be fetched, or comes back empty, the guard fails rather than passing.
- Dependabot PRs are exempt (its identity is GitHub-controlled, and its bumps to protected files such as `Directory.Build.props` are legitimate).

**Protected files** (see the `case` list and the pattern in `protected-files.yaml` for the authoritative set):

- `.editorconfig` (and any `*.editorconfig`), `*.globalconfig`, `*.ruleset`, `*.DotSettings` (matched case-insensitively)
- `Directory.Build.props`, `Directory.Build.targets`, `BannedSymbols.txt`
- `coverlet.runsettings`, `.gitleaks.toml`, `.config/dotnet-tools.json` (the CI tool manifest)
- `.github/workflows/*.yml` / `*.yaml`
- `.github/license-audit/*.json` (the license-audit policy) and `.github/requirements/*` (hash-pinned Python tool locks)
- the CI scripts the workflows run: `scripts/build-pr.ps1`, `scripts/changelog.ps1`, `scripts/tfm-parity.ps1`, `scripts/third-party-notices.ps1`

### 3. SARIF upload without a writable token near PR code

InspectCode runs in a normal `pull_request` job and uploads its SARIF as an artifact. A separate `inspectcode-upload-sarif` job is the only job in `pr.yaml` with a write scope (`security-events: write`). It has **no checkout step**: it downloads the already-produced SARIF artifact and hands it to `github/codeql-action/upload-sarif`. The writable token and the PR's code are never in the same job.

### 4. Credential protection

**Mechanism**: `persist-credentials: false`

Every `actions/checkout` step sets `persist-credentials: false`, so the checkout token is not written to the job's git config for later steps:

```yaml
- name: Checkout code
  uses: actions/checkout@<pinned-sha> # v7.x
  with:
    persist-credentials: false
```

**Note**: this keeps the token out of git config. It does NOT stop a step from reading `GITHUB_TOKEN` if a workflow explicitly passes it in.

### 5. Pinned actions

Every third-party action is pinned to a full commit SHA with the version in a trailing comment. Dependabot proposes the updates, and `actions-audit.yaml` checks the pins.

## Attack Scenarios

### Scenario 1: A PR edits `pr.yaml` to disable a check
**Attack**: PR changes `.github/workflows/pr.yaml` (for example, removes the coverage gate) along with code that would fail it.
**Prevention**: the protected-files guard fails any PR that changes a workflow together with other files. A workflow-only PR passes the guard only as a configuration-only change that a maintainer reviews.
**Status**: ✅ Protected

### Scenario 2: Configuration file tampering
**Attack**: PR relaxes `.editorconfig`, `BannedSymbols.txt`, a `.ruleset` or `coverlet.runsettings` and adds code that only passes under the relaxed rules.
**Prevention**: same guard; the two changes cannot land in one PR.
**Status**: ✅ Protected

### Scenario 3: Credential or secret theft from PR code
**Attack**: PR code tries to read the token or secrets during the build or tests.
**Prevention**: `pull_request` runs get a read-only token and no secrets for forks; `pr.yaml` uses no secrets; `persist-credentials: false`; the only write-scoped job never runs PR code.
**Status**: ✅ Protected

### Scenario 4: Abusing the `pull_request_target` guard
**Attack**: PR content tries to execute inside the privileged `protected-files.yaml` run.
**Prevention**: the guard never checks out the PR and only reads the file list from the API. Its code always comes from `main`.
**Status**: ✅ Protected

## Maintenance

### Changing a protected file

1. Open a PR that changes **only** the protected file(s). `pr.yaml` runs with the changed files, and the guard passes it with a configuration-only notice.
2. Review the diff itself: it decides what every later PR is checked against.
3. After it merges, rebase any dependent code change onto `main`, so that change is validated under the reviewed configuration.

If a rule has to be relaxed for some new code, that takes two PRs: the configuration change first, then the code.

### Adding a new protected file

1. Add the path to the `case` list (exact paths) or the `grep -qiE` pattern (globs) in `.github/workflows/protected-files.yaml`.
2. Update the list in this document and the summary in the `pr.yaml` header comment.

## References

- [GitHub Actions Security Hardening](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions)
- [Keeping your GitHub Actions secure: preventing pwn requests](https://securitylab.github.com/research/github-actions-preventing-pwn-requests/)
- [OpenSSF Scorecard: Dangerous-Workflow](https://github.com/ossf/scorecard/blob/main/docs/checks.md#dangerous-workflow)
