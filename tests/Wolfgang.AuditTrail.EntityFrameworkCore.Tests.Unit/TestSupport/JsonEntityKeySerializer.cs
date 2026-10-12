using System.Text.Json;

namespace Wolfgang.AuditTrail.Tests.Unit.TestSupport;

/// <summary>
/// Produces a valid JSON array of key values via <see cref="JsonSerializer"/>,
/// used to prove that consumer-supplied <see cref="IAuditEntityKeySerializer"/>
/// implementations are honored by the interceptor.
/// </summary>
public sealed class JsonEntityKeySerializer : IAuditEntityKeySerializer
{
    public string Serialize(IReadOnlyList<object?> keyValues)
    {
        ArgumentNullException.ThrowIfNull(keyValues);
        return JsonSerializer.Serialize(keyValues);
    }
}
