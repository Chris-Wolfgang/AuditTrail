using Wolfgang.AuditTrail.Tests.Integration.TestSupport;

namespace Wolfgang.AuditTrail.Tests.Integration;

public class Db2AuditTests : ProviderAuditTestsBase<Db2Fixture>
{
    public Db2AuditTests(Db2Fixture fixture) : base(fixture) { }
}
