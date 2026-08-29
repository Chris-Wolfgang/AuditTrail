using System.Diagnostics.CodeAnalysis;
using Npgsql;

namespace Wolfgang.AuditTrail.Npgsql.Tests.Unit.TestSupport;

/// <summary>
/// Records every COPY command text passed to it and hands back a
/// <see cref="FakeNpgsqlBinaryImporter"/> instead of opening a real PostgreSQL
/// connection. Never touches <paramref name="connection"/> — the real
/// <see cref="NpgsqlConnection"/> instance is only there to match the interface
/// shape callers depend on.
/// </summary>
[ExcludeFromCodeCoverage]
internal sealed class FakeNpgsqlBinaryImporterFactory : INpgsqlBinaryImporterFactory
{
    public List<string> CopyCommands { get; } = new();

    public List<FakeNpgsqlBinaryImporter> CreatedImporters { get; } = new();



    public INpgsqlBinaryImporter BeginBinaryImport(NpgsqlConnection connection, string copyFromCommand)
    {
        CopyCommands.Add(copyFromCommand);
        var importer = new FakeNpgsqlBinaryImporter();
        CreatedImporters.Add(importer);
        return importer;
    }

    public Task<INpgsqlBinaryImporter> BeginBinaryImportAsync(NpgsqlConnection connection, string copyFromCommand, CancellationToken cancellationToken)
    {
        return Task.FromResult(BeginBinaryImport(connection, copyFromCommand));
    }
}
