using System.Diagnostics.CodeAnalysis;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;

namespace Wolfgang.AuditTrail.Cli.Framework;



internal enum ConfigurationFileMethod
{
    SingleFile,
}



// ReSharper disable once InconsistentNaming
[ExcludeFromCodeCoverage]
internal static class IHostBuilderExtensions
{
    /// <summary>
    /// Adds <c>AppSettings.json</c> to the host's configuration, layered with
    /// environment variables on top.
    /// </summary>
    /// <param name="builder">Host builder to extend.</param>
    /// <param name="method">
    /// Which file-loading strategy to use. Only <see cref="ConfigurationFileMethod.SingleFile"/>
    /// is supported today; the enum is kept so a future per-environment overlay
    /// can be wired in without changing call sites.
    /// </param>
    /// <param name="optional">Whether the JSON file is required to exist.</param>
    /// <param name="reloadOnChange">Whether to re-read the file when it changes on disk.</param>
    /// <exception cref="ArgumentNullException">If <paramref name="builder"/> is <c>null</c>.</exception>
    /// <exception cref="ArgumentOutOfRangeException">If <paramref name="method"/> is not a recognised value.</exception>
    public static IHostBuilder AddConfigurationFile
    (
        this IHostBuilder builder,
        ConfigurationFileMethod method,
        bool optional = false,
        bool reloadOnChange = false
    )
    {
        ArgumentNullException.ThrowIfNull(builder);

        return method switch
        {
            ConfigurationFileMethod.SingleFile => AddSingleConfigFile(builder, optional, reloadOnChange),
            _ => throw new ArgumentOutOfRangeException(nameof(method), method, null),
        };
    }



    private static IHostBuilder AddSingleConfigFile
    (
        IHostBuilder builder,
        bool optional,
        bool reloadOnChange
    )
    {
        builder.ConfigureAppConfiguration((_, configurationBuilder) =>
        {
            configurationBuilder
                .SetBasePath(AppContext.BaseDirectory)
                .AddInMemoryCollection(DefaultLogFileSettings())
                .AddJsonFile("AppSettings.json", optional, reloadOnChange)
                .AddEnvironmentVariables();
        });

        return builder;
    }



    // Default path for the File sink (WriteTo index 1 in AppSettings.json): the
    // per-user temp directory, so running `audittrail migrate` from a repository
    // root no longer drops a logs/ folder there. Added ahead of AppSettings.json,
    // so a "path" set in that file (or via environment variables) still wins.
    private static Dictionary<string, string?> DefaultLogFileSettings()
        => new(StringComparer.Ordinal)
        {
            ["Serilog:WriteTo:1:Args:path"] = Path.Combine(Path.GetTempPath(), "audittrail", "logs", "Wolfgang.AuditTrail.Cli-.log"),
        };
}
