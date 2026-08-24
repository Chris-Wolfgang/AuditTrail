using System.Text.Json.Serialization;

namespace Wolfgang.AuditTrail.Samples.ShadowWorkload;

public sealed record ScenarioResult(int Iterations, double MeanMs, double? AllocatedBytesMean);

public sealed record ShadowReport(DateTime GeneratedAtUtc, string LibraryVersion, Dictionary<string, ScenarioResult> Operations);

[JsonSerializable(typeof(ShadowReport))]
internal sealed partial class ShadowJsonContext : JsonSerializerContext
{
}
