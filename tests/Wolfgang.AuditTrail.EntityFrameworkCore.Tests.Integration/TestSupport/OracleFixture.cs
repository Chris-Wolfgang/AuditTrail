using System.Diagnostics.CodeAnalysis;
using Microsoft.EntityFrameworkCore;
using Testcontainers.Oracle;
using Xunit;

namespace Wolfgang.AuditTrail.Tests.Integration.TestSupport;

[ExcludeFromCodeCoverage]
public sealed class OracleFixture : IAsyncLifetime, IProviderFixture
{
    // gvenzl/oracle-xe is the Testcontainers.Oracle default image -- a
    // community-maintained Docker Hub build of Oracle Database Free (XE), not
    // Oracle's own container-registry.oracle.com. Pinning it explicitly here
    // (rather than floating on the builder's default) avoids the registry-auth
    // friction the original investigation (#273) was concerned about; switch to
    // an official Oracle Container Registry image only if a real gap between
    // XE and Oracle Database Free surfaces.
    private readonly OracleContainer _container = new OracleBuilder("gvenzl/oracle-xe:21.3.0-slim-faststart").Build();

    public string ProviderName => "Oracle";

    public bool Available { get; private set; }

    public string? UnavailableReason { get; private set; }

    public async Task InitializeAsync()
    {
        (Available, UnavailableReason) = await DockerContainerStartup
            .TryStartAsync(() => _container.StartAsync(), ProviderName)
            .ConfigureAwait(false);
    }

    public Task DisposeAsync() => _container.DisposeAsync().AsTask();

    public DbContextOptions<TestDbContext> CreateContextOptions()
    {
        return new DbContextOptionsBuilder<TestDbContext>()
            .UseOracle(_container.GetConnectionString())
            .Options;
    }
}
