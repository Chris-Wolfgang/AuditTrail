type: fix

`AuditValueSerializerContractTests.DateTime_with_random_kind_round_trips` no longer fails intermittently on a local time inside a daylight-saving spring-forward gap, which never existed and cannot round-trip.
