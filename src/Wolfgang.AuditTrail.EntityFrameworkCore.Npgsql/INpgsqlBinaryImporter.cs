using NpgsqlTypes;

namespace Wolfgang.AuditTrail.Npgsql;

/// <summary>
/// Abstraction over <c>Npgsql.NpgsqlBinaryImporter</c> to enable unit testing
/// <see cref="NpgsqlCopyAuditBulkWriter"/>'s row-building logic without a real
/// PostgreSQL connection.
/// </summary>
internal interface INpgsqlBinaryImporter : IDisposable, IAsyncDisposable
{
    void StartRow();

    Task StartRowAsync(CancellationToken cancellationToken);

    void Write<T>(T value, NpgsqlDbType npgsqlDbType);

    Task WriteAsync<T>(T value, NpgsqlDbType npgsqlDbType, CancellationToken cancellationToken);

    void WriteNull();

    Task WriteNullAsync(CancellationToken cancellationToken);

    void Complete();

    Task CompleteAsync(CancellationToken cancellationToken);
}
