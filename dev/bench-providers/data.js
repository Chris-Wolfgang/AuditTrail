window.BENCHMARK_DATA = {
  "lastUpdate": 1789513233068,
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
      }
    ]
  }
}