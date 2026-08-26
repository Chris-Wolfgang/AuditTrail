using Wolfgang.AuditTrail.Serializers;

namespace Wolfgang.AuditTrail.Internal;

/// <summary>
/// Defaults <see cref="AuditOptions.ValueSerializer"/> / <see cref="AuditOptions.EntityKeySerializer"/>
/// when left <c>null</c>. Lives here (not on <see cref="AuditOptions"/> itself) because
/// <c>Wolfgang.AuditTrail.Abstractions</c> has no EF Core dependency and can't reference
/// the default serializer implementations.
/// </summary>
internal static class AuditOptionsDefaultsExtensions
{
    /// <summary>
    /// Defaults the serializers so direct, non-DI construction works with a plain
    /// <c>new AuditOptions()</c> (unit-test context factories, <c>IDesignTimeDbContextFactory</c>,
    /// console spikes) — mirrors what <c>AddEfCoreAuditing</c> wires up. See #185.
    /// </summary>
    public static void EnsureDefaultSerializers(this AuditOptions options)
    {
        options.ValueSerializer ??= new StringAuditValueSerializer();
        options.EntityKeySerializer ??= new PipeDelimitedEntityKeySerializer();
    }
}
