using Microsoft.EntityFrameworkCore.Diagnostics;

namespace Wolfgang.AuditTrail.Tests.Unit.TestSupport;



/// <summary>
/// Shared <c>messageGenerator</c> for hand-built EF Core event data. The tests that
/// construct <see cref="EventData"/> directly never trigger diagnostic-message
/// formatting, so this method group is pinned by its own test instead.
/// </summary>
internal static class NoDiagnosticMessage
{
    [System.Diagnostics.CodeAnalysis.SuppressMessage("Roslynator", "RCS1163", Justification = "Matches the messageGenerator signature.")]
    [System.Diagnostics.CodeAnalysis.SuppressMessage("Sonar", "S1172", Justification = "Matches the messageGenerator signature.")]
    public static string Format(EventDefinitionBase definition, EventData eventData) => string.Empty;
}
