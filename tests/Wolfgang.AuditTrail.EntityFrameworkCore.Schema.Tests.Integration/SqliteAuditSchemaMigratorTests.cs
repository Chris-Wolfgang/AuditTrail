using Microsoft.EntityFrameworkCore;
using Wolfgang.AuditTrail.EntityFrameworkCore.Schema.Tests.Integration.TestSupport;
using Xunit;

namespace Wolfgang.AuditTrail.EntityFrameworkCore.Schema.Tests.Integration;



public sealed class SqliteAuditSchemaMigratorTests
    : AuditSchemaMigratorIntegrationTestsBase, IClassFixture<SqliteSchemaFixture>
{
    private readonly SqliteSchemaFixture _sqlite;



    public SqliteAuditSchemaMigratorTests(SqliteSchemaFixture fixture)
        : base(fixture)
    {
        _sqlite = fixture;
    }



    /// <summary>
    /// The audit schema declares no unique constraint, so the schema comparison
    /// never reaches the code that renders one. This pins that rendering against
    /// a table that has one, so a provider that does report unique constraints
    /// cannot have them silently dropped from the comparison.
    /// </summary>
    [Fact]
    public async Task Describe_when_a_table_has_a_unique_constraint_renders_it()
    {
        await using var context = await _sqlite.CreateContextAsync(BuildOptions());

        await context.Database.ExecuteSqlRawAsync
        (
            "CREATE TABLE Probe (A integer NOT NULL, B integer NOT NULL, CONSTRAINT UQ_Probe_A_B UNIQUE (A, B))"
        );

        var text = DatabaseSchemaText.Describe(context, _sqlite.DesignTimeServices);

        // SQLite reports the constraint without a name, so assert on the columns.
        Assert.Matches(@"(?m)^  unique .*\(A, B\)\r?$", text);
    }
}
