type: fix

Trimmed and Native AOT apps no longer get trim-analysis warnings from AuditTrail's own code: `AddEfCoreAuditing<TUserProvider>` now declares the public-constructor requirement on `TUserProvider`, and the remaining warnings come only from EF Core's own annotations.
