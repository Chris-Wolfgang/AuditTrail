using Xunit;

// PostgresSchemaFixture / SqlServerSchemaFixture (IClassFixture, one instance per
// test class) stash the most-recently-created database name in a mutable field
// that ListTablesAsync reads back -- safe today only because xunit runs test
// methods within one class sequentially by default. Pin that assumption
// explicitly (same pattern as Tests.Unit) rather than relying on the default.
[assembly: CollectionBehavior(DisableTestParallelization = true)]
