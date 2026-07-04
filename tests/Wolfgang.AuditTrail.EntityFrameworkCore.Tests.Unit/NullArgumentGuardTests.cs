using Microsoft.EntityFrameworkCore;
using Wolfgang.AuditTrail.Schema;
using Wolfgang.AuditTrail.Serializers;
using Wolfgang.AuditTrail.TestKit.Xunit;
using Wolfgang.AuditTrail.Tests.Unit.TestSupport;
using Xunit;

namespace Wolfgang.AuditTrail.Tests.Unit;



/// <summary>
/// Pins the <c>ArgumentNullException.ThrowIfNull</c> guard clauses across the
/// public/internal surface. Each guard is a mutation target (statement removal);
/// a null argument that no longer throws kills it.
/// </summary>
public sealed class NullArgumentGuardTests
{
    private static AuditOptions ValidOptions() => new()
    {
        ValueSerializer = new StringAuditValueSerializer(),
        EntityKeySerializer = new PipeDelimitedEntityKeySerializer(),
    };



    [Fact]
    public void ApplyAuditing_null_modelBuilder_throws() =>
        Assert.Throws<ArgumentNullException>(() =>
            ModelBuilderExtensions.ApplyAuditing(null!, ValidOptions()));



    [Fact]
    public void ApplyAuditing_null_options_throws() =>
        Assert.Throws<ArgumentNullException>(() =>
            new ModelBuilder().ApplyAuditing(null!));



    [Fact]
    public void PipeDelimited_Serialize_null_throws() =>
        Assert.Throws<ArgumentNullException>(() =>
            new PipeDelimitedEntityKeySerializer().Serialize(null!));



    [Fact]
    public void StringSerializer_Encode_null_clrType_throws() =>
        Assert.Throws<ArgumentNullException>(() =>
            new StringAuditValueSerializer().Encode("x", null!, new InMemoryAuditValueBuffer()));



    [Fact]
    public void StringSerializer_Encode_null_writer_throws() =>
        Assert.Throws<ArgumentNullException>(() =>
            new StringAuditValueSerializer().Encode("x", typeof(string), null!));



    [Fact]
    public void StringSerializer_Decode_null_reader_throws() =>
        Assert.Throws<ArgumentNullException>(() =>
            new StringAuditValueSerializer().Decode(null!, "String"));



    [Fact]
    public void StringSerializer_Decode_null_valueType_throws() =>
        Assert.Throws<ArgumentNullException>(() =>
            new StringAuditValueSerializer().Decode(new InMemoryAuditValueBuffer(), null!));



    [Fact]
    public void SchemaInstaller_ctor_null_options_throws() =>
        Assert.Throws<ArgumentNullException>(() => new AuditSchemaInstaller(null!));



    [Fact]
    public async Task SchemaInstaller_DropTablesAsync_null_context_throws() =>
        await Assert.ThrowsAsync<ArgumentNullException>(() =>
            new AuditSchemaInstaller(ValidOptions()).DropTablesAsync(null!));



    [Fact]
    public async Task VersionStore_Read_null_context_throws() =>
        await Assert.ThrowsAsync<ArgumentNullException>(() =>
            AuditSchemaVersionStore.ReadInstalledVersionAsync(null!, default));



    [Fact]
    public async Task VersionStore_Upsert_null_context_throws() =>
        await Assert.ThrowsAsync<ArgumentNullException>(() =>
            AuditSchemaVersionStore.UpsertInstalledVersionAsync(null!, 1, default));



    [Fact]
    public void TableNotFoundIndicators_null_exception_throws() =>
        Assert.Throws<ArgumentNullException>(() =>
            TableNotFoundIndicators.IsTableNotFound(null!));



    [Fact]
    public void Interceptor_ctor_null_userProvider_throws() =>
        Assert.Throws<ArgumentNullException>(() =>
            new AuditSaveChangesInterceptor(null!, ValidOptions()));



    [Fact]
    public void Interceptor_ctor_null_options_throws() =>
        Assert.Throws<ArgumentNullException>(() =>
            new AuditSaveChangesInterceptor(new StaticAuditUserProvider("u"), null!));
}
