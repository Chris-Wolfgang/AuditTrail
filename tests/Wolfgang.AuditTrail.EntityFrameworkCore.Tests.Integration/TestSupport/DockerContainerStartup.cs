namespace Wolfgang.AuditTrail.Tests.Integration.TestSupport;



/// <summary>
/// Starts a Testcontainers container for a provider fixture. A Docker-unavailable
/// failure becomes a skippable state locally, but is rethrown (hard failure) in CI —
/// GitHub-hosted runners always have Docker, so a failure there is a genuine
/// anomaly that must not pass silently as a skipped batch of tests.
/// </summary>
internal static class DockerContainerStartup
{



    public static async Task<FixtureAvailability> TryStartAsync(Func<Task> startAsync, string providerName)
    {
        try
        {
            await startAsync().ConfigureAwait(false);
            return new FixtureAvailability(true, null);
        }
        catch (Exception ex) when (!IsRunningInCi())
        {
            return new FixtureAvailability(
                false,
                $"{providerName} unavailable: container failed to start ({ex.GetType().Name}: {ex.Message}).");
        }
    }



    private static bool IsRunningInCi()
    {
        return string.Equals(Environment.GetEnvironmentVariable("CI"), "true", StringComparison.OrdinalIgnoreCase);
    }
}



/// <summary>Result of <see cref="DockerContainerStartup.TryStartAsync"/>.</summary>
internal readonly record struct FixtureAvailability(bool Available, string? UnavailableReason);
