using System.Diagnostics.CodeAnalysis;
using System.Reflection;
using System.Runtime.InteropServices;
using IBM.Data.Db2;
using IBM.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;
using Testcontainers.Db2;
using Xunit;

namespace Wolfgang.AuditTrail.Tests.Integration.TestSupport;

[ExcludeFromCodeCoverage]
public sealed class Db2Fixture : IAsyncLifetime, IProviderFixture
{
    // On Linux, IBM.EntityFrameworkCore-lnx's native driver (clidriver/lib/*.so)
    // is copied nested under the build output rather than the output root, so
    // .NET's default native-library probing never finds it -- DllNotFoundException
    // on libdb2.so. LD_LIBRARY_PATH would fix it but can only take effect if set
    // before the process starts (confirmed: setting it from managed code after
    // startup does nothing -- the loader doesn't re-read it for later P/Invokes),
    // which would mean adding it to the CI workflow, a protected file. Loading the
    // library by absolute path here instead sidesteps that: libdb2.so's own
    // sibling dependencies inside clidriver/lib then resolve via its $ORIGIN-relative
    // rpath, confirmed by loading it this way and reaching a real Db2 protocol
    // error (SQL30081N) rather than DllNotFoundException. Windows resolves its
    // native driver (clidriver/bin/*.dll) without any of this, so the resolver is
    // Linux-only.
    static Db2Fixture()
    {
        if (!OperatingSystem.IsWindows())
        {
            NativeLibrary.SetDllImportResolver(typeof(DB2Connection).Assembly, ResolveNativeLibrary);
        }
    }



    private static IntPtr ResolveNativeLibrary(string libraryName, Assembly assembly, DllImportSearchPath? searchPath)
    {
        var candidate = Path.Combine(AppContext.BaseDirectory, "clidriver", "lib", libraryName);
        return File.Exists(candidate) && NativeLibrary.TryLoad(candidate, out var handle) ? handle : IntPtr.Zero;
    }



    // Db2 Community Edition requires explicit runtime license-agreement
    // acceptance before the container will start -- WithAcceptLicenseAgreement
    // is not optional, Build() throws without it. Accepting it here is
    // equivalent to the license click-through a developer would do manually;
    // see IBM's Db2 Community Edition terms before relying on this in a
    // context beyond dev/test CI.
    //
    // WithDatabase routes to a non-default "auditdb" (same convention as
    // MySqlFixture/PostgresFixture) so the connection string always points at a
    // known name. It does NOT avoid Db2's broken database-level create/drop --
    // EnsureDeletedAsync calls Delete() unconditionally whenever the database
    // exists, regardless of who created it -- see Db2TableOnlyDatabaseCreator
    // for the actual fix (replaces Create()/Delete() with table-only equivalents).
    private readonly Db2Container _container = new Db2Builder("icr.io/db2_community/db2:12.1.0.0")
        .WithAcceptLicenseAgreement(true)
        .WithDatabase("auditdb")
        .Build();

    public string ProviderName => "Db2";

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
            .UseDb2(_container.GetConnectionString(), null)
            .ReplaceService<IRelationalTransactionFactory, Db2NoSavepointsTransactionFactory>()
            .ReplaceService<IRelationalDatabaseCreator, Db2TableOnlyDatabaseCreator>()
            .Options;
    }
}
