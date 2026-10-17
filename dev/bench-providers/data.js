window.BENCHMARK_DATA = {
  "lastUpdate": 1792197926658,
  "repoUrl": "https://github.com/Chris-Wolfgang/AuditTrail",
  "entries": {
    "Audit Interceptor Provider Benchmarks (net10.0)": [
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dcf7a63460f9098f09be9f5beb099ee68d003061",
          "message": "Merge pull request #293 from Chris-Wolfgang/protected/wire-provider-benchmarks-into-ci\n\nci: wire ProviderSaveChangesBenchmarks into the main-push trend chart",
          "timestamp": "2026-09-15T12:15:02-04:00",
          "tree_id": "bb15e0c4770c741b818500ac7347a19bce531873",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/dcf7a63460f9098f09be9f5beb099ee68d003061"
        },
        "date": 1789489451750,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 4694709.666666667,
            "unit": "ns",
            "range": "± 22213.135693398475"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 28964184.5,
            "unit": "ns",
            "range": "± 2692739.019558524"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 6044728.833333333,
            "unit": "ns",
            "range": "± 280537.26718803926"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 39213067.666666664,
            "unit": "ns",
            "range": "± 683513.9265460019"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 10061788.333333334,
            "unit": "ns",
            "range": "± 6849917.343221108"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 38996300,
            "unit": "ns",
            "range": "± 850162.5317437837"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 21280403.5,
            "unit": "ns",
            "range": "± 1306500.1680049642"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 124575120,
            "unit": "ns",
            "range": "± 19883678.64112451"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 5890511.833333333,
            "unit": "ns",
            "range": "± 54121.83705615815"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 37908891.666666664,
            "unit": "ns",
            "range": "± 3496252.122479918"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3785f1e9e8a7e12c6b595e83c7a1b9defa6783dc",
          "message": "Merge pull request #294 from Chris-Wolfgang/dependabot/github_actions/github-actions-3aa15cda2b\n\nbuild(deps): bump reviewdog/action-actionlint from 1.73.3 to 1.73.4 in the github-actions group",
          "timestamp": "2026-09-15T12:28:01-04:00",
          "tree_id": "bfb07a1a541947b8e27c95c411a36d96754b055e",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/3785f1e9e8a7e12c6b595e83c7a1b9defa6783dc"
        },
        "date": 1789490274423,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 3326899.5,
            "unit": "ns",
            "range": "± 30827.073555561514"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 19975293.833333332,
            "unit": "ns",
            "range": "± 1133324.5387290146"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 6192020.166666667,
            "unit": "ns",
            "range": "± 201215.12275754358"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 69404665.83333333,
            "unit": "ns",
            "range": "± 27209116.29281415"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 8988872.666666666,
            "unit": "ns",
            "range": "± 6406376.886794153"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 31522054.333333332,
            "unit": "ns",
            "range": "± 508559.2461182211"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 19150086.833333332,
            "unit": "ns",
            "range": "± 877997.1286202098"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 98955399.16666667,
            "unit": "ns",
            "range": "± 11058116.27877788"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 6202236.5,
            "unit": "ns",
            "range": "± 89877.61519421841"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 42018856.666666664,
            "unit": "ns",
            "range": "± 4536170.548262525"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ba3b3c7114078e5df8bf8e2374165ed277b82411",
          "message": "Merge pull request #298 from Chris-Wolfgang/fix/benchmarks-yaml-provider-failure-resilience\n\nfix: benchmarks.yaml resilience after a real production failure",
          "timestamp": "2026-09-15T16:13:34-04:00",
          "tree_id": "30c7abfbc7be8fb4401797d5e1141cfa37c3aba7",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/ba3b3c7114078e5df8bf8e2374165ed277b82411"
        },
        "date": 1789503771354,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 6898342.833333333,
            "unit": "ns",
            "range": "± 117040.63198878129"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 50322489.333333336,
            "unit": "ns",
            "range": "± 2452281.735946613"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 6632984,
            "unit": "ns",
            "range": "± 167981.8083484042"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 39328576.166666664,
            "unit": "ns",
            "range": "± 817472.2509323073"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 11710638.666666666,
            "unit": "ns",
            "range": "± 6572150.261984759"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 52895121.333333336,
            "unit": "ns",
            "range": "± 8325539.868730816"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 312954187.6666667,
            "unit": "ns",
            "range": "± 426114707.69874835"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 574270992,
            "unit": "ns",
            "range": "± 662308295.7219772"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 6716485.666666667,
            "unit": "ns",
            "range": "± 48769.45176371509"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 48697521,
            "unit": "ns",
            "range": "± 4084227.191441118"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7e04a11191eb66bbdfa9239cd57c8c0a54dbe562",
          "message": "Merge pull request #307 from Chris-Wolfgang/chore/baseline-0.4.1\n\nchore(pack): advance PackageValidation baseline to 0.4.1",
          "timestamp": "2026-09-15T18:51:17-04:00",
          "tree_id": "5963320c3bffac604e5faab94473104efb5d547b",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/7e04a11191eb66bbdfa9239cd57c8c0a54dbe562"
        },
        "date": 1789513227261,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 9776224.666666666,
            "unit": "ns",
            "range": "± 56992.002994572256"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 39895658.333333336,
            "unit": "ns",
            "range": "± 2073598.1799901188"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 6649200.166666667,
            "unit": "ns",
            "range": "± 138258.61550128923"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 41647900.666666664,
            "unit": "ns",
            "range": "± 715692.3536222344"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 11327639,
            "unit": "ns",
            "range": "± 6798824.097620338"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 55986785,
            "unit": "ns",
            "range": "± 14740357.078313231"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 27418277,
            "unit": "ns",
            "range": "± 420162.34794184024"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 252172097.16666666,
            "unit": "ns",
            "range": "± 159928303.54447994"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 7329426.666666667,
            "unit": "ns",
            "range": "± 356212.8101154327"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 47078923.5,
            "unit": "ns",
            "range": "± 5947502.7682044"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e6bf9fd11e0354695f451de3cdb1507e409c830d",
          "message": "Merge pull request #309 from Chris-Wolfgang/baseline/scorecard-badge\n\ndocs: add OpenSSF Scorecard badge to README (baseline item 17)",
          "timestamp": "2026-09-15T21:56:06-04:00",
          "tree_id": "dc07530abd5dbae8af140a69cedd71a586437922",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/e6bf9fd11e0354695f451de3cdb1507e409c830d"
        },
        "date": 1789524313833,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 4800439.833333333,
            "unit": "ns",
            "range": "± 64393.53658818045"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 29745280.333333332,
            "unit": "ns",
            "range": "± 1746402.0060170377"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 6484990.333333333,
            "unit": "ns",
            "range": "± 28955.690448223355"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 45867415.166666664,
            "unit": "ns",
            "range": "± 10945633.129262388"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 10498963.666666666,
            "unit": "ns",
            "range": "± 7042570.405147422"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 47098647.5,
            "unit": "ns",
            "range": "± 13590092.335881608"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 23343527,
            "unit": "ns",
            "range": "± 914240.4972418363"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 213703549.66666666,
            "unit": "ns",
            "range": "± 109615902.95145434"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 5817426.333333333,
            "unit": "ns",
            "range": "± 63532.800775137664"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 38547700.333333336,
            "unit": "ns",
            "range": "± 4050250.0563996457"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f068e6421119856259bf034f7d1a2a5042702167",
          "message": "chore: ship gitleaks pre-commit hook (baseline item 4) (#308)\n\n* chore: ship gitleaks pre-commit hook (baseline item 4)\n\nCopies .githooks/pre-commit from repo-template and documents\n`git config core.hooksPath .githooks` in CONTRIBUTING.md's Getting\nStarted steps, matching the template's wording. The hook runs\n`gitleaks protect --staged --redact` on each commit and blocks on a\nhit; if the gitleaks CLI isn't installed it warns and lets the commit\nthrough, since pr.yaml's \"Secrets Scan (gitleaks)\" catches the same\nthing in CI.\n\nCloses #299\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n* fix: make .gitleaks.toml extend the built-in rules -- it defined none\n\nCopilot flagged on the hook that an allowlist-only .gitleaks.toml has no\ndetection rules. Verified against gitleaks v8.24.0 source and by\nexperiment, and it is worse than the hook: cmd/root.go loads\n(source)/.gitleaks.toml IN PLACE of the defaults whenever the file\nexists, and config.Translate only merges the built-in rules when\n[extend] useDefault = true. pr.yaml's \"Secrets Scan (gitleaks)\" runs\n`gitleaks detect --source .` with no --config, so it has been loading\nthis rule-less file too -- the CI gate has been passing while scanning\nfor nothing.\n\nRepro (throwaway repo, one commit with a synthetic ghp_ token):\n  no .gitleaks.toml            -> leaks found: 1  (built-in rules)\n  this repo's file, as-was     -> no leaks found  (zero rules)\n  this repo's file + [extend]  -> leaks found: 1\n\nSafe to turn on here: a full-history scan of AuditTrail (437 commits)\nwith the fixed config finds nothing, so CI will not go red on merge.\n\nThe same allowlist-only file ships from repo-template and is present\nin every fleet repo -- tracked separately; this PR fixes AuditTrail only.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 5 <noreply@anthropic.com>",
          "timestamp": "2026-09-15T22:25:14-04:00",
          "tree_id": "9bed683e75521cfa498e41fa3ed0cb98d92fec63",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/f068e6421119856259bf034f7d1a2a5042702167"
        },
        "date": 1789526059887,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 6700900.666666667,
            "unit": "ns",
            "range": "± 23101.33096454257"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 51637298.333333336,
            "unit": "ns",
            "range": "± 2675458.1625901633"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 7105979.333333333,
            "unit": "ns",
            "range": "± 238320.93940804558"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 40726269.833333336,
            "unit": "ns",
            "range": "± 1214748.3278841479"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 11868776.666666666,
            "unit": "ns",
            "range": "± 6873507.923697283"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 48354601.833333336,
            "unit": "ns",
            "range": "± 2456498.1834066827"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 26106837.666666668,
            "unit": "ns",
            "range": "± 796889.1338607481"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 197545690,
            "unit": "ns",
            "range": "± 67088210.83574776"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 6888802.833333333,
            "unit": "ns",
            "range": "± 210475.7319130482"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 44810261.5,
            "unit": "ns",
            "range": "± 4430953.1419866085"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "98f42d4f2411b6dd473bfd5a5e95dac1b715ea68",
          "message": "chore: add changelog fragment tooling (baseline item 19, part 1 of 2) (#311)\n\n* chore: add changelog fragment tooling (baseline item 19, part 1 of 2)\n\nCopies scripts/changelog.ps1 and changelog/unreleased/README.md from\nrepo-template verbatim, and creates the `no-changelog` label the check\nhonours. This is the non-protected half; the pr.yaml `changelog-check`\njob follows in a separate protected PR and MUST merge after this one --\nthat job fails closed if scripts/changelog.ps1 is not already on main\n(it refuses to run a PR-controlled copy of its own validator).\n\nVerified against this repo's layout: `bump` reads the em-dash\n\"## [0.4.1] — 2026-09-15\" heading as 0.4.1 -> 0.4.2; `check` fails on\na src/ change with no fragment, passes with the no-changelog label or\nan added fragment, and rejects a malformed fragment.\n\nRefs #304\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n* fix: close a fragment-check bypass; align CHANGELOG headings with the tool\n\nTwo Copilot findings on the changelog tooling, both verified:\n\n1. `check` counted ANY added path under changelog/unreleased/ as a\n   fragment, but Get-Fragments only enumerates direct *.md children --\n   so `changelog/unreleased/sub/x.md` or `y.txt` satisfied the gate while\n   never being validated or assembled. Reproduced (src/ change + only\n   those two files -> passed). Predicate now requires a direct .md child;\n   the same probe now fails, and a real fragment still passes.\n\n2. `assemble` writes `## [x.y.z] - date` (Keep-a-Changelog's hyphen) but\n   every existing heading here used an em dash. Fixed in CHANGELOG.md,\n   not the script: the file's own header claims Keep-a-Changelog, whose\n   format is the hyphen, and the script is shared template code.\n   Normalized the 7 existing headings; a scratch `assemble` now inserts\n   a heading identical in form to its neighbours.\n\nFix 1 also applies to repo-template's copy; raised separately.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 5 <noreply@anthropic.com>",
          "timestamp": "2026-09-16T10:47:01-04:00",
          "tree_id": "fe6fcee478794145ab3944da2da870d30ad5f38a",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/98f42d4f2411b6dd473bfd5a5e95dac1b715ea68"
        },
        "date": 1789570592211,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 6757586.333333333,
            "unit": "ns",
            "range": "± 46772.201063594744"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 51785743.333333336,
            "unit": "ns",
            "range": "± 2499726.854042324"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 7726314,
            "unit": "ns",
            "range": "± 613005.7992458147"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 42687732.666666664,
            "unit": "ns",
            "range": "± 1293939.464948161"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 11963878.333333334,
            "unit": "ns",
            "range": "± 7005243.522586873"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 51557875.666666664,
            "unit": "ns",
            "range": "± 582845.779953268"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 315859925,
            "unit": "ns",
            "range": "± 421029891.94612026"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 447856830.3333333,
            "unit": "ns",
            "range": "± 290193177.6997314"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 7325739.666666667,
            "unit": "ns",
            "range": "± 382812.9769813627"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 45781192,
            "unit": "ns",
            "range": "± 4208350.43677199"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "af91d11f2b6165aff20e72988bcc9fe716bbf384",
          "message": "ci: add security-alert triage workflow (baseline item 20) (#310)\n\n* ci: add security-alert triage workflow (baseline item 20)\n\nCopies .github/workflows/security-alerts.yml and scripts/security-alerts.ps1\nfrom repo-template verbatim. The script ships in the same PR because the\nworkflow sparse-checks-out scripts/security-alerts.ps1 at run time -- a\nworkflow-only split would land a nightly job that can't find its own\nlogic (the protected-file-split \"needs supporting files\" lesson).\n\nNightly it opens one `security`-labelled issue per open code-scanning,\nsecret-scanning, and Dependabot alert, and closes each when its alert\ncloses; Mondays it posts a stale-alerts summary. Issues are matched by\na body marker, so the existing `security`-labelled baseline issues are\nignored, not touched.\n\nHeads-up for the first run: AuditTrail currently has 13 open\ncode-scanning alerts (10 Scorecard -- 7 of them the known\npull_request_target finding on pr.yaml -- and 3 InspectCode), so\nexpect ~13 new issues the first night. That is the intended\n\"surface them for triage\" behaviour, not a bug.\n\nSecret-scanning and Dependabot reads need a SECURITY_ALERTS_TOKEN\nrepository secret (fine-grained PAT: Secret scanning alerts read,\nDependabot alerts read, Metadata read). Without it those two kinds are\nskipped with a notice; code-scanning works on GITHUB_TOKEN alone.\n\nCloses #305\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n* fix: harden security-alerts workflow and script per review\n\nFour Copilot findings, each checked against the code/API before acting:\n\n- Both privileged checkouts now pin `ref: main`. Without it a\n  workflow_dispatch checks out the branch selected at dispatch, so a\n  branch carrying an edited scripts/security-alerts.ps1 would run with\n  SECURITY_ALERTS_TOKEN (a PAT scoped to every repo's secret-scanning\n  alerts), issues: write and, in the autofix job, security-events:\n  write. Requires write access to trigger, but it is the same\n  trusted-from-main rule pr.yaml already applies to its config and\n  validator, and costs nothing on schedule runs (already main).\n\n- Get-TrackedIssues: the issues listing is newest-first (confirmed\n  against the live API) and state=all includes closed summaries, so the\n  last-assignment-wins loop let an older CLOSED summary displace the\n  newer OPEN one -- the next run would then open a duplicate summary\n  instead of commenting. Now keeps the OPEN summary (else the newest).\n\n- Autofix mode: a failed `gh issue comment` was piped to Out-Null and\n  never counted, contradicting the documented \"exit 1 if any issue\n  create/close/comment failed\" contract. Now counted, and the mode\n  exits 1 when any write failed. Deliberately NOT treating a rejected\n  autofix POST as a failure: 403/404 there means \"not enabled\" or \"no\n  autofix for this alert\", an expected outcome that is already\n  recorded on the issue -- failing the job for it would be noise.\n\nAll three script/workflow changes apply to repo-template's copies too;\nraised separately.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 5 <noreply@anthropic.com>",
          "timestamp": "2026-09-16T11:14:43-04:00",
          "tree_id": "70d4c09da8c1d49368955a3772071eca74009599",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/af91d11f2b6165aff20e72988bcc9fe716bbf384"
        },
        "date": 1789572175849,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 1944451.3333333333,
            "unit": "ns",
            "range": "± 36897.20771729662"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 11631989.333333334,
            "unit": "ns",
            "range": "± 781158.8239675292"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 3892443.6666666665,
            "unit": "ns",
            "range": "± 62777.85031628061"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 25492750.666666668,
            "unit": "ns",
            "range": "± 3434491.8994463114"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 6169137.666666667,
            "unit": "ns",
            "range": "± 4717004.054745908"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 21078858.5,
            "unit": "ns",
            "range": "± 298677.1103934816"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 12178473.833333334,
            "unit": "ns",
            "range": "± 105555.0485970867"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 55965549.833333336,
            "unit": "ns",
            "range": "± 6421507.208133487"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 4678700.333333333,
            "unit": "ns",
            "range": "± 550622.4220228716"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 31699969.5,
            "unit": "ns",
            "range": "± 5026610.774073023"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "398492e2c0edab930643133d32b42e57ed30f22e",
          "message": "ci: add changelog-fragment check to pr.yaml (baseline item 19, part 2 of 2) (#312)\n\n* ci: add changelog-fragment check to pr.yaml (baseline item 19, part 2 of 2)\n\nAdds the template's `changelog-check` job, placed before inspectcode as\nin the template, with the checkout pinned to the SHA this repo already\nuses. Fails any non-Dependabot PR that changes src/ without adding a\nfragment under changelog/unreleased/ (or carrying `no-changelog`).\n\nORDERING: merge only after #311 (scripts/changelog.ps1 + fragment dir)\nis on main. The job deliberately fails closed if the script is missing\nfrom origin/main, refusing to run a PR-controlled copy of its own\nvalidator -- so merging this first would fail every subsequent PR.\n\nCloses #304\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n* fix: fetch main fully in changelog-check -- shallow base breaks the merge base\n\nCopilot flagged that `git fetch origin $BASE_SHA --depth=1` leaves the\nbase commit shallow. Reproduced: a PR branched 5 commits behind main,\nchecked out CI-style (PR head only, full depth), then main --depth=1\nand BASE_SHA --depth=1 -> `git diff BASE...HEAD` fails with \"fatal: no\nmerge base\". That is the normal state of any PR once anything else has\nmerged, so the template job as written would have failed valid PRs.\nDropping --depth=1 from both fetches keeps the repo unshallow;\nre-tested the same scenario and the check passes. Cost is negligible:\nthe PR head's history already contains most of main's.\n\nSame defect is in repo-template's pr.yaml; raised separately.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 5 <noreply@anthropic.com>",
          "timestamp": "2026-09-16T11:32:19-04:00",
          "tree_id": "1a4014060fe5bbc3f4eae8d737f6af7f8a702072",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/398492e2c0edab930643133d32b42e57ed30f22e"
        },
        "date": 1789573172397,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 5637759.666666667,
            "unit": "ns",
            "range": "± 85316.00343624479"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 39397910.5,
            "unit": "ns",
            "range": "± 12077200.026331475"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 9061646.666666666,
            "unit": "ns",
            "range": "± 1917357.4961934807"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 47505100,
            "unit": "ns",
            "range": "± 10653383.63682755"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 11907105.5,
            "unit": "ns",
            "range": "± 6193130.006615314"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 46601338,
            "unit": "ns",
            "range": "± 1803282.528527352"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 26671838.333333332,
            "unit": "ns",
            "range": "± 1061761.9716684779"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 188902635.66666666,
            "unit": "ns",
            "range": "± 19883860.834135063"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "64d2d49c9711d11675700c1d6d1bee9ef0e21c83",
          "message": "ci: pin every workflow action to a commit SHA with an exact # vX.Y.Z comment (#315)\n\nRan repo-template's scripts/pin-actions.ps1 -PinTags: tag references become\nSHA pins and major-only comments (# v7) become the exact tag on the pinned\ncommit (# v7.0.1), so zizmor's ref-version-mismatch stops firing when the\nmajor tag moves on. Only the ref/comment text changed. Dependabot keeps the\nprecision it finds, so this stays converted.\n\n51 already exact, 51 line(s) rewritten, 0 tag reference(s), 0 pinned SHA(s) with no tag\n\nRefs Chris-Wolfgang/repo-template#447\n\nCo-authored-by: Chris Wolfgang <cwolfgan@ptd.net>\nCo-authored-by: Claude Opus 5 <noreply@anthropic.com>",
          "timestamp": "2026-09-16T21:44:54-04:00",
          "tree_id": "e31eae5f75be0c8b264e6550539eb55482e906d6",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/64d2d49c9711d11675700c1d6d1bee9ef0e21c83"
        },
        "date": 1789610096984,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 3696654.6666666665,
            "unit": "ns",
            "range": "± 62092.20854771824"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 22949937.333333332,
            "unit": "ns",
            "range": "± 2030827.9827652397"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 24369103.833333332,
            "unit": "ns",
            "range": "± 32069063.637248054"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 104986180.83333333,
            "unit": "ns",
            "range": "± 126498869.40087983"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 8355868.5,
            "unit": "ns",
            "range": "± 5827716.815875322"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 30489958.166666668,
            "unit": "ns",
            "range": "± 727285.8121291336"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 20778945.833333332,
            "unit": "ns",
            "range": "± 603408.3620271875"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 130190904.33333333,
            "unit": "ns",
            "range": "± 15656829.06309117"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 146934235.33333334,
            "unit": "ns",
            "range": "± 121259126.63631596"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 36344259.666666664,
            "unit": "ns",
            "range": "± 4280296.9746647645"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "def5bca69c42fbb03b15caf5884cf1ca0a7cbadf",
          "message": "chore: take template updates via scripts/upgrade.ps1 (safe bucket) + .template-version (#339)\n\n* chore: take template updates via scripts/upgrade.ps1 (safe bucket) and stamp .template-version\n\nBase = repo-template 44d150679 (last template sync in this repo's history).\nIn sync : 3 file(s);Safe    : 23 file(s);Review  : 20 file(s);\n\nApplied the safe bucket (template changed, local untouched since the base, or\nnew in the template), plus: license-audit.yaml taken from the template where\nthe local allowlist was a subset (old .github/license/ layout removed),\ntfm-parity wired into pr.yaml Stage 2 + build-pr.ps1 where the anchors exist,\nand .template-version stamped with this repo's placeholder values. Review\nbucket (customised here AND changed upstream) untouched; sidecars discarded.\n\nRelease build of the solution after the change: ok\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n* chore: keep this repo's own license-audit workflow (generates the packed THIRD-PARTY-NOTICES.md); drop the template's config\n\nThe sweep took the template's nuget-license workflow because the allowlist was a\nsubset, but AuditTrail's workflow is a different tool (dotnet-project-licenses)\nthat also generates THIRD-PARTY-NOTICES.md, which every src package includes.\nRestored the original workflow and .github/license/; removed the unconsumed\n.github/license-audit/*. Template follow-up: notices generation.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n* chore: review follow-ups (round 4)\n\n- `scripts/Setup-BranchRuleset.ps1` updated to the template version (the old copy lacked `-RequireLinearHistory`, which `Fix-BranchRuleset.ps1` now passes); repository placeholder filled\n- `.github/workflows/sbom.yaml`: updated to the template version from repo-template#572 (exact net10.0 match / workload restore)\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Chris Wolfgang <cwolfgan@ptd.net>\nCo-authored-by: Claude Opus 5 <noreply@anthropic.com>",
          "timestamp": "2026-09-17T20:53:06-04:00",
          "tree_id": "ee65819005040b0b858d2bf84d19909d6daba449",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/def5bca69c42fbb03b15caf5884cf1ca0a7cbadf"
        },
        "date": 1789693324522,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 4740367.666666667,
            "unit": "ns",
            "range": "± 21385.45571956168"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 29141268.666666668,
            "unit": "ns",
            "range": "± 2447280.3670708295"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 6157758.666666667,
            "unit": "ns",
            "range": "± 110791.19120820632"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 38817859.5,
            "unit": "ns",
            "range": "± 213625.39181239667"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 10239201.666666666,
            "unit": "ns",
            "range": "± 6685163.642980352"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 39079953.5,
            "unit": "ns",
            "range": "± 1045171.2693625863"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 24047899,
            "unit": "ns",
            "range": "± 1012443.453206647"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 452069222,
            "unit": "ns",
            "range": "± 552591021.374873"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 6210002.5,
            "unit": "ns",
            "range": "± 233064.1237020404"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 39559388.333333336,
            "unit": "ns",
            "range": "± 4734329.524683758"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5259cfa2882d2a0af4368c264cbe4509110f4ba6",
          "message": "ci(guard): configuration-only PRs pass the protected-file guard; mixed PRs fail and cannot be bypassed (#341)\n\nTemplate change repo-template#582: a PR whose only changes are protected files\n(workflows, Directory.Build.props, .editorconfig, ...) passes the guard with a\nwarning banner and merges on review with the ruleset active; a PR that mixes\nprotected files with anything else fails and must be split. The diff is now\ntaken against the merge base with main, so a PR that is merely behind main is\nnot blamed for files main changed since it branched. Ends the\ndisable-ruleset / merge / re-enable routine.\n\nCo-authored-by: Chris Wolfgang <cwolfgan@ptd.net>\nCo-authored-by: Claude Opus 5 <noreply@anthropic.com>",
          "timestamp": "2026-09-19T09:15:23-04:00",
          "tree_id": "86c36e908103869e23f769e219ce60b1603c88a7",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/5259cfa2882d2a0af4368c264cbe4509110f4ba6"
        },
        "date": 1789824273429,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 6682954,
            "unit": "ns",
            "range": "± 82240.85886589464"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 49823735.5,
            "unit": "ns",
            "range": "± 13146095.197309503"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 6493584.666666667,
            "unit": "ns",
            "range": "± 133474.0818336404"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 38857890.833333336,
            "unit": "ns",
            "range": "± 869790.4370653504"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 11577995,
            "unit": "ns",
            "range": "± 6795235.653126313"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 56043997.333333336,
            "unit": "ns",
            "range": "± 8584916.814714417"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 163994001.16666666,
            "unit": "ns",
            "range": "± 188427406.4185728"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 561719759.3333334,
            "unit": "ns",
            "range": "± 473611993.5180991"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 6757167.166666667,
            "unit": "ns",
            "range": "± 313744.89768812706"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 43159934.666666664,
            "unit": "ns",
            "range": "± 3897416.856171577"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3119c13cc468b35bdf5a576b9162cda335d5512f",
          "message": "ci(guard): find the merge base on a shallow checkout and fail closed when it cannot (#342)\n\nrepo-template#584: the detect job's checkout is depth 1, so the guard's\nthree-dot diff had no merge base, failed silently and reported \"no protected\nconfiguration files changed\" for every PR. Deepen the PR head until a merge\nbase exists, diff against it explicitly, and error out if none can be found.\n\nCo-authored-by: Chris Wolfgang <cwolfgan@ptd.net>\nCo-authored-by: Claude Opus 5 <noreply@anthropic.com>",
          "timestamp": "2026-09-19T13:46:48-04:00",
          "tree_id": "0c0b1b53d52504339dc4e826fc9aed3de5b6f0d2",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/3119c13cc468b35bdf5a576b9162cda335d5512f"
        },
        "date": 1789840566102,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 6912897.833333333,
            "unit": "ns",
            "range": "± 35170.08469329202"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 56775813.5,
            "unit": "ns",
            "range": "± 2245930.8216187335"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 7385236.666666667,
            "unit": "ns",
            "range": "± 184684.74514786905"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 42870173.166666664,
            "unit": "ns",
            "range": "± 1054009.2027322785"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 12178173,
            "unit": "ns",
            "range": "± 7070133.966159976"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 56051848.833333336,
            "unit": "ns",
            "range": "± 4407257.715394499"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 87036063.83333333,
            "unit": "ns",
            "range": "± 72287315.7245898"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 260270259.16666666,
            "unit": "ns",
            "range": "± 146141387.4298534"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 7755064.666666667,
            "unit": "ns",
            "range": "± 134861.73653165426"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 42636025.5,
            "unit": "ns",
            "range": "± 4507471.5414344"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "acaafb63efe4655b0e560f032b44b00056ebe218",
          "message": "chore(deps): bump the github-actions group with 4 updates (#348)\n\nBumps the github-actions group with 4 updates: [github/codeql-action/upload-sarif](https://github.com/github/codeql-action), [benchmark-action/github-action-benchmark](https://github.com/benchmark-action/github-action-benchmark), [github/codeql-action/init](https://github.com/github/codeql-action) and [github/codeql-action/analyze](https://github.com/github/codeql-action).\n\n\nUpdates `github/codeql-action/upload-sarif` from 4.37.9 to 4.38.0\n- [Release notes](https://github.com/github/codeql-action/releases)\n- [Changelog](https://github.com/github/codeql-action/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/github/codeql-action/compare/v4.37.9...b96794f015dfd88f77b49b1c93e0fa7110f94c63)\n\nUpdates `benchmark-action/github-action-benchmark` from 1.22.1 to 1.22.2\n- [Release notes](https://github.com/benchmark-action/github-action-benchmark/releases)\n- [Changelog](https://github.com/benchmark-action/github-action-benchmark/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/benchmark-action/github-action-benchmark/compare/52576c92bccf6ac60c8223ec7eb2565637cae9ba...4322e5726e6334590d251fc4f92bec0efafc45dc)\n\nUpdates `github/codeql-action/init` from 4.37.9 to 4.38.0\n- [Release notes](https://github.com/github/codeql-action/releases)\n- [Changelog](https://github.com/github/codeql-action/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/github/codeql-action/compare/cdf488f595d80d6e07e03d4674febd5ab45fa938...b96794f015dfd88f77b49b1c93e0fa7110f94c63)\n\nUpdates `github/codeql-action/analyze` from 4.37.9 to 4.38.0\n- [Release notes](https://github.com/github/codeql-action/releases)\n- [Changelog](https://github.com/github/codeql-action/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/github/codeql-action/compare/cdf488f595d80d6e07e03d4674febd5ab45fa938...b96794f015dfd88f77b49b1c93e0fa7110f94c63)\n\n---\nupdated-dependencies:\n- dependency-name: github/codeql-action/upload-sarif\n  dependency-version: 4.38.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: github-actions\n- dependency-name: benchmark-action/github-action-benchmark\n  dependency-version: 1.22.2\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: github-actions\n- dependency-name: github/codeql-action/init\n  dependency-version: 4.38.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: github-actions\n- dependency-name: github/codeql-action/analyze\n  dependency-version: 4.38.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: github-actions\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-09-22T12:50:44-04:00",
          "tree_id": "4507567bdac7722a78ee35eee2cd1aedef806008",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/acaafb63efe4655b0e560f032b44b00056ebe218"
        },
        "date": 1790096400496,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 4827906.666666667,
            "unit": "ns",
            "range": "± 18636.905599732305"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 29280674.666666668,
            "unit": "ns",
            "range": "± 2705305.329426853"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 6830973.666666667,
            "unit": "ns",
            "range": "± 145744.231132259"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 39595548.666666664,
            "unit": "ns",
            "range": "± 701378.090184127"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 10770049.833333334,
            "unit": "ns",
            "range": "± 7244937.015774142"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 40689829.5,
            "unit": "ns",
            "range": "± 583170.0830709683"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 24279986.333333332,
            "unit": "ns",
            "range": "± 877807.7166853418"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 422830995.8333333,
            "unit": "ns",
            "range": "± 493305179.5148324"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 6531288.5,
            "unit": "ns",
            "range": "± 216836.1002208811"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 43240942.666666664,
            "unit": "ns",
            "range": "± 4363418.903129212"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c82bcc17b0a9456708c00cd78e9336683c26c7fc",
          "message": "Bump the dotnet-dependencies group with 14 updates (#349)\n\nBumps Meziantou.Analyzer from 3.0.228 to 3.0.259\nBumps Microsoft.AspNetCore.Identity.EntityFrameworkCore from 10.0.11 to 10.0.12\nBumps Microsoft.Bcl.TimeProvider from 10.0.11 to 10.0.12\nBumps Microsoft.Data.SqlClient from 7.0.2 to 7.0.3\nBumps Microsoft.EntityFrameworkCore.Design from 10.0.11 to 10.0.12\nBumps Microsoft.EntityFrameworkCore.SqlServer from 9.0.19 to 9.0.20\nBumps Microsoft.EntityFrameworkCore.Tasks from 10.0.11 to 10.0.12\nBumps Microsoft.Extensions.DependencyInjection.Abstractions from 10.0.11 to 10.0.12\nBumps Microsoft.Extensions.Hosting from 10.0.11 to 10.0.12\nBumps Microsoft.Extensions.Logging.Abstractions from 10.0.11 to 10.0.12\nBumps Microsoft.SourceLink.GitHub from 10.0.400 to 10.0.401\nBumps SonarAnalyzer.CSharp from 10.33.0.1635 to 10.34.0.3385\nBumps System.Configuration.ConfigurationManager from 10.0.11 to 10.0.12\nBumps System.Security.Cryptography.Xml from 10.0.11 to 10.0.12\n\n---\nupdated-dependencies:\n- dependency-name: Meziantou.Analyzer\n  dependency-version: 3.0.259\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: dotnet-dependencies\n- dependency-name: Microsoft.AspNetCore.Identity.EntityFrameworkCore\n  dependency-version: 10.0.12\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: dotnet-dependencies\n- dependency-name: Microsoft.Bcl.TimeProvider\n  dependency-version: 10.0.12\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: dotnet-dependencies\n- dependency-name: Microsoft.Data.SqlClient\n  dependency-version: 7.0.3\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: dotnet-dependencies\n- dependency-name: Microsoft.EntityFrameworkCore.Design\n  dependency-version: 10.0.12\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: dotnet-dependencies\n- dependency-name: Microsoft.EntityFrameworkCore.SqlServer\n  dependency-version: 9.0.20\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: dotnet-dependencies\n- dependency-name: Microsoft.EntityFrameworkCore.Tasks\n  dependency-version: 10.0.12\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: dotnet-dependencies\n- dependency-name: Microsoft.Extensions.DependencyInjection.Abstractions\n  dependency-version: 10.0.12\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: dotnet-dependencies\n- dependency-name: Microsoft.Extensions.Hosting\n  dependency-version: 10.0.12\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: dotnet-dependencies\n- dependency-name: Microsoft.Extensions.Logging.Abstractions\n  dependency-version: 10.0.12\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: dotnet-dependencies\n- dependency-name: Microsoft.SourceLink.GitHub\n  dependency-version: 10.0.401\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: dotnet-dependencies\n- dependency-name: SonarAnalyzer.CSharp\n  dependency-version: 10.34.0.3385\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: dotnet-dependencies\n- dependency-name: System.Configuration.ConfigurationManager\n  dependency-version: 10.0.12\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: dotnet-dependencies\n- dependency-name: System.Security.Cryptography.Xml\n  dependency-version: 10.0.12\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: dotnet-dependencies\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Chris Wolfgang <210299580+Chris-Wolfgang@users.noreply.github.com>",
          "timestamp": "2026-09-22T13:17:49-04:00",
          "tree_id": "e8c43eb41e38b34e4be108da981d703b70288a88",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/c82bcc17b0a9456708c00cd78e9336683c26c7fc"
        },
        "date": 1790098093087,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 3399011.6666666665,
            "unit": "ns",
            "range": "± 44159.52407276751"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 19839964.833333332,
            "unit": "ns",
            "range": "± 935789.9335515067"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 6060776.166666667,
            "unit": "ns",
            "range": "± 191941.69157411667"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 37611811.333333336,
            "unit": "ns",
            "range": "± 870922.0251413631"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 9153362.166666666,
            "unit": "ns",
            "range": "± 6630696.325886922"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 33033230.666666668,
            "unit": "ns",
            "range": "± 278626.9374671684"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 22008916.333333332,
            "unit": "ns",
            "range": "± 1726713.4938168905"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 270650143.3333333,
            "unit": "ns",
            "range": "± 290405642.2372723"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 6929567,
            "unit": "ns",
            "range": "± 116941.47949722545"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 42655607.333333336,
            "unit": "ns",
            "range": "± 3913994.421979844"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c0b4bbeb8d1ae7b33815b65f47c53a1b2db49b0c",
          "message": "security(ci): silence zizmor self-repository on the docfx call, with the reason (#352)\n\nzizmor flags `uses: ./.github/workflows/docfx.yaml` and asks for GitHub's\ndedicated `$/` self-repository syntax. We cannot switch yet: actionlint is a\nrequired check here and rejects `$/` until rhysd/actionlint#732 ships. The\nalert has therefore been sitting open with nothing to do about it.\n\nrepo-template resolved this by keeping `./` and carrying a rule-specific inline\nignore plus the reason and the exit condition. This takes the same four lines,\nso the alert closes and the next reader learns why the preferred syntax is not\nin use and when to switch.\n\nNo behaviour change: the workflow call is byte-identical apart from the comment.\n\nCo-authored-by: Claude Opus 5 <noreply@anthropic.com>",
          "timestamp": "2026-09-23T10:47:56-04:00",
          "tree_id": "c98ddde8b1c5f41f6af4b1310d4992e481e7d859",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/c0b4bbeb8d1ae7b33815b65f47c53a1b2db49b0c"
        },
        "date": 1790175480708,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 6898852.5,
            "unit": "ns",
            "range": "± 34678.66093147197"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 50219939.166666664,
            "unit": "ns",
            "range": "± 2336806.585220594"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 7068679.333333333,
            "unit": "ns",
            "range": "± 258199.73540717142"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 40808990.666666664,
            "unit": "ns",
            "range": "± 1132465.3424354023"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 12377711.666666666,
            "unit": "ns",
            "range": "± 7070867.319894522"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 53228793.666666664,
            "unit": "ns",
            "range": "± 3821199.0997073594"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 52854152.333333336,
            "unit": "ns",
            "range": "± 6841248.826536156"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 540111997.8333334,
            "unit": "ns",
            "range": "± 550808483.0232967"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 6448842.333333333,
            "unit": "ns",
            "range": "± 166990.11245380167"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 43092998.666666664,
            "unit": "ns",
            "range": "± 5868719.088942776"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a3bbe78a1cb788e154b474652db065170b627466",
          "message": "fix(cli): unsubscribe the Ctrl+C handler before the token source is disposed (#355)\n\n* fix(cli): unsubscribe the Ctrl+C handler before the token source is disposed\n\nClears the repository's three open InspectCode warnings. Each was checked\nagainst the code rather than taken on the analyzer's word; all three were real.\n\nAccessToDisposedClosure, Cli/Program.cs:37 — the genuine bug. Console.CancelKeyPress\nis a STATIC event, so the handler added in Main outlives the method. `cancellation`\nis a `using` local, so once Main returns the CancellationTokenSource is disposed\nwhile the handler is still subscribed; a Ctrl+C arriving in that window calls\nCancel() on a disposed source and throws during shutdown. The handler is now held\nin a variable and removed in the existing finally block.\n\nRedundantCast, EntityFrameworkCore/Internal/AuditCapture.cs:91 — correct, and this\nis the finding class that most often is not, so it was verified: ReadKeyValues\nreturns IReadOnlyList<object?> and object?[] converts to it but not the reverse,\nso best-common-type resolution already produces IReadOnlyList<object?> and the\ncast changes nothing. Rather than just deleting it, the variable now states its\ntype and the conditional is target-typed - which is what the sibling\nResolvePostSaveKey already does, via its return type.\n\nInvalidXmlDocComment, Npgsql test support — <paramref name=\"connection\"/> on a\nCLASS summary, where there is no such parameter; `connection` belongs to\nBeginBinaryImport. Now <c>connection</c>. Documentation only.\n\nTEST-CODE CHANGE: one XML doc comment in\ntests/.../TestSupport/FakeNpgsqlBinaryImporterFactory.cs. No behaviour, no\nassertions, no coverage effect.\n\nVerified locally: EntityFrameworkCore builds clean on net6.0, net8.0 and net10.0\n(0 Error(s)); tests pass 286/307/309 across those three TFMs, Npgsql unit 23/23,\nCli unit 30/30.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n* chore: re-fire CI so the perf-impact-acknowledged label is visible to the gate\n\nEmpty on purpose. pr-benchmarks.yaml reads the override label from the event\npayload:\n\n  LABELS: ${{ join(github.event.pull_request.labels.*.name, ',') }}\n\nand its trigger has no `labeled` type, so adding the label neither starts a run\nnor reaches a re-run - a re-run replays the original payload, which predates the\nlabel. A fresh `synchronize` event is the only way to make the documented\noverride take effect.\n\nThe three benchmarks over threshold are all _without_audit control paths, which\nthis PR cannot touch: it changes a CLI event-handler unsubscribe, a redundant\ncast whose removal emits identical IL, and an XML doc comment. Every audited path\nis flat or faster in the same run and allocations are unchanged. Reasoning in full\non the PR.\n\nWorth fixing separately: adding `labeled` to that workflow's trigger types would\nmake the override work as documented, without an empty commit.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n* fix(cli): close the shutdown race the unsubscribe alone left open\n\nReview finding on Program.cs:74, and it is right. Removing the handler stops\nFUTURE invocations; it does not wait for one already dispatched.\nConsole.CancelKeyPress runs handlers on their own thread, so a Ctrl+C that\narrived moments before Main returned can still be inside the lambda when the\n`using` disposes the CancellationTokenSource - reproducing the exact\nObjectDisposedException the previous commit claimed to prevent. A narrower\nwindow than the original bug, but the same bug, and the claim was wrong.\n\nMoved into ConsoleCancellationBridge. Disposal unsubscribes and then takes the\nsame lock the callback holds, so it cannot return until any in-flight callback\nhas left; the callback re-checks a shutdown flag under that lock and does\nnothing if it lost the race. The bridge is declared AFTER `cancellation` in\nMain, so `using` disposes it FIRST - unsubscribe and drain, then dispose the\nsource.\n\nExtracting it was not only for tidiness: the inline lock pushed Main to 70 lines\nand MA0051 (max 60) failed the Release build locally. Caught before pushing.\n\nVerified: build 0 Error(s), Cli unit tests 30/30, and `audittrail --help` runs\nand exits 0.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n* fix(cli): use System.Threading.Lock for the shutdown gate\n\nThe bridge added in 4bde2c3 guarded itself with a plain `object`, which tripped\nMA0158 (\"Use System.Threading.Lock\") - a NEW InspectCode alert introduced by the\nvery PR that clears three of them.\n\nSystem.Threading.Lock exists on net9.0+ and this project targets net10.0 only,\nso there is no multi-TFM conditional to worry about. C# 13 recognises it in a\n`lock` statement, so the statement bodies are unchanged; it takes the dedicated\nlock path rather than Monitor.\n\nVerified: build 0 Error(s), Cli unit tests 30/30.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 5 <noreply@anthropic.com>",
          "timestamp": "2026-09-23T20:03:57-04:00",
          "tree_id": "e7b2ffd330decff928254b446c8c03a18cb81695",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/a3bbe78a1cb788e154b474652db065170b627466"
        },
        "date": 1790208780102,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 6760569.833333333,
            "unit": "ns",
            "range": "± 4119.6740566862"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 50944611.5,
            "unit": "ns",
            "range": "± 2676661.876330479"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 6951615.333333333,
            "unit": "ns",
            "range": "± 55383.127036429905"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 45101066,
            "unit": "ns",
            "range": "± 4301453.010269785"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 11990730.666666666,
            "unit": "ns",
            "range": "± 6875987.851055027"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 52242348.333333336,
            "unit": "ns",
            "range": "± 1365276.8036062627"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 26983184.666666668,
            "unit": "ns",
            "range": "± 1221856.5648488915"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 449799735.3333333,
            "unit": "ns",
            "range": "± 529800437.80782515"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 6527010,
            "unit": "ns",
            "range": "± 37244.35496823646"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 46421435.833333336,
            "unit": "ns",
            "range": "± 2636890.0876263944"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f98d1ee6611ba33f10e8c43fb1dc449cccd292f4",
          "message": "ci: re-run the gates on push to main so main's InspectCode alerts refresh (#358)\n\n* ci: re-run the gates on push to main so main's InspectCode alerts refresh\n\n#351 swapped this workflow from pull_request_target to pull_request. That fixed\neight critical DangerousWorkflow alerts, but it silently broke something I did\nnot port at the time: under pull_request_target the InspectCode SARIF was\nattributed to refs/heads/main, and under pull_request it is attributed to\nrefs/pull/N/merge. Main is therefore never re-scanned, and an alert stays open\nafter the code that caused it is fixed - which is exactly what #355 would have\nleft behind for alerts #528/#531/#536 and issues #333/#334/#335.\n\nrepo-template's pr.yaml has carried the push trigger and this rationale all\nalong. Porting it is four changes, not one, because this workflow still has the\nPR-shaped pieces the template moved out:\n\n- push: branches [main] added.\n- The protected-file classifier is gated to pull_request. It diffs the PR\n  against its merge base; on a push there is no PR and it would fail closed.\n- changelog-check is gated to pull_request. It reads\n  github.event.pull_request.base.sha, which a push does not have.\n- inspectcode-upload-sarif now allows push. Its fork/Dependabot guard, added in\n  #351, tests github.event.pull_request.head.repo.full_name - empty on a push,\n  so without this the one job the trigger exists for would skip and the change\n  would accomplish nothing.\n\nChecked every remaining github.event.pull_request reference for push behaviour:\nthe concurrency group falls back to github.ref, and the six \"fetch trusted\nconfiguration from main\" steps are no-ops when the run is already on main.\n\nCost, stated plainly: one full matrix run per merge to main.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n* ci: gate the trusted-config restoration to pull_request\n\nReview finding on this PR, and it corrects something I asserted. When I added the\npush trigger I checked every github.event.pull_request reference and called the\nsix \"fetch trusted configuration from main\" steps harmless on push - \"no-ops when\nthe run is already on main\". That is only true if main does not move.\n\nIt does. Those steps run `git fetch origin main:main-branch` and overwrite the\nchecked-out files from the MOVING main ref, not from the pushed SHA. If another\ncommit lands while the run is executing - routine here, several PRs often merge\nin a row - the run for SHA A is built and scanned with SHA B's configuration, so\nit no longer validates the merged result the trigger exists to validate.\n\nThe gitleaks job had the same problem and no guard at all: it fetched\n.gitleaks.toml from main unconditionally, so a push run could be scanned with a\nlater commit's allowlist.\n\nAll seven are now pull_request only. This does not weaken anything: on a push the\nchecked-out files ARE the trusted configuration, because the run is on main at\nthe pushed commit. Restoring them was never doing useful work there.\n\nRe-audited every remaining github.event.pull_request reference: PR_NUMBER sits\ninside the step gated above it, BASE_SHA/PR_LABELS inside changelog-check's\njob-level gate, and the SARIF upload's reference is the || branch after\ngithub.event_name == 'push' short-circuits.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 5 <noreply@anthropic.com>",
          "timestamp": "2026-09-23T20:45:40-04:00",
          "tree_id": "db08246bb2e711bf616cac9ac2a050498e801ef9",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/f98d1ee6611ba33f10e8c43fb1dc449cccd292f4"
        },
        "date": 1790211688240,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 4886286.666666667,
            "unit": "ns",
            "range": "± 28138.686826739682"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 28740946.666666668,
            "unit": "ns",
            "range": "± 2440282.8586334684"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 6311180.166666667,
            "unit": "ns",
            "range": "± 276038.3657108796"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 49317428.666666664,
            "unit": "ns",
            "range": "± 12656820.554457478"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 10218553,
            "unit": "ns",
            "range": "± 6940939.454600292"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 40257021.333333336,
            "unit": "ns",
            "range": "± 800723.00950849"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 21491064.666666668,
            "unit": "ns",
            "range": "± 1121765.0324744186"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 125246766.33333333,
            "unit": "ns",
            "range": "± 15092932.859293595"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 6752833,
            "unit": "ns",
            "range": "± 107281.4540729198"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 36879214.333333336,
            "unit": "ns",
            "range": "± 4531192.7060989505"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6a2838fddc4442e9a936159b9c98758eeba316da",
          "message": "fix(ci): keep the benchmark-regression label description under GitHub's limit (#357)\n\nSurfaced by the run behind #354:\n\n  HTTP 422: Validation Failed (.../labels)\n  description is too long (maximum is 100 characters)\n\nThe description is 104 characters. `|| true` keeps that from failing the step,\nso the consequence is quiet rather than loud: the label is never created or\nupdated from this workflow, and every run logs a 422 that reads like a real\nfailure while triaging something else - which is exactly what it cost while\ntriaging #354.\n\nShortened to 82 characters. The comment above the call already explains why\nlabel creation matters here (the first real run of this handler failed outright\nbecause `gh issue create --label` hard-fails on a missing label), so the fix\nbelongs with it.\n\nChecked the other three label-creating workflows in this repository -\ncoyote.yaml (53), fuzz.yaml (54) and shadow.yaml (73) are all within the limit.\n\nCo-authored-by: Claude Opus 5 <noreply@anthropic.com>",
          "timestamp": "2026-09-23T21:30:57-04:00",
          "tree_id": "622c33b204ff2aaa5c2157fc16df67d295780e7e",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/6a2838fddc4442e9a936159b9c98758eeba316da"
        },
        "date": 1790214010379,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 4793798,
            "unit": "ns",
            "range": "± 71315.88913418945"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 29140780,
            "unit": "ns",
            "range": "± 2701046.747545292"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 6117592.5,
            "unit": "ns",
            "range": "± 187691.68470659535"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 38944242.5,
            "unit": "ns",
            "range": "± 900777.1774934132"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 10189886.333333334,
            "unit": "ns",
            "range": "± 6751319.495386982"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 40025322.166666664,
            "unit": "ns",
            "range": "± 284873.70281641185"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 23162559.666666668,
            "unit": "ns",
            "range": "± 1229897.3267798957"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 211781448,
            "unit": "ns",
            "range": "± 57572560.84714833"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 6212646,
            "unit": "ns",
            "range": "± 141090.6507356175"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 38668538.5,
            "unit": "ns",
            "range": "± 4028332.1148198545"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "094696ac88e1d6f48b63d7dd8d415bbefced1dc9",
          "message": "fix(shadow): compare against 0.4.1, not a package three releases old (#356)\n\nTriaging #347 turned up why the shadow gate fired: BaselineVersion is still\n0.2.1, while 0.3.0, 0.4.0 and 0.4.1 have all shipped since.\nPackageValidationBaselineVersion was bumped to 0.4.1 after the release; this\nproperty was not.\n\nThe gate is therefore not measuring what it is for. It compares main against a\npackage three releases old, so every accumulated change since 0.2.1 reads as a\nregression - and, worse in the other direction, a regression introduced since\n0.4.1 is invisible inside that larger delta. Both failure modes are silent.\n\nBumped to 0.4.1 and the comment now says the property must be bumped after each\nrelease alongside PackageValidationBaselineVersion, so the next release does not\nrepeat it.\n\nVerified the baseline package restores and the sample builds against it\n(-p:UseBaselinePackage=true, 0 Error(s)).\n\nCo-authored-by: Claude Opus 5 <noreply@anthropic.com>",
          "timestamp": "2026-09-23T22:19:23-04:00",
          "tree_id": "6a4da2281d87c90f0618cb80d2ba6bffe65ec168",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/094696ac88e1d6f48b63d7dd8d415bbefced1dc9"
        },
        "date": 1790216895066,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 3685229.3333333335,
            "unit": "ns",
            "range": "± 44307.99585101241"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 22141755.166666668,
            "unit": "ns",
            "range": "± 2033373.2008995134"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 10665292.666666666,
            "unit": "ns",
            "range": "± 10066202.070955576"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 26238870.333333332,
            "unit": "ns",
            "range": "± 93505.44044243272"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 7876903.5,
            "unit": "ns",
            "range": "± 5306063.292393241"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 30085501.666666668,
            "unit": "ns",
            "range": "± 596871.5736004969"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 35446639,
            "unit": "ns",
            "range": "± 31092826.00127137"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 93117091,
            "unit": "ns",
            "range": "± 6152145.429585763"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 6461284.5,
            "unit": "ns",
            "range": "± 3096458.993941467"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 31748464,
            "unit": "ns",
            "range": "± 2834696.0987190497"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b9e798fc6af7a0429f1e15cedc345ce8e8f46eb3",
          "message": "ci(release): attach the SLSA provenance bundle to the GitHub Release (#359)\n\nAuditTrail has attested every release since #47 - attest-build-provenance binds\neach .nupkg by SHA-256 to this repository, commit and workflow run, signed\nkeylessly through the job's OIDC identity. That lands in GitHub's attestation\nstore, which is what `gh attestation verify` reads, exactly as SECURITY.md\ndocuments.\n\nTooling that audits the RELEASE PAGE never queries that store. OpenSSF\nScorecard's Signed-Releases check looks for an asset whose name ends in\n.intoto.jsonl, finds .nupkg and .bom.json, and scores 0 - a false negative on a\nrepository that has been doing this correctly for months. Anyone reading the\nrelease page without the gh CLI is in the same position.\n\nThe bundle the action writes IS that document. It is now copied to\nAuditTrail-<tag>.intoto.jsonl and attached alongside the packages.\n\nTo be exact about what this buys: NOTHING cryptographic. The attestation was\nalready real and already verifiable. This only makes the same evidence visible\nwhere tools and people look for it.\n\nUnlike repo-template, attesting and attaching already happen in the same job\nhere (update-release-artifacts holds contents/id-token/attestations write), so\nno artifact round-trip is needed. Staging fails loudly if the action reports no\nbundle, rather than letting the upload quietly omit it.\n\nSame change at source in repo-template#647.\n\nCo-authored-by: Claude Opus 5 <noreply@anthropic.com>",
          "timestamp": "2026-09-24T10:41:35-04:00",
          "tree_id": "aea83e2cd8afd8ca30690dea3ce1bcca4d0659a9",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/b9e798fc6af7a0429f1e15cedc345ce8e8f46eb3"
        },
        "date": 1790261461598,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 7021746.333333333,
            "unit": "ns",
            "range": "± 113889.18388650141"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 51846461.833333336,
            "unit": "ns",
            "range": "± 2636887.5173886986"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 7043967,
            "unit": "ns",
            "range": "± 262306.2498473874"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 43599082.166666664,
            "unit": "ns",
            "range": "± 1364042.0680995632"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 12035994,
            "unit": "ns",
            "range": "± 6788721.640034521"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 51177149.666666664,
            "unit": "ns",
            "range": "± 2809659.718655683"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 26309522,
            "unit": "ns",
            "range": "± 1169598.8795817993"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 145636483.33333334,
            "unit": "ns",
            "range": "± 33445631.914907455"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 6603751.166666667,
            "unit": "ns",
            "range": "± 161922.67252405803"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 51557481.666666664,
            "unit": "ns",
            "range": "± 10742607.345699942"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f0d326e87d84895b2dc807431c7d6672ca067615",
          "message": "ci(benchmarks): let the perf-impact-acknowledged label re-trigger the gate (#361)\n\n* ci(benchmarks): let the perf-impact-acknowledged label re-trigger the gate\n\nThe workflow documents an override - \"Add the 'perf-impact-acknowledged' label to\noverride\" - that could not work. The gate reads the label from the event payload:\n\n  LABELS: ${{ join(github.event.pull_request.labels.*.name, ',') }}\n\nand the trigger had no `labeled` type, so adding the label started nothing, and a\nre-run replays the ORIGINAL payload, which predates the label. On #355 the only\nway through was an empty commit, which re-runs every workflow on the PR rather\nthan this one.\n\n`labeled` added to the trigger types (with the three defaults spelled out, since\nnaming any type replaces them all). The job then ignores label events other than\nthe override, so an unrelated label does not pay for a full base-and-head\nBenchmarkDotNet run.\n\nKnown trade-off: on an unrelated label the job is skipped, and that skipped check\nrun becomes the latest for \"Benchmark delta vs base\" - visually superseding an\nearlier failure. It is not a required check so nothing is unblocked by it, but\nthe alternative is re-running the whole suite on every label. Raised on the PR so\nthe choice is visible rather than buried here.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n* ci(benchmarks): re-evaluate when the override label is removed too\n\nReview finding, and it is the symmetric half of what this PR set out to fix.\nAdding the label now re-runs the gate; removing it did not. So an acknowledged\nrun stayed green after the acknowledgement was withdrawn - the check and its\ncomment kept asserting an override that no longer existed, which is worse than\nthe original bug because it reads as a pass rather than as something stuck.\n\n`unlabeled` added to the trigger types, and the job guard now covers both label\nactions while still ignoring every other label, so an unrelated add or remove\ndoes not pay for a full base-and-head BenchmarkDotNet run. `github.event.label`\nis populated for both actions, so the same condition works for each.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 5 <noreply@anthropic.com>",
          "timestamp": "2026-09-24T14:28:15-04:00",
          "tree_id": "9a90e29341169940736d80e742b1e1f66efc6e72",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/f0d326e87d84895b2dc807431c7d6672ca067615"
        },
        "date": 1790275356210,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 2481352.6666666665,
            "unit": "ns",
            "range": "± 13457.235241063943"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 14564455.666666666,
            "unit": "ns",
            "range": "± 661651.7026822596"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 8645730,
            "unit": "ns",
            "range": "± 3873222.948729004"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 84612210.33333333,
            "unit": "ns",
            "range": "± 89269312.36657523"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 7813777,
            "unit": "ns",
            "range": "± 5479640.353599221"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 26271084.333333332,
            "unit": "ns",
            "range": "± 342422.3697720891"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 18774573.666666668,
            "unit": "ns",
            "range": "± 1483522.6145746256"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 90685023.5,
            "unit": "ns",
            "range": "± 15558773.148739813"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 81611956.66666667,
            "unit": "ns",
            "range": "± 41516072.398956195"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 302141322,
            "unit": "ns",
            "range": "± 228961955.80742916"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a266291ac5939eb729d8f39d1dde6ff26743429f",
          "message": "ci: retire the inline guard and the trusted-config restoration (#362)\n\n* ci: retire the inline guard and the trusted-config restoration\n\nFinishes the migration #351 started. That PR moved pr.yaml to `pull_request` and\nadded protected-files.yaml; this removes what the old pull_request_target model\nneeded and the new one does not. repo-template completed the same migration and\ncarries none of these steps.\n\nRemoved, 429 lines across eight jobs:\n\n- \"Detect protected configuration file changes\" (61 run-lines) inside the\n  REQUIRED \"Detect .NET Projects\" job. Protected Files Guard now does this\n  properly - from main, with no checkout, reading the PR's file list through the\n  API - and is a required check as of today. The inline copy ran from the PR's\n  OWN pr.yaml under `pull_request`, so it looked like a gate and was not one. A\n  required check that cannot be trusted is worse than no check there.\n- Seven \"Fetch trusted configuration files from main branch\" steps, plus the\n  gitleaks and changelog-script equivalents. Under `pull_request` the PR's own\n  copies are what run and what reviewers see; restoring main's versions over them\n  made CI validate something other than the merged result. They were also the\n  source of the race found on #358 (the fetch takes the MOVING main ref) and of\n  the .editorconfig-collapse bug recorded in the fleet notes.\n\nWhat replaces them: a PR cannot weaken a gate and pass it in the same change,\nbecause Protected Files Guard fails any PR mixing a protected file with anything\nelse, and nothing bypasses it. A configuration-only PR runs CI with the new\nconfiguration and is reviewed on its own - the documented, intended behaviour.\n\nKept deliberately: the TFM-parity step's own fetch of scripts/tfm-parity.ps1 from\nmain. Different purpose (the script may not be on the branch yet) and it skips\ngracefully; not part of this pattern.\n\ndetect-projects keeps its has-projects output and every required job name still\nexists.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n* docs(ci): the changelog check runs the PR's own script now, so say that\n\nReview finding. Removing \"Fetch trusted changelog script from main\" left the\ncomment above changelog-check still claiming the script \"is taken from main so a\nPR cannot weaken its own check\". That is now false, and falsely reassuring - it\ndescribes an integrity mechanism this workflow no longer has.\n\nThe comment now says what is true: the script, the fragments and the diff all\ncome from the PR head, and integrity comes from the guard instead -\nscripts/changelog.ps1 is a protected file, so protected-files.yaml fails any PR\nchanging it alongside anything else, and a change to it can only land as a\nconfiguration-only PR reviewed on its own.\n\nChecked the other comments the removal could have stranded. The tfm-parity one at\nline 440 makes the same claim and is still TRUE - that step's own fetch of\nscripts/tfm-parity.ps1 from main was deliberately kept - so it is left alone.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 5 <noreply@anthropic.com>",
          "timestamp": "2026-09-24T20:09:18-04:00",
          "tree_id": "b18f1596e31fc0944f1c0264c893c15255cb366d",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/a266291ac5939eb729d8f39d1dde6ff26743429f"
        },
        "date": 1790295539681,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 7017833.333333333,
            "unit": "ns",
            "range": "± 116980.52616710754"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 48000857,
            "unit": "ns",
            "range": "± 5723768.0177064305"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 7701802.5,
            "unit": "ns",
            "range": "± 684105.9094343507"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 41720622.666666664,
            "unit": "ns",
            "range": "± 471963.5607992775"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 12877320,
            "unit": "ns",
            "range": "± 7815435.863052744"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 51482139.333333336,
            "unit": "ns",
            "range": "± 396408.04975344957"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 52823286.333333336,
            "unit": "ns",
            "range": "± 4731696.425858947"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 134045153.33333333,
            "unit": "ns",
            "range": "± 16638942.380016414"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 7407394.5,
            "unit": "ns",
            "range": "± 1111731.4910049099"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 44594288.666666664,
            "unit": "ns",
            "range": "± 2818722.812016878"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ee20d5b6fb699b3c02a328c48c6c32373d8d0cf2",
          "message": "ci: run the schema integration tests in the integration workflow (#366)\n\nWolfgang.AuditTrail.EntityFrameworkCore.Schema.Tests.Integration has\nnever run in CI. integration.yaml names two projects explicitly and this\nis not one of them, and pr.yaml's sweep over ./tests reaches it but\nleaves IsTestProject false without RunIntegrationTests, so it discovers\nno test framework and runs nothing. The whole suite covering\nAuditSchemaMigrator against real SQL Server and PostgreSQL containers has\nonly ever been run by hand.\n\nAdd it to the restore, build and test steps alongside the other two. Both\nSDKs were already installed, so the project's net8.0 and net10.0 slots\nboth run without further setup.\n\nCo-authored-by: Claude Opus 5 <noreply@anthropic.com>",
          "timestamp": "2026-09-25T10:48:44-04:00",
          "tree_id": "a8f2d1f6e8af5e7c1e3f3327a1594367f8e88a05",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/ee20d5b6fb699b3c02a328c48c6c32373d8d0cf2"
        },
        "date": 1790348284307,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 6844508.666666667,
            "unit": "ns",
            "range": "± 34264.124391750236"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 51588691.666666664,
            "unit": "ns",
            "range": "± 15889311.423367482"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 6594932.333333333,
            "unit": "ns",
            "range": "± 117355.72786333581"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 50012078.333333336,
            "unit": "ns",
            "range": "± 12841830.920420278"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 12261447.166666666,
            "unit": "ns",
            "range": "± 7295298.831412552"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 49331976.666666664,
            "unit": "ns",
            "range": "± 1011378.941100878"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 61068739,
            "unit": "ns",
            "range": "± 17235463.9172767"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 175877505,
            "unit": "ns",
            "range": "± 58813578.41473786"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 6874997.666666667,
            "unit": "ns",
            "range": "± 915193.2694531431"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 41611504.666666664,
            "unit": "ns",
            "range": "± 3600825.784522813"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a2dfe45a13dd5347bd788b7d7fc37aa62fb601cd",
          "message": "Bump the dotnet-dependencies group with 4 updates (#382)\n\nBumps coverlet.collector from 10.0.1 to 10.1.0\nBumps Meziantou.Analyzer from 3.0.259 to 3.0.290\nBumps Microsoft.Data.SqlClient from 7.0.3 to 7.1.0\nBumps SonarAnalyzer.CSharp from 10.34.0.3385 to 10.35.0.4138\n\n---\nupdated-dependencies:\n- dependency-name: coverlet.collector\n  dependency-version: 10.1.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: dotnet-dependencies\n- dependency-name: coverlet.collector\n  dependency-version: 10.1.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: dotnet-dependencies\n- dependency-name: coverlet.collector\n  dependency-version: 10.1.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: dotnet-dependencies\n- dependency-name: coverlet.collector\n  dependency-version: 10.1.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: dotnet-dependencies\n- dependency-name: coverlet.collector\n  dependency-version: 10.1.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: dotnet-dependencies\n- dependency-name: coverlet.collector\n  dependency-version: 10.1.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: dotnet-dependencies\n- dependency-name: coverlet.collector\n  dependency-version: 10.1.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: dotnet-dependencies\n- dependency-name: coverlet.collector\n  dependency-version: 10.1.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: dotnet-dependencies\n- dependency-name: Meziantou.Analyzer\n  dependency-version: 3.0.290\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: dotnet-dependencies\n- dependency-name: Microsoft.Data.SqlClient\n  dependency-version: 7.1.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: dotnet-dependencies\n- dependency-name: SonarAnalyzer.CSharp\n  dependency-version: 10.35.0.4138\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: dotnet-dependencies\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-10-10T10:13:41-04:00",
          "tree_id": "6a6797d0695f0344e2a26b3b2e1edd95cbdbc84c",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/a2dfe45a13dd5347bd788b7d7fc37aa62fb601cd"
        },
        "date": 1791643796312,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 2854043.5,
            "unit": "ns",
            "range": "± 4556.282805094522"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 17636625.333333332,
            "unit": "ns",
            "range": "± 1062855.0185807722"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 5728156.666666667,
            "unit": "ns",
            "range": "± 176536.70365205457"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 32972526.166666668,
            "unit": "ns",
            "range": "± 508380.9596054256"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 8349848.833333333,
            "unit": "ns",
            "range": "± 5797453.494417124"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 31632323.666666668,
            "unit": "ns",
            "range": "± 603219.7882839498"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 19399310,
            "unit": "ns",
            "range": "± 1203171.3537094374"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 103301607,
            "unit": "ns",
            "range": "± 30407030.603640385"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 6828406.666666667,
            "unit": "ns",
            "range": "± 1450127.4437932458"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 39501786,
            "unit": "ns",
            "range": "± 4244489.303773659"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "467360754c3a24753bfd45bb7b7b976de3661ce7",
          "message": "chore(deps): bump urllib3 (#379)\n\nBumps the pip group with 1 update in the /.github/requirements directory: [urllib3](https://github.com/urllib3/urllib3).\n\n\nUpdates `urllib3` from 2.7.0 to 2.8.0\n- [Release notes](https://github.com/urllib3/urllib3/releases)\n- [Changelog](https://github.com/urllib3/urllib3/blob/main/CHANGES.rst)\n- [Commits](https://github.com/urllib3/urllib3/compare/2.7.0...2.8.0)\n\n---\nupdated-dependencies:\n- dependency-name: urllib3\n  dependency-version: 2.8.0\n  dependency-type: indirect\n  dependency-group: pip\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Chris Wolfgang <210299580+Chris-Wolfgang@users.noreply.github.com>",
          "timestamp": "2026-10-10T16:31:30-04:00",
          "tree_id": "819a4c863ac479ac8bb1c28fd5f499ebe94110b6",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/467360754c3a24753bfd45bb7b7b976de3661ce7"
        },
        "date": 1791665311089,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 6825613.666666667,
            "unit": "ns",
            "range": "± 27801.266056302782"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 52816890,
            "unit": "ns",
            "range": "± 18659785.08219677"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 7635270,
            "unit": "ns",
            "range": "± 1192970.9438913423"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 48020491.166666664,
            "unit": "ns",
            "range": "± 9477860.88128573"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 11583136.666666666,
            "unit": "ns",
            "range": "± 6903919.527522633"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 50597965.166666664,
            "unit": "ns",
            "range": "± 1261538.33182521"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 27846484.833333332,
            "unit": "ns",
            "range": "± 1513866.9233325408"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 519976082.8333333,
            "unit": "ns",
            "range": "± 343918217.7933238"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 7144318.166666667,
            "unit": "ns",
            "range": "± 121395.02836744729"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 43101255,
            "unit": "ns",
            "range": "± 3215752.5296727982"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "816fdf6c0ec26adfa9b24a7f0fbce95cf6e8bf13",
          "message": "chore(deps): bump the github-actions group with 3 updates (#373)\n\nBumps the github-actions group with 3 updates: [github/codeql-action/upload-sarif](https://github.com/github/codeql-action), [github/codeql-action/init](https://github.com/github/codeql-action) and [github/codeql-action/analyze](https://github.com/github/codeql-action).\n\n\nUpdates `github/codeql-action/upload-sarif` from 4.38.0 to 4.38.1\n- [Release notes](https://github.com/github/codeql-action/releases)\n- [Changelog](https://github.com/github/codeql-action/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/github/codeql-action/compare/b96794f015dfd88f77b49b1c93e0fa7110f94c63...1c5b675653bb5c22dbe9b12b556ec555138e09fd)\n\nUpdates `github/codeql-action/init` from 4.38.0 to 4.38.1\n- [Release notes](https://github.com/github/codeql-action/releases)\n- [Changelog](https://github.com/github/codeql-action/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/github/codeql-action/compare/b96794f015dfd88f77b49b1c93e0fa7110f94c63...1c5b675653bb5c22dbe9b12b556ec555138e09fd)\n\nUpdates `github/codeql-action/analyze` from 4.38.0 to 4.38.1\n- [Release notes](https://github.com/github/codeql-action/releases)\n- [Changelog](https://github.com/github/codeql-action/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/github/codeql-action/compare/b96794f015dfd88f77b49b1c93e0fa7110f94c63...1c5b675653bb5c22dbe9b12b556ec555138e09fd)\n\n---\nupdated-dependencies:\n- dependency-name: github/codeql-action/upload-sarif\n  dependency-version: 4.38.1\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: github-actions\n- dependency-name: github/codeql-action/init\n  dependency-version: 4.38.1\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: github-actions\n- dependency-name: github/codeql-action/analyze\n  dependency-version: 4.38.1\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: github-actions\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Chris Wolfgang <210299580+Chris-Wolfgang@users.noreply.github.com>",
          "timestamp": "2026-10-10T19:18:02-04:00",
          "tree_id": "0e1218820ce7e61d58ad0610a8ffdc95230dc4cf",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/816fdf6c0ec26adfa9b24a7f0fbce95cf6e8bf13"
        },
        "date": 1791675017033,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 6796356.666666667,
            "unit": "ns",
            "range": "± 32665.32695892287"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 40188299.333333336,
            "unit": "ns",
            "range": "± 2116556.050458937"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 6658943.666666667,
            "unit": "ns",
            "range": "± 28031.945746475274"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 44541339.333333336,
            "unit": "ns",
            "range": "± 4582065.604307989"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 12236635.666666666,
            "unit": "ns",
            "range": "± 7412559.292500826"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 53633430.333333336,
            "unit": "ns",
            "range": "± 8867325.276255311"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 46631515.5,
            "unit": "ns",
            "range": "± 3326722.540218676"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 496014994.3333333,
            "unit": "ns",
            "range": "± 638079371.391808"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 6366112.333333333,
            "unit": "ns",
            "range": "± 55153.77195925346"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 41745849.333333336,
            "unit": "ns",
            "range": "± 3414444.2991001233"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5452c6e31904cd5b3a7a19f6cd6816bc11f6aaec",
          "message": "chore(dependabot): raise open-pull-requests-limit to 10 on every entry (#384)\n\nThese entries were still at 5 while the rest of the fleet uses 10.\n\nCo-authored-by: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-11T11:15:00-04:00",
          "tree_id": "f98979e4abb55c23b1cbc25f828599c80f4cb582",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/5452c6e31904cd5b3a7a19f6cd6816bc11f6aaec"
        },
        "date": 1791732238724,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 6728219.666666667,
            "unit": "ns",
            "range": "± 38568.02069504389"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 40275004.833333336,
            "unit": "ns",
            "range": "± 2082941.7414899855"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 6916150.666666667,
            "unit": "ns",
            "range": "± 206124.12584249652"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 41933730.333333336,
            "unit": "ns",
            "range": "± 1100690.3576107738"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 12574832.166666666,
            "unit": "ns",
            "range": "± 6946929.455863672"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 61144235,
            "unit": "ns",
            "range": "± 19458507.99836429"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 28903231.333333332,
            "unit": "ns",
            "range": "± 1771327.314871064"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 124198663,
            "unit": "ns",
            "range": "± 5883887.306719682"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 7297095.833333333,
            "unit": "ns",
            "range": "± 100476.62066537337"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 42441924.666666664,
            "unit": "ns",
            "range": "± 3937728.4741300195"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "63f984360bbe071818018b099f792350dade9d33",
          "message": "Bump the dotnet-dependencies group with 3 updates (#386)\n\nBumps Meziantou.Analyzer from 3.0.290 to 3.0.294\nBumps Microsoft.Data.SqlClient from 7.1.0 to 7.1.1\nBumps Roslynator.Analyzers from 5.0.0 to 5.0.1\n\n---\nupdated-dependencies:\n- dependency-name: Meziantou.Analyzer\n  dependency-version: 3.0.294\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: dotnet-dependencies\n- dependency-name: Microsoft.Data.SqlClient\n  dependency-version: 7.1.1\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: dotnet-dependencies\n- dependency-name: Roslynator.Analyzers\n  dependency-version: 5.0.1\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: dotnet-dependencies\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-10-11T12:14:41-04:00",
          "tree_id": "54c8f8b9e5b4ba1cd3cddbab026b825a4a022b89",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/63f984360bbe071818018b099f792350dade9d33"
        },
        "date": 1791735833878,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 7400124,
            "unit": "ns",
            "range": "± 61658.529588370824"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 49442745.333333336,
            "unit": "ns",
            "range": "± 12893525.870159192"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 9280649.333333334,
            "unit": "ns",
            "range": "± 895582.4910846199"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 43031226.666666664,
            "unit": "ns",
            "range": "± 1281078.8963418035"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 11934770,
            "unit": "ns",
            "range": "± 7068322.489395981"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 51145512.833333336,
            "unit": "ns",
            "range": "± 774999.351146395"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 59482618.833333336,
            "unit": "ns",
            "range": "± 9848480.417817632"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 285774691.5,
            "unit": "ns",
            "range": "± 183104365.78493968"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 10948159.833333334,
            "unit": "ns",
            "range": "± 5267217.729911811"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 40510611.333333336,
            "unit": "ns",
            "range": "± 4159862.1063355375"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e391198cbe9cb6e1b9007e936e44fb53d6b8150e",
          "message": "chore(deps): bump the github-actions group with 3 updates (#385)\n\nBumps the github-actions group with 3 updates: [github/codeql-action/upload-sarif](https://github.com/github/codeql-action), [github/codeql-action/init](https://github.com/github/codeql-action) and [github/codeql-action/analyze](https://github.com/github/codeql-action).\n\n\nUpdates `github/codeql-action/upload-sarif` from 4.38.1 to 4.38.2\n- [Release notes](https://github.com/github/codeql-action/releases)\n- [Changelog](https://github.com/github/codeql-action/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/github/codeql-action/compare/1c5b675653bb5c22dbe9b12b556ec555138e09fd...2892aa5e19bbd11bc0cff5427e3b750a04d9e3c2)\n\nUpdates `github/codeql-action/init` from 4.38.1 to 4.38.2\n- [Release notes](https://github.com/github/codeql-action/releases)\n- [Changelog](https://github.com/github/codeql-action/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/github/codeql-action/compare/1c5b675653bb5c22dbe9b12b556ec555138e09fd...2892aa5e19bbd11bc0cff5427e3b750a04d9e3c2)\n\nUpdates `github/codeql-action/analyze` from 4.38.1 to 4.38.2\n- [Release notes](https://github.com/github/codeql-action/releases)\n- [Changelog](https://github.com/github/codeql-action/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/github/codeql-action/compare/1c5b675653bb5c22dbe9b12b556ec555138e09fd...2892aa5e19bbd11bc0cff5427e3b750a04d9e3c2)\n\n---\nupdated-dependencies:\n- dependency-name: github/codeql-action/upload-sarif\n  dependency-version: 4.38.2\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: github-actions\n- dependency-name: github/codeql-action/init\n  dependency-version: 4.38.2\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: github-actions\n- dependency-name: github/codeql-action/analyze\n  dependency-version: 4.38.2\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: github-actions\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Chris Wolfgang <210299580+Chris-Wolfgang@users.noreply.github.com>",
          "timestamp": "2026-10-11T13:23:38-04:00",
          "tree_id": "e77bd57413bb296fcc40c4f905587490955b04fc",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/e391198cbe9cb6e1b9007e936e44fb53d6b8150e"
        },
        "date": 1791739998940,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 7170623.833333333,
            "unit": "ns",
            "range": "± 99792.43719507674"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 50897435.166666664,
            "unit": "ns",
            "range": "± 2194546.7623922564"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 8833551.333333334,
            "unit": "ns",
            "range": "± 897151.9988888914"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 46332606,
            "unit": "ns",
            "range": "± 1319193.1887418916"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 13166191,
            "unit": "ns",
            "range": "± 6597685.987594969"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 51096136,
            "unit": "ns",
            "range": "± 748853.3464070251"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 279931770,
            "unit": "ns",
            "range": "± 222772910.2461009"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 302253518.6666667,
            "unit": "ns",
            "range": "± 178468837.84185478"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 8020834,
            "unit": "ns",
            "range": "± 225369.7054685922"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 45045481.166666664,
            "unit": "ns",
            "range": "± 5547858.405496785"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2c497754e04576415a8476ac6726c1ec0a69d4ce",
          "message": "ci(semgrep): install the hash-pinned tree with --no-deps (1/2 for PyJWT/urllib3 alerts) (#375)\n\n* ci(semgrep): install the hash-pinned tree with --no-deps\n\n* ci(semgrep): describe --no-deps without the follow-up override file\n\nThe comment pointed at semgrep-overrides.txt and an override that only arrive\nwith the 2/2 PR, so on its own this PR documented state main does not have.\nIt now says what --no-deps does and what it enables, with no file reference.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-11T19:59:36-04:00",
          "tree_id": "053f672a0f01ce7188cddfc2364e95cf8ecedc34",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/2c497754e04576415a8476ac6726c1ec0a69d4ce"
        },
        "date": 1791763699393,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 3675794.3333333335,
            "unit": "ns",
            "range": "± 40181.12559813791"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 22259503.666666668,
            "unit": "ns",
            "range": "± 1871361.837595908"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 4829380.666666667,
            "unit": "ns",
            "range": "± 187691.37448570546"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 35669785.166666664,
            "unit": "ns",
            "range": "± 9889512.186917024"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 7913062,
            "unit": "ns",
            "range": "± 5446934.9614917375"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 30157632.666666668,
            "unit": "ns",
            "range": "± 631193.7124816227"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 17439280.5,
            "unit": "ns",
            "range": "± 508995.7909413397"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 297519487.6666667,
            "unit": "ns",
            "range": "± 370511875.0672801"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 4808273.333333333,
            "unit": "ns",
            "range": "± 65451.39674852885"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 31920797.833333332,
            "unit": "ns",
            "range": "± 3462737.8192661847"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "22d9d052a4cfa8e79bea0d8ba37008040729213c",
          "message": "deps(semgrep): semgrep 1.180.0 → PyJWT 2.15.1 + urllib3 2.8.0, no override (#376)\n\n* deps(semgrep): add semgrep-overrides.txt (PyJWT ~=2.15.0)\n\n* deps(semgrep): recompile semgrep.txt (PyJWT 2.15.1, urllib3 2.8.0)\n\n* deps(semgrep): recompile against semgrep 1.180.0 instead of overriding PyJWT\n\nsemgrep 1.179.0 and later declare pyjwt[crypto]>=2.15.0,<3, so the plain\ncompile of semgrep.in now resolves pyjwt 2.15.1 (and urllib3 2.8.0) without\nany override. semgrep-overrides.txt is removed, as its own comment asked once\na semgrep release allowed pyjwt 2.15. Regenerated with:\n  uv pip compile --universal --generate-hashes semgrep.in -o semgrep.txt\n  (--upgrade-package semgrep --upgrade-package pyjwt)\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-11T21:22:34-04:00",
          "tree_id": "59abb588cf084a8aad1fd6b624ef3a27fbc7f517",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/22d9d052a4cfa8e79bea0d8ba37008040729213c"
        },
        "date": 1791768668057,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 5337352.5,
            "unit": "ns",
            "range": "± 21328.396939291993"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 31770850.5,
            "unit": "ns",
            "range": "± 1481157.1271391162"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 7332666,
            "unit": "ns",
            "range": "± 282283.2434399888"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 36313351.166666664,
            "unit": "ns",
            "range": "± 1173823.8478840569"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 10992423.833333334,
            "unit": "ns",
            "range": "± 6659942.640621038"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 43662557.833333336,
            "unit": "ns",
            "range": "± 841324.4429911289"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 28124185.5,
            "unit": "ns",
            "range": "± 748698.1976317293"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 123331267.16666667,
            "unit": "ns",
            "range": "± 25216168.76639313"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 6787260.666666667,
            "unit": "ns",
            "range": "± 182933.33674410832"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 37972557.333333336,
            "unit": "ns",
            "range": "± 3633440.8502176465"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "502274912c9bcb3d153da42e39eaef0a0f5f5fd2",
          "message": "ci(semgrep): explain --no-deps without the removed PyJWT override (#387)\n\nThe install step's comment still described --no-deps as carrying an override\nof semgrep's PyJWT pin (and, in older copies, pointed at semgrep-overrides.txt).\nThe override is gone: semgrep 1.179.0+ declares pyjwt>=2.15.0, so the lock\nneeds none. The flag stays; the comment now gives the reason that still holds.\n\nCo-authored-by: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-11T22:34:27-04:00",
          "tree_id": "ab1c7e88d73aa68dd301691a514294a6f3076194",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/502274912c9bcb3d153da42e39eaef0a0f5f5fd2"
        },
        "date": 1791773106238,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 6739109.833333333,
            "unit": "ns",
            "range": "± 77190.9429553321"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 48523387.833333336,
            "unit": "ns",
            "range": "± 11699657.124097798"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 6609662.166666667,
            "unit": "ns",
            "range": "± 218542.0519129747"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 42168917,
            "unit": "ns",
            "range": "± 1095716.6318099767"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 11626044.166666666,
            "unit": "ns",
            "range": "± 6911389.050208528"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 48794581.666666664,
            "unit": "ns",
            "range": "± 866234.4150501833"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 219069555.5,
            "unit": "ns",
            "range": "± 172946501.8586533"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 269110018.6666667,
            "unit": "ns",
            "range": "± 216297458.54398316"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 6655806.166666667,
            "unit": "ns",
            "range": "± 29230.00140837036"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 42069472.333333336,
            "unit": "ns",
            "range": "± 3896564.133732349"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "776d921b4e55d07c3d798ed1620be16a32f37629",
          "message": "test: collect coverage from Concurrency and Fuzz and bring both to 100% (#378)\n\n* test: collect coverage from Concurrency and Fuzz and bring both to 100%\n\nThe Concurrency and Fuzz test projects had no coverlet.collector, so Stage 1\nran their tests but recorded no coverage row for either assembly. Add the\ncollector at the version the other test projects use (10.0.1) and remove\nthe lines a passing run could leave unexecuted:\n\n- Concurrency: the cleanup swallowed IOException from File.Delete because a\n  pooled SQLite handle could still hold the file, so which of the try/catch\n  lines ran depended on the OS (on Windows the delete always failed). The\n  connection string now sets Pooling=False (each simulated replica owns its\n  connection, as separate processes would), so disposal closes the handle\n  and the delete is unconditional.\n- Fuzz: three properties returned early on inputs the generator rarely or\n  never draws (null int[], equal GUIDs, null/equal byte arrays). Each is now\n  a single boolean expression, so its coverage no longer depends on the\n  random draw.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\n\n* test: drop [ExcludeFromCodeCoverage] from non-integration test code and cover it\n\nRemoves every [ExcludeFromCodeCoverage] from Tests.Unit, Npgsql.Tests.Unit,\nCli.Tests.Unit and Tests.Smoke, and brings each test assembly to 100% line\ncoverage under repo-template #702's coverlet.runsettings (only\nAutoGeneratedProgram excluded).\n\nNew tests only, plus mechanical reachability changes:\n- TestSupportTests (Unit, Npgsql.Unit) and StringConsoleTests pin the\n  test-double members no behavior test reaches.\n- NoDiagnosticMessage.Format replaces the never-invoked messageGenerator\n  lambdas and FormatNothing with one shared method group, pinned by a test.\n- The async failed-save test detaches with ChangeTracker.Clear() instead of\n  a foreach whose body never runs (nothing is tracked at that point).\n- DocExamples: LocateSourceDirectory takes its start directory and\n  AddReference is extracted, so new tests drive the not-found and\n  already-referenced paths. DocExamples goes from 98.6% to 100%.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\n\n* test: drop [ExcludeFromCodeCoverage] from the integration suites and cover them\n\nRemoves every [ExcludeFromCodeCoverage] from Tests.Integration,\nNpgsql.Tests.Integration and Schema.Tests.Integration (fixtures, entities,\ncontexts, Db2 helpers, and the class-level ones on the schema test\nclasses). Measured the way integration.yaml runs them\n(RunIntegrationTests=true, Docker): Npgsql.Tests.Integration and\nSchema.Tests.Integration reach 100%, Tests.Integration 99.6%. The one\nremaining line is Db2Fixture's Linux-only SetDllImportResolver call,\nwhich runs on integration.yaml's ubuntu runner but not on Windows.\n\n- DockerContainerStartup: TryStartAsync takes rethrow (IsRunningInCi() in\n  production) so new tests drive the available, skippable and CI-rethrow\n  outcomes.\n- Db2TableOnlyDatabaseCreator: the multi-pass drop moves into\n  DropWithRetriesAsync, driven by new tests with a fake tryDrop.\n  New Db2 tests cover Create/CreateAsync/Delete and the failed-drop catch.\n  Fixes a latent bug the retry test exposed: the pass limit was the\n  shrinking remaining count, so a single table left after pass 1 was never\n  retried and Delete threw. It is now the starting count.\n- MySqlFixture: the Docker-down early return becomes an if (Available)\n  block, same behavior.\n- Schema fixtures: removes ProviderName, which nothing reads.\n- Pin tests for Db2Fixture.ResolveNativeLibrary and the Npgsql\n  integration Customer.CustomerId.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\n\n* test: drop redundant type arguments in TestSupportTests\n\nInspectCode (code-scanning alerts 568, 569) flagged Execute<int, int> and\nExecuteAsync<int, int> as RedundantTypeArgumentsOfMethod; both infer.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-12T08:07:30-04:00",
          "tree_id": "a1336c87b13ce09ebe53a9434c082c21d036e852",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/776d921b4e55d07c3d798ed1620be16a32f37629"
        },
        "date": 1791807394892,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 6839690.333333333,
            "unit": "ns",
            "range": "± 75936.08205809235"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 48370911,
            "unit": "ns",
            "range": "± 10307617.017496722"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 6483421.833333333,
            "unit": "ns",
            "range": "± 131652.2783750184"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 42358429.666666664,
            "unit": "ns",
            "range": "± 206918.83626517266"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 11996000.5,
            "unit": "ns",
            "range": "± 7285583.46930402"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 48187685.333333336,
            "unit": "ns",
            "range": "± 863130.9585470407"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 25290752,
            "unit": "ns",
            "range": "± 363024.30318230763"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 338782230.3333333,
            "unit": "ns",
            "range": "± 360272572.1041243"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 6413476,
            "unit": "ns",
            "range": "± 105380.63001804458"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 43174681.333333336,
            "unit": "ns",
            "range": "± 2867713.520057806"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b3fd9b4ea119bc0e21c195835f1292c48fe8c273",
          "message": "fix(deps): pin the crypto packages to releases without the new DoS advisories (#392)\n\nFive .NET advisories published 2026-10-13 cover\nSystem.Security.Cryptography.Pkcs (<= 8.0.1, <= 9.0.20, <= 10.0.12) and\nSystem.Security.Cryptography.Xml (<= 10.0.12): CVE-2026-70162,\nCVE-2026-84008, CVE-2026-96958, CVE-2026-96959 and CVE-2026-96960. Both\npackages arrive transitively here, so every project whose closure reaches\nthem started failing restore on NU1902/NU1903 with warnings as errors --\nStage 1, Verify SourceLink and the Native AOT consumer job all broke\nwithout a single line of our own code changing.\n\nSeven projects needed an override. The pinned version follows the line the\nproject already resolved, so each one is the smallest patched bump rather\nthan a jump across majors:\n\n  Cli, Cli.Tests.Unit, Benchmarks (net10.0)  Pkcs 9.0.11 -> 9.0.21\n  Schema.Tests.Integration                   Pkcs 9.0.18 -> 9.0.21\n  Tests.Integration (net8.0 slot)            Pkcs  8.0.1 -> 8.0.2\n  Tests.Integration (net10.0 slot)           Pkcs  8.0.1 -> 10.0.13\n  AotSmoke, AotSmoke.Setup                   Pkcs/Xml 10.0.12 -> 10.0.13\n\nTests.Integration needs both slots: the net8.0 providers reach Pkcs through\nMicrosoft.Data.SqlClient, and the net10.0 slot reaches it independently\nthrough Oracle.EntityFrameworkCore and IBM.EntityFrameworkCore. The AotSmoke\npair already carried an Xml pin from an earlier advisory; this moves it onto\nthe patched release and adds the matching Pkcs override beside it.\n\nVerified with a forced solution-wide restore: zero NU1902/NU1903, zero\nNU1605 downgrades, and `dotnet build -c Release` reports 0 errors (the 6\nwarnings are the pre-existing out-of-support net6.0 notices).\n\nCo-authored-by: Claude Opus 5 <noreply@anthropic.com>",
          "timestamp": "2026-10-15T10:49:27-04:00",
          "tree_id": "46651cfa9c4d38b59ac08651dedaab97799870a7",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/b3fd9b4ea119bc0e21c195835f1292c48fe8c273"
        },
        "date": 1792076341445,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 3593170.6666666665,
            "unit": "ns",
            "range": "± 89784.31293568679"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 22524049.5,
            "unit": "ns",
            "range": "± 1866009.5264590692"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 4611493.166666667,
            "unit": "ns",
            "range": "± 122527.02139664268"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 29289441.5,
            "unit": "ns",
            "range": "± 3128646.754283871"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 8007147.666666667,
            "unit": "ns",
            "range": "± 5491443.371937139"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 28790652,
            "unit": "ns",
            "range": "± 523234.8743375197"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 17175742.333333332,
            "unit": "ns",
            "range": "± 870450.2036626411"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 87192625,
            "unit": "ns",
            "range": "± 7750754.5822339775"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 4897932.833333333,
            "unit": "ns",
            "range": "± 69891.92543730164"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 103449238,
            "unit": "ns",
            "range": "± 126875714.6434624"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ae35bb4c8ad1092c081b463616173b4ebddcd416",
          "message": "chore(deps): bump the github-actions group with 2 updates (#391)\n\nBumps the github-actions group with 2 updates: [actions/upload-artifact](https://github.com/actions/upload-artifact) and [actions/download-artifact](https://github.com/actions/download-artifact).\n\n\nUpdates `actions/upload-artifact` from 7.0.1 to 7.0.2\n- [Release notes](https://github.com/actions/upload-artifact/releases)\n- [Commits](https://github.com/actions/upload-artifact/compare/043fb46d1a93c77aae656e7c1c64a875d1fc6a0a...cf430e030ddbb5b0abf93d22962f4752f3646cd9)\n\nUpdates `actions/download-artifact` from 8.0.1 to 8.0.2\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/3e5f45b2cfb9172054b4087a40e8e0b5a5461e7c...9000827ccba6bdab643e8b6fd33ac0654aef8333)\n\n---\nupdated-dependencies:\n- dependency-name: actions/upload-artifact\n  dependency-version: 7.0.2\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: github-actions\n- dependency-name: actions/download-artifact\n  dependency-version: 8.0.2\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: github-actions\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Chris Wolfgang <210299580+Chris-Wolfgang@users.noreply.github.com>",
          "timestamp": "2026-10-15T11:29:24-04:00",
          "tree_id": "1b756f509c7299a2879e632ef8510bbaa643a36d",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/ae35bb4c8ad1092c081b463616173b4ebddcd416"
        },
        "date": 1792078677857,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 5156517.333333333,
            "unit": "ns",
            "range": "± 53378.203007719676"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 30904357,
            "unit": "ns",
            "range": "± 1619396.0970371023"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 6646031.333333333,
            "unit": "ns",
            "range": "± 187860.85662088665"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 34492501.333333336,
            "unit": "ns",
            "range": "± 336621.0563828908"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 10555210,
            "unit": "ns",
            "range": "± 6659263.643964474"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 44001380.666666664,
            "unit": "ns",
            "range": "± 1478103.3056056446"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 26879193,
            "unit": "ns",
            "range": "± 603435.3925508513"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 173777266.16666666,
            "unit": "ns",
            "range": "± 11746126.906068455"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 6380762.666666667,
            "unit": "ns",
            "range": "± 249857.84249915657"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 39396276.833333336,
            "unit": "ns",
            "range": "± 5192654.74255995"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e69c91a4afd1c63138342ad39dbd4e5ca24627c5",
          "message": "Bump coverlet.collector from 10.0.1 to 10.1.0 (#390)\n\n---\nupdated-dependencies:\n- dependency-name: coverlet.collector\n  dependency-version: 10.1.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: dotnet-dependencies\n- dependency-name: coverlet.collector\n  dependency-version: 10.1.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: dotnet-dependencies\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Chris Wolfgang <210299580+Chris-Wolfgang@users.noreply.github.com>",
          "timestamp": "2026-10-15T13:35:22-04:00",
          "tree_id": "f59e9aa7005dbbc2367e4c7a1ff041adf792f3c7",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/e69c91a4afd1c63138342ad39dbd4e5ca24627c5"
        },
        "date": 1792086273309,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 6740775.5,
            "unit": "ns",
            "range": "± 14174.704476637247"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 54806241.833333336,
            "unit": "ns",
            "range": "± 2588259.1842982676"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 6557750.333333333,
            "unit": "ns",
            "range": "± 279711.24658178"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 41565569.833333336,
            "unit": "ns",
            "range": "± 633974.0901427545"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 13259562,
            "unit": "ns",
            "range": "± 6355850.432038737"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 59020181.5,
            "unit": "ns",
            "range": "± 18530375.40385777"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 26644896,
            "unit": "ns",
            "range": "± 313699.4409685806"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 139782277.66666666,
            "unit": "ns",
            "range": "± 17093137.3025137"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 6404603.666666667,
            "unit": "ns",
            "range": "± 51177.88961390781"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 41836655.333333336,
            "unit": "ns",
            "range": "± 4696212.648228925"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7814c850459f96e5574efec4187bbe02af3f1c1b",
          "message": "test(integration): run each provider on the newest TFM its provider supports (#393)\n\nSQL Server and PostgreSQL were being exercised only on net8.0 against EF Core\n9, even though both ship EF Core 10 builds. They were grouped with MySQL\nbecause the file's header comment asserted that \"SQL Server / PostgreSQL /\nMySQL (Pomelo) all cap at EF Core 9\" -- true of Pomelo, not of the other two.\nSo the suite was testing a configuration no current consumer would use, and\nthe EF Core 10 code path for the two most-used providers went uncovered here.\n\nRegroup by what each provider actually supports:\n\n  net8.0   MySQL (Pomelo 9.0.0, no EF Core 10 build exists)\n  net10.0  SQL Server, PostgreSQL, Oracle, Db2 (all EF Core 10)\n\nSQL Server moves to 10.0.11 and PostgreSQL to 10.0.1, matching the versions\nSchema.Tests.Integration already uses so the two integration suites stay on\nthe same provider builds. The header comment is rewritten to say which\nprovider holds the matrix back and why, and to tell the next person to put a\nnew provider on the newest slot its package supports -- the old wording is\nwhat let these two drift onto the wrong slot.\n\nMoving the SQL Server provider also moves the Microsoft.Data.SqlClient\ndependency chain, so the Pkcs audit override follows it to the net10.0 slot.\nThe net8.0 slot now needs none at all: Pomelo reaches MySQL through\nMySqlConnector, which has no Pkcs dependency.\n\nVerified locally against real containers, not just a build:\n\n  net8.0   MySqlAuditTests                      3 passed\n  net10.0  SqlServerAuditTests + PostgresAuditTests  6 passed\n\nand `--list-tests` confirms the split is what it claims: net8.0 discovers\nMySqlAuditTests, net10.0 discovers SqlServer/Postgres/Oracle/Db2, with\nDockerContainerStartupTests shared. Restore is clean on both slots.\n\nOnly the csproj changed; no test code was touched.\n\nCo-authored-by: Claude Opus 5 <noreply@anthropic.com>",
          "timestamp": "2026-10-16T07:48:30-04:00",
          "tree_id": "39beac4e089fcea8f29a54f7e64404e345597c79",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/7814c850459f96e5574efec4187bbe02af3f1c1b"
        },
        "date": 1792151920349,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 3640324.3333333335,
            "unit": "ns",
            "range": "± 40819.44489251824"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 22483510.166666668,
            "unit": "ns",
            "range": "± 2048015.4129684507"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 24719419.666666668,
            "unit": "ns",
            "range": "± 27096947.709771786"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 27995086.166666668,
            "unit": "ns",
            "range": "± 1093024.5230868945"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 9039633.666666666,
            "unit": "ns",
            "range": "± 5899853.767857499"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 29431499.333333332,
            "unit": "ns",
            "range": "± 454759.9478079983"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 21393003,
            "unit": "ns",
            "range": "± 289730.56810077874"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 313280607.5,
            "unit": "ns",
            "range": "± 235960707.828948"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 35151656.833333336,
            "unit": "ns",
            "range": "± 52205976.89596543"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 36880475,
            "unit": "ns",
            "range": "± 6432266.224831883"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5c31e9171c52cba956669660ee8b5db09155009c",
          "message": "test: mark container-backed integration tests RequiresLinuxContainers (#380)\n\n* test: mark container-backed integration tests RequiresLinuxContainers\n\nThese integration tests start Linux containers through Testcontainers, which\nthe Windows and macOS runners cannot do. The repo-template change\n(Chris-Wolfgang/repo-template#708) makes pr.yaml Stages 2/3 and release.yaml\nskip a test project only when it declares this property, instead of by its\n*.Tests.Integration.* name. Stage 1 (Linux) still runs it.\n\nInert until that pr.yaml/release.yaml change is synced here; merge this first.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\n\n* test: describe RequiresLinuxContainers as a requirement, not current workflow behaviour\n\nNo workflow reads the property yet (pr.yaml and release.yaml here, and\nrepo-template), so the comment claiming Stages 2/3 and release.yaml skip the\nproject was not true. It now states the requirement and that the marker is\ninert until the workflow change is synced.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\n\n* test: describe RequiresLinuxContainers as a requirement, not current workflow behaviour\n\nNo workflow reads the property yet (pr.yaml and release.yaml here, and\nrepo-template), so the comment claiming Stages 2/3 and release.yaml skip the\nproject was not true. It now states the requirement and that the marker is\ninert until the workflow change is synced.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\n\n* test: describe RequiresLinuxContainers as a requirement, not current workflow behaviour\n\nNo workflow reads the property yet (pr.yaml and release.yaml here, and\nrepo-template), so the comment claiming Stages 2/3 and release.yaml skip the\nproject was not true. It now states the requirement and that the marker is\ninert until the workflow change is synced.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-16T08:27:06-04:00",
          "tree_id": "ae9f1b54ef1e6f09d1d9f9551de0190152ce0967",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/5c31e9171c52cba956669660ee8b5db09155009c"
        },
        "date": 1792154185776,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 6946361.666666667,
            "unit": "ns",
            "range": "± 52687.752488916565"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 50439459.5,
            "unit": "ns",
            "range": "± 2189656.462947784"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 7237753.5,
            "unit": "ns",
            "range": "± 157564.91839556163"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 44152838.166666664,
            "unit": "ns",
            "range": "± 795560.9595878454"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 12857931.666666666,
            "unit": "ns",
            "range": "± 7369188.412714818"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 57505150.666666664,
            "unit": "ns",
            "range": "± 8863389.872180978"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 108800781.16666667,
            "unit": "ns",
            "range": "± 69625794.96543412"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 308913943.1666667,
            "unit": "ns",
            "range": "± 108054032.41262314"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 6679568.333333333,
            "unit": "ns",
            "range": "± 195701.03781618873"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 48024836.333333336,
            "unit": "ns",
            "range": "± 4610477.196127569"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7012e7510a7a81a1f2996804dc840490a172d604",
          "message": "ci: sync Stage 1 coverage gate and build-pr.ps1 local tools from repo-template (#377)\n\n* ci: sync Stage 1 coverage gate and build-pr.ps1 local tools from repo-template\n\nApplies Chris-Wolfgang/repo-template#654 (48c7e2b, pr.yaml Stage 1) and\nChris-Wolfgang/repo-template#656 (2151df4, scripts/build-pr.ps1).\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\n\n* ci: sync coverlet.runsettings with repo-template #702\n\n<Exclude> is now only [*]AutoGeneratedProgram. The three polyfill\nclass filters (CompilerFeatureRequiredAttribute, RequiredMemberAttribute,\nIsExternalInit) are dropped: measured locally, removing them changes no\nsrc or test assembly's line coverage (EntityFrameworkCore stays 99.2%,\nAbstractions 100%). ExcludeByFile and ExcludeByAttribute are now\ncomma-separated (a ';' list is one pattern that matches nothing), and\nExcludeByFile also covers **/*.g.cs. The stale \"Phase 1 scope is unit\ntests only\" comment is replaced by the template's policy comment.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\n\n* fix(ci): list test classes below the active test threshold, not below 100%\n\nThe Stage 1 diagnostic for a failing test assembly compared each class to a\nhard-coded 100, so with CODECOV_TEST_MINIMUM=90 it listed classes at 90-99%\nunder \"Classes below 90%\". awk now receives the applied threshold.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\n\n* fix(build-pr): accurate local-tool comments; report a tool-restore failure for DevSkim\n\n- This repo's pr.yaml still installs ReportGenerator and DevSkim as global\n  tools, so the comments no longer say this script uses them \"as pr.yaml does\".\n- When Restore-LocalTools fails, `dotnet devskim` never runs and $devskimExit\n  is never assigned, so the failure line read \"exit code )\". $devskimExit now\n  starts as $null, and a null value is reported as a tool-restore failure.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\n\n* ci(coverage): keep excluding the compiler-emitted polyfill types\n\nSyncing coverlet.runsettings from repo-template replaced this repo's\nexclusion list with the template's, which dropped three entries the template\nhas no reason to carry:\n\n  [*]System.Runtime.CompilerServices.CompilerFeatureRequiredAttribute\n  [*]System.Runtime.CompilerServices.RequiredMemberAttribute\n  [*]System.Runtime.CompilerServices.IsExternalInit\n\nUsing `required` members and init-only setters while targeting net6.0 and\nnetstandard makes Roslyn synthesise those three types into the assembly,\nbecause those TFMs' reference assemblies do not declare them. They are type\ndefinitions that never execute, so they report 0% and fail the gate on a repo\nthat has no uncovered code at all. That is exactly what Stage 2 hit:\n\n  Projects below 90% coverage:\n    System.Runtime.CompilerServices.CompilerFeatureRequiredAttribute (0%)\n\nExcludeByAttribute cannot take over the job: Roslyn marks these\n[CompilerGenerated], which is not in that list, and adding it there would also\nhide real source-generator output we do want measured. So the exclusions stay\nby type name, now with a comment explaining why they exist so the next\ntemplate sync does not drop them again.\n\nNo threshold moved. CODECOV_MINIMUM and CODECOV_TEST_MINIMUM are untouched,\nand the template's other improvements -- comma-separated list separators,\n*.g.cs exclusion, GeneratedCode by attribute, IncludeTestAssembly -- are kept\nas synced.\n\nVerified by running the net6.0 slot (the one that needs the polyfills) with\nthis runsettings: 295 tests pass, the report carries 190 classes, none of the\nthree polyfill types or AutoGeneratedProgram appear, and no class reports 0%.\n\nmain merged in to pick up the crypto audit pins from #392.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-16T09:54:57-04:00",
          "tree_id": "a3d477fe8d618d1328b591b0f7cdf5e4c01d3940",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/7012e7510a7a81a1f2996804dc840490a172d604"
        },
        "date": 1792159447506,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 6727650.166666667,
            "unit": "ns",
            "range": "± 1385.088565158681"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 55902060,
            "unit": "ns",
            "range": "± 2352303.7078598076"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 6641216.666666667,
            "unit": "ns",
            "range": "± 142183.70185901524"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 44548899.333333336,
            "unit": "ns",
            "range": "± 3861367.418400162"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 11868326,
            "unit": "ns",
            "range": "± 7147028.763349774"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 55209865.666666664,
            "unit": "ns",
            "range": "± 10731071.606046123"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 25527945.666666668,
            "unit": "ns",
            "range": "± 398078.1014076676"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 357502167.6666667,
            "unit": "ns",
            "range": "± 392111675.1604035"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 6695404,
            "unit": "ns",
            "range": "± 418846.12983887055"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 42778381.333333336,
            "unit": "ns",
            "range": "± 2986647.1354028974"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b73adc086af105b91815705e897e4e11e5063db1",
          "message": "chore: explicit usings on every TFM (re-targeted at main) (#395)\n\n* chore: explicit usings on every TFM (no implicit/global usings in multi-TFM projects) (#367)\n\nRemoves <ImplicitUsings>enable</ImplicitUsings> from the six multi-target\nprojects and adds the explicit using directives each file needs, so every\ntarget framework slice needs the same usings and InspectCode (which analyses\na single modern slice) stops flagging them as RedundantUsingDirective.\n\nNo behaviour or public API change.\n\nCo-authored-by: Claude Opus 5.5 <noreply@anthropic.com>\n(cherry picked from commit 97c1ce0899b255c1b4ce49c00023b370cc50b973)\n\n* chore: explicit usings for the files added since #367\n\nThree files landed on main after the explicit-usings pass was written, so they\ncarry no using directives of their own and stop compiling the moment\nImplicitUsings is switched off for their project:\n\n  Db2AuditTests.cs               System, System.Collections.Generic,\n                                 System.Threading, System.Threading.Tasks\n  DockerContainerStartupTests.cs System, System.Threading.Tasks\n  TestSupportTests.cs            System, System.Threading, System.Threading.Tasks\n\nSystem-first ordering, matching the rest of the pass.\n\nThis is the cost of the rule the pass introduces: a project without implicit\nusings needs every new file to declare its own, and nothing enforces that\nexcept the build. Worth knowing when reviewing.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-16T12:49:00-04:00",
          "tree_id": "575acd7bb1936104bd792f8c8ea19c5f434469b0",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/b73adc086af105b91815705e897e4e11e5063db1"
        },
        "date": 1792169788970,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 3859984,
            "unit": "ns",
            "range": "± 34154.79689589736"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 22733107,
            "unit": "ns",
            "range": "± 1803609.961285699"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 4876216.666666667,
            "unit": "ns",
            "range": "± 111154.06384983563"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 30898967.666666668,
            "unit": "ns",
            "range": "± 396056.24646801536"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 10110632.666666666,
            "unit": "ns",
            "range": "± 5430390.884413049"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 30319806.833333332,
            "unit": "ns",
            "range": "± 491957.1032359766"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 20465449.833333332,
            "unit": "ns",
            "range": "± 2139136.472786702"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 311155141.3333333,
            "unit": "ns",
            "range": "± 383158433.4954508"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6e2638267cf4b3dfb1439cb4fd61ef3636304fb9",
          "message": "docs(benchmarks): fully qualify CancellationToken in a doc cref (#396)\n\nTwo code-scanning alerts (570, 571) on\nbenchmarks/.../Db2NoSavepointsTransactionFactory.cs:14:\n\n  Cannot resolve symbol 'CancellationToken'\n  Ambiguous reference 'SaveChangesAsync' in documentation. Candidates are:\n      SaveChangesAsync(bool, CancellationToken) (in class AuditingDbContext)\n      SaveChangesAsync(CancellationToken) (in class DbContext)\n\nOne cause, two symptoms. The file has no `using System.Threading;` -- the type\nappears nowhere in its code, only in this cref -- so `CancellationToken` in the\nsignature does not bind, the signature then fails to match either overload, and\nthe cref degrades to an ambiguous name.\n\nFully qualifying the parameter type fixes both and keeps the reference precise.\nAdding a using would also work, but nothing else in the file needs\nSystem.Threading, so it would sit there as an unnecessary import.\n\nThis stopped being cosmetic when #395 landed: that PR turns ImplicitUsings off\nfor this project, and System.Threading was one of the namespaces it had been\nsupplying. #395 added usings where compilation required them, which this file\ndid not -- a cref is not a compile dependency -- so the reference was left\nunresolvable. A fully-qualified cref does not care either way.\n\nVerified with Roslyn rather than only the scanner, building with\nGenerateDocumentationFile=true and CS1591 suppressed so cref diagnostics\nsurface:\n\n  before  CS1574 (cref could not be resolved) + CS1580 (invalid parameter type)\n  after   neither\n\nThe mirrored copy in Tests.Integration/TestSupport carries a shorter comment\nwithout this cref, so it needs no change.\n\nCo-authored-by: Claude Opus 5 <noreply@anthropic.com>",
          "timestamp": "2026-10-16T14:30:58-04:00",
          "tree_id": "e5c0f5c2a20a3bb1e88226d57e9f5f453477ada4",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/6e2638267cf4b3dfb1439cb4fd61ef3636304fb9"
        },
        "date": 1792176005580,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 3631849.1666666665,
            "unit": "ns",
            "range": "± 35552.28730100686"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 21938138.833333332,
            "unit": "ns",
            "range": "± 1961835.1727564507"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 4827181.5,
            "unit": "ns",
            "range": "± 290992.93667716405"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 30275019.333333332,
            "unit": "ns",
            "range": "± 781140.6743950371"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 8309882,
            "unit": "ns",
            "range": "± 6036728.280681598"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 29857660.833333332,
            "unit": "ns",
            "range": "± 401681.2678559125"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 20568890,
            "unit": "ns",
            "range": "± 982900.9396063267"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 371063677.3333333,
            "unit": "ns",
            "range": "± 438051058.5142646"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 6040078.666666667,
            "unit": "ns",
            "range": "± 2354383.079955412"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 36827661.833333336,
            "unit": "ns",
            "range": "± 5488389.261011498"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c5ae6e5c57a720117f62546db007beae4839d6a3",
          "message": "ci(scorecard): move SARIF filtering out of the published job (#397)\n\n* ci(scorecard): move SARIF filtering out of the published job\n\nCloses #388.\n\nscorecard.dev verifies the job containing ossf/scorecard-action before it\naccepts publish_results: true, and rejects any such job that has a `run:` step:\n\n  error sending scorecard results to webapp: http response 400 ...\n  workflow verification failed: scorecard job must only have steps with `uses`\n\nThe analysis job ran the jq \"Filter suppressed findings from SARIF\" step, so\nevery publish since has been refused. scorecard-action downgrades the rejection\nto a warning, so the run stays green while nothing publishes -- api.scorecard.dev\nhas served a result dated 2026-08-22 ever since, and the README badge shows that\nstale score.\n\nSplit into two jobs:\n\n  analysis  only `uses:` steps -- checkout, Scorecard, upload-artifact. Keeps\n            id-token: write for the publish, drops security-events: write, and\n            restates contents: read because job-level permissions replace the\n            workflow-level read-all rather than adding to it.\n  upload    needs: analysis, with security-events: write. Checks out, downloads\n            the artifact, runs the filter step unchanged, uploads to\n            code-scanning.\n\nThe checkout in `upload` is first, before the download, for two reasons:\ncheckout cleans the workspace, so downloading ahead of it would delete the\nSARIF; and upload-sarif needs the working tree to compute the same source\nfingerprints it did when this ran in one job, or existing alerts reappear under\nnew IDs.\n\nThe filter step is moved verbatim, not rewritten -- its suppression list is\nspecific to this repo (nugetCommand not pinned), so a template-shaped overwrite\nwould silently change what is suppressed. Only the artifact name changes, from\n\"SARIF file\" to scorecard-sarif, matching the reference implementation.\n\nNot verifiable before merge: this workflow runs on push to main and on a\nschedule, so the fix proves itself on the first run after merge. Check that the\nrun logs no \"error sending scorecard results\" line and that\napi.scorecard.dev/projects/github.com/Chris-Wolfgang/AuditTrail returns a date\nnewer than 2026-08-22.\n\nStructure matches Log-Compressor#297, where the split was confirmed working: the\nfirst post-merge run published and the API returned 200.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n* ci(scorecard): pin the analysis key across the job split\n\nCopilot caught a real consequence of moving upload-sarif into the new job.\n\nThe action derives its analysis key from the workflow path and the job it runs\nin -- api-client.ts getAnalysisKey() reads CODEQL_ACTION_ANALYSIS_KEY and, when\nunset, computes `${workflowPath}:${GITHUB_JOB}`. GITHUB_JOB is the job ID, so\nthis split would have changed the key from\n\n  .github/workflows/scorecard.yaml:analysis   to   ...:upload\n\nThe old key would then stop receiving uploads. Findings recorded under it are\nnever reported fixed, so they stay open indefinitely, while a duplicate set\nappears under the new key. Checking out the repo keeps upload-sarif's source\nfingerprints stable, but it does not preserve this identity -- a different\nthing, and the reason the earlier reasoning in this PR was incomplete.\n\nNot hypothetical here: the two open Scorecard alerts, BranchProtectionID (393)\nand CodeReviewID (406), are both recorded under the analysis key. Orphaning them\nwould also have defeated the planned fix for #337, which clears 406 by\nsuppressing CodeReviewID in this very filter -- the suppression would have\napplied to the new key while the old alert sat open forever.\n\nVerified rather than assumed:\n\n  - the env var exists in the pinned action (v4.38.2,\n    2892aa5e...): src/environment.ts declares\n    ANALYSIS_KEY = \"CODEQL_ACTION_ANALYSIS_KEY\", and src/api-client.ts returns\n    it directly when set, before computing the path:job form\n  - the live key is read from the API, not guessed:\n    `code-scanning/analyses?tool_name=Scorecard` reports\n    analysis_key=.github/workflows/scorecard.yaml:analysis on every current\n    analysis, across all three categories (supply-chain/local,\n    supply-chain/online-scm, supply-chain/branch-protection)\n\nCategories come from Scorecard's own SARIF and are unaffected, so pinning the\nanalysis key is both necessary and sufficient.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 5 <noreply@anthropic.com>",
          "timestamp": "2026-10-16T18:25:40-04:00",
          "tree_id": "15fc7e5c7ac53359f7de5aaa078628c47699df0a",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/c5ae6e5c57a720117f62546db007beae4839d6a3"
        },
        "date": 1792190148992,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 3445588.6666666665,
            "unit": "ns",
            "range": "± 51009.11362034566"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 20998125.333333332,
            "unit": "ns",
            "range": "± 814476.1763626565"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 6584481.666666667,
            "unit": "ns",
            "range": "± 85668.48608638612"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 36197289.5,
            "unit": "ns",
            "range": "± 1113031.5335375722"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 9774170.833333334,
            "unit": "ns",
            "range": "± 7030067.906527314"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 34037150.5,
            "unit": "ns",
            "range": "± 594150.0650753141"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 22926885,
            "unit": "ns",
            "range": "± 615095.7885719915"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 126780028.83333333,
            "unit": "ns",
            "range": "± 23726972.864236057"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 7117557.333333333,
            "unit": "ns",
            "range": "± 14849.874387796463"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 39778285.833333336,
            "unit": "ns",
            "range": "± 4062871.06002742"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "420dd6423902fccf1042e0df7b9f8ff1c9f41570",
          "message": "feat(schema): apply per-version upgrade steps, not just create-from-empty (#365)\n\n* feat(schema): apply per-version upgrade steps, not just create-from-empty\n\nAuditSchemaMigrator could only create the audit schema from nothing: it\nalways diffed the current model against null, and the early exit on\n`installedVersion >= CurrentSchemaVersion` was safe only because the\nconstant had never left 1. Bumping it would have emitted CREATE TABLE\nagainst an existing database.\n\nRunAsync now branches on the installed version. Fresh installs keep the\ncreate-from-empty diff; a database behind the current version has the\nexplicit per-version steps in AuditSchemaUpgrades chained onto it; a\ndatabase ahead of this build throws instead of silently doing nothing.\n\nSteps are explicit MigrationOperations handed to the provider's own\nIMigrationsSqlGenerator, not a diff against a checked-in snapshot that\nnothing would keep honest. AuditSchemaUpgradeContext resolves the table\nand schema names from the live model, so a consumer's AuditOptions naming\nis honoured on upgrade. The whole upgrade stays inside the existing\ntransaction, so a failure part-way leaves the version row unchanged.\n\nNo steps ship yet: version 1 is still the only schema this library has\ninstalled, and the first arm arrives with the SequenceNumber column.\n\nTests drive a synthetic version sequence through the internal\nIAuditSchemaUpgrades seam; everything below it is production code.\nSixteen SQLite unit tests cover applying, chaining, row preservation,\ndry-run, custom table names, the ahead-of-build throw and rollback on a\nmid-way failure. The SQL Server and PostgreSQL integration suites gain\nthe case a fresh-database test cannot reach: upgrading a populated v1\ndatabase and asserting both the new column and the surviving rows.\nEvery_version_below_current_has_an_upgrade_step fails if the constant is\nraised without a matching step.\n\nAlso removes an unreachable #else branch in GenerateCommands that\nclaimed EF Core 6 support inside a file gated on NET8_0_OR_GREATER.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n* docs(schema): correct the MySQL recovery contract and the #344 step sketch\n\nReview found the documented recovery path for implicit-DDL providers is\nwrong. On MySQL and MariaDB a partially applied upgrade leaves operations\npersisted with the version row unchanged, so re-running replays the whole\nstep from the old version against a shape that has already moved, and a\nreplayed ADD COLUMN fails on the column that now exists. Say so: recovery\nthere is manual, and note the path has no integration coverage because\nPomelo caps at EF Core 9.x while the test project is on EF Core 10.\n\nThe commented-out sketch of the #344 step showed IsNullable = false with\nno DefaultValue, which fails on every row of the populated table the\nupgrade targets. Replaced with prose that states the DefaultValue\nrequirement, which also clears the commented-out-code analyser finding.\n\nRead the loop bound in Every_version_below_current_has_an_upgrade_step\noff AuditSchemaUpgrades.Instance instead of the const, which folds to\n`version < 1` and reads as an always-false expression.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n* test(schema): cover the MySQL upgrade path on its own TFM slot\n\nThe claim that MySQL could not be covered was wrong. Pomelo does cap at\nEF Core 9, but that only rules it out of the net10.0 slot, and\nWolfgang.AuditTrail.EntityFrameworkCore.Tests.Integration already solves\nexactly this by multi-targeting and scoping each provider's files with\nCompile Remove. Apply the same shape here: net8.0 carries MySQL on\nPomelo 9, net10.0 keeps SQL Server and PostgreSQL on EF Core 10.\n\nMySQL has no schema namespace separate from the database, so\nISchemaProviderFixture.CustomSchema is now nullable and the shared\ncustom-naming fact asserts on table names alone where it is null. The\nMySQL fixture scopes every information_schema lookup with DATABASE(),\nsince that view spans the whole server rather than one database.\n\nAlso pins the documented MySQL caveat to observed behaviour. A new\nMySQL-only test drives a step whose second operation fails and asserts\nthat the first operation's column survives and the version row has not\nmoved. That is the non-atomicity the remarks describe, so the doc comment\nno longer has to be taken on trust, and the test fails if MySQL ever\nmakes multi-statement DDL transactional.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n* test(schema): declare CustomSchema non-nullable where the provider has one\n\nInspectCode flagged both fixtures for returning string? from a member\nthat never returns null. The interface stays nullable because MySQL has\nno schema namespace separate from the database, but SQL Server and\nPostgreSQL always have one, so the implementations say so and carry a\nnote explaining why they differ from the interface.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n* chore: explicit usings on every TFM (no implicit/global usings in multi-TFM projects) (#367)\n\nRemoves <ImplicitUsings>enable</ImplicitUsings> from the six multi-target\nprojects and adds the explicit using directives each file needs, so every\ntarget framework slice needs the same usings and InspectCode (which analyses\na single modern slice) stops flagging them as RedundantUsingDirective.\n\nNo behaviour or public API change.\n\nCo-authored-by: Claude Opus 5.5 <noreply@anthropic.com>\n\n* docs(schema): record what a first upgrade step may not rely on\n\nThe guidance comment on StepFrom described the column shape a first step\nshould use, but not the constraint that makes it the only workable shape. A\nreader could reasonably reach for the obvious alternative -- mark the property\nValueGeneratedOnAdd and let each provider emit its own identity syntax -- and\nthat does not work, which is only discoverable by trying it on four\nproviders.\n\nRecord the measured result instead, so it is not rediscovered:\n\n  MySQL      rejects a non-key AUTO_INCREMENT column outright, on a fresh\n             CREATE TABLE as much as on an ALTER, so it would need an extra\n             index led by that column\n  SQLite     has no identity concept for a non-primary-key column, so EF omits\n             the column from INSERTs expecting generation that never happens\n             and the write fails at runtime\n  PostgreSQL does backfill existing rows, but not in insert order, so historical\n             rows get values that misstate their order rather than merely being\n             absent\n\nThe conclusion is the actionable part: assign such values in AuditCapture,\nbeside where HeaderId is already assigned, and let the column be a plain NOT\nNULL with a default that marks pre-upgrade rows.\n\nAlso drops the issue number the comment leaned on for the rest of its meaning,\nso it stands on its own.\n\nComment only -- no behaviour change. StepFrom still throws for every version,\nas it has to until a second schema version exists.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 5 <noreply@anthropic.com>",
          "timestamp": "2026-10-16T18:57:35-04:00",
          "tree_id": "07df047e2060b7e0fdf88b1580ae564867513439",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/420dd6423902fccf1042e0df7b9f8ff1c9f41570"
        },
        "date": 1792192010786,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 6678773.166666667,
            "unit": "ns",
            "range": "± 67628.4617401086"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 54970745.666666664,
            "unit": "ns",
            "range": "± 2265578.288672968"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 6776874.5,
            "unit": "ns",
            "range": "± 253005.03627200783"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 42756150.833333336,
            "unit": "ns",
            "range": "± 1089011.4041525614"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 15830047.333333334,
            "unit": "ns",
            "range": "± 9473225.106895346"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 57415035.666666664,
            "unit": "ns",
            "range": "± 11230927.415258694"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 25530966.666666668,
            "unit": "ns",
            "range": "± 356562.6184589929"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 537267629,
            "unit": "ns",
            "range": "± 373183882.4554747"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 6318716,
            "unit": "ns",
            "range": "± 98344.65465392616"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 41172649.333333336,
            "unit": "ns",
            "range": "± 3816705.070365319"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4328332f0704b99da0d435d084a821d449535e4b",
          "message": "ci(pr): Stage 2's coverage gate must fail when it cannot measure (#398)\n\n* ci(pr): Stage 2's coverage gate must fail when it cannot measure\n\nAddresses #371 items 1 and 3 for Stage 2. Stage 1 already has both guards --\n#377 synced them today -- so this is the same pair on the stage that runs a\ndifferent subset of the suite.\n\nTwo ways Stage 2 could report success without measuring anything:\n\n1. Every coverage step is gated on has-coverage == 'true', and the check set it\n   to false and carried on whenever no coverage file appeared. A dropped\n   coverlet.collector reference therefore skipped the whole coverage gate and\n   the job went green. By the time that check runs the tests have already\n   exited 0, so an absent coverage file means collection broke, not that there\n   was nothing to collect. It now fails -- but only when tests actually ran, so\n   a genuinely test-less repo shape still skips benignly.\n\n2. The gate can only judge modules that APPEAR in the report, so an assembly\n   that ran and recorded nothing simply drops out and the gate passes while\n   measuring less than it did yesterday. Each project that runs a\n   coverage-collecting TFM is now ledgered, and a report row is required for\n   each ledgered assembly.\n\nThe ledger records <AssemblyName> when set and the project's base name\notherwise, because the report keys rows by assembly and the two differ. Only\nprojects that ran a net5.0+ TFM are ledgered: netcoreapp3.1 and net4x are\ntested on this stage without the XPlat collector by design, so requiring a row\nfor them would fail every run.\n\nRows are matched by equality, not prefix. A prefix match would accept\nX.Application.Advisor as the row for X.Application.\n\nNot ported from the template's Stage 2: its zero-tests-ran Tee guard and its\n--no-build/--no-restore switches. Those are separate concerns and #371 does not\nlist them for this repo.\n\nVerified without a CI run, following the method #371 prescribes:\n\n  - pr.yaml still parses; 36 run: steps extracted and syntax-checked -- 28 with\n    `bash -n`, 8 with [Parser]::ParseFile. All clean.\n  - the new row-check step run verbatim against a REAL CoverageReport/Summary.txt\n    (ReportGenerator over an actual cobertura file from this repo, 4 module rows):\n\n      correct ledger                  PASS\n      claimed but absent row          FAIL\n      empty ledger                    FAIL\n      ledger file missing             FAIL\n      Summary.txt missing             FAIL\n      prefix of a real row            FAIL\n\n  - the bash matcher Stage 1 uses agrees with the new pwsh one on all six probe\n    names, including the prefix case\n  - the check-coverage branches: coverage present -> has-coverage=true;\n    no coverage with a non-empty ledger -> exit 1; no coverage with an empty\n    ledger -> has-coverage=false\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n* ci(pr): ledger only projects MSBuild calls test projects\n\nThe first cut of the Stage 2 ledger over-claimed, and Stage 2 failed on its own\nPR with:\n\n  These test assemblies ran but produced no coverage row:\n    ...AotSmoke, ...AotSmoke.Setup, ...Npgsql.Tests.Integration,\n    ...Schema.Tests.Integration, ...Tests.Integration\n\nThe guard was right to complain and the ledger was wrong. It recorded any\nproject that ran a coverage-collecting TFM, but `dotnet test` runs nothing for\nthose five: the three *.Tests.Integration projects set IsTestProject=false\nunless integration.yaml sets RunIntegrationTests=true, and the AotSmoke pair are\nconsole apps, not suites. They produce no coverage by design, so requiring a row\nfor them would fail every run.\n\nStage 1 already solved this -- it gates its ledger on MSBuild's IsTestProject,\nwith a comment naming these exact projects. Stage 2 now does the same, so the\ntwo stages agree about which assemblies owe a coverage row.\n\nThe property alone decides it. No Microsoft.NET.Test.Sdk fallback, which the\ntemplate's Stage 2 has: those integration projects DO reference Test.Sdk while\nsetting IsTestProject=false, so the fallback would put them straight back into\nthe ledger and make this stage contradict Stage 1. Worth stating because the\nfallback looks like a safety net and here it is the opposite.\n\nVerified by running the same MSBuild evaluation locally, on Windows, against\nevery project under ./tests and ./benchmarks:\n\n  False  AotSmoke, AotSmoke.Setup, Npgsql.Tests.Integration,\n         Schema.Tests.Integration, Tests.Integration, Benchmarks\n  True   Cli.Tests.Unit, Npgsql.Tests.Unit, Tests.Concurrency,\n         Tests.DocExamples, Tests.Fuzz, Tests.Smoke, Tests.Unit\n\nThe False set is exactly the five the run reported, so the fix lines up 1:1 with\nthe failure rather than merely silencing it. A skipped project now says so\n(\"Not ledgered: MSBuild reports IsTestProject=false\") instead of passing\nsilently.\n\npr.yaml still parses; all 36 run: steps re-checked with `bash -n` (28) and\n[Parser]::ParseFile (8).\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 5 <noreply@anthropic.com>",
          "timestamp": "2026-10-16T20:03:53-04:00",
          "tree_id": "a1ecb65c5eb067bca805d9a22eb1206b230ca18e",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/4328332f0704b99da0d435d084a821d449535e4b"
        },
        "date": 1792195991441,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 3737304,
            "unit": "ns",
            "range": "± 71656.54333694866"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 22775395.333333332,
            "unit": "ns",
            "range": "± 2083366.4739553945"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 6403347,
            "unit": "ns",
            "range": "± 274567.3515897329"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 40140642.333333336,
            "unit": "ns",
            "range": "± 8955634.606983155"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 9041515.333333334,
            "unit": "ns",
            "range": "± 5887558.494409574"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 33366541.666666668,
            "unit": "ns",
            "range": "± 185494.8321041137"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 19850738.333333332,
            "unit": "ns",
            "range": "± 604480.3876804716"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 497186493,
            "unit": "ns",
            "range": "± 391721421.24605757"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 6045971,
            "unit": "ns",
            "range": "± 1105736.7922064455"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 36822334.5,
            "unit": "ns",
            "range": "± 2539051.2513096305"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dc15c36083c7c8ab78fbe5a4c92bcb2ef46f9784",
          "message": "ci(scorecard): suppress the CodeReviewID rule as won't-fix (#399)\n\nCloses #337.\n\nAlert 406 reports \"score is 0: Found 0/23 approved changesets\". The check counts\nchangesets approved by someone other than the author, and this is a\nsolo-maintainer repository, so it can only ever score 0. The two ways to satisfy\nit are recruiting a second maintainer, or requiring approvals and then\nadmin-bypassing every PR -- and admin bypass waives every other rule in the\nruleset, not just this one. There is no sub-case of the rule worth keeping live,\nso the whole rule is dropped before the SARIF reaches code-scanning.\n\nFiltering rather than dismissing the alert is deliberate and matches the step's\nexisting rationale: Scorecard emits a fresh SARIF each run and fingerprint drift\nmeans per-alert dismissals do not reliably survive.\n\nBranchProtectionID (#338) is deliberately NOT suppressed, even though its\ncurrent warnings are the same solo-maintainer story -- no required approvers, no\ncodeowners review, last-push approval disabled. It scores 4, not 0, because the\nrest of the protection is in place, so the rule still reports real regressions\nsuch as the ruleset being deleted or force-pushes being allowed. Suppressing it\nwould trade those away for three warnings that are a deliberate choice.\n\nMechanism added alongside the existing partial PinnedDependenciesID filter:\nSUPPRESSED_RULES drops whole rules by ruleId. $r is bound before use because\ninside `$suppressed | index(.ruleId)` the path would apply to the array rather\nthan the result -- jq 1.8 errors and older jq silently keeps everything, which\nfails open. `set -euo pipefail` is added because the new rules_json pipeline\nneeds it: the implicit shell is `bash -e` without pipefail, so a jq failure\nmid-pipe would pass an empty list through and suppress nothing.\n\nOnly CodeReviewID. Not CIIBestPracticesID, which the template suppresses but\nwhich is a live finding here, and not BranchProtectionID per above.\n\nVerified against a real Scorecard SARIF -- the scorecard-sarif artifact from run\n38984600267, 12 results:\n\n  rule                   before  after\n  BranchProtectionID          1      1\n  CIIBestPracticesID          1      1\n  CodeReviewID                1      0\n  PinnedDependenciesID        9      0\n  TOTAL                      12      2\n\nThe 9 PinnedDependenciesID rows all carry \"nugetCommand not pinned by hash\" with\n`dotnet restore` snippets, so the pre-existing partial filter is matching only\nwhat it claims to; there are no `gitHubAction not pinned` rows to keep live at\npresent because every action is SHA-pinned.\n\nNot run locally: the jq program itself, because jq is not installed on this\nmachine. The selection logic above was evaluated against the real SARIF, and the\nScorecard run after merge is the check on the jq. That run should also close\nalert 406, which works only because #397 pinned the analysis key -- without it\nthe suppression would have applied to a new key while 406 stayed open forever.\n\nCo-authored-by: Claude Opus 5 <noreply@anthropic.com>",
          "timestamp": "2026-10-16T20:35:53-04:00",
          "tree_id": "e5852156b8cf45ab7309e6ee1c5dc21d5791379c",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/dc15c36083c7c8ab78fbe5a4c92bcb2ef46f9784"
        },
        "date": 1792197919910,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 6839524.333333333,
            "unit": "ns",
            "range": "± 95709.69648543105"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Sqlite, BatchSize: 50, UseBulkInsert: False)",
            "value": 58258260.833333336,
            "unit": "ns",
            "range": "± 2923023.6125834384"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 7569045.833333333,
            "unit": "ns",
            "range": "± 453061.36230132595"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: SqlServer, BatchSize: 50, UseBulkInsert: False)",
            "value": 41859988.5,
            "unit": "ns",
            "range": "± 422408.13293425116"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 12558309.833333334,
            "unit": "ns",
            "range": "± 7297453.3189655505"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: PostgreSQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 52788175.666666664,
            "unit": "ns",
            "range": "± 418155.05807096645"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 432363774,
            "unit": "ns",
            "range": "± 351260067.65834844"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Oracle, BatchSize: 50, UseBulkInsert: False)",
            "value": 535890371,
            "unit": "ns",
            "range": "± 576337052.6096187"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 7033016.666666667,
            "unit": "ns",
            "range": "± 307995.9224703037"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: Db2, BatchSize: 50, UseBulkInsert: False)",
            "value": 48372885.333333336,
            "unit": "ns",
            "range": "± 4150954.4111529742"
          }
        ]
      }
    ],
    "Audit Interceptor Provider Benchmarks (MySQL net8.0)": [
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dcf7a63460f9098f09be9f5beb099ee68d003061",
          "message": "Merge pull request #293 from Chris-Wolfgang/protected/wire-provider-benchmarks-into-ci\n\nci: wire ProviderSaveChangesBenchmarks into the main-push trend chart",
          "timestamp": "2026-09-15T12:15:02-04:00",
          "tree_id": "bb15e0c4770c741b818500ac7347a19bce531873",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/dcf7a63460f9098f09be9f5beb099ee68d003061"
        },
        "date": 1789489456199,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 15439846.833333334,
            "unit": "ns",
            "range": "± 734270.4537493888"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 77085636,
            "unit": "ns",
            "range": "± 2476716.76842125"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3785f1e9e8a7e12c6b595e83c7a1b9defa6783dc",
          "message": "Merge pull request #294 from Chris-Wolfgang/dependabot/github_actions/github-actions-3aa15cda2b\n\nbuild(deps): bump reviewdog/action-actionlint from 1.73.3 to 1.73.4 in the github-actions group",
          "timestamp": "2026-09-15T12:28:01-04:00",
          "tree_id": "bfb07a1a541947b8e27c95c411a36d96754b055e",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/3785f1e9e8a7e12c6b595e83c7a1b9defa6783dc"
        },
        "date": 1789490279959,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 10545640.333333334,
            "unit": "ns",
            "range": "± 219796.43500369455"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 53634574.833333336,
            "unit": "ns",
            "range": "± 2921756.457442395"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ba3b3c7114078e5df8bf8e2374165ed277b82411",
          "message": "Merge pull request #298 from Chris-Wolfgang/fix/benchmarks-yaml-provider-failure-resilience\n\nfix: benchmarks.yaml resilience after a real production failure",
          "timestamp": "2026-09-15T16:13:34-04:00",
          "tree_id": "30c7abfbc7be8fb4401797d5e1141cfa37c3aba7",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/ba3b3c7114078e5df8bf8e2374165ed277b82411"
        },
        "date": 1789503776706,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 17132242.333333332,
            "unit": "ns",
            "range": "± 461905.89502660965"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 87976789,
            "unit": "ns",
            "range": "± 4743007.186336217"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7e04a11191eb66bbdfa9239cd57c8c0a54dbe562",
          "message": "Merge pull request #307 from Chris-Wolfgang/chore/baseline-0.4.1\n\nchore(pack): advance PackageValidation baseline to 0.4.1",
          "timestamp": "2026-09-15T18:51:17-04:00",
          "tree_id": "5963320c3bffac604e5faab94473104efb5d547b",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/7e04a11191eb66bbdfa9239cd57c8c0a54dbe562"
        },
        "date": 1789513231740,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 16372817.833333334,
            "unit": "ns",
            "range": "± 156548.7209667755"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 82152410.33333333,
            "unit": "ns",
            "range": "± 1077129.2649006122"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e6bf9fd11e0354695f451de3cdb1507e409c830d",
          "message": "Merge pull request #309 from Chris-Wolfgang/baseline/scorecard-badge\n\ndocs: add OpenSSF Scorecard badge to README (baseline item 17)",
          "timestamp": "2026-09-15T21:56:06-04:00",
          "tree_id": "dc07530abd5dbae8af140a69cedd71a586437922",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/e6bf9fd11e0354695f451de3cdb1507e409c830d"
        },
        "date": 1789524318476,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 16362757.166666666,
            "unit": "ns",
            "range": "± 282393.1715575526"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 75874008.33333333,
            "unit": "ns",
            "range": "± 1699866.6072902111"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f068e6421119856259bf034f7d1a2a5042702167",
          "message": "chore: ship gitleaks pre-commit hook (baseline item 4) (#308)\n\n* chore: ship gitleaks pre-commit hook (baseline item 4)\n\nCopies .githooks/pre-commit from repo-template and documents\n`git config core.hooksPath .githooks` in CONTRIBUTING.md's Getting\nStarted steps, matching the template's wording. The hook runs\n`gitleaks protect --staged --redact` on each commit and blocks on a\nhit; if the gitleaks CLI isn't installed it warns and lets the commit\nthrough, since pr.yaml's \"Secrets Scan (gitleaks)\" catches the same\nthing in CI.\n\nCloses #299\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n* fix: make .gitleaks.toml extend the built-in rules -- it defined none\n\nCopilot flagged on the hook that an allowlist-only .gitleaks.toml has no\ndetection rules. Verified against gitleaks v8.24.0 source and by\nexperiment, and it is worse than the hook: cmd/root.go loads\n(source)/.gitleaks.toml IN PLACE of the defaults whenever the file\nexists, and config.Translate only merges the built-in rules when\n[extend] useDefault = true. pr.yaml's \"Secrets Scan (gitleaks)\" runs\n`gitleaks detect --source .` with no --config, so it has been loading\nthis rule-less file too -- the CI gate has been passing while scanning\nfor nothing.\n\nRepro (throwaway repo, one commit with a synthetic ghp_ token):\n  no .gitleaks.toml            -> leaks found: 1  (built-in rules)\n  this repo's file, as-was     -> no leaks found  (zero rules)\n  this repo's file + [extend]  -> leaks found: 1\n\nSafe to turn on here: a full-history scan of AuditTrail (437 commits)\nwith the fixed config finds nothing, so CI will not go red on merge.\n\nThe same allowlist-only file ships from repo-template and is present\nin every fleet repo -- tracked separately; this PR fixes AuditTrail only.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 5 <noreply@anthropic.com>",
          "timestamp": "2026-09-15T22:25:14-04:00",
          "tree_id": "9bed683e75521cfa498e41fa3ed0cb98d92fec63",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/f068e6421119856259bf034f7d1a2a5042702167"
        },
        "date": 1789526064220,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 17685231.333333332,
            "unit": "ns",
            "range": "± 903435.8835503121"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 81605440.66666667,
            "unit": "ns",
            "range": "± 4040339.9496845976"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "98f42d4f2411b6dd473bfd5a5e95dac1b715ea68",
          "message": "chore: add changelog fragment tooling (baseline item 19, part 1 of 2) (#311)\n\n* chore: add changelog fragment tooling (baseline item 19, part 1 of 2)\n\nCopies scripts/changelog.ps1 and changelog/unreleased/README.md from\nrepo-template verbatim, and creates the `no-changelog` label the check\nhonours. This is the non-protected half; the pr.yaml `changelog-check`\njob follows in a separate protected PR and MUST merge after this one --\nthat job fails closed if scripts/changelog.ps1 is not already on main\n(it refuses to run a PR-controlled copy of its own validator).\n\nVerified against this repo's layout: `bump` reads the em-dash\n\"## [0.4.1] — 2026-09-15\" heading as 0.4.1 -> 0.4.2; `check` fails on\na src/ change with no fragment, passes with the no-changelog label or\nan added fragment, and rejects a malformed fragment.\n\nRefs #304\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n* fix: close a fragment-check bypass; align CHANGELOG headings with the tool\n\nTwo Copilot findings on the changelog tooling, both verified:\n\n1. `check` counted ANY added path under changelog/unreleased/ as a\n   fragment, but Get-Fragments only enumerates direct *.md children --\n   so `changelog/unreleased/sub/x.md` or `y.txt` satisfied the gate while\n   never being validated or assembled. Reproduced (src/ change + only\n   those two files -> passed). Predicate now requires a direct .md child;\n   the same probe now fails, and a real fragment still passes.\n\n2. `assemble` writes `## [x.y.z] - date` (Keep-a-Changelog's hyphen) but\n   every existing heading here used an em dash. Fixed in CHANGELOG.md,\n   not the script: the file's own header claims Keep-a-Changelog, whose\n   format is the hyphen, and the script is shared template code.\n   Normalized the 7 existing headings; a scratch `assemble` now inserts\n   a heading identical in form to its neighbours.\n\nFix 1 also applies to repo-template's copy; raised separately.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 5 <noreply@anthropic.com>",
          "timestamp": "2026-09-16T10:47:01-04:00",
          "tree_id": "fe6fcee478794145ab3944da2da870d30ad5f38a",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/98f42d4f2411b6dd473bfd5a5e95dac1b715ea68"
        },
        "date": 1789570597977,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 20595333.166666668,
            "unit": "ns",
            "range": "± 3740847.181522433"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 88618107.66666667,
            "unit": "ns",
            "range": "± 7581413.123942022"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "af91d11f2b6165aff20e72988bcc9fe716bbf384",
          "message": "ci: add security-alert triage workflow (baseline item 20) (#310)\n\n* ci: add security-alert triage workflow (baseline item 20)\n\nCopies .github/workflows/security-alerts.yml and scripts/security-alerts.ps1\nfrom repo-template verbatim. The script ships in the same PR because the\nworkflow sparse-checks-out scripts/security-alerts.ps1 at run time -- a\nworkflow-only split would land a nightly job that can't find its own\nlogic (the protected-file-split \"needs supporting files\" lesson).\n\nNightly it opens one `security`-labelled issue per open code-scanning,\nsecret-scanning, and Dependabot alert, and closes each when its alert\ncloses; Mondays it posts a stale-alerts summary. Issues are matched by\na body marker, so the existing `security`-labelled baseline issues are\nignored, not touched.\n\nHeads-up for the first run: AuditTrail currently has 13 open\ncode-scanning alerts (10 Scorecard -- 7 of them the known\npull_request_target finding on pr.yaml -- and 3 InspectCode), so\nexpect ~13 new issues the first night. That is the intended\n\"surface them for triage\" behaviour, not a bug.\n\nSecret-scanning and Dependabot reads need a SECURITY_ALERTS_TOKEN\nrepository secret (fine-grained PAT: Secret scanning alerts read,\nDependabot alerts read, Metadata read). Without it those two kinds are\nskipped with a notice; code-scanning works on GITHUB_TOKEN alone.\n\nCloses #305\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n* fix: harden security-alerts workflow and script per review\n\nFour Copilot findings, each checked against the code/API before acting:\n\n- Both privileged checkouts now pin `ref: main`. Without it a\n  workflow_dispatch checks out the branch selected at dispatch, so a\n  branch carrying an edited scripts/security-alerts.ps1 would run with\n  SECURITY_ALERTS_TOKEN (a PAT scoped to every repo's secret-scanning\n  alerts), issues: write and, in the autofix job, security-events:\n  write. Requires write access to trigger, but it is the same\n  trusted-from-main rule pr.yaml already applies to its config and\n  validator, and costs nothing on schedule runs (already main).\n\n- Get-TrackedIssues: the issues listing is newest-first (confirmed\n  against the live API) and state=all includes closed summaries, so the\n  last-assignment-wins loop let an older CLOSED summary displace the\n  newer OPEN one -- the next run would then open a duplicate summary\n  instead of commenting. Now keeps the OPEN summary (else the newest).\n\n- Autofix mode: a failed `gh issue comment` was piped to Out-Null and\n  never counted, contradicting the documented \"exit 1 if any issue\n  create/close/comment failed\" contract. Now counted, and the mode\n  exits 1 when any write failed. Deliberately NOT treating a rejected\n  autofix POST as a failure: 403/404 there means \"not enabled\" or \"no\n  autofix for this alert\", an expected outcome that is already\n  recorded on the issue -- failing the job for it would be noise.\n\nAll three script/workflow changes apply to repo-template's copies too;\nraised separately.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 5 <noreply@anthropic.com>",
          "timestamp": "2026-09-16T11:14:43-04:00",
          "tree_id": "70d4c09da8c1d49368955a3772071eca74009599",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/af91d11f2b6165aff20e72988bcc9fe716bbf384"
        },
        "date": 1789572180370,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 14080101.833333334,
            "unit": "ns",
            "range": "± 745976.7534798476"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 38889654.666666664,
            "unit": "ns",
            "range": "± 5726761.415049289"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "398492e2c0edab930643133d32b42e57ed30f22e",
          "message": "ci: add changelog-fragment check to pr.yaml (baseline item 19, part 2 of 2) (#312)\n\n* ci: add changelog-fragment check to pr.yaml (baseline item 19, part 2 of 2)\n\nAdds the template's `changelog-check` job, placed before inspectcode as\nin the template, with the checkout pinned to the SHA this repo already\nuses. Fails any non-Dependabot PR that changes src/ without adding a\nfragment under changelog/unreleased/ (or carrying `no-changelog`).\n\nORDERING: merge only after #311 (scripts/changelog.ps1 + fragment dir)\nis on main. The job deliberately fails closed if the script is missing\nfrom origin/main, refusing to run a PR-controlled copy of its own\nvalidator -- so merging this first would fail every subsequent PR.\n\nCloses #304\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n* fix: fetch main fully in changelog-check -- shallow base breaks the merge base\n\nCopilot flagged that `git fetch origin $BASE_SHA --depth=1` leaves the\nbase commit shallow. Reproduced: a PR branched 5 commits behind main,\nchecked out CI-style (PR head only, full depth), then main --depth=1\nand BASE_SHA --depth=1 -> `git diff BASE...HEAD` fails with \"fatal: no\nmerge base\". That is the normal state of any PR once anything else has\nmerged, so the template job as written would have failed valid PRs.\nDropping --depth=1 from both fetches keeps the repo unshallow;\nre-tested the same scenario and the check passes. Cost is negligible:\nthe PR head's history already contains most of main's.\n\nSame defect is in repo-template's pr.yaml; raised separately.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 5 <noreply@anthropic.com>",
          "timestamp": "2026-09-16T11:32:19-04:00",
          "tree_id": "1a4014060fe5bbc3f4eae8d737f6af7f8a702072",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/398492e2c0edab930643133d32b42e57ed30f22e"
        },
        "date": 1789573178205,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 15005741.5,
            "unit": "ns",
            "range": "± 674576.9148518203"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 68644053.83333333,
            "unit": "ns",
            "range": "± 1273858.161500853"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "64d2d49c9711d11675700c1d6d1bee9ef0e21c83",
          "message": "ci: pin every workflow action to a commit SHA with an exact # vX.Y.Z comment (#315)\n\nRan repo-template's scripts/pin-actions.ps1 -PinTags: tag references become\nSHA pins and major-only comments (# v7) become the exact tag on the pinned\ncommit (# v7.0.1), so zizmor's ref-version-mismatch stops firing when the\nmajor tag moves on. Only the ref/comment text changed. Dependabot keeps the\nprecision it finds, so this stays converted.\n\n51 already exact, 51 line(s) rewritten, 0 tag reference(s), 0 pinned SHA(s) with no tag\n\nRefs Chris-Wolfgang/repo-template#447\n\nCo-authored-by: Chris Wolfgang <cwolfgan@ptd.net>\nCo-authored-by: Claude Opus 5 <noreply@anthropic.com>",
          "timestamp": "2026-09-16T21:44:54-04:00",
          "tree_id": "e31eae5f75be0c8b264e6550539eb55482e906d6",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/64d2d49c9711d11675700c1d6d1bee9ef0e21c83"
        },
        "date": 1789610100844,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 13139189,
            "unit": "ns",
            "range": "± 569745.039880998"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 59776882.166666664,
            "unit": "ns",
            "range": "± 3006933.6948849293"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "def5bca69c42fbb03b15caf5884cf1ca0a7cbadf",
          "message": "chore: take template updates via scripts/upgrade.ps1 (safe bucket) + .template-version (#339)\n\n* chore: take template updates via scripts/upgrade.ps1 (safe bucket) and stamp .template-version\n\nBase = repo-template 44d150679 (last template sync in this repo's history).\nIn sync : 3 file(s);Safe    : 23 file(s);Review  : 20 file(s);\n\nApplied the safe bucket (template changed, local untouched since the base, or\nnew in the template), plus: license-audit.yaml taken from the template where\nthe local allowlist was a subset (old .github/license/ layout removed),\ntfm-parity wired into pr.yaml Stage 2 + build-pr.ps1 where the anchors exist,\nand .template-version stamped with this repo's placeholder values. Review\nbucket (customised here AND changed upstream) untouched; sidecars discarded.\n\nRelease build of the solution after the change: ok\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n* chore: keep this repo's own license-audit workflow (generates the packed THIRD-PARTY-NOTICES.md); drop the template's config\n\nThe sweep took the template's nuget-license workflow because the allowlist was a\nsubset, but AuditTrail's workflow is a different tool (dotnet-project-licenses)\nthat also generates THIRD-PARTY-NOTICES.md, which every src package includes.\nRestored the original workflow and .github/license/; removed the unconsumed\n.github/license-audit/*. Template follow-up: notices generation.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n* chore: review follow-ups (round 4)\n\n- `scripts/Setup-BranchRuleset.ps1` updated to the template version (the old copy lacked `-RequireLinearHistory`, which `Fix-BranchRuleset.ps1` now passes); repository placeholder filled\n- `.github/workflows/sbom.yaml`: updated to the template version from repo-template#572 (exact net10.0 match / workload restore)\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Chris Wolfgang <cwolfgan@ptd.net>\nCo-authored-by: Claude Opus 5 <noreply@anthropic.com>",
          "timestamp": "2026-09-17T20:53:06-04:00",
          "tree_id": "ee65819005040b0b858d2bf84d19909d6daba449",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/def5bca69c42fbb03b15caf5884cf1ca0a7cbadf"
        },
        "date": 1789693329902,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 16743231.666666666,
            "unit": "ns",
            "range": "± 517778.8797327807"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 76135179,
            "unit": "ns",
            "range": "± 1242377.9728371718"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5259cfa2882d2a0af4368c264cbe4509110f4ba6",
          "message": "ci(guard): configuration-only PRs pass the protected-file guard; mixed PRs fail and cannot be bypassed (#341)\n\nTemplate change repo-template#582: a PR whose only changes are protected files\n(workflows, Directory.Build.props, .editorconfig, ...) passes the guard with a\nwarning banner and merges on review with the ruleset active; a PR that mixes\nprotected files with anything else fails and must be split. The diff is now\ntaken against the merge base with main, so a PR that is merely behind main is\nnot blamed for files main changed since it branched. Ends the\ndisable-ruleset / merge / re-enable routine.\n\nCo-authored-by: Chris Wolfgang <cwolfgan@ptd.net>\nCo-authored-by: Claude Opus 5 <noreply@anthropic.com>",
          "timestamp": "2026-09-19T09:15:23-04:00",
          "tree_id": "86c36e908103869e23f769e219ce60b1603c88a7",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/5259cfa2882d2a0af4368c264cbe4509110f4ba6"
        },
        "date": 1789824278066,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 17074237,
            "unit": "ns",
            "range": "± 703212.5173651277"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 83918310,
            "unit": "ns",
            "range": "± 3329714.336109481"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3119c13cc468b35bdf5a576b9162cda335d5512f",
          "message": "ci(guard): find the merge base on a shallow checkout and fail closed when it cannot (#342)\n\nrepo-template#584: the detect job's checkout is depth 1, so the guard's\nthree-dot diff had no merge base, failed silently and reported \"no protected\nconfiguration files changed\" for every PR. Deepen the PR head until a merge\nbase exists, diff against it explicitly, and error out if none can be found.\n\nCo-authored-by: Chris Wolfgang <cwolfgan@ptd.net>\nCo-authored-by: Claude Opus 5 <noreply@anthropic.com>",
          "timestamp": "2026-09-19T13:46:48-04:00",
          "tree_id": "0c0b1b53d52504339dc4e826fc9aed3de5b6f0d2",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/3119c13cc468b35bdf5a576b9162cda335d5512f"
        },
        "date": 1789840570495,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 17274449.333333332,
            "unit": "ns",
            "range": "± 218885.93144680024"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 83043948.33333333,
            "unit": "ns",
            "range": "± 1063561.5860401941"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "acaafb63efe4655b0e560f032b44b00056ebe218",
          "message": "chore(deps): bump the github-actions group with 4 updates (#348)\n\nBumps the github-actions group with 4 updates: [github/codeql-action/upload-sarif](https://github.com/github/codeql-action), [benchmark-action/github-action-benchmark](https://github.com/benchmark-action/github-action-benchmark), [github/codeql-action/init](https://github.com/github/codeql-action) and [github/codeql-action/analyze](https://github.com/github/codeql-action).\n\n\nUpdates `github/codeql-action/upload-sarif` from 4.37.9 to 4.38.0\n- [Release notes](https://github.com/github/codeql-action/releases)\n- [Changelog](https://github.com/github/codeql-action/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/github/codeql-action/compare/v4.37.9...b96794f015dfd88f77b49b1c93e0fa7110f94c63)\n\nUpdates `benchmark-action/github-action-benchmark` from 1.22.1 to 1.22.2\n- [Release notes](https://github.com/benchmark-action/github-action-benchmark/releases)\n- [Changelog](https://github.com/benchmark-action/github-action-benchmark/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/benchmark-action/github-action-benchmark/compare/52576c92bccf6ac60c8223ec7eb2565637cae9ba...4322e5726e6334590d251fc4f92bec0efafc45dc)\n\nUpdates `github/codeql-action/init` from 4.37.9 to 4.38.0\n- [Release notes](https://github.com/github/codeql-action/releases)\n- [Changelog](https://github.com/github/codeql-action/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/github/codeql-action/compare/cdf488f595d80d6e07e03d4674febd5ab45fa938...b96794f015dfd88f77b49b1c93e0fa7110f94c63)\n\nUpdates `github/codeql-action/analyze` from 4.37.9 to 4.38.0\n- [Release notes](https://github.com/github/codeql-action/releases)\n- [Changelog](https://github.com/github/codeql-action/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/github/codeql-action/compare/cdf488f595d80d6e07e03d4674febd5ab45fa938...b96794f015dfd88f77b49b1c93e0fa7110f94c63)\n\n---\nupdated-dependencies:\n- dependency-name: github/codeql-action/upload-sarif\n  dependency-version: 4.38.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: github-actions\n- dependency-name: benchmark-action/github-action-benchmark\n  dependency-version: 1.22.2\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: github-actions\n- dependency-name: github/codeql-action/init\n  dependency-version: 4.38.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: github-actions\n- dependency-name: github/codeql-action/analyze\n  dependency-version: 4.38.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: github-actions\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-09-22T12:50:44-04:00",
          "tree_id": "4507567bdac7722a78ee35eee2cd1aedef806008",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/acaafb63efe4655b0e560f032b44b00056ebe218"
        },
        "date": 1790096406713,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 16550242.666666666,
            "unit": "ns",
            "range": "± 1346574.1764441845"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 77413179,
            "unit": "ns",
            "range": "± 4104227.0656096744"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c82bcc17b0a9456708c00cd78e9336683c26c7fc",
          "message": "Bump the dotnet-dependencies group with 14 updates (#349)\n\nBumps Meziantou.Analyzer from 3.0.228 to 3.0.259\nBumps Microsoft.AspNetCore.Identity.EntityFrameworkCore from 10.0.11 to 10.0.12\nBumps Microsoft.Bcl.TimeProvider from 10.0.11 to 10.0.12\nBumps Microsoft.Data.SqlClient from 7.0.2 to 7.0.3\nBumps Microsoft.EntityFrameworkCore.Design from 10.0.11 to 10.0.12\nBumps Microsoft.EntityFrameworkCore.SqlServer from 9.0.19 to 9.0.20\nBumps Microsoft.EntityFrameworkCore.Tasks from 10.0.11 to 10.0.12\nBumps Microsoft.Extensions.DependencyInjection.Abstractions from 10.0.11 to 10.0.12\nBumps Microsoft.Extensions.Hosting from 10.0.11 to 10.0.12\nBumps Microsoft.Extensions.Logging.Abstractions from 10.0.11 to 10.0.12\nBumps Microsoft.SourceLink.GitHub from 10.0.400 to 10.0.401\nBumps SonarAnalyzer.CSharp from 10.33.0.1635 to 10.34.0.3385\nBumps System.Configuration.ConfigurationManager from 10.0.11 to 10.0.12\nBumps System.Security.Cryptography.Xml from 10.0.11 to 10.0.12\n\n---\nupdated-dependencies:\n- dependency-name: Meziantou.Analyzer\n  dependency-version: 3.0.259\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: dotnet-dependencies\n- dependency-name: Microsoft.AspNetCore.Identity.EntityFrameworkCore\n  dependency-version: 10.0.12\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: dotnet-dependencies\n- dependency-name: Microsoft.Bcl.TimeProvider\n  dependency-version: 10.0.12\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: dotnet-dependencies\n- dependency-name: Microsoft.Data.SqlClient\n  dependency-version: 7.0.3\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: dotnet-dependencies\n- dependency-name: Microsoft.EntityFrameworkCore.Design\n  dependency-version: 10.0.12\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: dotnet-dependencies\n- dependency-name: Microsoft.EntityFrameworkCore.SqlServer\n  dependency-version: 9.0.20\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: dotnet-dependencies\n- dependency-name: Microsoft.EntityFrameworkCore.Tasks\n  dependency-version: 10.0.12\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: dotnet-dependencies\n- dependency-name: Microsoft.Extensions.DependencyInjection.Abstractions\n  dependency-version: 10.0.12\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: dotnet-dependencies\n- dependency-name: Microsoft.Extensions.Hosting\n  dependency-version: 10.0.12\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: dotnet-dependencies\n- dependency-name: Microsoft.Extensions.Logging.Abstractions\n  dependency-version: 10.0.12\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: dotnet-dependencies\n- dependency-name: Microsoft.SourceLink.GitHub\n  dependency-version: 10.0.401\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: dotnet-dependencies\n- dependency-name: SonarAnalyzer.CSharp\n  dependency-version: 10.34.0.3385\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: dotnet-dependencies\n- dependency-name: System.Configuration.ConfigurationManager\n  dependency-version: 10.0.12\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: dotnet-dependencies\n- dependency-name: System.Security.Cryptography.Xml\n  dependency-version: 10.0.12\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: dotnet-dependencies\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Chris Wolfgang <210299580+Chris-Wolfgang@users.noreply.github.com>",
          "timestamp": "2026-09-22T13:17:49-04:00",
          "tree_id": "e8c43eb41e38b34e4be108da981d703b70288a88",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/c82bcc17b0a9456708c00cd78e9336683c26c7fc"
        },
        "date": 1790098098214,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 11326935.666666666,
            "unit": "ns",
            "range": "± 340145.29324148135"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 57496759.833333336,
            "unit": "ns",
            "range": "± 3338114.871247593"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c0b4bbeb8d1ae7b33815b65f47c53a1b2db49b0c",
          "message": "security(ci): silence zizmor self-repository on the docfx call, with the reason (#352)\n\nzizmor flags `uses: ./.github/workflows/docfx.yaml` and asks for GitHub's\ndedicated `$/` self-repository syntax. We cannot switch yet: actionlint is a\nrequired check here and rejects `$/` until rhysd/actionlint#732 ships. The\nalert has therefore been sitting open with nothing to do about it.\n\nrepo-template resolved this by keeping `./` and carrying a rule-specific inline\nignore plus the reason and the exit condition. This takes the same four lines,\nso the alert closes and the next reader learns why the preferred syntax is not\nin use and when to switch.\n\nNo behaviour change: the workflow call is byte-identical apart from the comment.\n\nCo-authored-by: Claude Opus 5 <noreply@anthropic.com>",
          "timestamp": "2026-09-23T10:47:56-04:00",
          "tree_id": "c98ddde8b1c5f41f6af4b1310d4992e481e7d859",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/c0b4bbeb8d1ae7b33815b65f47c53a1b2db49b0c"
        },
        "date": 1790175485199,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 18438430.833333332,
            "unit": "ns",
            "range": "± 602583.6919211582"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 84934808,
            "unit": "ns",
            "range": "± 4178800.7827759627"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a3bbe78a1cb788e154b474652db065170b627466",
          "message": "fix(cli): unsubscribe the Ctrl+C handler before the token source is disposed (#355)\n\n* fix(cli): unsubscribe the Ctrl+C handler before the token source is disposed\n\nClears the repository's three open InspectCode warnings. Each was checked\nagainst the code rather than taken on the analyzer's word; all three were real.\n\nAccessToDisposedClosure, Cli/Program.cs:37 — the genuine bug. Console.CancelKeyPress\nis a STATIC event, so the handler added in Main outlives the method. `cancellation`\nis a `using` local, so once Main returns the CancellationTokenSource is disposed\nwhile the handler is still subscribed; a Ctrl+C arriving in that window calls\nCancel() on a disposed source and throws during shutdown. The handler is now held\nin a variable and removed in the existing finally block.\n\nRedundantCast, EntityFrameworkCore/Internal/AuditCapture.cs:91 — correct, and this\nis the finding class that most often is not, so it was verified: ReadKeyValues\nreturns IReadOnlyList<object?> and object?[] converts to it but not the reverse,\nso best-common-type resolution already produces IReadOnlyList<object?> and the\ncast changes nothing. Rather than just deleting it, the variable now states its\ntype and the conditional is target-typed - which is what the sibling\nResolvePostSaveKey already does, via its return type.\n\nInvalidXmlDocComment, Npgsql test support — <paramref name=\"connection\"/> on a\nCLASS summary, where there is no such parameter; `connection` belongs to\nBeginBinaryImport. Now <c>connection</c>. Documentation only.\n\nTEST-CODE CHANGE: one XML doc comment in\ntests/.../TestSupport/FakeNpgsqlBinaryImporterFactory.cs. No behaviour, no\nassertions, no coverage effect.\n\nVerified locally: EntityFrameworkCore builds clean on net6.0, net8.0 and net10.0\n(0 Error(s)); tests pass 286/307/309 across those three TFMs, Npgsql unit 23/23,\nCli unit 30/30.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n* chore: re-fire CI so the perf-impact-acknowledged label is visible to the gate\n\nEmpty on purpose. pr-benchmarks.yaml reads the override label from the event\npayload:\n\n  LABELS: ${{ join(github.event.pull_request.labels.*.name, ',') }}\n\nand its trigger has no `labeled` type, so adding the label neither starts a run\nnor reaches a re-run - a re-run replays the original payload, which predates the\nlabel. A fresh `synchronize` event is the only way to make the documented\noverride take effect.\n\nThe three benchmarks over threshold are all _without_audit control paths, which\nthis PR cannot touch: it changes a CLI event-handler unsubscribe, a redundant\ncast whose removal emits identical IL, and an XML doc comment. Every audited path\nis flat or faster in the same run and allocations are unchanged. Reasoning in full\non the PR.\n\nWorth fixing separately: adding `labeled` to that workflow's trigger types would\nmake the override work as documented, without an empty commit.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n* fix(cli): close the shutdown race the unsubscribe alone left open\n\nReview finding on Program.cs:74, and it is right. Removing the handler stops\nFUTURE invocations; it does not wait for one already dispatched.\nConsole.CancelKeyPress runs handlers on their own thread, so a Ctrl+C that\narrived moments before Main returned can still be inside the lambda when the\n`using` disposes the CancellationTokenSource - reproducing the exact\nObjectDisposedException the previous commit claimed to prevent. A narrower\nwindow than the original bug, but the same bug, and the claim was wrong.\n\nMoved into ConsoleCancellationBridge. Disposal unsubscribes and then takes the\nsame lock the callback holds, so it cannot return until any in-flight callback\nhas left; the callback re-checks a shutdown flag under that lock and does\nnothing if it lost the race. The bridge is declared AFTER `cancellation` in\nMain, so `using` disposes it FIRST - unsubscribe and drain, then dispose the\nsource.\n\nExtracting it was not only for tidiness: the inline lock pushed Main to 70 lines\nand MA0051 (max 60) failed the Release build locally. Caught before pushing.\n\nVerified: build 0 Error(s), Cli unit tests 30/30, and `audittrail --help` runs\nand exits 0.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n* fix(cli): use System.Threading.Lock for the shutdown gate\n\nThe bridge added in 4bde2c3 guarded itself with a plain `object`, which tripped\nMA0158 (\"Use System.Threading.Lock\") - a NEW InspectCode alert introduced by the\nvery PR that clears three of them.\n\nSystem.Threading.Lock exists on net9.0+ and this project targets net10.0 only,\nso there is no multi-TFM conditional to worry about. C# 13 recognises it in a\n`lock` statement, so the statement bodies are unchanged; it takes the dedicated\nlock path rather than Monitor.\n\nVerified: build 0 Error(s), Cli unit tests 30/30.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 5 <noreply@anthropic.com>",
          "timestamp": "2026-09-23T20:03:57-04:00",
          "tree_id": "e7b2ffd330decff928254b446c8c03a18cb81695",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/a3bbe78a1cb788e154b474652db065170b627466"
        },
        "date": 1790208785604,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 18580131.833333332,
            "unit": "ns",
            "range": "± 485053.9963553886"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 93508000,
            "unit": "ns",
            "range": "± 11478967.134757074"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f98d1ee6611ba33f10e8c43fb1dc449cccd292f4",
          "message": "ci: re-run the gates on push to main so main's InspectCode alerts refresh (#358)\n\n* ci: re-run the gates on push to main so main's InspectCode alerts refresh\n\n#351 swapped this workflow from pull_request_target to pull_request. That fixed\neight critical DangerousWorkflow alerts, but it silently broke something I did\nnot port at the time: under pull_request_target the InspectCode SARIF was\nattributed to refs/heads/main, and under pull_request it is attributed to\nrefs/pull/N/merge. Main is therefore never re-scanned, and an alert stays open\nafter the code that caused it is fixed - which is exactly what #355 would have\nleft behind for alerts #528/#531/#536 and issues #333/#334/#335.\n\nrepo-template's pr.yaml has carried the push trigger and this rationale all\nalong. Porting it is four changes, not one, because this workflow still has the\nPR-shaped pieces the template moved out:\n\n- push: branches [main] added.\n- The protected-file classifier is gated to pull_request. It diffs the PR\n  against its merge base; on a push there is no PR and it would fail closed.\n- changelog-check is gated to pull_request. It reads\n  github.event.pull_request.base.sha, which a push does not have.\n- inspectcode-upload-sarif now allows push. Its fork/Dependabot guard, added in\n  #351, tests github.event.pull_request.head.repo.full_name - empty on a push,\n  so without this the one job the trigger exists for would skip and the change\n  would accomplish nothing.\n\nChecked every remaining github.event.pull_request reference for push behaviour:\nthe concurrency group falls back to github.ref, and the six \"fetch trusted\nconfiguration from main\" steps are no-ops when the run is already on main.\n\nCost, stated plainly: one full matrix run per merge to main.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n* ci: gate the trusted-config restoration to pull_request\n\nReview finding on this PR, and it corrects something I asserted. When I added the\npush trigger I checked every github.event.pull_request reference and called the\nsix \"fetch trusted configuration from main\" steps harmless on push - \"no-ops when\nthe run is already on main\". That is only true if main does not move.\n\nIt does. Those steps run `git fetch origin main:main-branch` and overwrite the\nchecked-out files from the MOVING main ref, not from the pushed SHA. If another\ncommit lands while the run is executing - routine here, several PRs often merge\nin a row - the run for SHA A is built and scanned with SHA B's configuration, so\nit no longer validates the merged result the trigger exists to validate.\n\nThe gitleaks job had the same problem and no guard at all: it fetched\n.gitleaks.toml from main unconditionally, so a push run could be scanned with a\nlater commit's allowlist.\n\nAll seven are now pull_request only. This does not weaken anything: on a push the\nchecked-out files ARE the trusted configuration, because the run is on main at\nthe pushed commit. Restoring them was never doing useful work there.\n\nRe-audited every remaining github.event.pull_request reference: PR_NUMBER sits\ninside the step gated above it, BASE_SHA/PR_LABELS inside changelog-check's\njob-level gate, and the SARIF upload's reference is the || branch after\ngithub.event_name == 'push' short-circuits.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 5 <noreply@anthropic.com>",
          "timestamp": "2026-09-23T20:45:40-04:00",
          "tree_id": "db08246bb2e711bf616cac9ac2a050498e801ef9",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/f98d1ee6611ba33f10e8c43fb1dc449cccd292f4"
        },
        "date": 1790211693630,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 16121731.833333334,
            "unit": "ns",
            "range": "± 374543.1505732461"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 78769743,
            "unit": "ns",
            "range": "± 3434203.338117299"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6a2838fddc4442e9a936159b9c98758eeba316da",
          "message": "fix(ci): keep the benchmark-regression label description under GitHub's limit (#357)\n\nSurfaced by the run behind #354:\n\n  HTTP 422: Validation Failed (.../labels)\n  description is too long (maximum is 100 characters)\n\nThe description is 104 characters. `|| true` keeps that from failing the step,\nso the consequence is quiet rather than loud: the label is never created or\nupdated from this workflow, and every run logs a 422 that reads like a real\nfailure while triaging something else - which is exactly what it cost while\ntriaging #354.\n\nShortened to 82 characters. The comment above the call already explains why\nlabel creation matters here (the first real run of this handler failed outright\nbecause `gh issue create --label` hard-fails on a missing label), so the fix\nbelongs with it.\n\nChecked the other three label-creating workflows in this repository -\ncoyote.yaml (53), fuzz.yaml (54) and shadow.yaml (73) are all within the limit.\n\nCo-authored-by: Claude Opus 5 <noreply@anthropic.com>",
          "timestamp": "2026-09-23T21:30:57-04:00",
          "tree_id": "622c33b204ff2aaa5c2157fc16df67d295780e7e",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/6a2838fddc4442e9a936159b9c98758eeba316da"
        },
        "date": 1790214014933,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 15475629,
            "unit": "ns",
            "range": "± 727575.7715846509"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 78505900,
            "unit": "ns",
            "range": "± 2068327.225396649"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "094696ac88e1d6f48b63d7dd8d415bbefced1dc9",
          "message": "fix(shadow): compare against 0.4.1, not a package three releases old (#356)\n\nTriaging #347 turned up why the shadow gate fired: BaselineVersion is still\n0.2.1, while 0.3.0, 0.4.0 and 0.4.1 have all shipped since.\nPackageValidationBaselineVersion was bumped to 0.4.1 after the release; this\nproperty was not.\n\nThe gate is therefore not measuring what it is for. It compares main against a\npackage three releases old, so every accumulated change since 0.2.1 reads as a\nregression - and, worse in the other direction, a regression introduced since\n0.4.1 is invisible inside that larger delta. Both failure modes are silent.\n\nBumped to 0.4.1 and the comment now says the property must be bumped after each\nrelease alongside PackageValidationBaselineVersion, so the next release does not\nrepeat it.\n\nVerified the baseline package restores and the sample builds against it\n(-p:UseBaselinePackage=true, 0 Error(s)).\n\nCo-authored-by: Claude Opus 5 <noreply@anthropic.com>",
          "timestamp": "2026-09-23T22:19:23-04:00",
          "tree_id": "6a4da2281d87c90f0618cb80d2ba6bffe65ec168",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/094696ac88e1d6f48b63d7dd8d415bbefced1dc9"
        },
        "date": 1790216900613,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 13052362,
            "unit": "ns",
            "range": "± 2335800.9506865093"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 57571341,
            "unit": "ns",
            "range": "± 1116515.722517153"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b9e798fc6af7a0429f1e15cedc345ce8e8f46eb3",
          "message": "ci(release): attach the SLSA provenance bundle to the GitHub Release (#359)\n\nAuditTrail has attested every release since #47 - attest-build-provenance binds\neach .nupkg by SHA-256 to this repository, commit and workflow run, signed\nkeylessly through the job's OIDC identity. That lands in GitHub's attestation\nstore, which is what `gh attestation verify` reads, exactly as SECURITY.md\ndocuments.\n\nTooling that audits the RELEASE PAGE never queries that store. OpenSSF\nScorecard's Signed-Releases check looks for an asset whose name ends in\n.intoto.jsonl, finds .nupkg and .bom.json, and scores 0 - a false negative on a\nrepository that has been doing this correctly for months. Anyone reading the\nrelease page without the gh CLI is in the same position.\n\nThe bundle the action writes IS that document. It is now copied to\nAuditTrail-<tag>.intoto.jsonl and attached alongside the packages.\n\nTo be exact about what this buys: NOTHING cryptographic. The attestation was\nalready real and already verifiable. This only makes the same evidence visible\nwhere tools and people look for it.\n\nUnlike repo-template, attesting and attaching already happen in the same job\nhere (update-release-artifacts holds contents/id-token/attestations write), so\nno artifact round-trip is needed. Staging fails loudly if the action reports no\nbundle, rather than letting the upload quietly omit it.\n\nSame change at source in repo-template#647.\n\nCo-authored-by: Claude Opus 5 <noreply@anthropic.com>",
          "timestamp": "2026-09-24T10:41:35-04:00",
          "tree_id": "aea83e2cd8afd8ca30690dea3ce1bcca4d0659a9",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/b9e798fc6af7a0429f1e15cedc345ce8e8f46eb3"
        },
        "date": 1790261467545,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 17007338.166666668,
            "unit": "ns",
            "range": "± 651138.3307395851"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 90660613.16666667,
            "unit": "ns",
            "range": "± 8945284.549604911"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f0d326e87d84895b2dc807431c7d6672ca067615",
          "message": "ci(benchmarks): let the perf-impact-acknowledged label re-trigger the gate (#361)\n\n* ci(benchmarks): let the perf-impact-acknowledged label re-trigger the gate\n\nThe workflow documents an override - \"Add the 'perf-impact-acknowledged' label to\noverride\" - that could not work. The gate reads the label from the event payload:\n\n  LABELS: ${{ join(github.event.pull_request.labels.*.name, ',') }}\n\nand the trigger had no `labeled` type, so adding the label started nothing, and a\nre-run replays the ORIGINAL payload, which predates the label. On #355 the only\nway through was an empty commit, which re-runs every workflow on the PR rather\nthan this one.\n\n`labeled` added to the trigger types (with the three defaults spelled out, since\nnaming any type replaces them all). The job then ignores label events other than\nthe override, so an unrelated label does not pay for a full base-and-head\nBenchmarkDotNet run.\n\nKnown trade-off: on an unrelated label the job is skipped, and that skipped check\nrun becomes the latest for \"Benchmark delta vs base\" - visually superseding an\nearlier failure. It is not a required check so nothing is unblocked by it, but\nthe alternative is re-running the whole suite on every label. Raised on the PR so\nthe choice is visible rather than buried here.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n* ci(benchmarks): re-evaluate when the override label is removed too\n\nReview finding, and it is the symmetric half of what this PR set out to fix.\nAdding the label now re-runs the gate; removing it did not. So an acknowledged\nrun stayed green after the acknowledgement was withdrawn - the check and its\ncomment kept asserting an override that no longer existed, which is worse than\nthe original bug because it reads as a pass rather than as something stuck.\n\n`unlabeled` added to the trigger types, and the job guard now covers both label\nactions while still ignoring every other label, so an unrelated add or remove\ndoes not pay for a full base-and-head BenchmarkDotNet run. `github.event.label`\nis populated for both actions, so the same condition works for each.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 5 <noreply@anthropic.com>",
          "timestamp": "2026-09-24T14:28:15-04:00",
          "tree_id": "9a90e29341169940736d80e742b1e1f66efc6e72",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/f0d326e87d84895b2dc807431c7d6672ca067615"
        },
        "date": 1790275362214,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 110006575.16666667,
            "unit": "ns",
            "range": "± 172239638.23879156"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 99277097.83333333,
            "unit": "ns",
            "range": "± 62680939.5539836"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a266291ac5939eb729d8f39d1dde6ff26743429f",
          "message": "ci: retire the inline guard and the trusted-config restoration (#362)\n\n* ci: retire the inline guard and the trusted-config restoration\n\nFinishes the migration #351 started. That PR moved pr.yaml to `pull_request` and\nadded protected-files.yaml; this removes what the old pull_request_target model\nneeded and the new one does not. repo-template completed the same migration and\ncarries none of these steps.\n\nRemoved, 429 lines across eight jobs:\n\n- \"Detect protected configuration file changes\" (61 run-lines) inside the\n  REQUIRED \"Detect .NET Projects\" job. Protected Files Guard now does this\n  properly - from main, with no checkout, reading the PR's file list through the\n  API - and is a required check as of today. The inline copy ran from the PR's\n  OWN pr.yaml under `pull_request`, so it looked like a gate and was not one. A\n  required check that cannot be trusted is worse than no check there.\n- Seven \"Fetch trusted configuration files from main branch\" steps, plus the\n  gitleaks and changelog-script equivalents. Under `pull_request` the PR's own\n  copies are what run and what reviewers see; restoring main's versions over them\n  made CI validate something other than the merged result. They were also the\n  source of the race found on #358 (the fetch takes the MOVING main ref) and of\n  the .editorconfig-collapse bug recorded in the fleet notes.\n\nWhat replaces them: a PR cannot weaken a gate and pass it in the same change,\nbecause Protected Files Guard fails any PR mixing a protected file with anything\nelse, and nothing bypasses it. A configuration-only PR runs CI with the new\nconfiguration and is reviewed on its own - the documented, intended behaviour.\n\nKept deliberately: the TFM-parity step's own fetch of scripts/tfm-parity.ps1 from\nmain. Different purpose (the script may not be on the branch yet) and it skips\ngracefully; not part of this pattern.\n\ndetect-projects keeps its has-projects output and every required job name still\nexists.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n* docs(ci): the changelog check runs the PR's own script now, so say that\n\nReview finding. Removing \"Fetch trusted changelog script from main\" left the\ncomment above changelog-check still claiming the script \"is taken from main so a\nPR cannot weaken its own check\". That is now false, and falsely reassuring - it\ndescribes an integrity mechanism this workflow no longer has.\n\nThe comment now says what is true: the script, the fragments and the diff all\ncome from the PR head, and integrity comes from the guard instead -\nscripts/changelog.ps1 is a protected file, so protected-files.yaml fails any PR\nchanging it alongside anything else, and a change to it can only land as a\nconfiguration-only PR reviewed on its own.\n\nChecked the other comments the removal could have stranded. The tfm-parity one at\nline 440 makes the same claim and is still TRUE - that step's own fetch of\nscripts/tfm-parity.ps1 from main was deliberately kept - so it is left alone.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 5 <noreply@anthropic.com>",
          "timestamp": "2026-09-24T20:09:18-04:00",
          "tree_id": "b18f1596e31fc0944f1c0264c893c15255cb366d",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/a266291ac5939eb729d8f39d1dde6ff26743429f"
        },
        "date": 1790295544005,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 18123533,
            "unit": "ns",
            "range": "± 819932.3174329696"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 86935654.83333333,
            "unit": "ns",
            "range": "± 7213286.43447079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ee20d5b6fb699b3c02a328c48c6c32373d8d0cf2",
          "message": "ci: run the schema integration tests in the integration workflow (#366)\n\nWolfgang.AuditTrail.EntityFrameworkCore.Schema.Tests.Integration has\nnever run in CI. integration.yaml names two projects explicitly and this\nis not one of them, and pr.yaml's sweep over ./tests reaches it but\nleaves IsTestProject false without RunIntegrationTests, so it discovers\nno test framework and runs nothing. The whole suite covering\nAuditSchemaMigrator against real SQL Server and PostgreSQL containers has\nonly ever been run by hand.\n\nAdd it to the restore, build and test steps alongside the other two. Both\nSDKs were already installed, so the project's net8.0 and net10.0 slots\nboth run without further setup.\n\nCo-authored-by: Claude Opus 5 <noreply@anthropic.com>",
          "timestamp": "2026-09-25T10:48:44-04:00",
          "tree_id": "a8f2d1f6e8af5e7c1e3f3327a1594367f8e88a05",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/ee20d5b6fb699b3c02a328c48c6c32373d8d0cf2"
        },
        "date": 1790348290185,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 17655971.166666668,
            "unit": "ns",
            "range": "± 1109790.8768021718"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 85117879.5,
            "unit": "ns",
            "range": "± 5513007.7985913465"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a2dfe45a13dd5347bd788b7d7fc37aa62fb601cd",
          "message": "Bump the dotnet-dependencies group with 4 updates (#382)\n\nBumps coverlet.collector from 10.0.1 to 10.1.0\nBumps Meziantou.Analyzer from 3.0.259 to 3.0.290\nBumps Microsoft.Data.SqlClient from 7.0.3 to 7.1.0\nBumps SonarAnalyzer.CSharp from 10.34.0.3385 to 10.35.0.4138\n\n---\nupdated-dependencies:\n- dependency-name: coverlet.collector\n  dependency-version: 10.1.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: dotnet-dependencies\n- dependency-name: coverlet.collector\n  dependency-version: 10.1.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: dotnet-dependencies\n- dependency-name: coverlet.collector\n  dependency-version: 10.1.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: dotnet-dependencies\n- dependency-name: coverlet.collector\n  dependency-version: 10.1.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: dotnet-dependencies\n- dependency-name: coverlet.collector\n  dependency-version: 10.1.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: dotnet-dependencies\n- dependency-name: coverlet.collector\n  dependency-version: 10.1.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: dotnet-dependencies\n- dependency-name: coverlet.collector\n  dependency-version: 10.1.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: dotnet-dependencies\n- dependency-name: coverlet.collector\n  dependency-version: 10.1.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: dotnet-dependencies\n- dependency-name: Meziantou.Analyzer\n  dependency-version: 3.0.290\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: dotnet-dependencies\n- dependency-name: Microsoft.Data.SqlClient\n  dependency-version: 7.1.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: dotnet-dependencies\n- dependency-name: SonarAnalyzer.CSharp\n  dependency-version: 10.35.0.4138\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: dotnet-dependencies\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-10-10T10:13:41-04:00",
          "tree_id": "6a6797d0695f0344e2a26b3b2e1edd95cbdbc84c",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/a2dfe45a13dd5347bd788b7d7fc37aa62fb601cd"
        },
        "date": 1791643800654,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 9793910.833333334,
            "unit": "ns",
            "range": "± 303200.14913804596"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 45762629.5,
            "unit": "ns",
            "range": "± 2930833.747110027"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "467360754c3a24753bfd45bb7b7b976de3661ce7",
          "message": "chore(deps): bump urllib3 (#379)\n\nBumps the pip group with 1 update in the /.github/requirements directory: [urllib3](https://github.com/urllib3/urllib3).\n\n\nUpdates `urllib3` from 2.7.0 to 2.8.0\n- [Release notes](https://github.com/urllib3/urllib3/releases)\n- [Changelog](https://github.com/urllib3/urllib3/blob/main/CHANGES.rst)\n- [Commits](https://github.com/urllib3/urllib3/compare/2.7.0...2.8.0)\n\n---\nupdated-dependencies:\n- dependency-name: urllib3\n  dependency-version: 2.8.0\n  dependency-type: indirect\n  dependency-group: pip\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Chris Wolfgang <210299580+Chris-Wolfgang@users.noreply.github.com>",
          "timestamp": "2026-10-10T16:31:30-04:00",
          "tree_id": "819a4c863ac479ac8bb1c28fd5f499ebe94110b6",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/467360754c3a24753bfd45bb7b7b976de3661ce7"
        },
        "date": 1791665315417,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 17679993.833333332,
            "unit": "ns",
            "range": "± 717400.6766168633"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 85362042.16666667,
            "unit": "ns",
            "range": "± 4030547.771081039"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "816fdf6c0ec26adfa9b24a7f0fbce95cf6e8bf13",
          "message": "chore(deps): bump the github-actions group with 3 updates (#373)\n\nBumps the github-actions group with 3 updates: [github/codeql-action/upload-sarif](https://github.com/github/codeql-action), [github/codeql-action/init](https://github.com/github/codeql-action) and [github/codeql-action/analyze](https://github.com/github/codeql-action).\n\n\nUpdates `github/codeql-action/upload-sarif` from 4.38.0 to 4.38.1\n- [Release notes](https://github.com/github/codeql-action/releases)\n- [Changelog](https://github.com/github/codeql-action/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/github/codeql-action/compare/b96794f015dfd88f77b49b1c93e0fa7110f94c63...1c5b675653bb5c22dbe9b12b556ec555138e09fd)\n\nUpdates `github/codeql-action/init` from 4.38.0 to 4.38.1\n- [Release notes](https://github.com/github/codeql-action/releases)\n- [Changelog](https://github.com/github/codeql-action/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/github/codeql-action/compare/b96794f015dfd88f77b49b1c93e0fa7110f94c63...1c5b675653bb5c22dbe9b12b556ec555138e09fd)\n\nUpdates `github/codeql-action/analyze` from 4.38.0 to 4.38.1\n- [Release notes](https://github.com/github/codeql-action/releases)\n- [Changelog](https://github.com/github/codeql-action/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/github/codeql-action/compare/b96794f015dfd88f77b49b1c93e0fa7110f94c63...1c5b675653bb5c22dbe9b12b556ec555138e09fd)\n\n---\nupdated-dependencies:\n- dependency-name: github/codeql-action/upload-sarif\n  dependency-version: 4.38.1\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: github-actions\n- dependency-name: github/codeql-action/init\n  dependency-version: 4.38.1\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: github-actions\n- dependency-name: github/codeql-action/analyze\n  dependency-version: 4.38.1\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: github-actions\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Chris Wolfgang <210299580+Chris-Wolfgang@users.noreply.github.com>",
          "timestamp": "2026-10-10T19:18:02-04:00",
          "tree_id": "0e1218820ce7e61d58ad0610a8ffdc95230dc4cf",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/816fdf6c0ec26adfa9b24a7f0fbce95cf6e8bf13"
        },
        "date": 1791675021827,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 18349466.666666668,
            "unit": "ns",
            "range": "± 147909.7762872128"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 86530878.83333333,
            "unit": "ns",
            "range": "± 2166876.14674774"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5452c6e31904cd5b3a7a19f6cd6816bc11f6aaec",
          "message": "chore(dependabot): raise open-pull-requests-limit to 10 on every entry (#384)\n\nThese entries were still at 5 while the rest of the fleet uses 10.\n\nCo-authored-by: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-11T11:15:00-04:00",
          "tree_id": "f98979e4abb55c23b1cbc25f828599c80f4cb582",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/5452c6e31904cd5b3a7a19f6cd6816bc11f6aaec"
        },
        "date": 1791732242753,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 18426666,
            "unit": "ns",
            "range": "± 493914.6477155744"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 88612459.66666667,
            "unit": "ns",
            "range": "± 7356671.624061816"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "63f984360bbe071818018b099f792350dade9d33",
          "message": "Bump the dotnet-dependencies group with 3 updates (#386)\n\nBumps Meziantou.Analyzer from 3.0.290 to 3.0.294\nBumps Microsoft.Data.SqlClient from 7.1.0 to 7.1.1\nBumps Roslynator.Analyzers from 5.0.0 to 5.0.1\n\n---\nupdated-dependencies:\n- dependency-name: Meziantou.Analyzer\n  dependency-version: 3.0.294\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: dotnet-dependencies\n- dependency-name: Microsoft.Data.SqlClient\n  dependency-version: 7.1.1\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: dotnet-dependencies\n- dependency-name: Roslynator.Analyzers\n  dependency-version: 5.0.1\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: dotnet-dependencies\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-10-11T12:14:41-04:00",
          "tree_id": "54c8f8b9e5b4ba1cd3cddbab026b825a4a022b89",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/63f984360bbe071818018b099f792350dade9d33"
        },
        "date": 1791735838240,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 17677941.666666668,
            "unit": "ns",
            "range": "± 411410.4391752029"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 86984363.33333333,
            "unit": "ns",
            "range": "± 4533369.923012497"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e391198cbe9cb6e1b9007e936e44fb53d6b8150e",
          "message": "chore(deps): bump the github-actions group with 3 updates (#385)\n\nBumps the github-actions group with 3 updates: [github/codeql-action/upload-sarif](https://github.com/github/codeql-action), [github/codeql-action/init](https://github.com/github/codeql-action) and [github/codeql-action/analyze](https://github.com/github/codeql-action).\n\n\nUpdates `github/codeql-action/upload-sarif` from 4.38.1 to 4.38.2\n- [Release notes](https://github.com/github/codeql-action/releases)\n- [Changelog](https://github.com/github/codeql-action/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/github/codeql-action/compare/1c5b675653bb5c22dbe9b12b556ec555138e09fd...2892aa5e19bbd11bc0cff5427e3b750a04d9e3c2)\n\nUpdates `github/codeql-action/init` from 4.38.1 to 4.38.2\n- [Release notes](https://github.com/github/codeql-action/releases)\n- [Changelog](https://github.com/github/codeql-action/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/github/codeql-action/compare/1c5b675653bb5c22dbe9b12b556ec555138e09fd...2892aa5e19bbd11bc0cff5427e3b750a04d9e3c2)\n\nUpdates `github/codeql-action/analyze` from 4.38.1 to 4.38.2\n- [Release notes](https://github.com/github/codeql-action/releases)\n- [Changelog](https://github.com/github/codeql-action/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/github/codeql-action/compare/1c5b675653bb5c22dbe9b12b556ec555138e09fd...2892aa5e19bbd11bc0cff5427e3b750a04d9e3c2)\n\n---\nupdated-dependencies:\n- dependency-name: github/codeql-action/upload-sarif\n  dependency-version: 4.38.2\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: github-actions\n- dependency-name: github/codeql-action/init\n  dependency-version: 4.38.2\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: github-actions\n- dependency-name: github/codeql-action/analyze\n  dependency-version: 4.38.2\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: github-actions\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Chris Wolfgang <210299580+Chris-Wolfgang@users.noreply.github.com>",
          "timestamp": "2026-10-11T13:23:38-04:00",
          "tree_id": "e77bd57413bb296fcc40c4f905587490955b04fc",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/e391198cbe9cb6e1b9007e936e44fb53d6b8150e"
        },
        "date": 1791740003504,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 17903006.833333332,
            "unit": "ns",
            "range": "± 201529.1061492938"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 91788944.66666667,
            "unit": "ns",
            "range": "± 8187971.103680467"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2c497754e04576415a8476ac6726c1ec0a69d4ce",
          "message": "ci(semgrep): install the hash-pinned tree with --no-deps (1/2 for PyJWT/urllib3 alerts) (#375)\n\n* ci(semgrep): install the hash-pinned tree with --no-deps\n\n* ci(semgrep): describe --no-deps without the follow-up override file\n\nThe comment pointed at semgrep-overrides.txt and an override that only arrive\nwith the 2/2 PR, so on its own this PR documented state main does not have.\nIt now says what --no-deps does and what it enables, with no file reference.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-11T19:59:36-04:00",
          "tree_id": "053f672a0f01ce7188cddfc2364e95cf8ecedc34",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/2c497754e04576415a8476ac6726c1ec0a69d4ce"
        },
        "date": 1791763704877,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 12004689.333333334,
            "unit": "ns",
            "range": "± 619968.0640422805"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 57395676.666666664,
            "unit": "ns",
            "range": "± 720078.236339867"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "22d9d052a4cfa8e79bea0d8ba37008040729213c",
          "message": "deps(semgrep): semgrep 1.180.0 → PyJWT 2.15.1 + urllib3 2.8.0, no override (#376)\n\n* deps(semgrep): add semgrep-overrides.txt (PyJWT ~=2.15.0)\n\n* deps(semgrep): recompile semgrep.txt (PyJWT 2.15.1, urllib3 2.8.0)\n\n* deps(semgrep): recompile against semgrep 1.180.0 instead of overriding PyJWT\n\nsemgrep 1.179.0 and later declare pyjwt[crypto]>=2.15.0,<3, so the plain\ncompile of semgrep.in now resolves pyjwt 2.15.1 (and urllib3 2.8.0) without\nany override. semgrep-overrides.txt is removed, as its own comment asked once\na semgrep release allowed pyjwt 2.15. Regenerated with:\n  uv pip compile --universal --generate-hashes semgrep.in -o semgrep.txt\n  (--upgrade-package semgrep --upgrade-package pyjwt)\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-11T21:22:34-04:00",
          "tree_id": "59abb588cf084a8aad1fd6b624ef3a27fbc7f517",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/22d9d052a4cfa8e79bea0d8ba37008040729213c"
        },
        "date": 1791768672817,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 13996344.166666666,
            "unit": "ns",
            "range": "± 325377.9938492051"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 71696999,
            "unit": "ns",
            "range": "± 4184581.028766321"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "502274912c9bcb3d153da42e39eaef0a0f5f5fd2",
          "message": "ci(semgrep): explain --no-deps without the removed PyJWT override (#387)\n\nThe install step's comment still described --no-deps as carrying an override\nof semgrep's PyJWT pin (and, in older copies, pointed at semgrep-overrides.txt).\nThe override is gone: semgrep 1.179.0+ declares pyjwt>=2.15.0, so the lock\nneeds none. The flag stays; the comment now gives the reason that still holds.\n\nCo-authored-by: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-11T22:34:27-04:00",
          "tree_id": "ab1c7e88d73aa68dd301691a514294a6f3076194",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/502274912c9bcb3d153da42e39eaef0a0f5f5fd2"
        },
        "date": 1791773110545,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 16804911,
            "unit": "ns",
            "range": "± 307086.10662320757"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 83955542,
            "unit": "ns",
            "range": "± 2173773.7750336397"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "776d921b4e55d07c3d798ed1620be16a32f37629",
          "message": "test: collect coverage from Concurrency and Fuzz and bring both to 100% (#378)\n\n* test: collect coverage from Concurrency and Fuzz and bring both to 100%\n\nThe Concurrency and Fuzz test projects had no coverlet.collector, so Stage 1\nran their tests but recorded no coverage row for either assembly. Add the\ncollector at the version the other test projects use (10.0.1) and remove\nthe lines a passing run could leave unexecuted:\n\n- Concurrency: the cleanup swallowed IOException from File.Delete because a\n  pooled SQLite handle could still hold the file, so which of the try/catch\n  lines ran depended on the OS (on Windows the delete always failed). The\n  connection string now sets Pooling=False (each simulated replica owns its\n  connection, as separate processes would), so disposal closes the handle\n  and the delete is unconditional.\n- Fuzz: three properties returned early on inputs the generator rarely or\n  never draws (null int[], equal GUIDs, null/equal byte arrays). Each is now\n  a single boolean expression, so its coverage no longer depends on the\n  random draw.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\n\n* test: drop [ExcludeFromCodeCoverage] from non-integration test code and cover it\n\nRemoves every [ExcludeFromCodeCoverage] from Tests.Unit, Npgsql.Tests.Unit,\nCli.Tests.Unit and Tests.Smoke, and brings each test assembly to 100% line\ncoverage under repo-template #702's coverlet.runsettings (only\nAutoGeneratedProgram excluded).\n\nNew tests only, plus mechanical reachability changes:\n- TestSupportTests (Unit, Npgsql.Unit) and StringConsoleTests pin the\n  test-double members no behavior test reaches.\n- NoDiagnosticMessage.Format replaces the never-invoked messageGenerator\n  lambdas and FormatNothing with one shared method group, pinned by a test.\n- The async failed-save test detaches with ChangeTracker.Clear() instead of\n  a foreach whose body never runs (nothing is tracked at that point).\n- DocExamples: LocateSourceDirectory takes its start directory and\n  AddReference is extracted, so new tests drive the not-found and\n  already-referenced paths. DocExamples goes from 98.6% to 100%.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\n\n* test: drop [ExcludeFromCodeCoverage] from the integration suites and cover them\n\nRemoves every [ExcludeFromCodeCoverage] from Tests.Integration,\nNpgsql.Tests.Integration and Schema.Tests.Integration (fixtures, entities,\ncontexts, Db2 helpers, and the class-level ones on the schema test\nclasses). Measured the way integration.yaml runs them\n(RunIntegrationTests=true, Docker): Npgsql.Tests.Integration and\nSchema.Tests.Integration reach 100%, Tests.Integration 99.6%. The one\nremaining line is Db2Fixture's Linux-only SetDllImportResolver call,\nwhich runs on integration.yaml's ubuntu runner but not on Windows.\n\n- DockerContainerStartup: TryStartAsync takes rethrow (IsRunningInCi() in\n  production) so new tests drive the available, skippable and CI-rethrow\n  outcomes.\n- Db2TableOnlyDatabaseCreator: the multi-pass drop moves into\n  DropWithRetriesAsync, driven by new tests with a fake tryDrop.\n  New Db2 tests cover Create/CreateAsync/Delete and the failed-drop catch.\n  Fixes a latent bug the retry test exposed: the pass limit was the\n  shrinking remaining count, so a single table left after pass 1 was never\n  retried and Delete threw. It is now the starting count.\n- MySqlFixture: the Docker-down early return becomes an if (Available)\n  block, same behavior.\n- Schema fixtures: removes ProviderName, which nothing reads.\n- Pin tests for Db2Fixture.ResolveNativeLibrary and the Npgsql\n  integration Customer.CustomerId.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\n\n* test: drop redundant type arguments in TestSupportTests\n\nInspectCode (code-scanning alerts 568, 569) flagged Execute<int, int> and\nExecuteAsync<int, int> as RedundantTypeArgumentsOfMethod; both infer.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-12T08:07:30-04:00",
          "tree_id": "a1336c87b13ce09ebe53a9434c082c21d036e852",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/776d921b4e55d07c3d798ed1620be16a32f37629"
        },
        "date": 1791807400047,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 17505459,
            "unit": "ns",
            "range": "± 140396.37399519974"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 91710518.66666667,
            "unit": "ns",
            "range": "± 9771043.313454522"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b3fd9b4ea119bc0e21c195835f1292c48fe8c273",
          "message": "fix(deps): pin the crypto packages to releases without the new DoS advisories (#392)\n\nFive .NET advisories published 2026-10-13 cover\nSystem.Security.Cryptography.Pkcs (<= 8.0.1, <= 9.0.20, <= 10.0.12) and\nSystem.Security.Cryptography.Xml (<= 10.0.12): CVE-2026-70162,\nCVE-2026-84008, CVE-2026-96958, CVE-2026-96959 and CVE-2026-96960. Both\npackages arrive transitively here, so every project whose closure reaches\nthem started failing restore on NU1902/NU1903 with warnings as errors --\nStage 1, Verify SourceLink and the Native AOT consumer job all broke\nwithout a single line of our own code changing.\n\nSeven projects needed an override. The pinned version follows the line the\nproject already resolved, so each one is the smallest patched bump rather\nthan a jump across majors:\n\n  Cli, Cli.Tests.Unit, Benchmarks (net10.0)  Pkcs 9.0.11 -> 9.0.21\n  Schema.Tests.Integration                   Pkcs 9.0.18 -> 9.0.21\n  Tests.Integration (net8.0 slot)            Pkcs  8.0.1 -> 8.0.2\n  Tests.Integration (net10.0 slot)           Pkcs  8.0.1 -> 10.0.13\n  AotSmoke, AotSmoke.Setup                   Pkcs/Xml 10.0.12 -> 10.0.13\n\nTests.Integration needs both slots: the net8.0 providers reach Pkcs through\nMicrosoft.Data.SqlClient, and the net10.0 slot reaches it independently\nthrough Oracle.EntityFrameworkCore and IBM.EntityFrameworkCore. The AotSmoke\npair already carried an Xml pin from an earlier advisory; this moves it onto\nthe patched release and adds the matching Pkcs override beside it.\n\nVerified with a forced solution-wide restore: zero NU1902/NU1903, zero\nNU1605 downgrades, and `dotnet build -c Release` reports 0 errors (the 6\nwarnings are the pre-existing out-of-support net6.0 notices).\n\nCo-authored-by: Claude Opus 5 <noreply@anthropic.com>",
          "timestamp": "2026-10-15T10:49:27-04:00",
          "tree_id": "46651cfa9c4d38b59ac08651dedaab97799870a7",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/b3fd9b4ea119bc0e21c195835f1292c48fe8c273"
        },
        "date": 1792076345932,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 13429900.333333334,
            "unit": "ns",
            "range": "± 475860.9580805441"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 63383348,
            "unit": "ns",
            "range": "± 7434209.743199609"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ae35bb4c8ad1092c081b463616173b4ebddcd416",
          "message": "chore(deps): bump the github-actions group with 2 updates (#391)\n\nBumps the github-actions group with 2 updates: [actions/upload-artifact](https://github.com/actions/upload-artifact) and [actions/download-artifact](https://github.com/actions/download-artifact).\n\n\nUpdates `actions/upload-artifact` from 7.0.1 to 7.0.2\n- [Release notes](https://github.com/actions/upload-artifact/releases)\n- [Commits](https://github.com/actions/upload-artifact/compare/043fb46d1a93c77aae656e7c1c64a875d1fc6a0a...cf430e030ddbb5b0abf93d22962f4752f3646cd9)\n\nUpdates `actions/download-artifact` from 8.0.1 to 8.0.2\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/3e5f45b2cfb9172054b4087a40e8e0b5a5461e7c...9000827ccba6bdab643e8b6fd33ac0654aef8333)\n\n---\nupdated-dependencies:\n- dependency-name: actions/upload-artifact\n  dependency-version: 7.0.2\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: github-actions\n- dependency-name: actions/download-artifact\n  dependency-version: 8.0.2\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: github-actions\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Chris Wolfgang <210299580+Chris-Wolfgang@users.noreply.github.com>",
          "timestamp": "2026-10-15T11:29:24-04:00",
          "tree_id": "1b756f509c7299a2879e632ef8510bbaa643a36d",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/ae35bb4c8ad1092c081b463616173b4ebddcd416"
        },
        "date": 1792078683379,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 14661873.833333334,
            "unit": "ns",
            "range": "± 665979.13139402"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 68735259.33333333,
            "unit": "ns",
            "range": "± 1706249.887795552"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e69c91a4afd1c63138342ad39dbd4e5ca24627c5",
          "message": "Bump coverlet.collector from 10.0.1 to 10.1.0 (#390)\n\n---\nupdated-dependencies:\n- dependency-name: coverlet.collector\n  dependency-version: 10.1.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: dotnet-dependencies\n- dependency-name: coverlet.collector\n  dependency-version: 10.1.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: dotnet-dependencies\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Chris Wolfgang <210299580+Chris-Wolfgang@users.noreply.github.com>",
          "timestamp": "2026-10-15T13:35:22-04:00",
          "tree_id": "f59e9aa7005dbbc2367e4c7a1ff041adf792f3c7",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/e69c91a4afd1c63138342ad39dbd4e5ca24627c5"
        },
        "date": 1792086279503,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 17840956,
            "unit": "ns",
            "range": "± 563179.3949071645"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 84309598.16666667,
            "unit": "ns",
            "range": "± 1652658.0090164854"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7814c850459f96e5574efec4187bbe02af3f1c1b",
          "message": "test(integration): run each provider on the newest TFM its provider supports (#393)\n\nSQL Server and PostgreSQL were being exercised only on net8.0 against EF Core\n9, even though both ship EF Core 10 builds. They were grouped with MySQL\nbecause the file's header comment asserted that \"SQL Server / PostgreSQL /\nMySQL (Pomelo) all cap at EF Core 9\" -- true of Pomelo, not of the other two.\nSo the suite was testing a configuration no current consumer would use, and\nthe EF Core 10 code path for the two most-used providers went uncovered here.\n\nRegroup by what each provider actually supports:\n\n  net8.0   MySQL (Pomelo 9.0.0, no EF Core 10 build exists)\n  net10.0  SQL Server, PostgreSQL, Oracle, Db2 (all EF Core 10)\n\nSQL Server moves to 10.0.11 and PostgreSQL to 10.0.1, matching the versions\nSchema.Tests.Integration already uses so the two integration suites stay on\nthe same provider builds. The header comment is rewritten to say which\nprovider holds the matrix back and why, and to tell the next person to put a\nnew provider on the newest slot its package supports -- the old wording is\nwhat let these two drift onto the wrong slot.\n\nMoving the SQL Server provider also moves the Microsoft.Data.SqlClient\ndependency chain, so the Pkcs audit override follows it to the net10.0 slot.\nThe net8.0 slot now needs none at all: Pomelo reaches MySQL through\nMySqlConnector, which has no Pkcs dependency.\n\nVerified locally against real containers, not just a build:\n\n  net8.0   MySqlAuditTests                      3 passed\n  net10.0  SqlServerAuditTests + PostgresAuditTests  6 passed\n\nand `--list-tests` confirms the split is what it claims: net8.0 discovers\nMySqlAuditTests, net10.0 discovers SqlServer/Postgres/Oracle/Db2, with\nDockerContainerStartupTests shared. Restore is clean on both slots.\n\nOnly the csproj changed; no test code was touched.\n\nCo-authored-by: Claude Opus 5 <noreply@anthropic.com>",
          "timestamp": "2026-10-16T07:48:30-04:00",
          "tree_id": "39beac4e089fcea8f29a54f7e64404e345597c79",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/7814c850459f96e5574efec4187bbe02af3f1c1b"
        },
        "date": 1792151924914,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 18435050.166666668,
            "unit": "ns",
            "range": "± 10536185.81089145"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 107870910.5,
            "unit": "ns",
            "range": "± 41759203.881659225"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5c31e9171c52cba956669660ee8b5db09155009c",
          "message": "test: mark container-backed integration tests RequiresLinuxContainers (#380)\n\n* test: mark container-backed integration tests RequiresLinuxContainers\n\nThese integration tests start Linux containers through Testcontainers, which\nthe Windows and macOS runners cannot do. The repo-template change\n(Chris-Wolfgang/repo-template#708) makes pr.yaml Stages 2/3 and release.yaml\nskip a test project only when it declares this property, instead of by its\n*.Tests.Integration.* name. Stage 1 (Linux) still runs it.\n\nInert until that pr.yaml/release.yaml change is synced here; merge this first.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\n\n* test: describe RequiresLinuxContainers as a requirement, not current workflow behaviour\n\nNo workflow reads the property yet (pr.yaml and release.yaml here, and\nrepo-template), so the comment claiming Stages 2/3 and release.yaml skip the\nproject was not true. It now states the requirement and that the marker is\ninert until the workflow change is synced.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\n\n* test: describe RequiresLinuxContainers as a requirement, not current workflow behaviour\n\nNo workflow reads the property yet (pr.yaml and release.yaml here, and\nrepo-template), so the comment claiming Stages 2/3 and release.yaml skip the\nproject was not true. It now states the requirement and that the marker is\ninert until the workflow change is synced.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\n\n* test: describe RequiresLinuxContainers as a requirement, not current workflow behaviour\n\nNo workflow reads the property yet (pr.yaml and release.yaml here, and\nrepo-template), so the comment claiming Stages 2/3 and release.yaml skip the\nproject was not true. It now states the requirement and that the marker is\ninert until the workflow change is synced.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-16T08:27:06-04:00",
          "tree_id": "ae9f1b54ef1e6f09d1d9f9551de0190152ce0967",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/5c31e9171c52cba956669660ee8b5db09155009c"
        },
        "date": 1792154190713,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 18588747.666666668,
            "unit": "ns",
            "range": "± 931931.327449793"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 92162246,
            "unit": "ns",
            "range": "± 6686236.94973847"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7012e7510a7a81a1f2996804dc840490a172d604",
          "message": "ci: sync Stage 1 coverage gate and build-pr.ps1 local tools from repo-template (#377)\n\n* ci: sync Stage 1 coverage gate and build-pr.ps1 local tools from repo-template\n\nApplies Chris-Wolfgang/repo-template#654 (48c7e2b, pr.yaml Stage 1) and\nChris-Wolfgang/repo-template#656 (2151df4, scripts/build-pr.ps1).\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\n\n* ci: sync coverlet.runsettings with repo-template #702\n\n<Exclude> is now only [*]AutoGeneratedProgram. The three polyfill\nclass filters (CompilerFeatureRequiredAttribute, RequiredMemberAttribute,\nIsExternalInit) are dropped: measured locally, removing them changes no\nsrc or test assembly's line coverage (EntityFrameworkCore stays 99.2%,\nAbstractions 100%). ExcludeByFile and ExcludeByAttribute are now\ncomma-separated (a ';' list is one pattern that matches nothing), and\nExcludeByFile also covers **/*.g.cs. The stale \"Phase 1 scope is unit\ntests only\" comment is replaced by the template's policy comment.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\n\n* fix(ci): list test classes below the active test threshold, not below 100%\n\nThe Stage 1 diagnostic for a failing test assembly compared each class to a\nhard-coded 100, so with CODECOV_TEST_MINIMUM=90 it listed classes at 90-99%\nunder \"Classes below 90%\". awk now receives the applied threshold.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\n\n* fix(build-pr): accurate local-tool comments; report a tool-restore failure for DevSkim\n\n- This repo's pr.yaml still installs ReportGenerator and DevSkim as global\n  tools, so the comments no longer say this script uses them \"as pr.yaml does\".\n- When Restore-LocalTools fails, `dotnet devskim` never runs and $devskimExit\n  is never assigned, so the failure line read \"exit code )\". $devskimExit now\n  starts as $null, and a null value is reported as a tool-restore failure.\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\n\n* ci(coverage): keep excluding the compiler-emitted polyfill types\n\nSyncing coverlet.runsettings from repo-template replaced this repo's\nexclusion list with the template's, which dropped three entries the template\nhas no reason to carry:\n\n  [*]System.Runtime.CompilerServices.CompilerFeatureRequiredAttribute\n  [*]System.Runtime.CompilerServices.RequiredMemberAttribute\n  [*]System.Runtime.CompilerServices.IsExternalInit\n\nUsing `required` members and init-only setters while targeting net6.0 and\nnetstandard makes Roslyn synthesise those three types into the assembly,\nbecause those TFMs' reference assemblies do not declare them. They are type\ndefinitions that never execute, so they report 0% and fail the gate on a repo\nthat has no uncovered code at all. That is exactly what Stage 2 hit:\n\n  Projects below 90% coverage:\n    System.Runtime.CompilerServices.CompilerFeatureRequiredAttribute (0%)\n\nExcludeByAttribute cannot take over the job: Roslyn marks these\n[CompilerGenerated], which is not in that list, and adding it there would also\nhide real source-generator output we do want measured. So the exclusions stay\nby type name, now with a comment explaining why they exist so the next\ntemplate sync does not drop them again.\n\nNo threshold moved. CODECOV_MINIMUM and CODECOV_TEST_MINIMUM are untouched,\nand the template's other improvements -- comma-separated list separators,\n*.g.cs exclusion, GeneratedCode by attribute, IncludeTestAssembly -- are kept\nas synced.\n\nVerified by running the net6.0 slot (the one that needs the polyfills) with\nthis runsettings: 295 tests pass, the report carries 190 classes, none of the\nthree polyfill types or AutoGeneratedProgram appear, and no class reports 0%.\n\nmain merged in to pick up the crypto audit pins from #392.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-16T09:54:57-04:00",
          "tree_id": "a3d477fe8d618d1328b591b0f7cdf5e4c01d3940",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/7012e7510a7a81a1f2996804dc840490a172d604"
        },
        "date": 1792159452109,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 16922847.666666668,
            "unit": "ns",
            "range": "± 783456.2547139013"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 85186816,
            "unit": "ns",
            "range": "± 2254935.226287221"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b73adc086af105b91815705e897e4e11e5063db1",
          "message": "chore: explicit usings on every TFM (re-targeted at main) (#395)\n\n* chore: explicit usings on every TFM (no implicit/global usings in multi-TFM projects) (#367)\n\nRemoves <ImplicitUsings>enable</ImplicitUsings> from the six multi-target\nprojects and adds the explicit using directives each file needs, so every\ntarget framework slice needs the same usings and InspectCode (which analyses\na single modern slice) stops flagging them as RedundantUsingDirective.\n\nNo behaviour or public API change.\n\nCo-authored-by: Claude Opus 5.5 <noreply@anthropic.com>\n(cherry picked from commit 97c1ce0899b255c1b4ce49c00023b370cc50b973)\n\n* chore: explicit usings for the files added since #367\n\nThree files landed on main after the explicit-usings pass was written, so they\ncarry no using directives of their own and stop compiling the moment\nImplicitUsings is switched off for their project:\n\n  Db2AuditTests.cs               System, System.Collections.Generic,\n                                 System.Threading, System.Threading.Tasks\n  DockerContainerStartupTests.cs System, System.Threading.Tasks\n  TestSupportTests.cs            System, System.Threading, System.Threading.Tasks\n\nSystem-first ordering, matching the rest of the pass.\n\nThis is the cost of the rule the pass introduces: a project without implicit\nusings needs every new file to declare its own, and nothing enforces that\nexcept the build. Worth knowing when reviewing.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-10-16T12:49:00-04:00",
          "tree_id": "575acd7bb1936104bd792f8c8ea19c5f434469b0",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/b73adc086af105b91815705e897e4e11e5063db1"
        },
        "date": 1792169794545,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 12470087.666666666,
            "unit": "ns",
            "range": "± 695593.0021537978"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 60476191.666666664,
            "unit": "ns",
            "range": "± 6242604.019695013"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6e2638267cf4b3dfb1439cb4fd61ef3636304fb9",
          "message": "docs(benchmarks): fully qualify CancellationToken in a doc cref (#396)\n\nTwo code-scanning alerts (570, 571) on\nbenchmarks/.../Db2NoSavepointsTransactionFactory.cs:14:\n\n  Cannot resolve symbol 'CancellationToken'\n  Ambiguous reference 'SaveChangesAsync' in documentation. Candidates are:\n      SaveChangesAsync(bool, CancellationToken) (in class AuditingDbContext)\n      SaveChangesAsync(CancellationToken) (in class DbContext)\n\nOne cause, two symptoms. The file has no `using System.Threading;` -- the type\nappears nowhere in its code, only in this cref -- so `CancellationToken` in the\nsignature does not bind, the signature then fails to match either overload, and\nthe cref degrades to an ambiguous name.\n\nFully qualifying the parameter type fixes both and keeps the reference precise.\nAdding a using would also work, but nothing else in the file needs\nSystem.Threading, so it would sit there as an unnecessary import.\n\nThis stopped being cosmetic when #395 landed: that PR turns ImplicitUsings off\nfor this project, and System.Threading was one of the namespaces it had been\nsupplying. #395 added usings where compilation required them, which this file\ndid not -- a cref is not a compile dependency -- so the reference was left\nunresolvable. A fully-qualified cref does not care either way.\n\nVerified with Roslyn rather than only the scanner, building with\nGenerateDocumentationFile=true and CS1591 suppressed so cref diagnostics\nsurface:\n\n  before  CS1574 (cref could not be resolved) + CS1580 (invalid parameter type)\n  after   neither\n\nThe mirrored copy in Tests.Integration/TestSupport carries a shorter comment\nwithout this cref, so it needs no change.\n\nCo-authored-by: Claude Opus 5 <noreply@anthropic.com>",
          "timestamp": "2026-10-16T14:30:58-04:00",
          "tree_id": "e5c0f5c2a20a3bb1e88226d57e9f5f453477ada4",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/6e2638267cf4b3dfb1439cb4fd61ef3636304fb9"
        },
        "date": 1792176011832,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 15777027.333333334,
            "unit": "ns",
            "range": "± 6145864.662231534"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 55459796.333333336,
            "unit": "ns",
            "range": "± 274839.1733038312"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c5ae6e5c57a720117f62546db007beae4839d6a3",
          "message": "ci(scorecard): move SARIF filtering out of the published job (#397)\n\n* ci(scorecard): move SARIF filtering out of the published job\n\nCloses #388.\n\nscorecard.dev verifies the job containing ossf/scorecard-action before it\naccepts publish_results: true, and rejects any such job that has a `run:` step:\n\n  error sending scorecard results to webapp: http response 400 ...\n  workflow verification failed: scorecard job must only have steps with `uses`\n\nThe analysis job ran the jq \"Filter suppressed findings from SARIF\" step, so\nevery publish since has been refused. scorecard-action downgrades the rejection\nto a warning, so the run stays green while nothing publishes -- api.scorecard.dev\nhas served a result dated 2026-08-22 ever since, and the README badge shows that\nstale score.\n\nSplit into two jobs:\n\n  analysis  only `uses:` steps -- checkout, Scorecard, upload-artifact. Keeps\n            id-token: write for the publish, drops security-events: write, and\n            restates contents: read because job-level permissions replace the\n            workflow-level read-all rather than adding to it.\n  upload    needs: analysis, with security-events: write. Checks out, downloads\n            the artifact, runs the filter step unchanged, uploads to\n            code-scanning.\n\nThe checkout in `upload` is first, before the download, for two reasons:\ncheckout cleans the workspace, so downloading ahead of it would delete the\nSARIF; and upload-sarif needs the working tree to compute the same source\nfingerprints it did when this ran in one job, or existing alerts reappear under\nnew IDs.\n\nThe filter step is moved verbatim, not rewritten -- its suppression list is\nspecific to this repo (nugetCommand not pinned), so a template-shaped overwrite\nwould silently change what is suppressed. Only the artifact name changes, from\n\"SARIF file\" to scorecard-sarif, matching the reference implementation.\n\nNot verifiable before merge: this workflow runs on push to main and on a\nschedule, so the fix proves itself on the first run after merge. Check that the\nrun logs no \"error sending scorecard results\" line and that\napi.scorecard.dev/projects/github.com/Chris-Wolfgang/AuditTrail returns a date\nnewer than 2026-08-22.\n\nStructure matches Log-Compressor#297, where the split was confirmed working: the\nfirst post-merge run published and the API returned 200.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n* ci(scorecard): pin the analysis key across the job split\n\nCopilot caught a real consequence of moving upload-sarif into the new job.\n\nThe action derives its analysis key from the workflow path and the job it runs\nin -- api-client.ts getAnalysisKey() reads CODEQL_ACTION_ANALYSIS_KEY and, when\nunset, computes `${workflowPath}:${GITHUB_JOB}`. GITHUB_JOB is the job ID, so\nthis split would have changed the key from\n\n  .github/workflows/scorecard.yaml:analysis   to   ...:upload\n\nThe old key would then stop receiving uploads. Findings recorded under it are\nnever reported fixed, so they stay open indefinitely, while a duplicate set\nappears under the new key. Checking out the repo keeps upload-sarif's source\nfingerprints stable, but it does not preserve this identity -- a different\nthing, and the reason the earlier reasoning in this PR was incomplete.\n\nNot hypothetical here: the two open Scorecard alerts, BranchProtectionID (393)\nand CodeReviewID (406), are both recorded under the analysis key. Orphaning them\nwould also have defeated the planned fix for #337, which clears 406 by\nsuppressing CodeReviewID in this very filter -- the suppression would have\napplied to the new key while the old alert sat open forever.\n\nVerified rather than assumed:\n\n  - the env var exists in the pinned action (v4.38.2,\n    2892aa5e...): src/environment.ts declares\n    ANALYSIS_KEY = \"CODEQL_ACTION_ANALYSIS_KEY\", and src/api-client.ts returns\n    it directly when set, before computing the path:job form\n  - the live key is read from the API, not guessed:\n    `code-scanning/analyses?tool_name=Scorecard` reports\n    analysis_key=.github/workflows/scorecard.yaml:analysis on every current\n    analysis, across all three categories (supply-chain/local,\n    supply-chain/online-scm, supply-chain/branch-protection)\n\nCategories come from Scorecard's own SARIF and are unaffected, so pinning the\nanalysis key is both necessary and sufficient.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 5 <noreply@anthropic.com>",
          "timestamp": "2026-10-16T18:25:40-04:00",
          "tree_id": "15fc7e5c7ac53359f7de5aaa078628c47699df0a",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/c5ae6e5c57a720117f62546db007beae4839d6a3"
        },
        "date": 1792190154275,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 11807300.833333334,
            "unit": "ns",
            "range": "± 62364.798583282005"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 62261924.333333336,
            "unit": "ns",
            "range": "± 7234332.886558465"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "420dd6423902fccf1042e0df7b9f8ff1c9f41570",
          "message": "feat(schema): apply per-version upgrade steps, not just create-from-empty (#365)\n\n* feat(schema): apply per-version upgrade steps, not just create-from-empty\n\nAuditSchemaMigrator could only create the audit schema from nothing: it\nalways diffed the current model against null, and the early exit on\n`installedVersion >= CurrentSchemaVersion` was safe only because the\nconstant had never left 1. Bumping it would have emitted CREATE TABLE\nagainst an existing database.\n\nRunAsync now branches on the installed version. Fresh installs keep the\ncreate-from-empty diff; a database behind the current version has the\nexplicit per-version steps in AuditSchemaUpgrades chained onto it; a\ndatabase ahead of this build throws instead of silently doing nothing.\n\nSteps are explicit MigrationOperations handed to the provider's own\nIMigrationsSqlGenerator, not a diff against a checked-in snapshot that\nnothing would keep honest. AuditSchemaUpgradeContext resolves the table\nand schema names from the live model, so a consumer's AuditOptions naming\nis honoured on upgrade. The whole upgrade stays inside the existing\ntransaction, so a failure part-way leaves the version row unchanged.\n\nNo steps ship yet: version 1 is still the only schema this library has\ninstalled, and the first arm arrives with the SequenceNumber column.\n\nTests drive a synthetic version sequence through the internal\nIAuditSchemaUpgrades seam; everything below it is production code.\nSixteen SQLite unit tests cover applying, chaining, row preservation,\ndry-run, custom table names, the ahead-of-build throw and rollback on a\nmid-way failure. The SQL Server and PostgreSQL integration suites gain\nthe case a fresh-database test cannot reach: upgrading a populated v1\ndatabase and asserting both the new column and the surviving rows.\nEvery_version_below_current_has_an_upgrade_step fails if the constant is\nraised without a matching step.\n\nAlso removes an unreachable #else branch in GenerateCommands that\nclaimed EF Core 6 support inside a file gated on NET8_0_OR_GREATER.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n* docs(schema): correct the MySQL recovery contract and the #344 step sketch\n\nReview found the documented recovery path for implicit-DDL providers is\nwrong. On MySQL and MariaDB a partially applied upgrade leaves operations\npersisted with the version row unchanged, so re-running replays the whole\nstep from the old version against a shape that has already moved, and a\nreplayed ADD COLUMN fails on the column that now exists. Say so: recovery\nthere is manual, and note the path has no integration coverage because\nPomelo caps at EF Core 9.x while the test project is on EF Core 10.\n\nThe commented-out sketch of the #344 step showed IsNullable = false with\nno DefaultValue, which fails on every row of the populated table the\nupgrade targets. Replaced with prose that states the DefaultValue\nrequirement, which also clears the commented-out-code analyser finding.\n\nRead the loop bound in Every_version_below_current_has_an_upgrade_step\noff AuditSchemaUpgrades.Instance instead of the const, which folds to\n`version < 1` and reads as an always-false expression.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n* test(schema): cover the MySQL upgrade path on its own TFM slot\n\nThe claim that MySQL could not be covered was wrong. Pomelo does cap at\nEF Core 9, but that only rules it out of the net10.0 slot, and\nWolfgang.AuditTrail.EntityFrameworkCore.Tests.Integration already solves\nexactly this by multi-targeting and scoping each provider's files with\nCompile Remove. Apply the same shape here: net8.0 carries MySQL on\nPomelo 9, net10.0 keeps SQL Server and PostgreSQL on EF Core 10.\n\nMySQL has no schema namespace separate from the database, so\nISchemaProviderFixture.CustomSchema is now nullable and the shared\ncustom-naming fact asserts on table names alone where it is null. The\nMySQL fixture scopes every information_schema lookup with DATABASE(),\nsince that view spans the whole server rather than one database.\n\nAlso pins the documented MySQL caveat to observed behaviour. A new\nMySQL-only test drives a step whose second operation fails and asserts\nthat the first operation's column survives and the version row has not\nmoved. That is the non-atomicity the remarks describe, so the doc comment\nno longer has to be taken on trust, and the test fails if MySQL ever\nmakes multi-statement DDL transactional.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n* test(schema): declare CustomSchema non-nullable where the provider has one\n\nInspectCode flagged both fixtures for returning string? from a member\nthat never returns null. The interface stays nullable because MySQL has\nno schema namespace separate from the database, but SQL Server and\nPostgreSQL always have one, so the implementations say so and carry a\nnote explaining why they differ from the interface.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n* chore: explicit usings on every TFM (no implicit/global usings in multi-TFM projects) (#367)\n\nRemoves <ImplicitUsings>enable</ImplicitUsings> from the six multi-target\nprojects and adds the explicit using directives each file needs, so every\ntarget framework slice needs the same usings and InspectCode (which analyses\na single modern slice) stops flagging them as RedundantUsingDirective.\n\nNo behaviour or public API change.\n\nCo-authored-by: Claude Opus 5.5 <noreply@anthropic.com>\n\n* docs(schema): record what a first upgrade step may not rely on\n\nThe guidance comment on StepFrom described the column shape a first step\nshould use, but not the constraint that makes it the only workable shape. A\nreader could reasonably reach for the obvious alternative -- mark the property\nValueGeneratedOnAdd and let each provider emit its own identity syntax -- and\nthat does not work, which is only discoverable by trying it on four\nproviders.\n\nRecord the measured result instead, so it is not rediscovered:\n\n  MySQL      rejects a non-key AUTO_INCREMENT column outright, on a fresh\n             CREATE TABLE as much as on an ALTER, so it would need an extra\n             index led by that column\n  SQLite     has no identity concept for a non-primary-key column, so EF omits\n             the column from INSERTs expecting generation that never happens\n             and the write fails at runtime\n  PostgreSQL does backfill existing rows, but not in insert order, so historical\n             rows get values that misstate their order rather than merely being\n             absent\n\nThe conclusion is the actionable part: assign such values in AuditCapture,\nbeside where HeaderId is already assigned, and let the column be a plain NOT\nNULL with a default that marks pre-upgrade rows.\n\nAlso drops the issue number the comment leaned on for the rest of its meaning,\nso it stands on its own.\n\nComment only -- no behaviour change. StepFrom still throws for every version,\nas it has to until a second schema version exists.\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 5 <noreply@anthropic.com>",
          "timestamp": "2026-10-16T18:57:35-04:00",
          "tree_id": "07df047e2060b7e0fdf88b1580ae564867513439",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/420dd6423902fccf1042e0df7b9f8ff1c9f41570"
        },
        "date": 1792192015908,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 17909278,
            "unit": "ns",
            "range": "± 188471.7888385421"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 85921967,
            "unit": "ns",
            "range": "± 2184096.8912600926"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4328332f0704b99da0d435d084a821d449535e4b",
          "message": "ci(pr): Stage 2's coverage gate must fail when it cannot measure (#398)\n\n* ci(pr): Stage 2's coverage gate must fail when it cannot measure\n\nAddresses #371 items 1 and 3 for Stage 2. Stage 1 already has both guards --\n#377 synced them today -- so this is the same pair on the stage that runs a\ndifferent subset of the suite.\n\nTwo ways Stage 2 could report success without measuring anything:\n\n1. Every coverage step is gated on has-coverage == 'true', and the check set it\n   to false and carried on whenever no coverage file appeared. A dropped\n   coverlet.collector reference therefore skipped the whole coverage gate and\n   the job went green. By the time that check runs the tests have already\n   exited 0, so an absent coverage file means collection broke, not that there\n   was nothing to collect. It now fails -- but only when tests actually ran, so\n   a genuinely test-less repo shape still skips benignly.\n\n2. The gate can only judge modules that APPEAR in the report, so an assembly\n   that ran and recorded nothing simply drops out and the gate passes while\n   measuring less than it did yesterday. Each project that runs a\n   coverage-collecting TFM is now ledgered, and a report row is required for\n   each ledgered assembly.\n\nThe ledger records <AssemblyName> when set and the project's base name\notherwise, because the report keys rows by assembly and the two differ. Only\nprojects that ran a net5.0+ TFM are ledgered: netcoreapp3.1 and net4x are\ntested on this stage without the XPlat collector by design, so requiring a row\nfor them would fail every run.\n\nRows are matched by equality, not prefix. A prefix match would accept\nX.Application.Advisor as the row for X.Application.\n\nNot ported from the template's Stage 2: its zero-tests-ran Tee guard and its\n--no-build/--no-restore switches. Those are separate concerns and #371 does not\nlist them for this repo.\n\nVerified without a CI run, following the method #371 prescribes:\n\n  - pr.yaml still parses; 36 run: steps extracted and syntax-checked -- 28 with\n    `bash -n`, 8 with [Parser]::ParseFile. All clean.\n  - the new row-check step run verbatim against a REAL CoverageReport/Summary.txt\n    (ReportGenerator over an actual cobertura file from this repo, 4 module rows):\n\n      correct ledger                  PASS\n      claimed but absent row          FAIL\n      empty ledger                    FAIL\n      ledger file missing             FAIL\n      Summary.txt missing             FAIL\n      prefix of a real row            FAIL\n\n  - the bash matcher Stage 1 uses agrees with the new pwsh one on all six probe\n    names, including the prefix case\n  - the check-coverage branches: coverage present -> has-coverage=true;\n    no coverage with a non-empty ledger -> exit 1; no coverage with an empty\n    ledger -> has-coverage=false\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n* ci(pr): ledger only projects MSBuild calls test projects\n\nThe first cut of the Stage 2 ledger over-claimed, and Stage 2 failed on its own\nPR with:\n\n  These test assemblies ran but produced no coverage row:\n    ...AotSmoke, ...AotSmoke.Setup, ...Npgsql.Tests.Integration,\n    ...Schema.Tests.Integration, ...Tests.Integration\n\nThe guard was right to complain and the ledger was wrong. It recorded any\nproject that ran a coverage-collecting TFM, but `dotnet test` runs nothing for\nthose five: the three *.Tests.Integration projects set IsTestProject=false\nunless integration.yaml sets RunIntegrationTests=true, and the AotSmoke pair are\nconsole apps, not suites. They produce no coverage by design, so requiring a row\nfor them would fail every run.\n\nStage 1 already solved this -- it gates its ledger on MSBuild's IsTestProject,\nwith a comment naming these exact projects. Stage 2 now does the same, so the\ntwo stages agree about which assemblies owe a coverage row.\n\nThe property alone decides it. No Microsoft.NET.Test.Sdk fallback, which the\ntemplate's Stage 2 has: those integration projects DO reference Test.Sdk while\nsetting IsTestProject=false, so the fallback would put them straight back into\nthe ledger and make this stage contradict Stage 1. Worth stating because the\nfallback looks like a safety net and here it is the opposite.\n\nVerified by running the same MSBuild evaluation locally, on Windows, against\nevery project under ./tests and ./benchmarks:\n\n  False  AotSmoke, AotSmoke.Setup, Npgsql.Tests.Integration,\n         Schema.Tests.Integration, Tests.Integration, Benchmarks\n  True   Cli.Tests.Unit, Npgsql.Tests.Unit, Tests.Concurrency,\n         Tests.DocExamples, Tests.Fuzz, Tests.Smoke, Tests.Unit\n\nThe False set is exactly the five the run reported, so the fix lines up 1:1 with\nthe failure rather than merely silencing it. A skipped project now says so\n(\"Not ledgered: MSBuild reports IsTestProject=false\") instead of passing\nsilently.\n\npr.yaml still parses; all 36 run: steps re-checked with `bash -n` (28) and\n[Parser]::ParseFile (8).\n\nCo-Authored-By: Claude Opus 5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 5 <noreply@anthropic.com>",
          "timestamp": "2026-10-16T20:03:53-04:00",
          "tree_id": "a1ecb65c5eb067bca805d9a22eb1206b230ca18e",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/4328332f0704b99da0d435d084a821d449535e4b"
        },
        "date": 1792195995509,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 12492036.333333334,
            "unit": "ns",
            "range": "± 144775.28593076006"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 113229816.66666667,
            "unit": "ns",
            "range": "± 58827654.40693181"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com",
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dc15c36083c7c8ab78fbe5a4c92bcb2ef46f9784",
          "message": "ci(scorecard): suppress the CodeReviewID rule as won't-fix (#399)\n\nCloses #337.\n\nAlert 406 reports \"score is 0: Found 0/23 approved changesets\". The check counts\nchangesets approved by someone other than the author, and this is a\nsolo-maintainer repository, so it can only ever score 0. The two ways to satisfy\nit are recruiting a second maintainer, or requiring approvals and then\nadmin-bypassing every PR -- and admin bypass waives every other rule in the\nruleset, not just this one. There is no sub-case of the rule worth keeping live,\nso the whole rule is dropped before the SARIF reaches code-scanning.\n\nFiltering rather than dismissing the alert is deliberate and matches the step's\nexisting rationale: Scorecard emits a fresh SARIF each run and fingerprint drift\nmeans per-alert dismissals do not reliably survive.\n\nBranchProtectionID (#338) is deliberately NOT suppressed, even though its\ncurrent warnings are the same solo-maintainer story -- no required approvers, no\ncodeowners review, last-push approval disabled. It scores 4, not 0, because the\nrest of the protection is in place, so the rule still reports real regressions\nsuch as the ruleset being deleted or force-pushes being allowed. Suppressing it\nwould trade those away for three warnings that are a deliberate choice.\n\nMechanism added alongside the existing partial PinnedDependenciesID filter:\nSUPPRESSED_RULES drops whole rules by ruleId. $r is bound before use because\ninside `$suppressed | index(.ruleId)` the path would apply to the array rather\nthan the result -- jq 1.8 errors and older jq silently keeps everything, which\nfails open. `set -euo pipefail` is added because the new rules_json pipeline\nneeds it: the implicit shell is `bash -e` without pipefail, so a jq failure\nmid-pipe would pass an empty list through and suppress nothing.\n\nOnly CodeReviewID. Not CIIBestPracticesID, which the template suppresses but\nwhich is a live finding here, and not BranchProtectionID per above.\n\nVerified against a real Scorecard SARIF -- the scorecard-sarif artifact from run\n38984600267, 12 results:\n\n  rule                   before  after\n  BranchProtectionID          1      1\n  CIIBestPracticesID          1      1\n  CodeReviewID                1      0\n  PinnedDependenciesID        9      0\n  TOTAL                      12      2\n\nThe 9 PinnedDependenciesID rows all carry \"nugetCommand not pinned by hash\" with\n`dotnet restore` snippets, so the pre-existing partial filter is matching only\nwhat it claims to; there are no `gitHubAction not pinned` rows to keep live at\npresent because every action is SHA-pinned.\n\nNot run locally: the jq program itself, because jq is not installed on this\nmachine. The selection logic above was evaluated against the real SARIF, and the\nScorecard run after merge is the check on the jq. That run should also close\nalert 406, which works only because #397 pinned the analysis key -- without it\nthe suppression would have applied to a new key while 406 stayed open forever.\n\nCo-authored-by: Claude Opus 5 <noreply@anthropic.com>",
          "timestamp": "2026-10-16T20:35:53-04:00",
          "tree_id": "e5852156b8cf45ab7309e6ee1c5dc21d5791379c",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/dc15c36083c7c8ab78fbe5a4c92bcb2ef46f9784"
        },
        "date": 1792197925158,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_without_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 17766587,
            "unit": "ns",
            "range": "± 876380.6501247047"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.ProviderSaveChangesBenchmarks.Insert_with_audit(Provider: MySQL, BatchSize: 50, UseBulkInsert: False)",
            "value": 88674238.66666667,
            "unit": "ns",
            "range": "± 7962496.306461707"
          }
        ]
      }
    ]
  }
}