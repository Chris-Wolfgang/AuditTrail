using System.Linq;
using Microsoft.EntityFrameworkCore;
using Wolfgang.AuditTrail.Entities;
using Wolfgang.AuditTrail.Tests.Unit.TestSupport;
using Xunit;

namespace Wolfgang.AuditTrail.Tests.Unit;



/// <summary>
/// Extends the interceptor's **synchronous** coverage to the update and delete
/// operations. The sync insert + ambient-transaction rollback are already covered
/// in <c>AuditSaveChangesInterceptorTests</c>; these add the sync
/// <c>SavingChanges → SavedChanges → FinishAudit</c> path for updates and deletes
/// (incl. captured delete values) so those branches are asserted, not just executed.
/// </summary>
public sealed class AuditSaveChangesInterceptorSyncPathTests
{
    [Fact]
    public void SaveChanges_sync_writes_audit_rows_for_an_update()
    {
        using var fixture = new InterceptorFixture();

        using (var seed = fixture.CreateContext())
        {
            seed.Customers.Add(new Customer { Name = "Alice", Email = "alice@example.com" });
            seed.SaveChanges();
        }

        using (var update = fixture.CreateContext())
        {
            var c = update.Customers.Single();
            c.Email = "alice@new.example.com";
            update.SaveChanges();
        }

        using var verify = fixture.CreateContext();
        var updateHeader = verify.Set<AuditHeader>().Include(h => h.Details)
            .Single(h => h.Operation == AuditOperation.Update);

        var detail = Assert.Single(updateHeader.Details);
        Assert.Equal("Email", detail.ColumnName);
        Assert.Equal("alice@new.example.com", detail.ValueText);
    }



    [Fact]
    public void SaveChanges_sync_writes_a_delete_header()
    {
        using var fixture = new InterceptorFixture();

        using (var seed = fixture.CreateContext())
        {
            seed.Customers.Add(new Customer { Name = "Alice" });
            seed.SaveChanges();
        }

        using (var delete = fixture.CreateContext())
        {
            delete.Customers.Remove(delete.Customers.Single());
            delete.SaveChanges();
        }

        using var verify = fixture.CreateContext();
        var deleteHeader = verify.Set<AuditHeader>().Include(h => h.Details)
            .Single(h => h.Operation == AuditOperation.Delete);

        Assert.Equal("test-user", deleteHeader.UserId);
        Assert.Equal("1", deleteHeader.EntityKey);
        Assert.Empty(deleteHeader.Details); // CaptureDeletedValues defaults to false
    }



    [Fact]
    public void SaveChanges_sync_delete_with_captured_values_records_the_old_values()
    {
        using var fixture = new InterceptorFixture(captureDeletedValues: true);

        using (var seed = fixture.CreateContext())
        {
            seed.Customers.Add(new Customer { Name = "Alice", Email = "a@x.com" });
            seed.SaveChanges();
        }

        using (var delete = fixture.CreateContext())
        {
            delete.Customers.Remove(delete.Customers.Single());
            delete.SaveChanges();
        }

        using var verify = fixture.CreateContext();
        var deleteHeader = verify.Set<AuditHeader>().Include(h => h.Details)
            .Single(h => h.Operation == AuditOperation.Delete);

        var byColumn = deleteHeader.Details.ToDictionary(d => d.ColumnName, StringComparer.Ordinal);
        Assert.Equal("Alice", byColumn["Name"].ValueText);
    }
}
