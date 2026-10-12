using Microsoft.EntityFrameworkCore;
using Wolfgang.AuditTrail.Npgsql.Tests.Unit.TestSupport;
using Wolfgang.AuditTrail.Serializers;
using Xunit;

namespace Wolfgang.AuditTrail.Npgsql.Tests.Unit;

/// <summary>
/// Pins the members of the TestSupport doubles that the bulk-writer tests do not
/// reach on their own, so the test assembly reports 100% line coverage without
/// excluding those types.
/// </summary>
public sealed class TestSupportTests
{
    [Fact]
    public void Customer_when_properties_are_set_returns_the_assigned_values()
    {
        var customer = new Customer { CustomerId = 7, Name = "Alice", Email = "alice@example.com" };

        Assert.Equal(7, customer.CustomerId);
        Assert.Equal("Alice", customer.Name);
        Assert.Equal("alice@example.com", customer.Email);
    }



    [Fact]
    public void GetCurrentUser_when_constructed_with_both_ids_returns_them()
    {
        var provider = new StaticAuditUserProvider("user", "on-behalf-of");

        Assert.Equal
        (
            new AuditUser("user", "on-behalf-of"),
            provider.GetCurrentUser()
        );
    }



    [Fact]
    public void Customers_when_accessed_returns_the_Customer_set()
    {
        var options = new DbContextOptionsBuilder<TestDbContext>()
            .UseSqlite("Filename=:memory:")
            .Options;
        var auditOptions = new AuditOptions
        {
            ValueSerializer = new StringAuditValueSerializer(),
            EntityKeySerializer = new PipeDelimitedEntityKeySerializer(),
        };
        using var context = new TestDbContext(options, new StaticAuditUserProvider("unit-tests@example.com"), auditOptions);

        Assert.Equal
        (
            typeof(Customer),
            context.Customers.EntityType.ClrType
        );
    }



    [Fact]
    public async Task WriteNullAsync_when_a_row_is_started_appends_null_to_the_row()
    {
        var importer = new FakeNpgsqlBinaryImporter();
        importer.StartRow();

        await importer.WriteNullAsync(CancellationToken.None);

        Assert.Equal
        (
            new object?[] { null },
            importer.Rows.Single()
        );
    }
}
