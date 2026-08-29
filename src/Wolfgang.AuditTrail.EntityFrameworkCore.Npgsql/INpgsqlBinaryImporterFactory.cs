using Npgsql;

namespace Wolfgang.AuditTrail.Npgsql;

/// <summary>
/// Abstraction over <see cref="NpgsqlConnection.BeginBinaryImport(string)"/> /
/// <see cref="NpgsqlConnection.BeginBinaryImportAsync(string, CancellationToken)"/> to
/// enable unit testing <see cref="NpgsqlCopyAuditBulkWriter"/> without a real
/// PostgreSQL connection.
/// </summary>
internal interface INpgsqlBinaryImporterFactory
{
    INpgsqlBinaryImporter BeginBinaryImport(NpgsqlConnection connection, string copyFromCommand);

    Task<INpgsqlBinaryImporter> BeginBinaryImportAsync(NpgsqlConnection connection, string copyFromCommand, CancellationToken cancellationToken);
}
