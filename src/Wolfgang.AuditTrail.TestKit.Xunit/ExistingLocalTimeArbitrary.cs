using System;
using FsCheck;
using FsCheck.Fluent;

namespace Wolfgang.AuditTrail.TestKit.Xunit;

/// <summary>
/// FsCheck arbitrary for <see cref="DateTime"/> that never yields a <see cref="DateTimeKind.Local"/>
/// value inside a daylight-saving spring-forward gap of the machine's time zone.
/// </summary>
/// <remarks>
/// A local wall-clock time inside the gap never happened, so it has no UTC offset and no serializer
/// can round-trip it to the tick; runtimes resolve it differently (#277). The constraint is on the
/// test input only: serializer behaviour for such values is unchanged.
/// </remarks>
internal static class ExistingLocalTimeArbitrary
{
    /// <summary>Default <see cref="DateTime"/> arbitrary with nonexistent local times filtered out.</summary>
    /// <returns>The constrained arbitrary.</returns>
    public static Arbitrary<DateTime> DateTime() =>
        ArbMap.Default
            .ArbFor<DateTime>()
            .Filter(value => Exists(value, TimeZoneInfo.Local));



    /// <summary>
    /// Returns <see langword="false"/> only for a <see cref="DateTimeKind.Local"/> value that falls in a
    /// spring-forward gap of <paramref name="zone"/>.
    /// </summary>
    /// <param name="value">The candidate value.</param>
    /// <param name="zone">The time zone that <see cref="DateTimeKind.Local"/> values are read in.</param>
    /// <returns><see langword="true"/> when the value is a real instant.</returns>
    internal static bool Exists(DateTime value, TimeZoneInfo zone) =>
        value.Kind != DateTimeKind.Local
        || !zone.IsInvalidTime(System.DateTime.SpecifyKind(value, DateTimeKind.Unspecified));
}
