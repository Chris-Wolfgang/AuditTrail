window.BENCHMARK_DATA = {
  "lastUpdate": 1787832524395,
  "repoUrl": "https://github.com/Chris-Wolfgang/AuditTrail",
  "entries": {
    "Audit Interceptor Benchmarks": [
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
          "id": "79bee9990585e287a53cca1155161a11935cc62d",
          "message": "Merge pull request #140 from Chris-Wolfgang/initial-dev\n\nRelease v0.1.0 — initial-dev → main",
          "timestamp": "2026-06-29T12:31:18-04:00",
          "tree_id": "d8434a3bf0fea98f6278920de91cf1395f6a3dcb",
          "url": "https://github.com/Chris-Wolfgang/EF-Audit/commit/79bee9990585e287a53cca1155161a11935cc62d"
        },
        "date": 1782750783969,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 1)",
            "value": 556003.9736842106,
            "unit": "ns",
            "range": "± 12339.43211537"
          },
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 1)",
            "value": 1676643.6172839506,
            "unit": "ns",
            "range": "± 165983.60342715844"
          },
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 1)",
            "value": 915243.9285714285,
            "unit": "ns",
            "range": "± 80086.05684819337"
          },
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 1)",
            "value": 2597533.1,
            "unit": "ns",
            "range": "± 42945.27835812853"
          },
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 1)",
            "value": 771607.9367816092,
            "unit": "ns",
            "range": "± 42134.15834933699"
          },
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 1)",
            "value": 1630335,
            "unit": "ns",
            "range": "± 24504.857250851623"
          },
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 10)",
            "value": 1347041.2307692308,
            "unit": "ns",
            "range": "± 12414.76914910789"
          },
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 10)",
            "value": 9381608.782828283,
            "unit": "ns",
            "range": "± 760818.1798455332"
          },
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 10)",
            "value": 2678452.1153846155,
            "unit": "ns",
            "range": "± 35407.60104492269"
          },
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 10)",
            "value": 18356478.73,
            "unit": "ns",
            "range": "± 4597397.050309221"
          },
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 10)",
            "value": 2130068,
            "unit": "ns",
            "range": "± 21918.631399532485"
          },
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 10)",
            "value": 13220713.088607594,
            "unit": "ns",
            "range": "± 667661.0869320504"
          },
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 50)",
            "value": 6868407.153061224,
            "unit": "ns",
            "range": "± 724891.3287870584"
          },
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 50)",
            "value": 24169084.14,
            "unit": "ns",
            "range": "± 14464137.882429594"
          },
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 50)",
            "value": 12934152.121212121,
            "unit": "ns",
            "range": "± 1326624.41079268"
          },
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 50)",
            "value": 18503679.5125,
            "unit": "ns",
            "range": "± 3491320.452630008"
          },
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 50)",
            "value": 9148299.742424242,
            "unit": "ns",
            "range": "± 1535684.734449226"
          },
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 50)",
            "value": 21201899.752873562,
            "unit": "ns",
            "range": "± 11164461.948134204"
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
          "id": "9d2fa03ebee16d9878f7691abb5d5627cbbb5a34",
          "message": "Merge pull request #153 from Chris-Wolfgang/dependabot/github_actions/github-actions-72aec035ae\n\nBump the github-actions group with 8 updates",
          "timestamp": "2026-06-29T13:29:38-04:00",
          "tree_id": "2b1242d7833ed28522227288e0f94a4b89196d96",
          "url": "https://github.com/Chris-Wolfgang/EF-Audit/commit/9d2fa03ebee16d9878f7691abb5d5627cbbb5a34"
        },
        "date": 1782754287589,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 1)",
            "value": 620840.1894736842,
            "unit": "ns",
            "range": "± 50160.159529102304"
          },
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 1)",
            "value": 1513572.4666666666,
            "unit": "ns",
            "range": "± 17694.224501097473"
          },
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 1)",
            "value": 830047.5333333333,
            "unit": "ns",
            "range": "± 11821.274942520653"
          },
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 1)",
            "value": 2937814.1666666665,
            "unit": "ns",
            "range": "± 25559.524774474383"
          },
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 1)",
            "value": 708737.9333333333,
            "unit": "ns",
            "range": "± 12319.46246199001"
          },
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 1)",
            "value": 1816481.6666666667,
            "unit": "ns",
            "range": "± 15039.3332283177"
          },
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 10)",
            "value": 1655569.8666666667,
            "unit": "ns",
            "range": "± 27816.43828454849"
          },
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 10)",
            "value": 10886038.335051546,
            "unit": "ns",
            "range": "± 726153.4666902188"
          },
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 10)",
            "value": 3455502.0714285714,
            "unit": "ns",
            "range": "± 26475.828411428953"
          },
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 10)",
            "value": 20745164.07,
            "unit": "ns",
            "range": "± 6524799.646514701"
          },
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 10)",
            "value": 2632454.1,
            "unit": "ns",
            "range": "± 38752.20405860807"
          },
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 10)",
            "value": 16312479.540816326,
            "unit": "ns",
            "range": "± 3701654.1463870546"
          },
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 50)",
            "value": 6808001.923076923,
            "unit": "ns",
            "range": "± 26340.49618446072"
          },
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 50)",
            "value": 25873701.555555556,
            "unit": "ns",
            "range": "± 15303201.873512555"
          },
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 50)",
            "value": 17896555.2,
            "unit": "ns",
            "range": "± 299225.13166372146"
          },
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 50)",
            "value": 23525245.49382716,
            "unit": "ns",
            "range": "± 6456502.106865335"
          },
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 50)",
            "value": 14053217.85,
            "unit": "ns",
            "range": "± 323054.9354847896"
          },
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 50)",
            "value": 21634352.234939758,
            "unit": "ns",
            "range": "± 5446128.945774243"
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
          "id": "160a6175104e5e178be78e58c219f7aff4090cb5",
          "message": "Merge pull request #156 from Chris-Wolfgang/release-prep/v0.1.0-readiness\n\nrelease prep: trusted publishing + exclude Cli from NuGet (v0.1.0 readiness)",
          "timestamp": "2026-06-29T14:38:15-04:00",
          "tree_id": "ab4775ddc8082e48cf095ebc5178457456dbf665",
          "url": "https://github.com/Chris-Wolfgang/EF-Audit/commit/160a6175104e5e178be78e58c219f7aff4090cb5"
        },
        "date": 1782758423816,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 1)",
            "value": 772722.5306122449,
            "unit": "ns",
            "range": "± 228039.79841089706"
          },
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 1)",
            "value": 1982694.3789473684,
            "unit": "ns",
            "range": "± 191472.96051257636"
          },
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 1)",
            "value": 1001249.2608695652,
            "unit": "ns",
            "range": "± 86396.44745601008"
          },
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 1)",
            "value": 3151777.785714286,
            "unit": "ns",
            "range": "± 40481.36673245448"
          },
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 1)",
            "value": 845712.5824175824,
            "unit": "ns",
            "range": "± 68896.59255226325"
          },
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 1)",
            "value": 2223065.066666667,
            "unit": "ns",
            "range": "± 162469.12979752195"
          },
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 10)",
            "value": 1714236.6923076923,
            "unit": "ns",
            "range": "± 22270.20621587137"
          },
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 10)",
            "value": 11008205.403225806,
            "unit": "ns",
            "range": "± 727437.3978567574"
          },
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 10)",
            "value": 4212558.543956044,
            "unit": "ns",
            "range": "± 292583.46749063337"
          },
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 10)",
            "value": 20164772.76,
            "unit": "ns",
            "range": "± 6367152.867082722"
          },
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 10)",
            "value": 3385578.536082474,
            "unit": "ns",
            "range": "± 295563.20373896125"
          },
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 10)",
            "value": 15701979.86,
            "unit": "ns",
            "range": "± 2292030.434976011"
          },
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 50)",
            "value": 7043426.785714285,
            "unit": "ns",
            "range": "± 73102.23850111313"
          },
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 50)",
            "value": 21038894.489130434,
            "unit": "ns",
            "range": "± 11079515.311085826"
          },
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 50)",
            "value": 16663554.707070706,
            "unit": "ns",
            "range": "± 2448016.181724326"
          },
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 50)",
            "value": 23557198.61728395,
            "unit": "ns",
            "range": "± 5043578.917716474"
          },
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 50)",
            "value": 11115877.69,
            "unit": "ns",
            "range": "± 2902114.4926090403"
          },
          {
            "name": "Wolfgang.Audit.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 50)",
            "value": 23658123.03448276,
            "unit": "ns",
            "range": "± 7631549.76965058"
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
          "id": "441668c7b681d4caad9fa8c0a9f88fcefb66d058",
          "message": "Merge pull request #157 from Chris-Wolfgang/rename/audittrail\n\nrename: Wolfgang.Audit.* → Wolfgang.AuditTrail.* (pre-v0.1.0)",
          "timestamp": "2026-06-29T17:13:35-04:00",
          "tree_id": "7cefdf6862f441389874812848b90994f73718eb",
          "url": "https://github.com/Chris-Wolfgang/EF-Audit/commit/441668c7b681d4caad9fa8c0a9f88fcefb66d058"
        },
        "date": 1782767721317,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 1)",
            "value": 557097.3684210526,
            "unit": "ns",
            "range": "± 12146.951127342963"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 1)",
            "value": 1521961.5,
            "unit": "ns",
            "range": "± 25837.454807373673"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 1)",
            "value": 852259,
            "unit": "ns",
            "range": "± 14228.996276563626"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 1)",
            "value": 3048954.8571428573,
            "unit": "ns",
            "range": "± 32084.849129617698"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 1)",
            "value": 716070.0476190476,
            "unit": "ns",
            "range": "± 16921.566143463762"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 1)",
            "value": 2164016.7802197803,
            "unit": "ns",
            "range": "± 155319.54056001254"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 10)",
            "value": 1679141.0666666667,
            "unit": "ns",
            "range": "± 12443.847484179636"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 10)",
            "value": 12031099.042553192,
            "unit": "ns",
            "range": "± 1234169.0673702739"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 10)",
            "value": 3426245.1153846155,
            "unit": "ns",
            "range": "± 18878.145462140703"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 10)",
            "value": 23749614.016666666,
            "unit": "ns",
            "range": "± 1057806.0327043957"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 10)",
            "value": 2686604,
            "unit": "ns",
            "range": "± 24726.746394799444"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 10)",
            "value": 17659057.66,
            "unit": "ns",
            "range": "± 3290318.697734289"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 50)",
            "value": 8537646.622448979,
            "unit": "ns",
            "range": "± 741737.4098618926"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 50)",
            "value": 25559102.237373736,
            "unit": "ns",
            "range": "± 14609936.794062324"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 50)",
            "value": 18389528.14285714,
            "unit": "ns",
            "range": "± 306820.8154516266"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 50)",
            "value": 22047663.512658227,
            "unit": "ns",
            "range": "± 2975779.7964042393"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 50)",
            "value": 11651840.82,
            "unit": "ns",
            "range": "± 2946040.278120135"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 50)",
            "value": 22256770.404761903,
            "unit": "ns",
            "range": "± 6430516.6188523825"
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
          "id": "16149e16143eb86cd9c45f86b0ca8ef36e1041bb",
          "message": "Merge pull request #160 from Chris-Wolfgang/ci/release-concurrency-group\n\nci(release): add concurrency group so duplicate releases don't race",
          "timestamp": "2026-06-29T21:24:10-04:00",
          "tree_id": "a3c1ed57668b91f0b811ed1d6ceaf8ed1d3034a6",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/16149e16143eb86cd9c45f86b0ca8ef36e1041bb"
        },
        "date": 1782782751856,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 1)",
            "value": 545362.195652174,
            "unit": "ns",
            "range": "± 13567.737489536721"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 1)",
            "value": 1677677.293478261,
            "unit": "ns",
            "range": "± 162481.31963185346"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 1)",
            "value": 804931.6153846154,
            "unit": "ns",
            "range": "± 11212.212779959043"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 1)",
            "value": 2597776.7333333334,
            "unit": "ns",
            "range": "± 43788.35837862888"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 1)",
            "value": 748948.3092783506,
            "unit": "ns",
            "range": "± 68695.29654998842"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 1)",
            "value": 1569334.2142857143,
            "unit": "ns",
            "range": "± 15746.228877849655"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 10)",
            "value": 1281075.9285714286,
            "unit": "ns",
            "range": "± 15223.958761738711"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 10)",
            "value": 9404299.274193548,
            "unit": "ns",
            "range": "± 940238.6908273222"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 10)",
            "value": 2427546.0714285714,
            "unit": "ns",
            "range": "± 36699.138366461135"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 10)",
            "value": 20294856.28,
            "unit": "ns",
            "range": "± 4049033.290176611"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 10)",
            "value": 1890415.4666666666,
            "unit": "ns",
            "range": "± 18291.62159439072"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 10)",
            "value": 15159218.35,
            "unit": "ns",
            "range": "± 2592073.3349846127"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 50)",
            "value": 4769999.653846154,
            "unit": "ns",
            "range": "± 34211.15948255811"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 50)",
            "value": 26724640.29,
            "unit": "ns",
            "range": "± 15617524.321380239"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 50)",
            "value": 13340588.336734693,
            "unit": "ns",
            "range": "± 1581279.3335644072"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 50)",
            "value": 23297140.467032965,
            "unit": "ns",
            "range": "± 11999938.311296584"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 50)",
            "value": 9587709.823529411,
            "unit": "ns",
            "range": "± 190554.78022022804"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 50)",
            "value": 20803183.023255814,
            "unit": "ns",
            "range": "± 9973806.177505178"
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
          "id": "bf012bca770d7e5e4e49b9d1f08e4fe3a1e537d6",
          "message": "Merge pull request #159 from Chris-Wolfgang/fix/slnx-complete-projects\n\nfix(slnx): add the 4 projects missing from AuditTrail.slnx (unblocks v0.1.0 release)",
          "timestamp": "2026-06-29T21:44:23-04:00",
          "tree_id": "faa944780ff0851a3924324274d50ee7dffc8237",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/bf012bca770d7e5e4e49b9d1f08e4fe3a1e537d6"
        },
        "date": 1782783966375,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 1)",
            "value": 560513.1666666666,
            "unit": "ns",
            "range": "± 14067.377786819456"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 1)",
            "value": 1531410.2333333334,
            "unit": "ns",
            "range": "± 28277.278954430298"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 1)",
            "value": 835339.2222222222,
            "unit": "ns",
            "range": "± 15343.352167692366"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 1)",
            "value": 2930126.4,
            "unit": "ns",
            "range": "± 25209.47353618137"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 1)",
            "value": 716843,
            "unit": "ns",
            "range": "± 13579.687050885967"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 1)",
            "value": 1830203.3333333333,
            "unit": "ns",
            "range": "± 26013.516949755907"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 10)",
            "value": 1651023.3333333333,
            "unit": "ns",
            "range": "± 30724.709622402494"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 10)",
            "value": 10950889.808080807,
            "unit": "ns",
            "range": "± 904366.0179935463"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 10)",
            "value": 3429223.1,
            "unit": "ns",
            "range": "± 25396.10166316307"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 10)",
            "value": 23135433.804347824,
            "unit": "ns",
            "range": "± 882486.5315026025"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 10)",
            "value": 2621471.433333333,
            "unit": "ns",
            "range": "± 21488.84211620622"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 10)",
            "value": 17157757.21,
            "unit": "ns",
            "range": "± 2306466.7316353233"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 50)",
            "value": 7925536.489795919,
            "unit": "ns",
            "range": "± 702079.8869151932"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 50)",
            "value": 49267054.71428572,
            "unit": "ns",
            "range": "± 1131407.0173404063"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 50)",
            "value": 15886578.616161617,
            "unit": "ns",
            "range": "± 1973858.6686270623"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 50)",
            "value": 21506479.82278481,
            "unit": "ns",
            "range": "± 3884133.974411238"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 50)",
            "value": 12969924.529411765,
            "unit": "ns",
            "range": "± 258775.74474318436"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 50)",
            "value": 22766824.534883723,
            "unit": "ns",
            "range": "± 7848289.434830349"
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
          "id": "6a4da9aabbd8a6be6bc95a21ba96882ed609cb23",
          "message": "Merge pull request #161 from Chris-Wolfgang/chore/sync-docfx-canonical\n\nci(docfx): sync docfx.yaml to canonical",
          "timestamp": "2026-06-29T21:57:28-04:00",
          "tree_id": "b0e05f64043a88a7c8ad12ce0701c53a897c7a19",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/6a4da9aabbd8a6be6bc95a21ba96882ed609cb23"
        },
        "date": 1782784751893,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 1)",
            "value": 625654.6086956522,
            "unit": "ns",
            "range": "± 53923.43944156229"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 1)",
            "value": 1523926.9666666666,
            "unit": "ns",
            "range": "± 21490.872131697037"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 1)",
            "value": 839581,
            "unit": "ns",
            "range": "± 6379.856281035386"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 1)",
            "value": 2955903.9285714286,
            "unit": "ns",
            "range": "± 16385.453443007522"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 1)",
            "value": 720481.8260869565,
            "unit": "ns",
            "range": "± 17675.228191023252"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 1)",
            "value": 1831873.357142857,
            "unit": "ns",
            "range": "± 17370.439202662856"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 10)",
            "value": 1670436.6,
            "unit": "ns",
            "range": "± 14614.873245137249"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 10)",
            "value": 10899237.478723405,
            "unit": "ns",
            "range": "± 635589.2048393666"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 10)",
            "value": 3454404.1,
            "unit": "ns",
            "range": "± 18394.88280085369"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 10)",
            "value": 17091748.877777778,
            "unit": "ns",
            "range": "± 3571435.5647589243"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 10)",
            "value": 2630264.6,
            "unit": "ns",
            "range": "± 22286.86108706845"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 10)",
            "value": 15355156.47979798,
            "unit": "ns",
            "range": "± 1662259.6556125772"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 50)",
            "value": 6724144.857142857,
            "unit": "ns",
            "range": "± 43764.3730462561"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 50)",
            "value": 26556289.33,
            "unit": "ns",
            "range": "± 14936621.402457219"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 50)",
            "value": 17157198.01020408,
            "unit": "ns",
            "range": "± 2356425.4916820503"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 50)",
            "value": 21716369.456790123,
            "unit": "ns",
            "range": "± 3641592.2699112264"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 50)",
            "value": 13525235.333333334,
            "unit": "ns",
            "range": "± 229588.6430490307"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 50)",
            "value": 23629384.022727273,
            "unit": "ns",
            "range": "± 8270095.949686891"
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
          "id": "83b56a7606f62fbf37c7fd8a14ba99839a415e11",
          "message": "Merge pull request #162 from Chris-Wolfgang/fix/release-smoke-test-nuget-sources\n\nfix(release): smoke test resolves transitive deps from nuget.org (protected)",
          "timestamp": "2026-06-30T08:08:04-04:00",
          "tree_id": "fe85e26f9ee318deb8ba870d04bef64f22110c76",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/83b56a7606f62fbf37c7fd8a14ba99839a415e11"
        },
        "date": 1782821370526,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 1)",
            "value": 419758.10714285716,
            "unit": "ns",
            "range": "± 11850.392809052193"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 1)",
            "value": 1031710.9333333333,
            "unit": "ns",
            "range": "± 18918.83670716519"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 1)",
            "value": 616074.2173913043,
            "unit": "ns",
            "range": "± 15476.060530428991"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 1)",
            "value": 2005768.8666666667,
            "unit": "ns",
            "range": "± 36329.70185844923"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 1)",
            "value": 587195.2065217391,
            "unit": "ns",
            "range": "± 53498.94665709239"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 1)",
            "value": 1211360,
            "unit": "ns",
            "range": "± 19246.448121295376"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 10)",
            "value": 986496.9666666667,
            "unit": "ns",
            "range": "± 13590.959284269327"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 10)",
            "value": 7065567.201030928,
            "unit": "ns",
            "range": "± 1058124.7074002856"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 10)",
            "value": 1870862.4333333333,
            "unit": "ns",
            "range": "± 20772.417169570486"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 10)",
            "value": 14056704.848484848,
            "unit": "ns",
            "range": "± 2407218.715357611"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 10)",
            "value": 1474164.8,
            "unit": "ns",
            "range": "± 21078.164209843864"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 10)",
            "value": 11087470.576086957,
            "unit": "ns",
            "range": "± 1074485.2526162707"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 50)",
            "value": 3771057.8571428573,
            "unit": "ns",
            "range": "± 60954.70588365297"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 50)",
            "value": 21125531.19,
            "unit": "ns",
            "range": "± 9266880.811822644"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 50)",
            "value": 7850975.285714285,
            "unit": "ns",
            "range": "± 58467.77244467978"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 50)",
            "value": 17595418.57142857,
            "unit": "ns",
            "range": "± 6567833.3624841245"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 50)",
            "value": 7131079.03,
            "unit": "ns",
            "range": "± 1076302.5064415454"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 50)",
            "value": 24673616.939393938,
            "unit": "ns",
            "range": "± 15774061.51914351"
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
          "id": "7ce93ba2e55b79f667df9d7a7bfc7748f1946e75",
          "message": "Merge pull request #163 from Chris-Wolfgang/protected/release-verify-shell-bash\n\nRun NUGET_USER guard under bash on the Windows publish runner",
          "timestamp": "2026-06-30T09:58:24-04:00",
          "tree_id": "2f038a26bb0d4d25e0b9718abb54acbdf69c85fa",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/7ce93ba2e55b79f667df9d7a7bfc7748f1946e75"
        },
        "date": 1782828005323,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 1)",
            "value": 621066.9086021505,
            "unit": "ns",
            "range": "± 77523.31489696399"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 1)",
            "value": 1676649.5208333333,
            "unit": "ns",
            "range": "± 189493.71698685506"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 1)",
            "value": 803102.2142857143,
            "unit": "ns",
            "range": "± 18779.722586190823"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 1)",
            "value": 3422749.8541666665,
            "unit": "ns",
            "range": "± 386409.2884071304"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 1)",
            "value": 744406.9120879121,
            "unit": "ns",
            "range": "± 53082.32917786996"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 1)",
            "value": 1873220.9325842697,
            "unit": "ns",
            "range": "± 158140.31859998417"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 10)",
            "value": 1320715.5,
            "unit": "ns",
            "range": "± 12748.620978644822"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 10)",
            "value": 9301693.336734693,
            "unit": "ns",
            "range": "± 993005.5531833459"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 10)",
            "value": 2395055.8571428573,
            "unit": "ns",
            "range": "± 25086.758832276264"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 10)",
            "value": 20014450.454545453,
            "unit": "ns",
            "range": "± 911380.6343756528"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 10)",
            "value": 1958471.1,
            "unit": "ns",
            "range": "± 32056.716621370586"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 10)",
            "value": 15413354.92,
            "unit": "ns",
            "range": "± 2724894.667929572"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 50)",
            "value": 4904224.3,
            "unit": "ns",
            "range": "± 57764.396067375026"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 50)",
            "value": 27150931.63,
            "unit": "ns",
            "range": "± 15726176.166146236"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 50)",
            "value": 13096688.346153846,
            "unit": "ns",
            "range": "± 147323.91709757908"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 50)",
            "value": 20360295,
            "unit": "ns",
            "range": "± 7887814.161183795"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 50)",
            "value": 9031082.15,
            "unit": "ns",
            "range": "± 1406117.384735543"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 50)",
            "value": 25082322.791666668,
            "unit": "ns",
            "range": "± 17043080.77758554"
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
          "id": "6fb2adeb1a8850a10a790cbd04f5b430cc67711f",
          "message": "Merge pull request #169 from Chris-Wolfgang/dependabot/github_actions/github-actions-3e14a33e79\n\nBump the github-actions group with 2 updates",
          "timestamp": "2026-06-30T16:58:04-04:00",
          "tree_id": "fab46348b5647831500c7d645ebbdeb35dc057c7",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/6fb2adeb1a8850a10a790cbd04f5b430cc67711f"
        },
        "date": 1782853192392,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 1)",
            "value": 629493.3617021276,
            "unit": "ns",
            "range": "± 46971.23405148492"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 1)",
            "value": 1533087.357142857,
            "unit": "ns",
            "range": "± 21253.612433608127"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 1)",
            "value": 852641.4666666667,
            "unit": "ns",
            "range": "± 14435.339354052841"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 1)",
            "value": 3025996.3,
            "unit": "ns",
            "range": "± 39773.9123371086"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 1)",
            "value": 786012.7926829269,
            "unit": "ns",
            "range": "± 40971.76896223498"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 1)",
            "value": 1840676.9285714286,
            "unit": "ns",
            "range": "± 26674.699437321287"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 10)",
            "value": 1717033.1666666667,
            "unit": "ns",
            "range": "± 18241.46890433659"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 10)",
            "value": 11080708.516129032,
            "unit": "ns",
            "range": "± 676109.6353753777"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 10)",
            "value": 3513020.4285714286,
            "unit": "ns",
            "range": "± 35536.59614389799"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 10)",
            "value": 18841756.11,
            "unit": "ns",
            "range": "± 4977493.330383206"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 10)",
            "value": 2665903.8333333335,
            "unit": "ns",
            "range": "± 23244.503994544193"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 10)",
            "value": 17129370.42,
            "unit": "ns",
            "range": "± 3709864.7187686474"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 50)",
            "value": 7898497.808510638,
            "unit": "ns",
            "range": "± 449710.7341664918"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 50)",
            "value": 27864759.79,
            "unit": "ns",
            "range": "± 17902313.441402566"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 50)",
            "value": 16464259.232323233,
            "unit": "ns",
            "range": "± 2185124.2725184774"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 50)",
            "value": 21843480.820987653,
            "unit": "ns",
            "range": "± 3423131.6812789124"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 50)",
            "value": 14511431,
            "unit": "ns",
            "range": "± 209244.54114128897"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 50)",
            "value": 23467610.347058825,
            "unit": "ns",
            "range": "± 8757795.158528311"
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
          "id": "5e85723e3b61dff35b251ce39d151a6ef31aa8a4",
          "message": "Merge pull request #172 from Chris-Wolfgang/docs/adr-migrations-threatmodel\n\nDocs/adr migrations threatmodel",
          "timestamp": "2026-06-30T17:20:41-04:00",
          "tree_id": "73fd0e5bc6d0c7754c4ea33f6e6449a81898e6cc",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/5e85723e3b61dff35b251ce39d151a6ef31aa8a4"
        },
        "date": 1782854544887,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 1)",
            "value": 621349.7263157895,
            "unit": "ns",
            "range": "± 63682.41101689149"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 1)",
            "value": 1534715.888888889,
            "unit": "ns",
            "range": "± 32278.30117830733"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 1)",
            "value": 855211.0666666667,
            "unit": "ns",
            "range": "± 14379.79709506494"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 1)",
            "value": 2935106.4166666665,
            "unit": "ns",
            "range": "± 30743.721080921798"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 1)",
            "value": 726715.9545454546,
            "unit": "ns",
            "range": "± 17033.401934846308"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 1)",
            "value": 1834662.5714285714,
            "unit": "ns",
            "range": "± 19719.578372440246"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 10)",
            "value": 1633394.5714285714,
            "unit": "ns",
            "range": "± 16182.74235918425"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 10)",
            "value": 11486997.572164949,
            "unit": "ns",
            "range": "± 1211697.8813702408"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 10)",
            "value": 3385076.4,
            "unit": "ns",
            "range": "± 26799.263496809544"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 10)",
            "value": 20286226.05,
            "unit": "ns",
            "range": "± 6457974.097454741"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 10)",
            "value": 2630038.7333333334,
            "unit": "ns",
            "range": "± 36834.59340943097"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 10)",
            "value": 15767325.242424242,
            "unit": "ns",
            "range": "± 2035491.4471728285"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 50)",
            "value": 6718633,
            "unit": "ns",
            "range": "± 40290.83391990713"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 50)",
            "value": 46734365.89473684,
            "unit": "ns",
            "range": "± 1031916.0743344229"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 50)",
            "value": 14973094.151515152,
            "unit": "ns",
            "range": "± 3134560.061323368"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 50)",
            "value": 23281521.438271604,
            "unit": "ns",
            "range": "± 5982510.673746058"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 50)",
            "value": 13190759.14,
            "unit": "ns",
            "range": "± 339734.2540596841"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 50)",
            "value": 20878109.951219514,
            "unit": "ns",
            "range": "± 4991492.173185384"
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
          "id": "1d389b2378e19d1701c3e4578f18f9a600771c57",
          "message": "Merge pull request #187 from Chris-Wolfgang/release/v0.1.1\n\nRelease v0.1.1",
          "timestamp": "2026-07-04T10:18:39-04:00",
          "tree_id": "853a9e3cbc61351874cb4870bc294651977616ea",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/1d389b2378e19d1701c3e4578f18f9a600771c57"
        },
        "date": 1783174822439,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 1)",
            "value": 596248.1463414634,
            "unit": "ns",
            "range": "± 44308.03172268898"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 1)",
            "value": 1496285.2,
            "unit": "ns",
            "range": "± 19884.001771704377"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 1)",
            "value": 864130.625,
            "unit": "ns",
            "range": "± 16917.83328867303"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 1)",
            "value": 2926027.3076923075,
            "unit": "ns",
            "range": "± 21502.13400798711"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 1)",
            "value": 722025.2380952381,
            "unit": "ns",
            "range": "± 17177.14779846981"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 1)",
            "value": 1797573.7142857143,
            "unit": "ns",
            "range": "± 18796.568623753446"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 10)",
            "value": 1639964.1,
            "unit": "ns",
            "range": "± 19728.32842024744"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 10)",
            "value": 11241441.25,
            "unit": "ns",
            "range": "± 815911.6335628917"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 10)",
            "value": 3424204.846153846,
            "unit": "ns",
            "range": "± 24174.438014309504"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 10)",
            "value": 19413630.36,
            "unit": "ns",
            "range": "± 5371276.740132078"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 10)",
            "value": 2617048.3076923075,
            "unit": "ns",
            "range": "± 27697.43950375382"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 10)",
            "value": 15878583.717171717,
            "unit": "ns",
            "range": "± 2831687.049202547"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 50)",
            "value": 6748725.384615385,
            "unit": "ns",
            "range": "± 20750.750221531995"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 50)",
            "value": 25160097.64,
            "unit": "ns",
            "range": "± 15941410.606296692"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 50)",
            "value": 18310506,
            "unit": "ns",
            "range": "± 157649.33334997745"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 50)",
            "value": 22072155.573170733,
            "unit": "ns",
            "range": "± 3687526.636314411"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 50)",
            "value": 10986813.53,
            "unit": "ns",
            "range": "± 2806548.9249750585"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 50)",
            "value": 22874467.795454547,
            "unit": "ns",
            "range": "± 7778116.924809958"
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
          "id": "42e884e1febeb4cbefb274ed982f192e621954a4",
          "message": "Merge pull request #191 from Chris-Wolfgang/dependabot/github_actions/github-actions-d1f5a551b2\n\nBump the github-actions group with 4 updates",
          "timestamp": "2026-07-04T10:36:09-04:00",
          "tree_id": "12bf52083d782fa4f26782e807ffde0eed21aebd",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/42e884e1febeb4cbefb274ed982f192e621954a4"
        },
        "date": 1783175879774,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 1)",
            "value": 650070.3505747126,
            "unit": "ns",
            "range": "± 62567.69106828974"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 1)",
            "value": 1581198.3666666667,
            "unit": "ns",
            "range": "± 27865.909212991184"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 1)",
            "value": 1077191.8404255318,
            "unit": "ns",
            "range": "± 220303.0844602989"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 1)",
            "value": 3803666.4285714286,
            "unit": "ns",
            "range": "± 426147.58130437875"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 1)",
            "value": 862369.3707865168,
            "unit": "ns",
            "range": "± 57420.39877426004"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 1)",
            "value": 2001556.8529411764,
            "unit": "ns",
            "range": "± 39147.9580740509"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 10)",
            "value": 1698554,
            "unit": "ns",
            "range": "± 27450.351475961947"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 10)",
            "value": 11897932.616161617,
            "unit": "ns",
            "range": "± 1375150.3496426863"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 10)",
            "value": 3527539.714285714,
            "unit": "ns",
            "range": "± 35582.530746634155"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 10)",
            "value": 19010903.63,
            "unit": "ns",
            "range": "± 5260368.751324146"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 10)",
            "value": 2778056.4,
            "unit": "ns",
            "range": "± 47835.521781561925"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 10)",
            "value": 18098477.096153848,
            "unit": "ns",
            "range": "± 741393.0341372421"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 50)",
            "value": 9008065.801075269,
            "unit": "ns",
            "range": "± 508578.7776505184"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 50)",
            "value": 26321452.53030303,
            "unit": "ns",
            "range": "± 15007289.582721328"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 50)",
            "value": 18866227.307692308,
            "unit": "ns",
            "range": "± 221267.84832956965"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 50)",
            "value": 23352627.3,
            "unit": "ns",
            "range": "± 5289149.785250019"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 50)",
            "value": 10870495.378787879,
            "unit": "ns",
            "range": "± 2670859.0959381196"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 50)",
            "value": 22588766.404761903,
            "unit": "ns",
            "range": "± 6933605.686315082"
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
          "id": "d648af140cf90a486f8488a35f4db4ebec28a7d0",
          "message": "Merge pull request #193 from Chris-Wolfgang/tests/interceptor-sync-to-main\n\nInterceptor sync-path tests (mutation hardening batch 3)",
          "timestamp": "2026-07-04T19:22:55-04:00",
          "tree_id": "a30c2bc22a850fb2381fb9774cea4f9079ec1de1",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/d648af140cf90a486f8488a35f4db4ebec28a7d0"
        },
        "date": 1783207489640,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 1)",
            "value": 745705.3372093023,
            "unit": "ns",
            "range": "± 122227.5793841492"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 1)",
            "value": 2090653.5989010988,
            "unit": "ns",
            "range": "± 289221.3267975105"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 1)",
            "value": 1145638.971264368,
            "unit": "ns",
            "range": "± 120255.3052497776"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 1)",
            "value": 4253746.2105263155,
            "unit": "ns",
            "range": "± 383750.3656531322"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 1)",
            "value": 908826.4623655914,
            "unit": "ns",
            "range": "± 147400.00948030758"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 1)",
            "value": 2592385.331578947,
            "unit": "ns",
            "range": "± 295586.08767151076"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 10)",
            "value": 2313609.9139784947,
            "unit": "ns",
            "range": "± 256265.3393481255"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 10)",
            "value": 11003667.639175259,
            "unit": "ns",
            "range": "± 774274.5918693319"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 10)",
            "value": 4376767.382716049,
            "unit": "ns",
            "range": "± 374152.0807696239"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 10)",
            "value": 26407182.976190478,
            "unit": "ns",
            "range": "± 557591.7917476564"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 10)",
            "value": 3318632.5425531915,
            "unit": "ns",
            "range": "± 235362.46034678683"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 10)",
            "value": 17441401.4,
            "unit": "ns",
            "range": "± 2930951.0544714583"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 50)",
            "value": 7946249.021052632,
            "unit": "ns",
            "range": "± 485487.879019235"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 50)",
            "value": 26051393.83,
            "unit": "ns",
            "range": "± 15921836.087511068"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 50)",
            "value": 18416814.625,
            "unit": "ns",
            "range": "± 341570.21686204337"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 50)",
            "value": 21355902.807692308,
            "unit": "ns",
            "range": "± 2678721.3632322573"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 50)",
            "value": 13831137.192307692,
            "unit": "ns",
            "range": "± 164509.88809510542"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 50)",
            "value": 21776555.252941176,
            "unit": "ns",
            "range": "± 5405834.318241175"
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
          "id": "0e72046fb7c944604472dd6b4dbd8a0c710b1ef0",
          "message": "Merge pull request #194 from Chris-Wolfgang/deps/publicapi-analyzers-5\n\nUpgrade PublicApiAnalyzers to 5.6.0 + reconcile PublicAPI manifest",
          "timestamp": "2026-07-04T19:47:01-04:00",
          "tree_id": "94051c19283300c30fe812a760bb446f62a3b2ab",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/0e72046fb7c944604472dd6b4dbd8a0c710b1ef0"
        },
        "date": 1783208904109,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 1)",
            "value": 475820.6595744681,
            "unit": "ns",
            "range": "± 40267.9558053681"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 1)",
            "value": 1027147.4333333333,
            "unit": "ns",
            "range": "± 14043.400887792035"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 1)",
            "value": 617175.1304347826,
            "unit": "ns",
            "range": "± 15326.240641771425"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 1)",
            "value": 2020469.3333333333,
            "unit": "ns",
            "range": "± 24030.49784178034"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 1)",
            "value": 605348.4516129033,
            "unit": "ns",
            "range": "± 86828.23075982135"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 1)",
            "value": 1219436.7666666666,
            "unit": "ns",
            "range": "± 19135.774665967056"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 10)",
            "value": 976533.5333333333,
            "unit": "ns",
            "range": "± 12081.462854109932"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 10)",
            "value": 6952352.775510204,
            "unit": "ns",
            "range": "± 1025638.9939156866"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 10)",
            "value": 1886177.3846153845,
            "unit": "ns",
            "range": "± 18984.84397942414"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 10)",
            "value": 13466753.535353536,
            "unit": "ns",
            "range": "± 2233934.777957742"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 10)",
            "value": 1459803.7692307692,
            "unit": "ns",
            "range": "± 10826.575937277725"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 10)",
            "value": 10758018.958333334,
            "unit": "ns",
            "range": "± 1119606.5742365122"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 50)",
            "value": 3733117.3571428573,
            "unit": "ns",
            "range": "± 14167.575068591515"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 50)",
            "value": 21087005.69,
            "unit": "ns",
            "range": "± 10592773.490147213"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 50)",
            "value": 10752315.621212121,
            "unit": "ns",
            "range": "± 1203039.5075309842"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 50)",
            "value": 16804447.597560976,
            "unit": "ns",
            "range": "± 6810649.6457843995"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 50)",
            "value": 5465548.346153846,
            "unit": "ns",
            "range": "± 27245.272427359312"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 50)",
            "value": 23123798.641414143,
            "unit": "ns",
            "range": "± 15045592.651159324"
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
          "id": "623fed341dfda900d8c3a070be8cdb9868d36b72",
          "message": "Merge pull request #196 from Chris-Wolfgang/docs/changelog-perf-note\n\nNote EF Core 9 / SqlClient 7 audit-insert perf regression in CHANGELOG",
          "timestamp": "2026-07-04T20:20:24-04:00",
          "tree_id": "e1828a1898e5c3634dd0d5ebad122a291b73b4ba",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/623fed341dfda900d8c3a070be8cdb9868d36b72"
        },
        "date": 1783210926354,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 1)",
            "value": 534668.0357142857,
            "unit": "ns",
            "range": "± 15271.586702307153"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 1)",
            "value": 1336959.642857143,
            "unit": "ns",
            "range": "± 15101.482426504424"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 1)",
            "value": 799564.3846153846,
            "unit": "ns",
            "range": "± 11354.7147295625"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 1)",
            "value": 2626987.25,
            "unit": "ns",
            "range": "± 33517.72388162038"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 1)",
            "value": 668976.0666666667,
            "unit": "ns",
            "range": "± 11204.234004968625"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 1)",
            "value": 1571722.8666666667,
            "unit": "ns",
            "range": "± 24097.41438076075"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 10)",
            "value": 1253503.5714285714,
            "unit": "ns",
            "range": "± 16253.596509526915"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 10)",
            "value": 6851120,
            "unit": "ns",
            "range": "± 38013.76990704098"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 10)",
            "value": 2441756,
            "unit": "ns",
            "range": "± 39303.28920986494"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 10)",
            "value": 18119509.106060605,
            "unit": "ns",
            "range": "± 4222499.759826483"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 10)",
            "value": 1903110.142857143,
            "unit": "ns",
            "range": "± 12401.806944071577"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 10)",
            "value": 14979302.94,
            "unit": "ns",
            "range": "± 2702549.339980506"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 50)",
            "value": 4909639.928571428,
            "unit": "ns",
            "range": "± 41888.44698530443"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 50)",
            "value": 26740068.46,
            "unit": "ns",
            "range": "± 14151158.17566633"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 50)",
            "value": 12148083.8814433,
            "unit": "ns",
            "range": "± 1431397.1217271606"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 50)",
            "value": 18516613.8,
            "unit": "ns",
            "range": "± 4222850.969658765"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 50)",
            "value": 9801267.26,
            "unit": "ns",
            "range": "± 1536891.0052738185"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 50)",
            "value": 27258272.611111112,
            "unit": "ns",
            "range": "± 18077756.31555503"
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
          "id": "0ff67e447d167d3b17ec171fc6735f6b90880fa0",
          "message": "Merge pull request #192 from Chris-Wolfgang/dependabot/nuget/benchmarks/Wolfgang.AuditTrail.EntityFrameworkCore.Benchmarks/dotnet-dependencies-809765b443\n\nBump the dotnet-dependencies group with 14 updates",
          "timestamp": "2026-07-04T20:40:08-04:00",
          "tree_id": "8c70faadc4b1d4de2fa9e27f125963b0b6b92254",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/0ff67e447d167d3b17ec171fc6735f6b90880fa0"
        },
        "date": 1783212113279,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 1)",
            "value": 640416.8440860215,
            "unit": "ns",
            "range": "± 58784.38898183151"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 1)",
            "value": 1545610.857142857,
            "unit": "ns",
            "range": "± 14586.546688154613"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 1)",
            "value": 866131,
            "unit": "ns",
            "range": "± 13358.136716373781"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 1)",
            "value": 3832435.966666667,
            "unit": "ns",
            "range": "± 408469.1643369935"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 1)",
            "value": 727937,
            "unit": "ns",
            "range": "± 14887.976847946802"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 1)",
            "value": 1854537.4166666667,
            "unit": "ns",
            "range": "± 17361.89243171971"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 10)",
            "value": 1666583.3333333333,
            "unit": "ns",
            "range": "± 11838.956220079217"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 10)",
            "value": 9242375.423076924,
            "unit": "ns",
            "range": "± 50972.09826375854"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 10)",
            "value": 3562067.5714285714,
            "unit": "ns",
            "range": "± 44685.34014763555"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 10)",
            "value": 20025211.520202022,
            "unit": "ns",
            "range": "± 2844982.9313317677"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 10)",
            "value": 2645966,
            "unit": "ns",
            "range": "± 17033.079660304702"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 10)",
            "value": 17052297.07,
            "unit": "ns",
            "range": "± 3677627.6015031487"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 50)",
            "value": 6855609.928571428,
            "unit": "ns",
            "range": "± 29074.916443994727"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 50)",
            "value": 27047945.72,
            "unit": "ns",
            "range": "± 14648060.031080686"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 50)",
            "value": 18216434,
            "unit": "ns",
            "range": "± 175657.83668256877"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 50)",
            "value": 22273105.75,
            "unit": "ns",
            "range": "± 4845358.731977315"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 50)",
            "value": 11108054.757575758,
            "unit": "ns",
            "range": "± 1850884.103613587"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 50)",
            "value": 22600935.941860463,
            "unit": "ns",
            "range": "± 8737447.338244518"
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
          "id": "9a3292d8f76abcae40ffa5af6c255f8f6bbaa67b",
          "message": "Merge pull request #197 from Chris-Wolfgang/fix/per-tfm-dep-alignment\n\nFix #192 fallout: per-TFM DI.Abstractions alignment + S2077 pragma",
          "timestamp": "2026-07-04T21:58:54-04:00",
          "tree_id": "c6424795ec6fc01843f342b5e511787f49d76a24",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/9a3292d8f76abcae40ffa5af6c255f8f6bbaa67b"
        },
        "date": 1783216836932,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 1)",
            "value": 630304.7530864198,
            "unit": "ns",
            "range": "± 62709.4984813965"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 1)",
            "value": 1498494.9285714286,
            "unit": "ns",
            "range": "± 16849.77641697948"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 1)",
            "value": 853440.2857142857,
            "unit": "ns",
            "range": "± 13561.16733929626"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 1)",
            "value": 2944168,
            "unit": "ns",
            "range": "± 17262.707025439373"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 1)",
            "value": 718735.4666666667,
            "unit": "ns",
            "range": "± 13144.863797950386"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 1)",
            "value": 1831829.2666666666,
            "unit": "ns",
            "range": "± 15222.744076201365"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 10)",
            "value": 1674365.8666666667,
            "unit": "ns",
            "range": "± 28163.415846161304"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 10)",
            "value": 11812456.43939394,
            "unit": "ns",
            "range": "± 1173270.2482516575"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 10)",
            "value": 3468476.6923076925,
            "unit": "ns",
            "range": "± 22273.20955911165"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 10)",
            "value": 21255059.313131314,
            "unit": "ns",
            "range": "± 4967194.762522731"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 10)",
            "value": 3552030.194117647,
            "unit": "ns",
            "range": "± 191876.36740998863"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 10)",
            "value": 18563667.28125,
            "unit": "ns",
            "range": "± 577203.655716506"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 50)",
            "value": 8570570.663265307,
            "unit": "ns",
            "range": "± 693144.8162999852"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 50)",
            "value": 27397107.26,
            "unit": "ns",
            "range": "± 16150766.645625407"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 50)",
            "value": 18343504.29411765,
            "unit": "ns",
            "range": "± 353637.94050355454"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 50)",
            "value": 23842557.19767442,
            "unit": "ns",
            "range": "± 6643612.456662121"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 50)",
            "value": 13193656.25,
            "unit": "ns",
            "range": "± 93272.17087946534"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 50)",
            "value": 21111668.404761903,
            "unit": "ns",
            "range": "± 4610088.88188013"
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
          "id": "33909407271985f1c736d59946ff625624700cd7",
          "message": "Merge pull request #198 from Chris-Wolfgang/docs/revert-perf-known-issue\n\nRevert perf-regression Known-issue note (confirmed false alarm)",
          "timestamp": "2026-07-05T19:08:24-04:00",
          "tree_id": "f5f698cbcf91b68d2ac0079f219a65eee2687a93",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/33909407271985f1c736d59946ff625624700cd7"
        },
        "date": 1783293012624,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 1)",
            "value": 533003.9090909091,
            "unit": "ns",
            "range": "± 12969.537172448845"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 1)",
            "value": 1752475.925531915,
            "unit": "ns",
            "range": "± 250066.91281509187"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 1)",
            "value": 1192854.141304348,
            "unit": "ns",
            "range": "± 137978.97299589447"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 1)",
            "value": 4099176.4516129033,
            "unit": "ns",
            "range": "± 375241.3534391106"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 1)",
            "value": 909104.7045454546,
            "unit": "ns",
            "range": "± 79517.13475161881"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 1)",
            "value": 2414852.484210526,
            "unit": "ns",
            "range": "± 284032.0079008501"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 10)",
            "value": 1737650.4845360825,
            "unit": "ns",
            "range": "± 253595.05777847685"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 10)",
            "value": 10052831.226804124,
            "unit": "ns",
            "range": "± 1235969.2427120833"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 10)",
            "value": 3119670.4680851065,
            "unit": "ns",
            "range": "± 310853.60972009815"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 10)",
            "value": 17611583.41919192,
            "unit": "ns",
            "range": "± 4567995.907883732"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 10)",
            "value": 1982944.6666666667,
            "unit": "ns",
            "range": "± 34185.19324976545"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 10)",
            "value": 15534676.822033899,
            "unit": "ns",
            "range": "± 683681.9155197894"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 50)",
            "value": 4857749.416666667,
            "unit": "ns",
            "range": "± 43764.61146231016"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 50)",
            "value": 47975899.78947368,
            "unit": "ns",
            "range": "± 1027046.673660646"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 50)",
            "value": 14607746.737373738,
            "unit": "ns",
            "range": "± 1962445.0782598942"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 50)",
            "value": 21647986.70238095,
            "unit": "ns",
            "range": "± 6387777.038047706"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 50)",
            "value": 9968065.68367347,
            "unit": "ns",
            "range": "± 1972461.2565809914"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 50)",
            "value": 26349148.670212764,
            "unit": "ns",
            "range": "± 16240830.39796049"
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
          "id": "b9a9e67fa41b833681230be01da5dba588611c5a",
          "message": "Merge pull request #200 from Chris-Wolfgang/release/v0.2.0\n\nRelease v0.2.0",
          "timestamp": "2026-07-05T20:32:05-04:00",
          "tree_id": "4a9c09c3bfd05f27bff0cc317ea72b8d54f9767a",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/b9a9e67fa41b833681230be01da5dba588611c5a"
        },
        "date": 1783298032416,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 1)",
            "value": 524576.42,
            "unit": "ns",
            "range": "± 13076.555621034157"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 1)",
            "value": 1790389.2777777778,
            "unit": "ns",
            "range": "± 399346.2987623842"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 1)",
            "value": 792879.44,
            "unit": "ns",
            "range": "± 21133.304707025825"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 1)",
            "value": 2625616.785714286,
            "unit": "ns",
            "range": "± 30830.79927399915"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 1)",
            "value": 651227.2857142857,
            "unit": "ns",
            "range": "± 15416.675245145621"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 1)",
            "value": 1556547.1538461538,
            "unit": "ns",
            "range": "± 24671.232933810967"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 10)",
            "value": 1266318.5714285714,
            "unit": "ns",
            "range": "± 16484.56947812471"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 10)",
            "value": 9378336.621621622,
            "unit": "ns",
            "range": "± 468152.24760742346"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 10)",
            "value": 2415493.5,
            "unit": "ns",
            "range": "± 35958.4110905063"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 10)",
            "value": 20234475.62,
            "unit": "ns",
            "range": "± 5445831.521698887"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 10)",
            "value": 1924665.8,
            "unit": "ns",
            "range": "± 33577.663379523176"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 10)",
            "value": 15193407.318181818,
            "unit": "ns",
            "range": "± 2383645.442300658"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 50)",
            "value": 4819968.433333334,
            "unit": "ns",
            "range": "± 35955.692516656956"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 50)",
            "value": 26939450.55,
            "unit": "ns",
            "range": "± 12671518.154081935"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 50)",
            "value": 12949505.724489795,
            "unit": "ns",
            "range": "± 1390751.6861318091"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 50)",
            "value": 19278855.64197531,
            "unit": "ns",
            "range": "± 5511629.777316522"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 50)",
            "value": 9159754.318181818,
            "unit": "ns",
            "range": "± 1726072.2585640717"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 50)",
            "value": 22480451.798850574,
            "unit": "ns",
            "range": "± 11282257.95415568"
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
          "id": "56cab0b4299307368848977e45b74b8b6422b931",
          "message": "Merge pull request #201 from Chris-Wolfgang/dependabot/nuget/dotnet-dependencies-67c7ece419\n\nBump the dotnet-dependencies group with 2 updates",
          "timestamp": "2026-07-09T16:46:56-04:00",
          "tree_id": "6c1d7526dddc20bfd4b41f8462c3c0563819f583",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/56cab0b4299307368848977e45b74b8b6422b931"
        },
        "date": 1783630128322,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 1)",
            "value": 672559,
            "unit": "ns",
            "range": "± 116036.47604935101"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 1)",
            "value": 1773991.6363636365,
            "unit": "ns",
            "range": "± 163507.2761946052"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 1)",
            "value": 864963.6176470588,
            "unit": "ns",
            "range": "± 16639.353153301785"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 1)",
            "value": 2693987.3125,
            "unit": "ns",
            "range": "± 47189.91425113174"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 1)",
            "value": 697917.7368421053,
            "unit": "ns",
            "range": "± 14032.700377024554"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 1)",
            "value": 2203587.365591398,
            "unit": "ns",
            "range": "± 232599.80336535975"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 10)",
            "value": 2017367.618556701,
            "unit": "ns",
            "range": "± 577231.9566773404"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 10)",
            "value": 10120064.459183674,
            "unit": "ns",
            "range": "± 1229850.3574513758"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 10)",
            "value": 3524623.647368421,
            "unit": "ns",
            "range": "± 394731.47005867196"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 10)",
            "value": 16574521.333333334,
            "unit": "ns",
            "range": "± 2975104.656694795"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 10)",
            "value": 2118024.3571428573,
            "unit": "ns",
            "range": "± 35178.49703048974"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 10)",
            "value": 15213862.33,
            "unit": "ns",
            "range": "± 2446967.543778432"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 50)",
            "value": 5116377.923076923,
            "unit": "ns",
            "range": "± 46464.352874832155"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 50)",
            "value": 24834666.94,
            "unit": "ns",
            "range": "± 14135697.997068714"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 50)",
            "value": 14327411.12,
            "unit": "ns",
            "range": "± 1318129.203975761"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 50)",
            "value": 20086369.18292683,
            "unit": "ns",
            "range": "± 4465550.628905092"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 50)",
            "value": 10466462.0625,
            "unit": "ns",
            "range": "± 198315.54400028547"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 50)",
            "value": 19379969.30952381,
            "unit": "ns",
            "range": "± 6637840.399528152"
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
          "id": "83ccaa481a9339ecadb1bcfe4e954c96cb2d53ff",
          "message": "Merge pull request #208 from Chris-Wolfgang/fix/pr-yaml-badge-query\n\ndocs(readme): fix PR build badge query so it renders live status",
          "timestamp": "2026-07-23T11:23:09-04:00",
          "tree_id": "7ca488fb97b9bf563b4054556d778765c4a3f103",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/83ccaa481a9339ecadb1bcfe4e954c96cb2d53ff"
        },
        "date": 1784820294117,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 1)",
            "value": 537210.1875,
            "unit": "ns",
            "range": "± 16189.324958406109"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 1)",
            "value": 1417980.8095238095,
            "unit": "ns",
            "range": "± 32227.431836277385"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 1)",
            "value": 800617.625,
            "unit": "ns",
            "range": "± 14710.039278782819"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 1)",
            "value": 2578855.5,
            "unit": "ns",
            "range": "± 32755.712027417096"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 1)",
            "value": 684264.0789473684,
            "unit": "ns",
            "range": "± 14592.139978296495"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 1)",
            "value": 1973972.858974359,
            "unit": "ns",
            "range": "± 185178.72483249864"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 10)",
            "value": 1353192.7857142857,
            "unit": "ns",
            "range": "± 13654.718634560399"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 10)",
            "value": 10031308.948979592,
            "unit": "ns",
            "range": "± 1083056.5128803765"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 10)",
            "value": 2739364.153846154,
            "unit": "ns",
            "range": "± 27894.898702827828"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 10)",
            "value": 21275754.35714286,
            "unit": "ns",
            "range": "± 350928.06097324216"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 10)",
            "value": 3136812.393939394,
            "unit": "ns",
            "range": "± 876715.2996911525"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 10)",
            "value": 14457705.66,
            "unit": "ns",
            "range": "± 1691327.789255236"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 50)",
            "value": 5018003.357142857,
            "unit": "ns",
            "range": "± 78748.969645623"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 50)",
            "value": 22703476.01,
            "unit": "ns",
            "range": "± 12746626.56005167"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 50)",
            "value": 12781248.54040404,
            "unit": "ns",
            "range": "± 1676555.5197853465"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 50)",
            "value": 63952965.5,
            "unit": "ns",
            "range": "± 1112372.335014796"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 50)",
            "value": 9964536.772727273,
            "unit": "ns",
            "range": "± 2143621.6155337743"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 50)",
            "value": 18214747.214285713,
            "unit": "ns",
            "range": "± 7016688.525744625"
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
          "id": "50872244d3649221ea4252f5287e4b1b225cd671",
          "message": "Merge pull request #206 from Chris-Wolfgang/dependabot/github_actions/github-actions-6978980a09\n\nBump the github-actions group across 1 directory with 8 updates",
          "timestamp": "2026-07-24T11:47:59-04:00",
          "tree_id": "17d9e6eff451e80378a534e7be7b7db9d94fa3fa",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/50872244d3649221ea4252f5287e4b1b225cd671"
        },
        "date": 1784908191220,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 1)",
            "value": 679262.4347826086,
            "unit": "ns",
            "range": "± 70490.61602721881"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 1)",
            "value": 1926170.3333333333,
            "unit": "ns",
            "range": "± 232491.87367220822"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 1)",
            "value": 1062220.6907216494,
            "unit": "ns",
            "range": "± 155807.52352176927"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 1)",
            "value": 2981871.3076923075,
            "unit": "ns",
            "range": "± 44475.22130427349"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 1)",
            "value": 820995.8279569893,
            "unit": "ns",
            "range": "± 71656.23024455992"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 1)",
            "value": 1968245.2,
            "unit": "ns",
            "range": "± 31669.72107144073"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 10)",
            "value": 2174560.4375,
            "unit": "ns",
            "range": "± 334954.72602219926"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 10)",
            "value": 12207272.055555556,
            "unit": "ns",
            "range": "± 1024635.0318188184"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 10)",
            "value": 4584847.741935484,
            "unit": "ns",
            "range": "± 349594.78397735255"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 10)",
            "value": 19537912,
            "unit": "ns",
            "range": "± 5052798.332816893"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 10)",
            "value": 2705223.9285714286,
            "unit": "ns",
            "range": "± 37551.39718483145"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 10)",
            "value": 18195993.951219514,
            "unit": "ns",
            "range": "± 610855.788205324"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 50)",
            "value": 8296146.5,
            "unit": "ns",
            "range": "± 560076.6530440648"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 50)",
            "value": 28726216.19,
            "unit": "ns",
            "range": "± 18440436.48256552"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 50)",
            "value": 15960240.146464646,
            "unit": "ns",
            "range": "± 3715943.980208845"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 50)",
            "value": 23891549.66049383,
            "unit": "ns",
            "range": "± 5739239.332789587"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 50)",
            "value": 11194456.51,
            "unit": "ns",
            "range": "± 2691383.6045519565"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 50)",
            "value": 23058186.843373492,
            "unit": "ns",
            "range": "± 7184383.993191977"
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
          "id": "18c979513ed29cb1e3d19eb4032cb54051ad0de5",
          "message": "Merge pull request #220 from Chris-Wolfgang/release/v0.2.1-protected-config\n\nci: protected-config for v0.2.1 (admin-bypass split)",
          "timestamp": "2026-07-26T20:08:43-04:00",
          "tree_id": "5b19c397786617d87e81676059b65b0e599d271a",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/18c979513ed29cb1e3d19eb4032cb54051ad0de5"
        },
        "date": 1785111039856,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 1)",
            "value": 721914.8617021276,
            "unit": "ns",
            "range": "± 125136.53600018594"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 1)",
            "value": 1545527.3666666667,
            "unit": "ns",
            "range": "± 27921.15729505563"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 1)",
            "value": 860937.125,
            "unit": "ns",
            "range": "± 16167.329121307164"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 1)",
            "value": 2987616.3076923075,
            "unit": "ns",
            "range": "± 48069.12811840987"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 1)",
            "value": 740931.6153846154,
            "unit": "ns",
            "range": "± 12116.911649553153"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 1)",
            "value": 1874094.5333333334,
            "unit": "ns",
            "range": "± 29709.465949103702"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 10)",
            "value": 1666591.5384615385,
            "unit": "ns",
            "range": "± 12162.519904851028"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 10)",
            "value": 11617883.747368421,
            "unit": "ns",
            "range": "± 1299319.1000142454"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 10)",
            "value": 3577041.346153846,
            "unit": "ns",
            "range": "± 44812.6934265396"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 10)",
            "value": 19269799.15,
            "unit": "ns",
            "range": "± 5449662.236706208"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 10)",
            "value": 2752213.923076923,
            "unit": "ns",
            "range": "± 30602.952704658903"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 10)",
            "value": 16074777.055555556,
            "unit": "ns",
            "range": "± 1884699.5571127627"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 50)",
            "value": 8333990.9421052635,
            "unit": "ns",
            "range": "± 595763.6831613817"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 50)",
            "value": 26720706.232323233,
            "unit": "ns",
            "range": "± 15147390.764596915"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 50)",
            "value": 15727830.065656565,
            "unit": "ns",
            "range": "± 3052745.08687754"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 50)",
            "value": 22314801.390243903,
            "unit": "ns",
            "range": "± 2795061.915437356"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 50)",
            "value": 10851829.64,
            "unit": "ns",
            "range": "± 2962436.7447853885"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 50)",
            "value": 23707925,
            "unit": "ns",
            "range": "± 9351534.46500236"
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
          "id": "22de1759323f32c8e935846e17588ca647c220a1",
          "message": "Merge pull request #219 from Chris-Wolfgang/vNext\n\nRelease v0.2.1 — supply-chain hardening + maintenance",
          "timestamp": "2026-07-27T12:20:48-04:00",
          "tree_id": "de05ba0c55e7e6da3e65b0e62eb5a85e030ad981",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/22de1759323f32c8e935846e17588ca647c220a1"
        },
        "date": 1785169361782,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 1)",
            "value": 554478.5333333333,
            "unit": "ns",
            "range": "± 16520.817608834248"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 1)",
            "value": 1533145.5,
            "unit": "ns",
            "range": "± 32390.88043997061"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 1)",
            "value": 857266.1764705882,
            "unit": "ns",
            "range": "± 17209.727341082766"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 1)",
            "value": 3736896.694736842,
            "unit": "ns",
            "range": "± 314506.4419615948"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 1)",
            "value": 802886.2333333333,
            "unit": "ns",
            "range": "± 54354.99382142331"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 1)",
            "value": 1810237.2,
            "unit": "ns",
            "range": "± 28205.015106739946"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 10)",
            "value": 1651806.5666666667,
            "unit": "ns",
            "range": "± 12694.685999980276"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 10)",
            "value": 10331490.46875,
            "unit": "ns",
            "range": "± 750767.5619863266"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 10)",
            "value": 3480715.1,
            "unit": "ns",
            "range": "± 29043.721506918297"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 10)",
            "value": 18865185.666666668,
            "unit": "ns",
            "range": "± 2826744.773328426"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 10)",
            "value": 2682490.0714285714,
            "unit": "ns",
            "range": "± 22027.982426081067"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 10)",
            "value": 16498555.04,
            "unit": "ns",
            "range": "± 2137948.9165405678"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 50)",
            "value": 6736478.833333333,
            "unit": "ns",
            "range": "± 52450.23727276833"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 50)",
            "value": 25855668.26,
            "unit": "ns",
            "range": "± 14928439.616649454"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 50)",
            "value": 17238571.66,
            "unit": "ns",
            "range": "± 2323360.4621205954"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 50)",
            "value": 21913680.833333332,
            "unit": "ns",
            "range": "± 3429801.270863188"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 50)",
            "value": 11537427.13,
            "unit": "ns",
            "range": "± 3019452.300763336"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 50)",
            "value": 21835421.5,
            "unit": "ns",
            "range": "± 7221212.12637835"
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
          "id": "5722e98e0f26cd70cfd22cb0964cd4cbd828f982",
          "message": "Merge pull request #223 from Chris-Wolfgang/chore/packagevalidation-baseline-0.2.1\n\nchore: advance PackageValidation baseline to 0.2.1",
          "timestamp": "2026-07-27T18:08:15-04:00",
          "tree_id": "d6a46bbcfea719dbee9389b4b96cd09dff2221fe",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/5722e98e0f26cd70cfd22cb0964cd4cbd828f982"
        },
        "date": 1785190210436,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 1)",
            "value": 569699.8478260869,
            "unit": "ns",
            "range": "± 13094.065347632233"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 1)",
            "value": 1901778.3953488371,
            "unit": "ns",
            "range": "± 267262.30702259875"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 1)",
            "value": 859715.4166666666,
            "unit": "ns",
            "range": "± 12726.549410642114"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 1)",
            "value": 3832365.2688172045,
            "unit": "ns",
            "range": "± 413710.58902705373"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 1)",
            "value": 806416.3139534884,
            "unit": "ns",
            "range": "± 46256.78815158131"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 1)",
            "value": 1920441.0714285714,
            "unit": "ns",
            "range": "± 29518.783114027025"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 10)",
            "value": 1707253.6666666667,
            "unit": "ns",
            "range": "± 13818.950755021055"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 10)",
            "value": 10995555.103092784,
            "unit": "ns",
            "range": "± 660717.8944362884"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 10)",
            "value": 3522098.625,
            "unit": "ns",
            "range": "± 77959.9939845473"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 10)",
            "value": 20402129.55,
            "unit": "ns",
            "range": "± 4975704.39301188"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 10)",
            "value": 2734585.785714286,
            "unit": "ns",
            "range": "± 38017.05541631904"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 10)",
            "value": 17584746.56,
            "unit": "ns",
            "range": "± 3560671.851284992"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 50)",
            "value": 8079576.041666667,
            "unit": "ns",
            "range": "± 482996.0090629477"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 50)",
            "value": 26828645.77,
            "unit": "ns",
            "range": "± 15871030.542050147"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 50)",
            "value": 16259877.37628866,
            "unit": "ns",
            "range": "± 2172800.8565453086"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 50)",
            "value": 21719389.125,
            "unit": "ns",
            "range": "± 2678493.6145812827"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 50)",
            "value": 13377381.933333334,
            "unit": "ns",
            "range": "± 388094.3155182534"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 50)",
            "value": 20811155.597560976,
            "unit": "ns",
            "range": "± 5637492.951195127"
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
          "id": "fed12d722f5e2a1da87f654bd1cb6d8c15c9b9a4",
          "message": "Merge pull request #225 from Chris-Wolfgang/dependabot/github_actions/github-actions-2eda05a9c0\n\nchore(deps): bump the github-actions group with 6 updates",
          "timestamp": "2026-08-09T13:27:38-04:00",
          "tree_id": "83201d306f9bbc7e4bac1d44d0340e8abe14a64e",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/fed12d722f5e2a1da87f654bd1cb6d8c15c9b9a4"
        },
        "date": 1786296565610,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 1)",
            "value": 601340.5333333333,
            "unit": "ns",
            "range": "± 51571.42451106039"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 1)",
            "value": 1663231.5051546392,
            "unit": "ns",
            "range": "± 191048.664118766"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 1)",
            "value": 784421.8125,
            "unit": "ns",
            "range": "± 15215.976304392478"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 1)",
            "value": 2588218.8846153845,
            "unit": "ns",
            "range": "± 26688.981810660058"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 1)",
            "value": 768559.0879120879,
            "unit": "ns",
            "range": "± 72808.89875842382"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 1)",
            "value": 1556664.7857142857,
            "unit": "ns",
            "range": "± 19430.31884681801"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 10)",
            "value": 1300238.0714285714,
            "unit": "ns",
            "range": "± 20024.387114271383"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 10)",
            "value": 10056155.76,
            "unit": "ns",
            "range": "± 1073056.5277516737"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 10)",
            "value": 2444185.846153846,
            "unit": "ns",
            "range": "± 25169.916093245633"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 10)",
            "value": 16014121.545454545,
            "unit": "ns",
            "range": "± 2716595.273669928"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 10)",
            "value": 1872703.8846153845,
            "unit": "ns",
            "range": "± 20823.300685123795"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 10)",
            "value": 14533128.909090908,
            "unit": "ns",
            "range": "± 2766242.2625930365"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 50)",
            "value": 4961661.6,
            "unit": "ns",
            "range": "± 58123.23758901057"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 50)",
            "value": 24296453.78,
            "unit": "ns",
            "range": "± 13963042.502903417"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 50)",
            "value": 12927671.040816326,
            "unit": "ns",
            "range": "± 1399572.499563186"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 50)",
            "value": 17967133.55,
            "unit": "ns",
            "range": "± 3017104.2564737364"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 50)",
            "value": 9782873.09,
            "unit": "ns",
            "range": "± 1882302.6094250318"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 50)",
            "value": 17362193.096385542,
            "unit": "ns",
            "range": "± 4640352.667591545"
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
          "id": "b1187ac53e1b9efd56a50c7cf03cf70bb030dc25",
          "message": "Merge pull request #228 from Chris-Wolfgang/dependabot/nuget/benchmarks/Wolfgang.AuditTrail.EntityFrameworkCore.Benchmarks/dotnet-dependencies-4618016212\n\nBump the dotnet-dependencies group with 4 updates",
          "timestamp": "2026-08-09T15:50:22-04:00",
          "tree_id": "a6a231f16746a48f5f299c3e1dd260f64790538a",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/b1187ac53e1b9efd56a50c7cf03cf70bb030dc25"
        },
        "date": 1786305130519,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 1)",
            "value": 784668.8131313132,
            "unit": "ns",
            "range": "± 187006.77259964583"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 1)",
            "value": 1368436.625,
            "unit": "ns",
            "range": "± 25324.41314061723"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 1)",
            "value": 780844.4,
            "unit": "ns",
            "range": "± 17469.201883977355"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 1)",
            "value": 3417063.290322581,
            "unit": "ns",
            "range": "± 460710.1502100855"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 1)",
            "value": 761362.1648351648,
            "unit": "ns",
            "range": "± 64461.352509384975"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 1)",
            "value": 2109029.755319149,
            "unit": "ns",
            "range": "± 198767.75400287664"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 10)",
            "value": 1387763.0625,
            "unit": "ns",
            "range": "± 25641.96849949642"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 10)",
            "value": 9132832.852631578,
            "unit": "ns",
            "range": "± 781388.121602599"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 10)",
            "value": 2715675.9615384615,
            "unit": "ns",
            "range": "± 27412.393312196655"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 10)",
            "value": 19609282.32,
            "unit": "ns",
            "range": "± 4812097.983521042"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 10)",
            "value": 2081648.642857143,
            "unit": "ns",
            "range": "± 21812.05198475637"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 10)",
            "value": 14340015.976744186,
            "unit": "ns",
            "range": "± 528993.7122008381"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 50)",
            "value": 7019063.520408163,
            "unit": "ns",
            "range": "± 715809.744046879"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 50)",
            "value": 24371550.67,
            "unit": "ns",
            "range": "± 12950896.107780594"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 50)",
            "value": 13083359.540816326,
            "unit": "ns",
            "range": "± 1341378.0196102222"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 50)",
            "value": 19431145.85443038,
            "unit": "ns",
            "range": "± 5248785.3458821215"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 50)",
            "value": 11106412.814814815,
            "unit": "ns",
            "range": "± 309578.5395082801"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 50)",
            "value": 18468167.14814815,
            "unit": "ns",
            "range": "± 6488861.427734814"
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
          "id": "7095a68b6742685dc449d07bef81f4c15e9cc3ed",
          "message": "Merge pull request #229 from Chris-Wolfgang/dependabot/github_actions/github-actions-7ce2c5b83e\n\nchore(deps): bump the github-actions group with 5 updates",
          "timestamp": "2026-08-12T11:06:36-04:00",
          "tree_id": "bc38e88d71fb0a56fe6650089ce1c509fa8797e8",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/7095a68b6742685dc449d07bef81f4c15e9cc3ed"
        },
        "date": 1786547311736,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 1)",
            "value": 649729.6818181818,
            "unit": "ns",
            "range": "± 61585.13969948955"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 1)",
            "value": 1935051.8406593406,
            "unit": "ns",
            "range": "± 198644.1655210654"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 1)",
            "value": 867043.5142857142,
            "unit": "ns",
            "range": "± 28390.586443574637"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 1)",
            "value": 3111288.789473684,
            "unit": "ns",
            "range": "± 68214.24818546907"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 1)",
            "value": 752933.7692307692,
            "unit": "ns",
            "range": "± 11690.366490932083"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 1)",
            "value": 2347815.5,
            "unit": "ns",
            "range": "± 188083.16525312522"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 10)",
            "value": 1675206.5,
            "unit": "ns",
            "range": "± 30119.392144312227"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 10)",
            "value": 10983526.0625,
            "unit": "ns",
            "range": "± 752951.525440554"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 10)",
            "value": 3534931.1875,
            "unit": "ns",
            "range": "± 64990.64598665334"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 10)",
            "value": 18984624.954545453,
            "unit": "ns",
            "range": "± 5139969.1045264425"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 10)",
            "value": 2775473.8,
            "unit": "ns",
            "range": "± 37957.78013266846"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 10)",
            "value": 16181221.772727273,
            "unit": "ns",
            "range": "± 2506430.3087014207"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 50)",
            "value": 6983645.961538462,
            "unit": "ns",
            "range": "± 62010.51525025867"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 50)",
            "value": 47103338.04545455,
            "unit": "ns",
            "range": "± 1142602.6682700156"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 50)",
            "value": 18258985.166666668,
            "unit": "ns",
            "range": "± 365227.7357271117"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 50)",
            "value": 27340721.413793102,
            "unit": "ns",
            "range": "± 11780054.685916558"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 50)",
            "value": 13728577.388888888,
            "unit": "ns",
            "range": "± 453595.2354033764"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 50)",
            "value": 24499733.11904762,
            "unit": "ns",
            "range": "± 8972406.221128428"
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
          "id": "b6c8cb43bcd46d90bc919356baffcc5c0f4d2bc6",
          "message": "Merge pull request #230 from Chris-Wolfgang/dependabot/nuget/dotnet-dependencies-6f2d80a3ad\n\nBump the dotnet-dependencies group with 3 updates",
          "timestamp": "2026-08-12T12:30:33-04:00",
          "tree_id": "d2bacad8577e29ea43c0a1f2b651d4720bbba87a",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/b6c8cb43bcd46d90bc919356baffcc5c0f4d2bc6"
        },
        "date": 1786552338897,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 1)",
            "value": 560715.1666666666,
            "unit": "ns",
            "range": "± 14014.140674353877"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 1)",
            "value": 1508603.5,
            "unit": "ns",
            "range": "± 25756.90984735194"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 1)",
            "value": 844253.2857142857,
            "unit": "ns",
            "range": "± 11513.154512780797"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 1)",
            "value": 2927001,
            "unit": "ns",
            "range": "± 19599.467071836418"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 1)",
            "value": 724382.8181818182,
            "unit": "ns",
            "range": "± 17319.63232766123"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 1)",
            "value": 1794152.857142857,
            "unit": "ns",
            "range": "± 15083.822870913691"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 10)",
            "value": 1651523.0666666667,
            "unit": "ns",
            "range": "± 23792.52067192145"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 10)",
            "value": 10896558.43298969,
            "unit": "ns",
            "range": "± 699293.4427027772"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 10)",
            "value": 3434440.1666666665,
            "unit": "ns",
            "range": "± 33175.00866329237"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 10)",
            "value": 19066075.686868686,
            "unit": "ns",
            "range": "± 5716711.955202709"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 10)",
            "value": 2667019.7333333334,
            "unit": "ns",
            "range": "± 26505.831621056706"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 10)",
            "value": 17664008.04,
            "unit": "ns",
            "range": "± 3519365.2788483487"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 50)",
            "value": 6697682.142857143,
            "unit": "ns",
            "range": "± 53422.92956696108"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 50)",
            "value": 28465325.64,
            "unit": "ns",
            "range": "± 15573653.381240036"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 50)",
            "value": 17914882.6875,
            "unit": "ns",
            "range": "± 313811.09490067826"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 50)",
            "value": 22837728.243902437,
            "unit": "ns",
            "range": "± 5146832.170852744"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 50)",
            "value": 13005001,
            "unit": "ns",
            "range": "± 168027.92739761583"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 50)",
            "value": 21946983.126506023,
            "unit": "ns",
            "range": "± 6284237.173986158"
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
          "id": "9e7a9ccb757cc03729ae9d3a496eabbc7f401339",
          "message": "Merge pull request #234 from Chris-Wolfgang/dependabot/nuget/benchmarks/Wolfgang.AuditTrail.EntityFrameworkCore.Benchmarks/dotnet-dependencies-7232e83b89\n\nBump the dotnet-dependencies group with 11 updates",
          "timestamp": "2026-08-20T19:32:56-04:00",
          "tree_id": "5ffe74009cae409a85a9e80ac0396a884477d060",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/9e7a9ccb757cc03729ae9d3a496eabbc7f401339"
        },
        "date": 1787268888935,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 1)",
            "value": 677922.0568181818,
            "unit": "ns",
            "range": "± 68273.08405563646"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 1)",
            "value": 1810693.831460674,
            "unit": "ns",
            "range": "± 176022.64527645014"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 1)",
            "value": 1003006.2078651686,
            "unit": "ns",
            "range": "± 93472.44058656615"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 1)",
            "value": 3004379.8333333335,
            "unit": "ns",
            "range": "± 38390.81393400186"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 1)",
            "value": 742830.0333333333,
            "unit": "ns",
            "range": "± 13743.896712289976"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 1)",
            "value": 1887070.875,
            "unit": "ns",
            "range": "± 35263.287778037185"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 10)",
            "value": 1694894.0714285714,
            "unit": "ns",
            "range": "± 19432.578871829905"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 10)",
            "value": 10989426.042105263,
            "unit": "ns",
            "range": "± 691584.5699218096"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 10)",
            "value": 3474045.933333333,
            "unit": "ns",
            "range": "± 30893.812580854315"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 10)",
            "value": 19747144.085858587,
            "unit": "ns",
            "range": "± 5481295.587136346"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 10)",
            "value": 2704788,
            "unit": "ns",
            "range": "± 20163.82495543277"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 10)",
            "value": 16164481.33,
            "unit": "ns",
            "range": "± 3683453.0870820056"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 50)",
            "value": 6934734.033333333,
            "unit": "ns",
            "range": "± 69189.5522737219"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 50)",
            "value": 26338266.94,
            "unit": "ns",
            "range": "± 16772996.811147423"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 50)",
            "value": 16501213.742424242,
            "unit": "ns",
            "range": "± 2886716.708343037"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 50)",
            "value": 22988464.56097561,
            "unit": "ns",
            "range": "± 4020311.8756674"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 50)",
            "value": 10961504.343434343,
            "unit": "ns",
            "range": "± 2723090.5585938008"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 50)",
            "value": 19757046.685185187,
            "unit": "ns",
            "range": "± 3398946.3946513897"
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
          "id": "f18771cb32e2357f0f5ea1681cd8fa1c07de30ff",
          "message": "Merge pull request #233 from Chris-Wolfgang/dependabot/github_actions/github-actions-98c2f4e11e\n\nchore(deps): bump the github-actions group with 4 updates",
          "timestamp": "2026-08-20T22:43:39-04:00",
          "tree_id": "00ebc7086e5989739c880e9c257c1a9272a2adbb",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/f18771cb32e2357f0f5ea1681cd8fa1c07de30ff"
        },
        "date": 1787280311699,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 1)",
            "value": 402663.5,
            "unit": "ns",
            "range": "± 5222.501135986915"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 1)",
            "value": 1025009.8,
            "unit": "ns",
            "range": "± 13060.2791547501"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 1)",
            "value": 623287.7631578947,
            "unit": "ns",
            "range": "± 13773.458618509349"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 1)",
            "value": 1996173,
            "unit": "ns",
            "range": "± 24570.263925823332"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 1)",
            "value": 510411.79411764705,
            "unit": "ns",
            "range": "± 10320.596765477676"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 1)",
            "value": 1202233.8666666667,
            "unit": "ns",
            "range": "± 19329.715033250402"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 10)",
            "value": 957223.3571428572,
            "unit": "ns",
            "range": "± 7645.966957082093"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 10)",
            "value": 7054662.601010101,
            "unit": "ns",
            "range": "± 1145860.7938449546"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 10)",
            "value": 1831093.7857142857,
            "unit": "ns",
            "range": "± 11929.887040399977"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 10)",
            "value": 15515049.257575758,
            "unit": "ns",
            "range": "± 3235690.6250480935"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 10)",
            "value": 1474779.3333333333,
            "unit": "ns",
            "range": "± 11176.369750930926"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 10)",
            "value": 10489431.464646464,
            "unit": "ns",
            "range": "± 1128042.4671789669"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 50)",
            "value": 3625116.066666667,
            "unit": "ns",
            "range": "± 26470.103954317616"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 50)",
            "value": 31318038.57894737,
            "unit": "ns",
            "range": "± 1064083.4176284387"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 50)",
            "value": 9784008.09375,
            "unit": "ns",
            "range": "± 939927.2216793251"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 50)",
            "value": 23581496.71,
            "unit": "ns",
            "range": "± 16105735.576058783"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 50)",
            "value": 5367584.769230769,
            "unit": "ns",
            "range": "± 41936.99093909386"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 50)",
            "value": 21508501.57,
            "unit": "ns",
            "range": "± 14247451.640966123"
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
          "id": "6e53d8966a92d272d9e55ef98814c242f8cbe5a8",
          "message": "Merge pull request #224 from Chris-Wolfgang/ci/sourcelink-stepinto\n\nci: SourceLink step-into verification (netcoredbg F11) — Closes #54",
          "timestamp": "2026-08-22T09:37:32-04:00",
          "tree_id": "91f7e5808c7e44179cea6e8c15b2196b253c5399",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/6e53d8966a92d272d9e55ef98814c242f8cbe5a8"
        },
        "date": 1787405959030,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 1)",
            "value": 705660.3350515463,
            "unit": "ns",
            "range": "± 115782.549749401"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 1)",
            "value": 2276391.1414141413,
            "unit": "ns",
            "range": "± 705624.5677711519"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 1)",
            "value": 1081665.4831460675,
            "unit": "ns",
            "range": "± 129485.11125126529"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 1)",
            "value": 3776777.4479166665,
            "unit": "ns",
            "range": "± 430552.9655259219"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 1)",
            "value": 868598.7640449438,
            "unit": "ns",
            "range": "± 64468.86751388796"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 1)",
            "value": 1935343.9285714286,
            "unit": "ns",
            "range": "± 24924.165035669193"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 10)",
            "value": 1740410.2222222222,
            "unit": "ns",
            "range": "± 36613.84892689965"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 10)",
            "value": 11505894.01098901,
            "unit": "ns",
            "range": "± 695467.5206570755"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 10)",
            "value": 3658938.076923077,
            "unit": "ns",
            "range": "± 39926.60119824364"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 10)",
            "value": 21290236.21,
            "unit": "ns",
            "range": "± 6240702.530215255"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 10)",
            "value": 2840661.1,
            "unit": "ns",
            "range": "± 51272.711497024844"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 10)",
            "value": 16956746.39,
            "unit": "ns",
            "range": "± 3508081.0239866283"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 50)",
            "value": 7130558.384615385,
            "unit": "ns",
            "range": "± 87881.69761914636"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 50)",
            "value": 46374492.2,
            "unit": "ns",
            "range": "± 1033497.9844384186"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 50)",
            "value": 16576304.736842105,
            "unit": "ns",
            "range": "± 2739675.6990997507"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 50)",
            "value": 22722111.549382716,
            "unit": "ns",
            "range": "± 3933012.0630948194"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 50)",
            "value": 13392711.083333334,
            "unit": "ns",
            "range": "± 438590.25428351527"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 50)",
            "value": 21335791.5625,
            "unit": "ns",
            "range": "± 5803096.825229583"
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
          "id": "044e620bc7ea25f4b61519dbb52c87ea123ed3ff",
          "message": "Merge pull request #237 from Chris-Wolfgang/chore/close-code-scanning-231-workflows\n\nchore: workflow security tightening (protected-file split of #235)",
          "timestamp": "2026-08-22T16:43:41-04:00",
          "tree_id": "b7e5dc91a264d84fba0727c69fef03931765006a",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/044e620bc7ea25f4b61519dbb52c87ea123ed3ff"
        },
        "date": 1787431528608,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 1)",
            "value": 662159.4175824176,
            "unit": "ns",
            "range": "± 70312.53295585453"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 1)",
            "value": 1589652.6956521738,
            "unit": "ns",
            "range": "± 165005.89785617954"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 1)",
            "value": 1022545.9896907216,
            "unit": "ns",
            "range": "± 275875.6211650421"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 1)",
            "value": 2326204.933333333,
            "unit": "ns",
            "range": "± 37352.606582342254"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 1)",
            "value": 796894.5898876404,
            "unit": "ns",
            "range": "± 54086.684272824416"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 1)",
            "value": 1720480.1153846155,
            "unit": "ns",
            "range": "± 165570.81284319994"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 10)",
            "value": 1097680.5789473683,
            "unit": "ns",
            "range": "± 24166.988414676078"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 10)",
            "value": 7542443.788659794,
            "unit": "ns",
            "range": "± 1418036.6280100245"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 10)",
            "value": 2660176.9725274723,
            "unit": "ns",
            "range": "± 392133.44450934447"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 10)",
            "value": 15515617.37,
            "unit": "ns",
            "range": "± 4304604.888334468"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 10)",
            "value": 1615035.0714285714,
            "unit": "ns",
            "range": "± 25636.20441264294"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 10)",
            "value": 11424198.545454545,
            "unit": "ns",
            "range": "± 1742625.8508634774"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 50)",
            "value": 5198749.556701031,
            "unit": "ns",
            "range": "± 852659.2383651984"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 50)",
            "value": 20663652.14,
            "unit": "ns",
            "range": "± 10331543.433389876"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 50)",
            "value": 7167966.666666667,
            "unit": "ns",
            "range": "± 110550.11518955666"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 50)",
            "value": 20286988.143678162,
            "unit": "ns",
            "range": "± 9921172.189256988"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 50)",
            "value": 8579792.318181818,
            "unit": "ns",
            "range": "± 1315958.947762052"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 50)",
            "value": 25377161.439393938,
            "unit": "ns",
            "range": "± 15831947.849853458"
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
          "id": "3abc939b69a16f87179379535b479d2b2b931dc8",
          "message": "Merge pull request #235 from Chris-Wolfgang/chore/close-code-scanning-231\n\nchore: cut code-scanning alerts on main (#231)",
          "timestamp": "2026-08-22T19:17:07-04:00",
          "tree_id": "36a60cb97b7bc9ca3f42eca2fbbfaea6be341cb8",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/3abc939b69a16f87179379535b479d2b2b931dc8"
        },
        "date": 1787440734484,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 1)",
            "value": 614414.3214285715,
            "unit": "ns",
            "range": "± 42322.27924806108"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 1)",
            "value": 1840093.0337078653,
            "unit": "ns",
            "range": "± 167289.327257344"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 1)",
            "value": 1016770.2912087912,
            "unit": "ns",
            "range": "± 95945.21630047435"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 1)",
            "value": 3812361.7444444443,
            "unit": "ns",
            "range": "± 384699.72836317896"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 1)",
            "value": 708786.1,
            "unit": "ns",
            "range": "± 16021.95237922349"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 1)",
            "value": 1824471.5714285714,
            "unit": "ns",
            "range": "± 23926.122684740934"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 10)",
            "value": 1657432.95,
            "unit": "ns",
            "range": "± 36888.58870690016"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 10)",
            "value": 10891473.959183674,
            "unit": "ns",
            "range": "± 869954.9156808272"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 10)",
            "value": 4733754.395833333,
            "unit": "ns",
            "range": "± 430405.6953400931"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 10)",
            "value": 25756708.684210528,
            "unit": "ns",
            "range": "± 551165.6577252183"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 10)",
            "value": 2782861.3125,
            "unit": "ns",
            "range": "± 53001.965887714956"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 10)",
            "value": 16496515.322916666,
            "unit": "ns",
            "range": "± 2195532.4700886332"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 50)",
            "value": 7931895.5,
            "unit": "ns",
            "range": "± 434915.9118888029"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 50)",
            "value": 25865458.67171717,
            "unit": "ns",
            "range": "± 16458853.125480127"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 50)",
            "value": 17316740.974747475,
            "unit": "ns",
            "range": "± 3427305.909333527"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 50)",
            "value": 26049804.005882353,
            "unit": "ns",
            "range": "± 8747303.210454257"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 50)",
            "value": 11814404.04,
            "unit": "ns",
            "range": "± 3062230.648451025"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 50)",
            "value": 23009068.396551725,
            "unit": "ns",
            "range": "± 7838557.800386641"
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
          "id": "f2d463887d8d6d06a7707e7f93952895214643c7",
          "message": "Merge pull request #238 from Chris-Wolfgang/chore/scorecard-suppress-nuget-pin\n\nci: filter nugetCommand pin findings out of the Scorecard SARIF",
          "timestamp": "2026-08-23T16:45:52-04:00",
          "tree_id": "c224d089d6ab6dca9245e54f5fa5993ce26517c1",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/f2d463887d8d6d06a7707e7f93952895214643c7"
        },
        "date": 1787518065999,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 1)",
            "value": 617785.3,
            "unit": "ns",
            "range": "± 15917.501403067841"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 1)",
            "value": 1946540.5625,
            "unit": "ns",
            "range": "± 243609.08122472352"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 1)",
            "value": 1021127.0224719101,
            "unit": "ns",
            "range": "± 118095.18259995908"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 1)",
            "value": 3732364.704819277,
            "unit": "ns",
            "range": "± 311560.29778553883"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 1)",
            "value": 815086.3370786516,
            "unit": "ns",
            "range": "± 49194.122573910245"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 1)",
            "value": 1880187.2692307692,
            "unit": "ns",
            "range": "± 18695.12199369061"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 10)",
            "value": 1677700.25,
            "unit": "ns",
            "range": "± 32274.96348255099"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 10)",
            "value": 9464750.166666666,
            "unit": "ns",
            "range": "± 96271.39860201409"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 10)",
            "value": 3507179,
            "unit": "ns",
            "range": "± 41644.75328983747"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 10)",
            "value": 23735239.98214286,
            "unit": "ns",
            "range": "± 987966.7287764114"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 10)",
            "value": 2752517.5,
            "unit": "ns",
            "range": "± 34538.76991282273"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 10)",
            "value": 16776023.51,
            "unit": "ns",
            "range": "± 1849835.7620983084"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 50)",
            "value": 8804613.530927835,
            "unit": "ns",
            "range": "± 721643.889709568"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 50)",
            "value": 26928756.78,
            "unit": "ns",
            "range": "± 15819807.542195894"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 50)",
            "value": 15497470.944444444,
            "unit": "ns",
            "range": "± 3051483.0641325368"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 50)",
            "value": 21504433.392405063,
            "unit": "ns",
            "range": "± 2533251.3662341963"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 50)",
            "value": 11549793.27,
            "unit": "ns",
            "range": "± 3098421.754275915"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 50)",
            "value": 27130341.994623657,
            "unit": "ns",
            "range": "± 14734853.574926428"
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
          "id": "9f729a8a3f6c1baf40c1d67866c5ab22b7cb8665",
          "message": "Merge pull request #239 from Chris-Wolfgang/ci/workflow-security-watch-dependabot-config\n\nci: audit dependabot.yml and zizmor.yml on change, not just weekly",
          "timestamp": "2026-08-23T16:56:03-04:00",
          "tree_id": "ae26857ae78fc3a61e2c2216150fb98f9f3dc525",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/9f729a8a3f6c1baf40c1d67866c5ab22b7cb8665"
        },
        "date": 1787518670571,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 1)",
            "value": 544631.6,
            "unit": "ns",
            "range": "± 12329.897892606625"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 1)",
            "value": 1512214.4285714286,
            "unit": "ns",
            "range": "± 13979.280468521347"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 1)",
            "value": 855177.5714285715,
            "unit": "ns",
            "range": "± 20190.098133915617"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 1)",
            "value": 2958908.8666666667,
            "unit": "ns",
            "range": "± 33279.57673551811"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 1)",
            "value": 751024.9,
            "unit": "ns",
            "range": "± 21885.37748699519"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 1)",
            "value": 1852207.0714285714,
            "unit": "ns",
            "range": "± 20861.333483870938"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 10)",
            "value": 1675737.9285714286,
            "unit": "ns",
            "range": "± 17805.827234209184"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 10)",
            "value": 11767757.976190476,
            "unit": "ns",
            "range": "± 1015366.5988263808"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 10)",
            "value": 3496526.214285714,
            "unit": "ns",
            "range": "± 18824.331903268056"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 10)",
            "value": 19221670.37,
            "unit": "ns",
            "range": "± 5792887.116367353"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 10)",
            "value": 2688552.8666666667,
            "unit": "ns",
            "range": "± 18719.980368070697"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 10)",
            "value": 17385535.32222222,
            "unit": "ns",
            "range": "± 656455.160968789"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 50)",
            "value": 6775137.583333333,
            "unit": "ns",
            "range": "± 32259.193323787797"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 50)",
            "value": 26885355.56,
            "unit": "ns",
            "range": "± 14702018.764697567"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 50)",
            "value": 18611139.1875,
            "unit": "ns",
            "range": "± 341927.6244235942"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 50)",
            "value": 22672913.012658227,
            "unit": "ns",
            "range": "± 3676394.8308451455"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 50)",
            "value": 11792194.28,
            "unit": "ns",
            "range": "± 2975807.8830677024"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 50)",
            "value": 21514140.05952381,
            "unit": "ns",
            "range": "± 4659965.8447627155"
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
          "id": "fc6f42320db55767e32076cd8d68355ef44cc1e1",
          "message": "Merge pull request #261 from Chris-Wolfgang/protected/release-0.3.0-workflows\n\nci: workflow updates ahead of release v0.3.0 — protected-only PR",
          "timestamp": "2026-08-25T20:37:42-04:00",
          "tree_id": "4a3facc33baade132e40515e5cb93cf29ed9d7e1",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/fc6f42320db55767e32076cd8d68355ef44cc1e1"
        },
        "date": 1787704770954,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 1)",
            "value": 557581.1785714285,
            "unit": "ns",
            "range": "± 15880.698755625684"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 1)",
            "value": 1542177.1538461538,
            "unit": "ns",
            "range": "± 16650.075439499535"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 1)",
            "value": 857272.6111111111,
            "unit": "ns",
            "range": "± 17767.976398860326"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 1)",
            "value": 3028008.653846154,
            "unit": "ns",
            "range": "± 29362.005550955793"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 1)",
            "value": 737097.1086956522,
            "unit": "ns",
            "range": "± 18618.387142673408"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 1)",
            "value": 1837442.6666666667,
            "unit": "ns",
            "range": "± 26715.045481811147"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 10)",
            "value": 1699039.857142857,
            "unit": "ns",
            "range": "± 14358.999722003045"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 10)",
            "value": 12234317.168421052,
            "unit": "ns",
            "range": "± 755458.3285118428"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 10)",
            "value": 3481571.2666666666,
            "unit": "ns",
            "range": "± 34300.34936195812"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 10)",
            "value": 20036597.41,
            "unit": "ns",
            "range": "± 5909072.961013813"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 10)",
            "value": 2714963.5,
            "unit": "ns",
            "range": "± 32584.02519222069"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 10)",
            "value": 15417205.55,
            "unit": "ns",
            "range": "± 2828151.32932328"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 50)",
            "value": 8635487.303030303,
            "unit": "ns",
            "range": "± 726018.9539349261"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 50)",
            "value": 27249920.38,
            "unit": "ns",
            "range": "± 16191951.619203927"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 50)",
            "value": 18410411.75,
            "unit": "ns",
            "range": "± 138817.8766337882"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 50)",
            "value": 24296802.035714287,
            "unit": "ns",
            "range": "± 8298531.492263374"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 50)",
            "value": 13665546.82051282,
            "unit": "ns",
            "range": "± 473353.6151411582"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 50)",
            "value": 21356024.69879518,
            "unit": "ns",
            "range": "± 4786343.079937414"
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
          "id": "24b0df2c86061b676c846ae57701fb8f2670923b",
          "message": "Merge pull request #260 from Chris-Wolfgang/vNext\n\nRelease v0.3.0 — bulk-insert abstraction + full code-review pass",
          "timestamp": "2026-08-26T09:25:19-04:00",
          "tree_id": "a51fe0dd85d11c74d0df18a3f54835cc81890b3b",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/24b0df2c86061b676c846ae57701fb8f2670923b"
        },
        "date": 1787750809663,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 1)",
            "value": 626048.967032967,
            "unit": "ns",
            "range": "± 64791.30271991255"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 1)",
            "value": 1433469.8294117646,
            "unit": "ns",
            "range": "± 160228.83037797836"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 1)",
            "value": 814328.3586956522,
            "unit": "ns",
            "range": "± 80581.09867317158"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 1)",
            "value": 2110480.966666667,
            "unit": "ns",
            "range": "± 38069.56596410363"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 1)",
            "value": 678754.4545454546,
            "unit": "ns",
            "range": "± 16549.56010558322"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 1)",
            "value": 1359982.5,
            "unit": "ns",
            "range": "± 29342.01118419345"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 10)",
            "value": 1006572.6666666666,
            "unit": "ns",
            "range": "± 23591.40314252913"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 10)",
            "value": 6827273.535353536,
            "unit": "ns",
            "range": "± 1059159.1616006535"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 10)",
            "value": 1813378.8823529412,
            "unit": "ns",
            "range": "± 36431.47848509986"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 10)",
            "value": 15604431.05,
            "unit": "ns",
            "range": "± 3089760.16636053"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 10)",
            "value": 1515617.7857142857,
            "unit": "ns",
            "range": "± 26226.78917979322"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 10)",
            "value": 10870571.252525253,
            "unit": "ns",
            "range": "± 1605297.4181133073"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 50)",
            "value": 3065056.6428571427,
            "unit": "ns",
            "range": "± 33323.94726043846"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 50)",
            "value": 19270358.44949495,
            "unit": "ns",
            "range": "± 7712601.295979864"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 50)",
            "value": 8944831.857142856,
            "unit": "ns",
            "range": "± 1014652.7046523835"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 50)",
            "value": 20443706.577777777,
            "unit": "ns",
            "range": "± 13406511.79158731"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 50)",
            "value": 7326687.89,
            "unit": "ns",
            "range": "± 1183975.7251963827"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 50)",
            "value": 22137312.25252525,
            "unit": "ns",
            "range": "± 11497209.655238958"
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
          "id": "64e274d5e2412e364f088870a71db54174253257",
          "message": "Merge pull request #264 from Chris-Wolfgang/protected/fix-release-attach-artifacts\n\nfix(ci): release.yaml Attach Artifacts step can't find the repo without a checkout",
          "timestamp": "2026-08-26T09:57:32-04:00",
          "tree_id": "8143de1999ca8e21ac4b8cca0a50eb6a7634a100",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/64e274d5e2412e364f088870a71db54174253257"
        },
        "date": 1787752754105,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 1)",
            "value": 544310.1764705882,
            "unit": "ns",
            "range": "± 11158.982437006152"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 1)",
            "value": 1492821.9333333333,
            "unit": "ns",
            "range": "± 26821.60297613705"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 1)",
            "value": 844850.7142857143,
            "unit": "ns",
            "range": "± 10521.021253651199"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 1)",
            "value": 3576006.2258064514,
            "unit": "ns",
            "range": "± 336435.73121965973"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 1)",
            "value": 727017.3846153846,
            "unit": "ns",
            "range": "± 17995.167907695493"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 1)",
            "value": 2162441.4324324327,
            "unit": "ns",
            "range": "± 72078.89577459957"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 10)",
            "value": 1646736.2142857143,
            "unit": "ns",
            "range": "± 9829.558892822837"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 10)",
            "value": 10714418.05,
            "unit": "ns",
            "range": "± 972491.4523921976"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 10)",
            "value": 3426117.9285714286,
            "unit": "ns",
            "range": "± 28223.418934975278"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 10)",
            "value": 18540670.14,
            "unit": "ns",
            "range": "± 4875661.605648033"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 10)",
            "value": 2624198.6428571427,
            "unit": "ns",
            "range": "± 22427.786236675744"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 10)",
            "value": 16814844.057142857,
            "unit": "ns",
            "range": "± 550528.12244324"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 50)",
            "value": 6667634.214285715,
            "unit": "ns",
            "range": "± 47147.05395344454"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 50)",
            "value": 24903037.14,
            "unit": "ns",
            "range": "± 15308367.792772377"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 50)",
            "value": 18044470.289473683,
            "unit": "ns",
            "range": "± 388543.4912090965"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 50)",
            "value": 21958731.74698795,
            "unit": "ns",
            "range": "± 4163996.1209121267"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 50)",
            "value": 13159682.28125,
            "unit": "ns",
            "range": "± 401471.03037368145"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 50)",
            "value": 21198355.722891565,
            "unit": "ns",
            "range": "± 6326784.407571239"
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
          "id": "a5f244c10e2ab56956d1540d0dd2a053a82ab86c",
          "message": "Merge pull request #265 from Chris-Wolfgang/chore/baseline-0.3.0\n\nchore(pack): advance PackageValidation baseline to 0.3.0",
          "timestamp": "2026-08-26T21:44:24-04:00",
          "tree_id": "3b916424ebf93ab8d58443b4591e553e8ee3674a",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/a5f244c10e2ab56956d1540d0dd2a053a82ab86c"
        },
        "date": 1787795210866,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 1)",
            "value": 796494.1354166666,
            "unit": "ns",
            "range": "± 192337.5751450734"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 1)",
            "value": 1946732.1979166667,
            "unit": "ns",
            "range": "± 301131.3704812015"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 1)",
            "value": 1057944.2395833333,
            "unit": "ns",
            "range": "± 155626.1687952217"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 1)",
            "value": 3944450.1458333335,
            "unit": "ns",
            "range": "± 484442.81681607594"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 1)",
            "value": 911761.4731182796,
            "unit": "ns",
            "range": "± 118897.36429206416"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 1)",
            "value": 2428439.112244898,
            "unit": "ns",
            "range": "± 331154.71563951235"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 10)",
            "value": 2139242.8865979384,
            "unit": "ns",
            "range": "± 263485.18342067464"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 10)",
            "value": 12761183.06,
            "unit": "ns",
            "range": "± 932470.1769592419"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 10)",
            "value": 4146856.0210526315,
            "unit": "ns",
            "range": "± 342741.1506725135"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 10)",
            "value": 18780407.65,
            "unit": "ns",
            "range": "± 5214132.653162459"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 10)",
            "value": 3511924.9591836734,
            "unit": "ns",
            "range": "± 374348.48093647556"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 10)",
            "value": 15510714.48,
            "unit": "ns",
            "range": "± 2308959.373063937"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 50)",
            "value": 8725160.262626262,
            "unit": "ns",
            "range": "± 777088.2784392423"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 50)",
            "value": 28868846.94,
            "unit": "ns",
            "range": "± 15608293.02942451"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 50)",
            "value": 16374036.914141415,
            "unit": "ns",
            "range": "± 2992969.099160486"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 50)",
            "value": 22433872.1125,
            "unit": "ns",
            "range": "± 3655288.145760527"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 50)",
            "value": 13544653.805555556,
            "unit": "ns",
            "range": "± 451761.64227703837"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 50)",
            "value": 23286139.23255814,
            "unit": "ns",
            "range": "± 6798319.13707194"
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
          "id": "7125c566ec18533d424d4abd8359f7a37fb34b88",
          "message": "Merge pull request #267 from Chris-Wolfgang/docs/third-party-notices-266\n\ndocs: add THIRD-PARTY-NOTICES.md for shipped dependencies",
          "timestamp": "2026-08-27T08:06:54-04:00",
          "tree_id": "681de2f8e0bf87aa3c78127a594d906a14484966",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/7125c566ec18533d424d4abd8359f7a37fb34b88"
        },
        "date": 1787832522302,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 1)",
            "value": 557727.5714285715,
            "unit": "ns",
            "range": "± 16002.638244129834"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 1)",
            "value": 1484151.9,
            "unit": "ns",
            "range": "± 18685.529687052338"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 1)",
            "value": 850116.1333333333,
            "unit": "ns",
            "range": "± 8233.485669305963"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 1)",
            "value": 2953801.7333333334,
            "unit": "ns",
            "range": "± 18650.969605077476"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 1)",
            "value": 718493.75,
            "unit": "ns",
            "range": "± 18606.82981023249"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 1)",
            "value": 1796047.8666666667,
            "unit": "ns",
            "range": "± 32862.042482533085"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 10)",
            "value": 1654899.6470588236,
            "unit": "ns",
            "range": "± 32646.99170662815"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 10)",
            "value": 11349128.346938776,
            "unit": "ns",
            "range": "± 1063267.2420567446"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 10)",
            "value": 3432612,
            "unit": "ns",
            "range": "± 22661.70841546798"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 10)",
            "value": 17622533.545454547,
            "unit": "ns",
            "range": "± 3917272.009830464"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 10)",
            "value": 2642182.8666666667,
            "unit": "ns",
            "range": "± 22537.519276171668"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 10)",
            "value": 16983148.8,
            "unit": "ns",
            "range": "± 446394.0992950251"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_without_audit(BatchSize: 50)",
            "value": 8176959.358823529,
            "unit": "ns",
            "range": "± 793732.2829413962"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Insert_with_audit(BatchSize: 50)",
            "value": 27488957.09,
            "unit": "ns",
            "range": "± 15461335.230481159"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_without_audit(BatchSize: 50)",
            "value": 15278347.010101011,
            "unit": "ns",
            "range": "± 3330381.390950946"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.Lifecycle_with_audit(BatchSize: 50)",
            "value": 22735880.34939759,
            "unit": "ns",
            "range": "± 5680393.8001059815"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_without_audit(BatchSize: 50)",
            "value": 12886736.844827587,
            "unit": "ns",
            "range": "± 367800.67542316177"
          },
          {
            "name": "Wolfgang.AuditTrail.Benchmarks.SaveChangesBenchmarks.MixedStates_per_save_with_audit(BatchSize: 50)",
            "value": 22345783.364705883,
            "unit": "ns",
            "range": "± 7398900.2044042805"
          }
        ]
      }
    ]
  }
}