using McMaster.Extensions.CommandLineUtils;
using Wolfgang.AuditTrail.Cli.Model;

namespace Wolfgang.AuditTrail.Cli.Service;



/// <summary>
/// Executes the <c>migrate</c> subcommand. <see cref="SchemaMigrateRunner"/> is the
/// real implementation, backed by <c>AuditSchemaMigrator</c>.
/// </summary>
internal interface IMigrateRunner
{
    Task RunAsync(MigrateOptions options, IConsole console, CancellationToken cancellationToken);
}
