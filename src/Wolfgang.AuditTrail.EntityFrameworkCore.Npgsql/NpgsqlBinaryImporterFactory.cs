using System.Diagnostics.CodeAnalysis;
using Npgsql;

namespace Wolfgang.AuditTrail.Npgsql;

/// <summary>
/// Excluded from code coverage for the same reason as
/// <see cref="NpgsqlBinaryImporterWrapper"/>: a one-line <c>BeginBinaryImport</c> /
/// <c>BeginBinaryImportAsync</c> pass-through whose only meaningful test is "does it
/// produce a working importer against a real server?", which only answers itself
/// against a real PostgreSQL connection -- covered by the integration suite instead.
/// </summary>
[ExcludeFromCodeCoverage]
internal sealed class NpgsqlBinaryImporterFactory : INpgsqlBinaryImporterFactory
{
    public INpgsqlBinaryImporter BeginBinaryImport(NpgsqlConnection connection, string copyFromCommand) =>
        new NpgsqlBinaryImporterWrapper(connection.BeginBinaryImport(copyFromCommand));

    public async Task<INpgsqlBinaryImporter> BeginBinaryImportAsync(NpgsqlConnection connection, string copyFromCommand, CancellationToken cancellationToken)
    {
        var importer = await connection.BeginBinaryImportAsync(copyFromCommand, cancellationToken).ConfigureAwait(false);
        return new NpgsqlBinaryImporterWrapper(importer);
    }
}
