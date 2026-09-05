using Wolfgang.AuditTrail.Tests.Integration.TestSupport;

namespace Wolfgang.AuditTrail.Tests.Integration;

public class OracleAuditTests : ProviderAuditTestsBase<OracleFixture>
{
    public OracleAuditTests(OracleFixture fixture) : base(fixture) { }
}
