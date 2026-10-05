using Wolfgang.AuditTrail.Npgsql.Tests.Integration.TestSupport;
using Xunit;

namespace Wolfgang.AuditTrail.Npgsql.Tests.Integration;

/// <summary>
/// Pins the TestSupport members the COPY tests do not reach on their own (EF writes
/// the generated key through the backing field, never the setter).
/// </summary>
public sealed class TestSupportTests
{
    [Fact]
    public void Customer_when_CustomerId_is_set_returns_the_assigned_value()
    {
        var customer = new Customer { CustomerId = 5 };

        Assert.Equal(5, customer.CustomerId);
    }
}
