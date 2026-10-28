namespace Wolfgang.AuditTrail.Cli;

internal static class ExitCode
{
    internal const int Success = 0;
    internal const int UnhandledException = 10;
    internal const int ApplicationError = 11;

    /// <summary>The command was cancelled (Ctrl+C). 130 is the shell convention for SIGINT.</summary>
    internal const int Cancelled = 130;
}