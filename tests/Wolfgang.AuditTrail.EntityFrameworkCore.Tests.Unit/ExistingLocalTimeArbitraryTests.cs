using System;
using Wolfgang.AuditTrail.TestKit.Xunit;
using Xunit;

namespace Wolfgang.AuditTrail.Tests.Unit;



/// <summary>
/// Pins the DST-gap filter behind the contract suite's <see cref="DateTime"/> generator (#277),
/// against a fixed custom zone so the result does not depend on the machine's time zone.
/// </summary>
public sealed class ExistingLocalTimeArbitraryTests
{
    // US-style rule: clocks jump from 02:00 to 03:00 on the second Sunday of March.
    private static readonly TimeZoneInfo UsEastern = TimeZoneInfo.CreateCustomTimeZone
    (
        "Test/Eastern",
        TimeSpan.FromHours(-5),
        "Test Eastern",
        "Test Eastern Standard",
        "Test Eastern Daylight",
        new[]
        {
            TimeZoneInfo.AdjustmentRule.CreateAdjustmentRule
            (
                new DateTime(2000, 1, 1),
                DateTime.MaxValue.Date,
                TimeSpan.FromHours(1),
                TimeZoneInfo.TransitionTime.CreateFloatingDateRule(new DateTime(1, 1, 1, 2, 0, 0), 3, 2, DayOfWeek.Sunday),
                TimeZoneInfo.TransitionTime.CreateFloatingDateRule(new DateTime(1, 1, 1, 2, 0, 0), 11, 1, DayOfWeek.Sunday)
            ),
        }
    );



    [Fact]
    public void Exists_when_local_value_is_inside_the_spring_forward_gap_returns_false()
    {
        // The value from the #277 failure: 2:57:31 AM on the second Sunday of March 2057.
        var value = new DateTime(2057, 3, 11, 2, 57, 31, DateTimeKind.Local);

        Assert.False(ExistingLocalTimeArbitrary.Exists(value, UsEastern));
    }



    [Fact]
    public void Exists_when_local_value_is_outside_the_gap_returns_true()
    {
        var value = new DateTime(2057, 3, 11, 3, 0, 0, DateTimeKind.Local);

        Assert.True(ExistingLocalTimeArbitrary.Exists(value, UsEastern));
    }



    [Theory]
    [InlineData(DateTimeKind.Utc)]
    [InlineData(DateTimeKind.Unspecified)]
    public void Exists_when_value_is_not_local_returns_true_even_inside_the_gap(DateTimeKind kind)
    {
        var value = new DateTime(2057, 3, 11, 2, 57, 31, kind);

        Assert.True(ExistingLocalTimeArbitrary.Exists(value, UsEastern));
    }



    [Fact]
    public void DateTime_arbitrary_generates_only_existing_local_times()
    {
        var arbitrary = ExistingLocalTimeArbitrary.DateTime();

        var samples = FsCheck.Fluent.Gen.Sample(arbitrary.Generator, 500);

        Assert.All(samples, value => Assert.True(ExistingLocalTimeArbitrary.Exists(value, TimeZoneInfo.Local)));
    }
}
