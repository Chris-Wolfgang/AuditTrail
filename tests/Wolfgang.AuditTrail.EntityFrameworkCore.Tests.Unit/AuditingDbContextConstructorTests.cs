using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using Wolfgang.AuditTrail.Serializers;
using Wolfgang.AuditTrail.Tests.Unit.TestSupport;
using Xunit;

namespace Wolfgang.AuditTrail.Tests.Unit;



/// <summary>
/// Exercises the <see cref="AuditingDbContext"/> constructor argument
/// validation. Each test instantiates <see cref="TestDbContext"/> (which
/// forwards through to <c>AuditingDbContext</c>) so the protected base
/// constructor's null-guards are reached.
/// </summary>
public class AuditingDbContextConstructorTests
{
    private static DbContextOptions<TestDbContext> BuildOptions()
    {
        using var connection = new SqliteConnection("Filename=:memory:");
        connection.Open();
        return new DbContextOptionsBuilder<TestDbContext>().UseSqlite(connection).Options;
    }



    private static AuditOptions ValidOptions() => new()
    {
        ValueSerializer     = new StringAuditValueSerializer(),
        EntityKeySerializer = new PipeDelimitedEntityKeySerializer(),
    };



    [Fact]
    public void Constructor_throws_when_user_provider_is_null()
    {
        var ex = Assert.Throws<ArgumentNullException>(() =>
            new TestDbContext(BuildOptions(), userProvider: null!, ValidOptions()));
        Assert.Equal("userProvider", ex.ParamName);
    }



    [Fact]
    public void Constructor_throws_when_audit_options_is_null()
    {
        var userProvider = new StaticAuditUserProvider("u");

        var ex = Assert.Throws<ArgumentNullException>(() =>
            new TestDbContext(BuildOptions(), userProvider, auditOptions: null!));
        Assert.Equal("auditOptions", ex.ParamName);
    }



    [Fact]
    public void Constructor_defaults_value_serializer_when_null()
    {
        var userProvider = new StaticAuditUserProvider("u");
        var auditOptions = new AuditOptions
        {
            ValueSerializer     = null,
            EntityKeySerializer = new PipeDelimitedEntityKeySerializer(),
        };

        using var ctx = new TestDbContext(BuildOptions(), userProvider, auditOptions);

        Assert.IsType<StringAuditValueSerializer>(auditOptions.ValueSerializer);
    }



    [Fact]
    public void Constructor_defaults_entity_key_serializer_when_null()
    {
        var userProvider = new StaticAuditUserProvider("u");
        var auditOptions = new AuditOptions
        {
            ValueSerializer     = new StringAuditValueSerializer(),
            EntityKeySerializer = null,
        };

        using var ctx = new TestDbContext(BuildOptions(), userProvider, auditOptions);

        Assert.IsType<PipeDelimitedEntityKeySerializer>(auditOptions.EntityKeySerializer);
    }



    [Fact]
    public void Constructor_with_plain_AuditOptions_does_not_throw_and_defaults_both_serializers()
    {
        // The #185 scenario: non-DI construction with a bare `new AuditOptions()`.
        var userProvider = new StaticAuditUserProvider("u");
        var auditOptions = new AuditOptions();

        using var ctx = new TestDbContext(BuildOptions(), userProvider, auditOptions);

        Assert.IsType<StringAuditValueSerializer>(auditOptions.ValueSerializer);
        Assert.IsType<PipeDelimitedEntityKeySerializer>(auditOptions.EntityKeySerializer);
    }



    [Fact]
    public void Constructor_preserves_consumer_supplied_serializers()
    {
        // The `??=` defaulting must not overwrite non-null serializers the caller set.
        var userProvider = new StaticAuditUserProvider("u");
        var valueSerializer = new StringAuditValueSerializer();
        var keySerializer = new PipeDelimitedEntityKeySerializer();
        var auditOptions = new AuditOptions
        {
            ValueSerializer     = valueSerializer,
            EntityKeySerializer = keySerializer,
        };

        using var ctx = new TestDbContext(BuildOptions(), userProvider, auditOptions);

        Assert.Same(valueSerializer, auditOptions.ValueSerializer);
        Assert.Same(keySerializer, auditOptions.EntityKeySerializer);
    }



    [Fact]
    public void AuditOptions_property_exposes_the_injected_options()
    {
        var userProvider = new StaticAuditUserProvider("u");
        var auditOptions = ValidOptions();

        using var context = new TestDbContext(BuildOptions(), userProvider, auditOptions);

        Assert.Same(auditOptions, context.AuditOptions);
    }
}
