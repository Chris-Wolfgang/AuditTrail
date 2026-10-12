using Wolfgang.AuditTrail.Tests.Integration.TestSupport;
using Xunit;

namespace Wolfgang.AuditTrail.Tests.Integration;



/// <summary>
/// Drives <see cref="DockerContainerStartup"/>'s failure handling without a broken
/// container runtime: on a machine where Docker is up, every real fixture starts, so
/// neither the skippable nor the rethrow outcome would otherwise run.
/// </summary>
public sealed class DockerContainerStartupTests
{
    [Fact]
    public async Task TryStartAsync_when_start_succeeds_reports_available()
    {
        var result = await DockerContainerStartup.TryStartAsync(static () => Task.CompletedTask, "Fake", rethrow: false);

        Assert.Equal(new FixtureAvailability(true, null), result);
    }



    [Fact]
    public async Task TryStartAsync_when_start_fails_outside_CI_reports_unavailable_with_the_reason()
    {
        var result = await DockerContainerStartup.TryStartAsync(static () => throw new InvalidOperationException("no docker"), "Fake", rethrow: false);

        Assert.False(result.Available);
        Assert.Equal
        (
            "Fake unavailable: container failed to start (InvalidOperationException: no docker).",
            result.UnavailableReason
        );
    }



    [Fact]
    public async Task TryStartAsync_when_start_fails_in_CI_rethrows()
    {
        await Assert.ThrowsAsync<InvalidOperationException>
        (
            () => DockerContainerStartup.TryStartAsync(static () => throw new InvalidOperationException("no docker"), "Fake", rethrow: true)
        );
    }
}
