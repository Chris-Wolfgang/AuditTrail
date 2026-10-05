using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage;
using Wolfgang.AuditTrail.Serializers;
using Wolfgang.AuditTrail.Tests.Integration.TestSupport;
using Xunit;

namespace Wolfgang.AuditTrail.Tests.Integration;

public class Db2AuditTests : ProviderAuditTestsBase<Db2Fixture>
{
    private readonly Db2Fixture _fixture;

    public Db2AuditTests(Db2Fixture fixture) : base(fixture)
    {
        _fixture = fixture;
    }



    private TestDbContext NewDb2Context()
    {
        var options = new AuditOptions
        {
            ValueSerializer = new StringAuditValueSerializer(),
            EntityKeySerializer = new PipeDelimitedEntityKeySerializer(),
        };
        return new TestDbContext(_fixture.CreateContextOptions(), new StaticAuditUserProvider("test-user"), options);
    }



    [SkippableFact]
    public async Task Db2TableOnlyDatabaseCreator_Create_is_a_no_op_and_Delete_drops_every_table()
    {
        Skip.IfNot(_fixture.Available, _fixture.UnavailableReason);

        var context = NewDb2Context();
        await using (context)
        {
            await context.Database.EnsureCreatedAsync();
            var creator = (Db2TableOnlyDatabaseCreator)context.GetService<IRelationalDatabaseCreator>();

            creator.Create();
            await creator.CreateAsync();
            Assert.True(await creator.HasTablesAsync());

            creator.Delete();
            Assert.False(await creator.HasTablesAsync());
        }
    }



    [SkippableFact]
    public async Task Db2TableOnlyDatabaseCreator_TryDropTableAsync_when_table_does_not_exist_returns_false()
    {
        Skip.IfNot(_fixture.Available, _fixture.UnavailableReason);

        var context = NewDb2Context();
        await using (context)
        {
            var creator = (Db2TableOnlyDatabaseCreator)context.GetService<IRelationalDatabaseCreator>();
            await context.Database.OpenConnectionAsync();
            try
            {
                Assert.False(await creator.TryDropTableAsync("NOSUCHSCHEMA", "NOSUCHTABLE", CancellationToken.None));
            }
            finally
            {
                await context.Database.CloseConnectionAsync();
            }
        }
    }



    [Fact]
    public async Task DropWithRetriesAsync_when_a_table_fails_first_drops_it_on_a_later_pass()
    {
        var attempts = new List<string>();
        var tables = new List<(string Schema, string Table)> { ("S", "Parent"), ("S", "Child") };

        await Db2TableOnlyDatabaseCreator.DropWithRetriesAsync
        (
            tables,
            (_, table, _) =>
            {
                attempts.Add(table);
                // Parent cannot go until Child has been dropped.
                return Task.FromResult(!string.Equals(table, "Parent", StringComparison.Ordinal) || attempts.Contains("Child"));
            },
            CancellationToken.None
        );

        Assert.Equal(new[] { "Parent", "Child", "Parent" }, attempts);
    }



    [Fact]
    public async Task DropWithRetriesAsync_when_a_table_never_drops_throws_naming_it()
    {
        var tables = new List<(string Schema, string Table)> { ("S", "Stuck") };

        var ex = await Assert.ThrowsAsync<InvalidOperationException>
        (
            () => Db2TableOnlyDatabaseCreator.DropWithRetriesAsync(tables, static (_, _, _) => Task.FromResult(false), CancellationToken.None)
        );

        Assert.Contains("\"S\".\"Stuck\"", ex.Message, StringComparison.Ordinal);
    }



    [Fact]
    public void ResolveNativeLibrary_when_library_is_not_in_clidriver_returns_zero()
    {
        var handle = Db2Fixture.ResolveNativeLibrary("no-such-native-library", typeof(Db2AuditTests).Assembly, searchPath: null);

        Assert.Equal(IntPtr.Zero, handle);
    }
}
