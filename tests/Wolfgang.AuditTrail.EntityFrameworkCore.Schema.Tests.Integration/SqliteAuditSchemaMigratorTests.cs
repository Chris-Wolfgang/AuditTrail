using Wolfgang.AuditTrail.EntityFrameworkCore.Schema.Tests.Integration.TestSupport;
using Xunit;

namespace Wolfgang.AuditTrail.EntityFrameworkCore.Schema.Tests.Integration;



public sealed class SqliteAuditSchemaMigratorTests
    : AuditSchemaMigratorIntegrationTestsBase, IClassFixture<SqliteSchemaFixture>
{
    public SqliteAuditSchemaMigratorTests(SqliteSchemaFixture fixture)
        : base(fixture)
    {
    }
}
