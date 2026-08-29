using System.Diagnostics.CodeAnalysis;
using NpgsqlTypes;

namespace Wolfgang.AuditTrail.Npgsql;

/// <summary>
/// Excluded from code coverage because every member is a one-line pass-through to
/// <c>Npgsql.NpgsqlBinaryImporter</c>. Unit-testing these would amount to either
/// mocking <c>NpgsqlBinaryImporter</c> itself (proving the test setup, not our code)
/// or requiring a live PostgreSQL connection -- which is what the integration tests
/// in <c>Wolfgang.AuditTrail.EntityFrameworkCore.Npgsql.Tests.Integration</c> already
/// do against a Testcontainers-hosted PostgreSQL. Behavior coverage lives there.
/// </summary>
[ExcludeFromCodeCoverage]
internal sealed class NpgsqlBinaryImporterWrapper : INpgsqlBinaryImporter
{
    private readonly global::Npgsql.NpgsqlBinaryImporter _inner;

    public NpgsqlBinaryImporterWrapper(global::Npgsql.NpgsqlBinaryImporter inner)
    {
        _inner = inner;
    }

    public void StartRow() => _inner.StartRow();

    public Task StartRowAsync(CancellationToken cancellationToken) => _inner.StartRowAsync(cancellationToken);

    public void Write<T>(T value, NpgsqlDbType npgsqlDbType) => _inner.Write(value, npgsqlDbType);

    public Task WriteAsync<T>(T value, NpgsqlDbType npgsqlDbType, CancellationToken cancellationToken) =>
        _inner.WriteAsync(value, npgsqlDbType, cancellationToken);

    public void WriteNull() => _inner.WriteNull();

    public Task WriteNullAsync(CancellationToken cancellationToken) => _inner.WriteNullAsync(cancellationToken);

    public void Complete() => _inner.Complete();

    // CompleteAsync returns ValueTask<ulong> (rows written) upstream; the row count
    // isn't needed here, so it's discarded rather than widening the interface for it.
    public async Task CompleteAsync(CancellationToken cancellationToken) =>
        await _inner.CompleteAsync(cancellationToken).ConfigureAwait(false);

    public void Dispose() => _inner.Dispose();

    public ValueTask DisposeAsync() => _inner.DisposeAsync();
}
