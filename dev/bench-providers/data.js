window.BENCHMARK_DATA = {
  "lastUpdate": 1789572178158,
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
      }
    ]
  }
}