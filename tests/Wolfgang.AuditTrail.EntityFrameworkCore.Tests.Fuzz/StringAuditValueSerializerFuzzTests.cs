using Wolfgang.AuditTrail.Serializers;
using Wolfgang.AuditTrail.TestKit.Xunit;
using Xunit;

namespace Wolfgang.AuditTrail.Tests.Fuzz;

/// <summary>
/// Continuous-fuzz variant of the shipped serializer contract suite. Re-runs every
/// round-trip invariant from <see cref="AuditValueSerializerContractTests{TSut}"/>
/// against <see cref="StringAuditValueSerializer"/> at fuzz scale
/// (<see cref="FuzzSettings.CaseCount"/> cases per property — the weekly workflow sets
/// this to 100,000+) so rare edge cases the short ~100-case unit run misses — unusual
/// <see cref="double"/> bit patterns, surrogate-pair strings, boundary decimals — get
/// surfaced.
/// </summary>
[Trait("Category", "Fuzz")]
[FuzzProperties]
public sealed class StringAuditValueSerializerFuzzTests
    : AuditValueSerializerContractTests<StringAuditValueSerializer>
{
    protected override StringAuditValueSerializer CreateSut() => new();
}
