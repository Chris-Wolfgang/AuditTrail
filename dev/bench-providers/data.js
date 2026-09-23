window.BENCHMARK_DATA = {
  "lastUpdate": 1790175486494,
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
      }
    ]
  }
}