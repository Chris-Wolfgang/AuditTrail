using System.Diagnostics.CodeAnalysis;
using McMaster.Extensions.CommandLineUtils;

namespace Wolfgang.AuditTrail.Cli.Tests.Unit.TestSupport;



/// <summary>
/// Minimal <see cref="IConsole"/> implementation that captures stdout and
/// stderr into <see cref="StringWriter"/>s the test can read. Avoids dragging
/// in McMaster's TestConsole and its sibling abstractions.
/// </summary>
internal sealed class StringConsole : IConsole, IDisposable
{
    private readonly StringWriter _out = new();
    private readonly StringWriter _err = new();

    public void Dispose()
    {
        _out.Dispose();
        _err.Dispose();
    }

    public TextWriter Out => _out;

    public TextWriter Error => _err;

    // Hardcoded IConsole interface compliance -- Migrate is driven directly
    // in tests (bypassing McMaster's CommandLineApplication engine, which is
    // what would read these for colored/redirect-aware output), and none of
    // them have behavior worth a round-trip test.
    [ExcludeFromCodeCoverage(Justification = "Hardcoded IConsole compliance; not read by directly-driven Migrate tests.")]
    public TextReader In => TextReader.Null;

    [ExcludeFromCodeCoverage(Justification = "Hardcoded IConsole compliance; not read by directly-driven Migrate tests.")]
    public bool IsInputRedirected => true;

    [ExcludeFromCodeCoverage(Justification = "Hardcoded IConsole compliance; not read by directly-driven Migrate tests.")]
    public bool IsOutputRedirected => true;

    [ExcludeFromCodeCoverage(Justification = "Hardcoded IConsole compliance; not read by directly-driven Migrate tests.")]
    public bool IsErrorRedirected => true;

    [ExcludeFromCodeCoverage(Justification = "Hardcoded IConsole compliance; not read by directly-driven Migrate tests.")]
    public ConsoleColor ForegroundColor { get; set; }

    [ExcludeFromCodeCoverage(Justification = "Hardcoded IConsole compliance; not read by directly-driven Migrate tests.")]
    public ConsoleColor BackgroundColor { get; set; }

    public event ConsoleCancelEventHandler? CancelKeyPress;

    public string StdOut => _out.ToString();

    public string StdErr => _err.ToString();

    [ExcludeFromCodeCoverage(Justification = "Hardcoded IConsole compliance; not read by directly-driven Migrate tests.")]
    public void ResetColor() { }

    // The event needs at least one publisher to avoid "never used" warnings;
    // tests don't trigger Ctrl-C, so this is exercised only by the analyzer.
    internal void RaiseCancelKeyPressForCoverage() => CancelKeyPress?.Invoke(this, null!);
}
