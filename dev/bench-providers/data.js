window.BENCHMARK_DATA = {
  "lastUpdate": 1789490277772,
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
      }
    ]
  }
}