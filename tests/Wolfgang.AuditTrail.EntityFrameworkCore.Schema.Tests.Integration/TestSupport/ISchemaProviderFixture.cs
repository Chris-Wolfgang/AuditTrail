using Microsoft.EntityFrameworkCore;
using Wolfgang.AuditTrail;
using Wolfgang.AuditTrail.Schema;

namespace Wolfgang.AuditTrail.EntityFrameworkCore.Schema.Tests.Integration.TestSupport;



/// <summary>
/// Provider-agnostic surface the test class needs to drive
/// <see cref="AuditSchemaMigrator"/> against a real database. Each provider's
/// fixture (Testcontainers SQL Server / PostgreSQL) implements it so the same
/// test methods cover every RDBMS without copy-paste.
/// </summary>
public interface ISchemaProviderFixture
{
    /// <summary>Friendly name for test output (SqlServer / PostgreSQL).</summary>
    string ProviderName { get; }

    /// <summary>
    /// Schema name to use for the custom-naming test on this provider, or
    /// <c>null</c> where the provider has no schema namespace separate from the
    /// database (MySQL). The test then asserts on table names alone.
    /// </summary>
    string? CustomSchema { get; }

    /// <summary>Returns a context bound to a unique database on the running container.</summary>
    Task<AuditMigrationsDbContext> CreateContextAsync(AuditOptions options);

    /// <summary>Lists user-table names in the most recently created database.</summary>
    Task<IReadOnlyList<TableInfo>> ListTablesAsync(string? schema);

    /// <summary>
    /// Lists the column names of one table in the most recently created
    /// database. Used to assert that an upgrade actually altered the table,
    /// rather than inferring it from the version row.
    /// </summary>
    Task<IReadOnlyList<string>> ListColumnsAsync(string? schema, string table);
}



/// <summary>
/// (schema, table) pair returned by <see cref="ISchemaProviderFixture.ListTablesAsync"/>.
/// Schema may be null on providers/configurations that don't surface one.
/// </summary>
public sealed record TableInfo(string? Schema, string Name);
