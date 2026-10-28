type: fix

The `audittrail` CLI writes its log file under the per-user temp directory instead of a `logs/` folder in the current directory, exits with code 130 (and "Cancelled.") on Ctrl+C instead of reporting an error, and its `--provider` help no longer presents `mysql` as supported.
