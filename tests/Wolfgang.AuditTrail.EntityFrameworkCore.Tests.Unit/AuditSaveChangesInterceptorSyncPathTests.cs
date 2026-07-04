using System.Linq;
using Microsoft.EntityFrameworkCore;
using Wolfgang.AuditTrail.Entities;
using Wolfgang.AuditTrail.Tests.Unit.TestSupport;
using Xunit;

namespace Wolfgang.AuditTrail.Tests.Unit;



/// <summary>
/// Exercises the <see cref="AuditSaveChangesInterceptor"/> **synchronous** path
/// (<c>SavingChanges</c> → <c>BeginAudit</c> → <c>SavedChanges</c> →
/// <c>FinishAudit</c>), which the async suite doesn't reach. Mirrors the async
/// insert/update/delete assertions via <c>SaveChanges()</c> so the sync
/// begin/finish/commit orchestration is asserted, not just executed.
/// </summary>
public sealed class AuditSaveChangesInterceptorSyncPathTests
{
    [Fact]
    public void SaveChanges_sync_writes_audit_rows_for_an_insert()
    {
        using var fixture = new InterceptorFixture();

        using (var ctx = fixture.CreateContext())
        {
            ctx.Customers.Add(new Customer { Name = "Alice", Email = "alice@example.com" });
            ctx.SaveChanges();
        }

        using var verify = fixture.CreateContext();
        var header = verify.Set<AuditHeader>().Include(h => h.Details).Single();

        Assert.Equal(AuditOperation.Insert, header.Operation);
        Assert.Equal("test-user", header.UserId);
        Assert.Contains("Customer", header.EntityType, StringComparison.Ordinal);
        Assert.Equal("1", header.EntityKey);

        var byColumn = header.Details.ToDictionary(d => d.ColumnName, StringComparer.Ordinal);
        Assert.Equal("Alice", byColumn["Name"].ValueText);
        Assert.Equal("alice@example.com", byColumn["Email"].ValueText);
    }



    [Fact]
    public void SaveChanges_sync_recursion_guard_produces_exactly_one_header()
    {
        using var fixture = new InterceptorFixture();

        using (var ctx = fixture.CreateContext())
        {
            ctx.Customers.Add(new Customer { Name = "Solo" });
            ctx.SaveChanges();
        }

        using var verify = fixture.CreateContext();
        Assert.Single(verify.Set<AuditHeader>().ToList());
    }



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
