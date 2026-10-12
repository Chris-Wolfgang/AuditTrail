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



    [Fact]
    public void In_returns_the_null_reader()
    {
        using var console = new StringConsole();

        Assert.Same(TextReader.Null, console.In);
    }



    [Fact]
    public void Redirect_flags_all_report_redirected()
    {
        using var console = new StringConsole();

        Assert.True(console.IsInputRedirected);
        Assert.True(console.IsOutputRedirected);
        Assert.True(console.IsErrorRedirected);
    }



    [Fact]
    public void Colors_when_set_return_the_assigned_values()
    {
        using var console = new StringConsole();

        console.ForegroundColor = ConsoleColor.Red;
        console.BackgroundColor = ConsoleColor.Blue;

        Assert.Equal(ConsoleColor.Red, console.ForegroundColor);
        Assert.Equal(ConsoleColor.Blue, console.BackgroundColor);
    }



    [Fact]
    public void ResetColor_does_not_throw()
    {
        using var console = new StringConsole();

        console.ResetColor();
    }
}
