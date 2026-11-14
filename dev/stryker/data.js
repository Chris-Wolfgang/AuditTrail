window.BENCHMARK_DATA = {
  "lastUpdate": 1794617366466,
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
      }
    ]
  }
}