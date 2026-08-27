using System.Diagnostics.CodeAnalysis;
using NpgsqlTypes;

namespace Wolfgang.AuditTrail.Npgsql.Tests.Unit.TestSupport;

/// <summary>
/// Records every row/value written instead of talking to a real PostgreSQL server,
/// so <see cref="NpgsqlCopyAuditBulkWriter"/>'s row-building logic (column order,
/// null handling, the <c>Operation</c> char encoding) can be asserted directly.
/// </summary>
[ExcludeFromCodeCoverage]
internal sealed class FakeNpgsqlBinaryImporter : INpgsqlBinaryImporter
{
    public List<List<object?>> Rows { get; } = new();

    public bool Completed { get; private set; }

    public bool Disposed { get; private set; }

    private List<object?>? _currentRow;



    public void StartRow()
    {
        _currentRow = new List<object?>();
        Rows.Add(_currentRow);
    }

    public Task StartRowAsync(CancellationToken cancellationToken)
    {
        StartRow();
        return Task.CompletedTask;
    }

    public void Write<T>(T value, NpgsqlDbType npgsqlDbType) => CurrentRow().Add(value);

    public Task WriteAsync<T>(T value, NpgsqlDbType npgsqlDbType, CancellationToken cancellationToken)
    {
        Write(value, npgsqlDbType);
        return Task.CompletedTask;
    }

    public void WriteNull() => CurrentRow().Add(null);

    public Task WriteNullAsync(CancellationToken cancellationToken)
    {
        WriteNull();
        return Task.CompletedTask;
    }

    public void Complete() => Completed = true;

    public Task CompleteAsync(CancellationToken cancellationToken)
    {
        Complete();
        return Task.CompletedTask;
    }

    public void Dispose() => Disposed = true;

    public ValueTask DisposeAsync()
    {
        Disposed = true;
        return ValueTask.CompletedTask;
    }



    private List<object?> CurrentRow() =>
        _currentRow ?? throw new InvalidOperationException("Write called before StartRow.");
}
