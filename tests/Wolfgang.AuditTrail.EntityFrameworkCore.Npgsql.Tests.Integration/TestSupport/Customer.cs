namespace Wolfgang.AuditTrail.Npgsql.Tests.Integration.TestSupport;

public class Customer
{
    public int CustomerId { get; set; }

    public string Name { get; set; } = string.Empty;

    public string? Email { get; set; }
}
