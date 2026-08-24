using Xunit;

namespace Wolfgang.AuditTrail.Cli.Tests.Unit.TestSupport;



/// <summary>
/// Covers <see cref="StringConsole"/>'s own behavior — <see cref="MigrateTests"/>
/// only ever reads <see cref="StringConsole.StdErr"/> (the CLI writes exclusively
/// to <c>Error</c>, never <c>Out</c>), so the writer round-trip and the two
/// members that exist purely to satisfy the analyzer needed their own coverage.
/// </summary>
public class StringConsoleTests
{
    [Fact]
    public void Out_written_text_is_readable_through_StdOut()
    {
        using var console = new StringConsole();

        console.Out.Write("hello");

        Assert.Equal("hello", console.StdOut);
    }



    [Fact]
    public void Dispose_does_not_throw()
    {
        var console = new StringConsole();

        console.Dispose();
    }



    [Fact]
    public void RaiseCancelKeyPressForCoverage_does_not_throw_when_invoked()
    {
        using var console = new StringConsole();

        console.RaiseCancelKeyPressForCoverage();
    }
}
