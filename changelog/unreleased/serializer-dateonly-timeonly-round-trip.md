type: breaking

`StringAuditValueSerializer` now writes `DateOnly`/`TimeOnly` in the round-trip `"o"` format and `Decode` returns `DateOnly`, `TimeOnly`, `TimeSpan` and `char` values as those types instead of `string`, while rows written in the old formats still decode (legacy `TimeOnly` rows at their stored minute precision).
