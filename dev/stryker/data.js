window.BENCHMARK_DATA = {
  "lastUpdate": 1795355252191,
  "repoUrl": "https://github.com/Chris-Wolfgang/AuditTrail",
  "entries": {
    "Mutation score": [
      {
        "commit": {
          "author": {
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang",
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "48992e6b8cacd10eb3f1e70e630e06d5de0f155d",
          "message": "build: pin the .NET SDK to the 10.0 major in global.json (#517)\n\nUbuntu runner image 20261111.196 preinstalls SDK 11.0.100. Without a\nglobal.json the build takes the newest installed SDK, so Linux and Windows\ncan compile with different SDKs (cross-OS reproducible-build mismatch seen on\nEtl-DbClient main 07871c1). Pin the 10.0 major with latestFeature roll-forward,\nas the fleet reproducible-builds standard specifies.\n\nCo-authored-by: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-11-12T18:52:27Z",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/48992e6b8cacd10eb3f1e70e630e06d5de0f155d"
        },
        "date": 1794617363481,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Mutation score (tests/Wolfgang.AuditTrail.EntityFrameworkCore.Tests.Unit)",
            "value": 77.14,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang",
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "08fb302ff602b7defca3bffb3e414a643b5be4e9",
          "message": "ci(benchmarks): retry the SQLite trend check once before failing the run (#509)\n\nThe push-to-main SQLite trend gate failed 4 of 13 runs this week (11-02, 11-06,\n11-07, 11-08). The unaudited baselines slowed as much as the audited benchmarks\nand the commits in between only touched docs, examples and templates, which\npoints at shared-runner noise (#404 records the same pattern twice before).\n\nThe action stores its data point before it evaluates the alert, so a plain\nrerun would compare against the noisy point and pass on a real regression.\nCheck attempt 1 with auto-push off, discard the local gh-pages commit, re-run\nthe benchmark only if it alerted, and store the run that decides the outcome.\nTwo alerts in a row still fail the run and file the tracking issue.\n\nCo-authored-by: Claude Sonnet 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-11-15T01:09:59Z",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/08fb302ff602b7defca3bffb3e414a643b5be4e9"
        },
        "date": 1794748246864,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Mutation score (tests/Wolfgang.AuditTrail.EntityFrameworkCore.Tests.Unit)",
            "value": 77.14,
            "unit": "%"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chris Wolfgang",
            "username": "Chris-Wolfgang",
            "email": "210299580+Chris-Wolfgang@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "cb92b98bdc576e931531fab43c8ab0ee18c91e5e",
          "message": "docs: describe the canonical reproducible-build gate in the verifier doc (#543)\n\n#507: docs/REPRODUCIBLE-BUILD.md described the old hand-edited workflow\n(build on Ubuntu and Windows, gate on cross-OS identity). State what the\ncanonical workflow does: same-commit double pack on Ubuntu gates\n(.dll/.pdb byte-identical, packages entry by entry), Windows reports.\n\nCo-authored-by: Claude Opus 5.5 <noreply@anthropic.com>",
          "timestamp": "2026-11-21T20:46:46Z",
          "url": "https://github.com/Chris-Wolfgang/AuditTrail/commit/cb92b98bdc576e931531fab43c8ab0ee18c91e5e"
        },
        "date": 1795355249703,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Mutation score (tests/Wolfgang.AuditTrail.EntityFrameworkCore.Tests.Unit)",
            "value": 77.14,
            "unit": "%"
          }
        ]
      }
    ]
  }
}