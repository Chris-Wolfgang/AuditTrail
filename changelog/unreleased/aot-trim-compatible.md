type: feature

All packages now declare `IsAotCompatible` and `IsTrimmable` on net8.0+ targets, so consumers publishing with trimming or Native AOT no longer get "unknown trimmability" warnings for `Wolfgang.AuditTrail.*` assemblies; the trim and AOT analyzers now also run on every build of these projects.
