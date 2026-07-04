using System.Linq;
using Microsoft.EntityFrameworkCore;
using Wolfgang.AuditTrail.Entities;
using Wolfgang.AuditTrail.Tests.Unit.TestSupport;
using Xunit;

namespace Wolfgang.AuditTrail.Tests.Unit;



/// <summary>
/// Pins the branch behaviour of <c>AuditCapture</c> that mutation testing found
/// under-asserted: entity/property <see cref="NotAuditedAttribute"/> skips, the
/// "update touched only [NotAudited] columns → no header" short-circuit, and the
/// Delete key/value path. Assertions check the *absence* of rows, not just presence.
/// </summary>
public sealed class AuditCaptureBranchTests
{
    [Fact]
    public async Task Entity_marked_NotAudited_produces_no_audit_rows()
    {
        using var fixture = new AuditFixture();
        await using (var ctx = fixture.CreateContext())
        {
            ctx.CacheEntries.Add(new CacheEntry { Payload = "hot" });
            await fixture.SaveAsync(ctx);
        }

        await using var verify = fixture.CreateContext();
        Assert.Empty(await verify.Set<AuditHeader>().ToListAsync());
        Assert.Empty(await verify.Set<AuditDetail>().ToListAsync());
    }



    [Fact]
    public async Task Update_touching_only_a_NotAudited_property_produces_no_header()
    {
        using var fixture = new AuditFixture();
        int id;
        await using (var ctx = fixture.CreateContext())
        {
            var c = new Customer { Name = "Alice", Email = "a@x.com" };
            ctx.Customers.Add(c);
            await fixture.SaveAsync(ctx);
            id = c.CustomerId;
        }

        await using (var ctx = fixture.CreateContext())
        {
            var c = await ctx.Customers.SingleAsync(x => x.CustomerId == id);
            c.Notes = "changed only the [NotAudited] column";
            await fixture.SaveAsync(ctx);
        }

        // One header for the insert; the Notes-only update writes nothing more.
        await using var verify = fixture.CreateContext();
        var headers = await verify.Set<AuditHeader>().ToListAsync();
        Assert.Equal(AuditOperation.Insert, Assert.Single(headers).Operation);
    }



    [Fact]
    public async Task Update_excludes_NotAudited_columns_from_detail_rows()
    {
        using var fixture = new AuditFixture();
        int id;
        await using (var ctx = fixture.CreateContext())
        {
            var c = new Customer { Name = "Bob", Email = "b@x.com", Notes = "secret" };
            ctx.Customers.Add(c);
            await fixture.SaveAsync(ctx);
            id = c.CustomerId;
        }

        await using (var ctx = fixture.CreateContext())
        {
            var c = await ctx.Customers.SingleAsync(x => x.CustomerId == id);
            c.Name = "Bobby";
            c.Notes = "new secret";
            await fixture.SaveAsync(ctx);
        }

        await using var verify = fixture.CreateContext();
        var updateHeader = await verify.Set<AuditHeader>()
            .SingleAsync(h => h.Operation == AuditOperation.Update);
        var columns = await verify.Set<AuditDetail>()
            .Where(d => d.HeaderId == updateHeader.HeaderId)
            .Select(d => d.ColumnName)
            .ToListAsync();

        Assert.Contains(nameof(Customer.Name), columns);
        Assert.DoesNotContain(nameof(Customer.Notes), columns);
    }



    [Fact]
    public async Task Delete_writes_a_delete_header_keyed_by_the_deleted_entity()
    {
        using var fixture = new AuditFixture(captureDeletedValues: true);
        int id;
        await using (var ctx = fixture.CreateContext())
        {
            var c = new Customer { Name = "Carol", Email = "c@x.com" };
            ctx.Customers.Add(c);
            await fixture.SaveAsync(ctx);
            id = c.CustomerId;
        }

        await using (var ctx = fixture.CreateContext())
        {
            var c = await ctx.Customers.SingleAsync(x => x.CustomerId == id);
            ctx.Customers.Remove(c);
            await fixture.SaveAsync(ctx);
        }

        await using var verify = fixture.CreateContext();
        var deleteHeader = await verify.Set<AuditHeader>()
            .SingleAsync(h => h.Operation == AuditOperation.Delete);
        // The Delete path keys off the pre-save snapshot, so the header records
        // the deleted row's actual key.
        Assert.Equal(id.ToString(System.Globalization.CultureInfo.InvariantCulture), deleteHeader.EntityKey);
    }



    [Fact]
    public async Task Audit_entities_are_not_themselves_audited()
    {
        // Saving one user entity writes exactly one header — the AuditHeader /
        // AuditDetail rows it creates must not recursively produce audit rows.
        using var fixture = new AuditFixture();
        await using (var ctx = fixture.CreateContext())
        {
            ctx.Customers.Add(new Customer { Name = "Dave", Email = "d@x.com" });
            await fixture.SaveAsync(ctx);
        }

        await using var verify = fixture.CreateContext();
        Assert.Single(await verify.Set<AuditHeader>().ToListAsync());
    }
}
