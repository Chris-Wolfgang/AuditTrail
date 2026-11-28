using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
using Microsoft.EntityFrameworkCore.Storage;
using Wolfgang.AuditTrail.Internal;
using Wolfgang.AuditTrail.Tests.Unit.TestSupport;
using Xunit;

namespace Wolfgang.AuditTrail.Tests.Unit;



/// <summary>
/// Pins the failure path of the interceptor's FinishAudit / FinishAuditAsync:
/// a rollback that throws must not replace the original exception or skip
/// <c>ChangeTracker.Clear()</c>, and the async rollback must not be handed the
/// caller's (possibly cancelled) token.
/// </summary>
public class FinishAuditRollbackTests
{
    private const string OwnedTxItemsKey = "Wolfgang.AuditTrail.OwnedTransaction";



    [Fact]
    public void SavedChanges_when_commit_and_rollback_both_throw_surfaces_commit_exception_and_clears_tracker()
    {
        using var fixture = new InterceptorFixture();
        using var ctx = fixture.CreateContext();
        ctx.Customers.Add(new Customer { Name = "Alice" });

        var tx = new CommitAndRollbackThrowingTransaction();
        ctx.SetItem(OwnedTxItemsKey, tx);

        var sut = new AuditSaveChangesInterceptor(fixture.UserProvider, fixture.Options);

        var ex = Assert.Throws<InvalidOperationException>(() => sut.SavedChanges(CompletedEventData(ctx), result: 1));

        Assert.Equal(CommitAndRollbackThrowingTransaction.CommitMessage, ex.Message);
        Assert.True(tx.RollbackAttempted);
        Assert.True(tx.Disposed);
        Assert.Empty(ctx.ChangeTracker.Entries());
    }



    [Fact]
    public async Task SavedChangesAsync_when_commit_and_rollback_both_throw_surfaces_commit_exception_and_clears_tracker()
    {
        using var fixture = new InterceptorFixture();
        await using var ctx = fixture.CreateContext();
        ctx.Customers.Add(new Customer { Name = "Alice" });

        var tx = new CommitAndRollbackThrowingTransaction();
        ctx.SetItem(OwnedTxItemsKey, tx);

        var sut = new AuditSaveChangesInterceptor(fixture.UserProvider, fixture.Options);

        var cancelled = new CancellationToken(canceled: true);

        var ex = await Assert.ThrowsAsync<InvalidOperationException>
        (
            async () => await sut.SavedChangesAsync(CompletedEventData(ctx), result: 1, cancelled)
        );

        Assert.Equal(CommitAndRollbackThrowingTransaction.CommitMessage, ex.Message);
        Assert.True(tx.RollbackAttempted);
        Assert.False(tx.RollbackToken.CanBeCanceled);
        Assert.True(tx.Disposed);
        Assert.Empty(ctx.ChangeTracker.Entries());
    }



    [Fact]
    public async Task SaveChangesFailedAsync_when_token_is_cancelled_rolls_back_with_an_uncancellable_token()
    {
        using var fixture = new InterceptorFixture();
        await using var ctx = fixture.CreateContext();

        var tx = new CommitAndRollbackThrowingTransaction();
        ctx.SetItem(OwnedTxItemsKey, tx);

        var sut = new AuditSaveChangesInterceptor(fixture.UserProvider, fixture.Options);

        var cancelled = new CancellationToken(canceled: true);

        var errorData = new DbContextErrorEventData
        (
            eventDefinition:  null!,
            messageGenerator: NoDiagnosticMessage.Format,
            context:          ctx,
            exception:        new OperationCanceledException(cancelled)
        );

        await sut.SaveChangesFailedAsync(errorData, cancelled);

        Assert.True(tx.RollbackAttempted);
        Assert.False(tx.RollbackToken.CanBeCanceled);
        Assert.True(tx.Disposed);
    }



    private static SaveChangesCompletedEventData CompletedEventData(DbContext ctx)
        => new
        (
            eventDefinition:    null!,
            messageGenerator:   NoDiagnosticMessage.Format,
            context:            ctx,
            entitiesSavedCount: 1
        );



    /// <summary>
    /// Transaction whose commit fails (standing in for any audit-pass failure)
    /// and whose rollback fails too.
    /// </summary>
    private sealed class CommitAndRollbackThrowingTransaction : IDbContextTransaction
    {
        public const string CommitMessage = "simulated audit-pass failure";

        public bool RollbackAttempted { get; private set; }

        public CancellationToken RollbackToken { get; private set; }

        public bool Disposed { get; private set; }

        public Guid TransactionId { get; } = Guid.NewGuid();

        public void Commit() => throw new InvalidOperationException(CommitMessage);

        public Task CommitAsync(CancellationToken cancellationToken = default)
            => throw new InvalidOperationException(CommitMessage);

        public void Rollback()
        {
            RollbackAttempted = true;
            throw new InvalidOperationException("simulated rollback failure");
        }

        public Task RollbackAsync(CancellationToken cancellationToken = default)
        {
            RollbackAttempted = true;
            RollbackToken = cancellationToken;
            throw new InvalidOperationException("simulated rollback failure");
        }

        public void Dispose() => Disposed = true;

        public ValueTask DisposeAsync()
        {
            Disposed = true;
            return ValueTask.CompletedTask;
        }
    }
}
