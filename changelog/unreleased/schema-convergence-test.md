type: internal

A per-provider convergence test now proves that a database installed at schema version 1 and upgraded step by step ends up with exactly the schema a fresh install produces, so a hand-written upgrade step that drifts from the model fails CI on SQL Server, PostgreSQL, MySQL and SQLite.
