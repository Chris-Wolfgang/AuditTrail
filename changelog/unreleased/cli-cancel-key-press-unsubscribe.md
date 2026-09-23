type: fix

The `audittrail` CLI no longer risks an `ObjectDisposedException` during shutdown when Ctrl+C arrives after a command has finished.
