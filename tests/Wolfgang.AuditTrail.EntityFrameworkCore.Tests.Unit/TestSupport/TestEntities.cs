namespace Wolfgang.AuditTrail.Tests.Unit.TestSupport;

public class Customer
{
    public int CustomerId { get; set; }

    public string Name { get; set; } = string.Empty;

    public string? Email { get; set; }

    [NotAudited]
    public string? Notes { get; set; }
}

[NotAudited]
public class CacheEntry
{
    public int CacheEntryId { get; set; }

    public string Payload { get; set; } = string.Empty;
}

public class OrderLine
{
    public int OrderId { get; set; }

    public int LineNumber { get; set; }

    public string Description { get; set; } = string.Empty;
}
