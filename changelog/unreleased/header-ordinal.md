type: feature

`AuditHeader` now carries an `Ordinal`: the zero-based position of the header within its transaction, in change-tracker order, so consumers can show what happened first inside a single `SaveChanges`. Indexed with `TransactionId`. Audit schema version is now 2; existing rows read `0` after the upgrade.
