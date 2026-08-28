using Microsoft.EntityFrameworkCore;

namespace Wolfgang.AuditTrail.Tests.Integration.TestSupport;

/// <summary>
/// Abstracts the provider-specific bits of an integration test fixture so the same
/// test body can run against SQL Server, PostgreSQL, or MySQL.
/// </summary>
public interface IProviderFixture
{
    DbContextOptions<TestDbContext> CreateContextOptions();

    string ProviderName { get; }

    /// <summary>
    /// <see langword="false"/> when the fixture's container failed to start because
    /// Docker wasn't reachable. Only ever <see langword="false"/> outside CI — see
    /// <see cref="DockerContainerStartup"/> for why a CI run never sets this.
    /// </summary>
    bool Available { get; }

    /// <summary>Reason to pass to <c>Skip.IfNot</c> when <see cref="Available"/> is <see langword="false"/>.</summary>
    string? UnavailableReason { get; }
}
