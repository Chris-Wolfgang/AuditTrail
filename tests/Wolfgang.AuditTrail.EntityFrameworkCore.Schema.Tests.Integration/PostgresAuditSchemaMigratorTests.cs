using Wolfgang.AuditTrail.EntityFrameworkCore.Schema.Tests.Integration.TestSupport;
using Xunit;

namespace Wolfgang.AuditTrail.EntityFrameworkCore.Schema.Tests.Integration;



public sealed class PostgresAuditSchemaMigratorTests
    : AuditSchemaMigratorIntegrationTestsBase, IClassFixture<PostgresSchemaFixture>
{
    public PostgresAuditSchemaMigratorTests(PostgresSchemaFixture fixture)
        : base(fixture)
    {
    }
}
