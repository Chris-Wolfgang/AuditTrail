using Wolfgang.AuditTrail.Serializers;
using Wolfgang.AuditTrail.TestKit.Xunit;
using Wolfgang.AuditTrail.Tests.Unit.TestSupport;
using Xunit;

namespace Wolfgang.AuditTrail.Tests.Unit;



/// <summary>
/// Pins the members of the TestSupport doubles that the behavior tests do not reach
/// on their own, so the test assembly reports 100% line coverage without excluding
/// those types.
/// </summary>
public sealed class TestSupportTests
{
    [Fact]
    public void NoDiagnosticMessage_Format_returns_an_empty_string()
    {
        Assert.Equal(string.Empty, NoDiagnosticMessage.Format(null!, null!));
    }



    [Fact]
    public void FakeRetryingExecutionStrategy_Execute_throws_NotSupportedException()
    {
        var strategy = new FakeRetryingExecutionStrategy();

        Assert.Throws<NotSupportedException>
        (
            () => strategy.Execute<int, int>(0, static (_, state) => state, verifySucceeded: null)
        );
    }



    [Fact]
    public async Task FakeRetryingExecutionStrategy_ExecuteAsync_throws_NotSupportedException()
    {
        var strategy = new FakeRetryingExecutionStrategy();

        await Assert.ThrowsAsync<NotSupportedException>
        (
            () => strategy.ExecuteAsync<int, int>(0, static (_, state, _) => Task.FromResult(state), verifySucceeded: null, CancellationToken.None)
        );
    }



    [Fact]
    public void FailingAuditValueSerializer_Columns_returns_the_string_serializer_columns()
    {
        var serializer = new FailingAuditValueSerializer();

        Assert.Equal
        (
            new StringAuditValueSerializer().Columns,
            serializer.Columns
        );
    }



    [Fact]
    public void FailingAuditValueSerializer_Decode_when_no_value_was_written_returns_null()
    {
        var serializer = new FailingAuditValueSerializer();

        Assert.Null(serializer.Decode(new InMemoryAuditValueBuffer(), "String"));
    }



    [Fact]
    public void DefaultCtorTestUserProvider_GetCurrentUser_returns_the_default_test_user()
    {
        Assert.Equal
        (
            new AuditUser("default-test-user"),
            new DefaultCtorTestUserProvider().GetCurrentUser()
        );
    }



    [Fact]
    public void CacheEntry_when_properties_are_set_returns_the_assigned_values()
    {
        var entry = new CacheEntry { CacheEntryId = 3, Payload = "payload" };

        Assert.Equal(3, entry.CacheEntryId);
        Assert.Equal("payload", entry.Payload);
    }
}
