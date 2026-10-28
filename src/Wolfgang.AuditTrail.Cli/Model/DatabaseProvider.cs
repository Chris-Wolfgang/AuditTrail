namespace Wolfgang.AuditTrail.Cli.Model;



/// <summary>
/// Database engine families the CLI knows how to target. Each maps to an EF Core
/// provider the CLI references directly; there are no separate migrations packages.
/// </summary>
internal enum DatabaseProvider
{
    Unknown = 0,
    SqlServer,
    PostgreSql,
    MySql,
    Sqlite,
}
