using System;
using System.Collections.Generic;
using System.Linq;
using Wolfgang.AuditTrail.Serializers;
using Xunit;

namespace Wolfgang.AuditTrail.Tests.Fuzz;

/// <summary>
/// Fuzz properties for <see cref="PipeDelimitedEntityKeySerializer"/> — the default
/// composite-key serializer. Unlike the value serializer it has no inverse, so the
/// invariants here are determinism, compositionality, totality, and (crucially) the
/// collision-avoidance the implementation explicitly claims for GUIDs and byte
/// arrays. Each runs <see cref="FuzzSettings.CaseCount"/> cases (the weekly workflow
/// sets this to 100,000+).
/// </summary>
[Trait("Category", "Fuzz")]
public sealed class PipeDelimitedEntityKeySerializerFuzzTests
{
    private static readonly PipeDelimitedEntityKeySerializer Sut = new();

    private static IReadOnlyList<object?> Key(params object?[] parts) => parts;



    /// <summary>Pure function: identical key parts always serialize identically.</summary>
    [FuzzProperty]
    public bool Serialize_is_deterministic(int[]? values)
    {
        if (values is null)
        {
            return true;
        }

        var first  = Sut.Serialize(values.Cast<object?>().ToArray());
        var second = Sut.Serialize(values.Cast<object?>().ToArray());
        return string.Equals(first, second, StringComparison.Ordinal);
    }



    /// <summary>
    /// A two-part key is exactly the pipe-join of the two single-part keys. Uses
    /// integers, whose formatted form never contains a pipe, so there is no
    /// separator ambiguity to muddy the equality.
    /// </summary>
    [FuzzProperty]
    public bool Two_part_key_is_the_pipe_join_of_its_single_parts(int a, int b)
    {
        var combined = Sut.Serialize(Key(a, b));
        var expected = Sut.Serialize(Key(a)) + "|" + Sut.Serialize(Key(b));
        return string.Equals(combined, expected, StringComparison.Ordinal);
    }



    /// <summary>
    /// Distinct GUIDs never collide — guards the "D" round-trip formatting choice.
    /// </summary>
    [FuzzProperty]
    public bool Distinct_guids_never_collide(Guid a, Guid b)
    {
        if (a == b)
        {
            return true;
        }

        return !string.Equals(Sut.Serialize(Key(a)), Sut.Serialize(Key(b)), StringComparison.Ordinal);
    }



    /// <summary>
    /// Distinct byte arrays never collide — guards the hex encoding that replaced
    /// <c>byte[].ToString()</c> (which returned "System.Byte[]" for every value, so
    /// all binary keys would have collided).
    /// </summary>
    [FuzzProperty]
    public bool Distinct_byte_arrays_never_collide(byte[]? a, byte[]? b)
    {
        if (a is null || b is null || a.SequenceEqual(b))
        {
            return true;
        }

        return !string.Equals(Sut.Serialize(Key(a)), Sut.Serialize(Key(b)), StringComparison.Ordinal);
    }



    /// <summary>Total function: any single value (including null) yields a non-null key.</summary>
    [FuzzProperty]
    public bool Single_value_serialization_is_never_null(string? value)
    {
        return Sut.Serialize(Key(value)) is not null;
    }
}
