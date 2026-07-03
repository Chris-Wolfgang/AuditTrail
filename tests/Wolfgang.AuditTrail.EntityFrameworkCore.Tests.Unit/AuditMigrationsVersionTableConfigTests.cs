using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Wolfgang.AuditTrail.Entities;
using Wolfgang.AuditTrail.Schema;
using Wolfgang.AuditTrail.Serializers;
using Xunit;

namespace Wolfgang.AuditTrail.Tests.Unit;



/// <summary>
/// Pins the <see cref="AuditSchemaVersion"/> version-tracking table configured in
/// <see cref="AuditMigrationsDbContext"/>'s <c>OnModelCreating</c> — table name,
/// single-row key, never-generated id, required version. A unique schema per test
/// forces a fresh model past the schema-aware model-cache key so the config
/// actually re-executes.
/// </summary>
public sealed class AuditMigrationsVersionTableConfigTests : IDisposable
{
    private readonly SqliteConnection _connection;

    public AuditMigrationsVersionTableConfigTests()
    {
        _connection = new SqliteConnection("DataSource=:memory:");
        _connection.Open();
    }

    public void Dispose() => _connection.Dispose();

    // Distinct schema (never used elsewhere) → distinct model-cache key → fresh model.
    private IEntityType VersionEntity(string uniqueSchema)
    {
        var options = new AuditOptions
        {
            Schema = uniqueSchema,
            ValueSerializer = new StringAuditValueSerializer(),
            EntityKeySerializer = new PipeDelimitedEntityKeySerializer(),
        };
        var builder = new DbContextOptionsBuilder<AuditMigrationsDbContext>().UseSqlite(_connection);
        var ctx = new AuditMigrationsDbContext(builder.Options, options);
        return ctx.Model.FindEntityType(typeof(AuditSchemaVersion))!;
    }



    [Fact]
    public void Version_table_uses_the_constant_table_name()
    {
        Assert.Equal(AuditSchemaConstants.VersionTableName, VersionEntity("mvt_probe_name").GetTableName());
    }



    [Fact]
    public void Version_table_key_is_Id_and_never_generated()
    {
        var e = VersionEntity("mvt_probe_key");
        Assert.Equal(nameof(AuditSchemaVersion.Id), Assert.Single(e.FindPrimaryKey()!.Properties).Name);
        Assert.Equal(ValueGenerated.Never, e.FindProperty(nameof(AuditSchemaVersion.Id))!.ValueGenerated);
    }



    [Fact]
    public void Version_column_is_required()
    {
        Assert.False(VersionEntity("mvt_probe_req").FindProperty(nameof(AuditSchemaVersion.Version))!.IsNullable);
    }
}
