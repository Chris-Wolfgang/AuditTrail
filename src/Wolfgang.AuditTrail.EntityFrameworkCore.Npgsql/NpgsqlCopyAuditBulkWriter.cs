using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Npgsql;
using NpgsqlTypes;
using Wolfgang.AuditTrail.Entities;

namespace Wolfgang.AuditTrail.Npgsql;

/// <summary>
/// <see cref="IAuditBulkWriter"/> implementation that writes <see cref="AuditHeader"/> /
/// <see cref="AuditDetail"/> rows via PostgreSQL's binary <c>COPY</c> protocol
/// (<see cref="NpgsqlConnection.BeginBinaryImportAsync(string, System.Threading.CancellationToken)"/>),
/// bypassing EF Core's per-entity insert for large audit batches.
/// </summary>
/// <remarks>
/// Writes over the <see cref="DbContext"/>'s own connection, so the copy participates
/// in whatever transaction <c>SaveChanges</c>/<c>SaveChangesAsync</c> already has open
/// — no separate transaction is started or committed here. Table and schema names are
/// read from the context's own EF model (via <see cref="RelationalEntityTypeExtensions.GetTableName"/> /
/// <see cref="RelationalEntityTypeExtensions.GetSchema"/>) rather than a duplicated
/// configuration surface, so a consumer's <c>AuditOptions.HeaderTableName</c> /
/// <c>DetailTableName</c> / <c>Schema</c> customization is honored automatically.
/// </remarks>
public sealed class NpgsqlCopyAuditBulkWriter : IAuditBulkWriter
{
    private const string HeaderColumns =
        "(\"HeaderId\", \"TransactionId\", \"AuditedAtUtc\", \"UserId\", \"OnBehalfOfUserId\", " +
        "\"EntityType\", \"EntityTable\", \"EntityKey\", \"Operation\")";

    // DetailId is intentionally excluded from the column list -- it's a DB-generated
    // identity column (ValueGeneratedOnAdd), and COPY leaves any column absent from
    // the target list to its default/identity generator.
    private const string DetailColumns = "(\"HeaderId\", \"ColumnName\", \"ValueText\", \"ValueType\")";

    private readonly INpgsqlBinaryImporterFactory _importerFactory;



    /// <summary>
    /// Initializes a new <see cref="NpgsqlCopyAuditBulkWriter"/>.
    /// </summary>
    public NpgsqlCopyAuditBulkWriter() : this(new NpgsqlBinaryImporterFactory())
    {
    }



    // Test-only injection seam -- see NpgsqlBinaryImporterWrapper/NpgsqlBinaryImporterFactory's
    // [ExcludeFromCodeCoverage] doc comments for why the real Npgsql-facing implementations
    // aren't unit-tested directly.
    internal NpgsqlCopyAuditBulkWriter(INpgsqlBinaryImporterFactory importerFactory)
    {
        _importerFactory = importerFactory;
    }



    /// <inheritdoc />
    public bool CanHandle(DbContext context)
    {
        ArgumentNullException.ThrowIfNull(context);

        return context.Database.ProviderName?.Contains("Npgsql", StringComparison.OrdinalIgnoreCase) == true;
    }



    /// <inheritdoc />
    public void Write(DbContext context, IReadOnlyList<AuditHeader> headers)
    {
        ArgumentNullException.ThrowIfNull(context);
        ArgumentNullException.ThrowIfNull(headers);

        if (headers.Count == 0)
        {
            return;
        }

        var connection = (NpgsqlConnection)context.Database.GetDbConnection();

        using (var writer = _importerFactory.BeginBinaryImport(connection, $"COPY {GetTableFqn<AuditHeader>(context)} {HeaderColumns} FROM STDIN (FORMAT BINARY)"))
        {
            foreach (var header in headers)
            {
                writer.StartRow();
                WriteHeaderRow(writer, header);
            }

            writer.Complete();
        }

        using (var writer = _importerFactory.BeginBinaryImport(connection, $"COPY {GetTableFqn<AuditDetail>(context)} {DetailColumns} FROM STDIN (FORMAT BINARY)"))
        {
            foreach (var header in headers)
            {
                foreach (var detail in header.Details)
                {
                    writer.StartRow();
                    WriteDetailRow(writer, detail);
                }
            }

            writer.Complete();
        }
    }



    /// <inheritdoc />
    public async Task WriteAsync(DbContext context, IReadOnlyList<AuditHeader> headers, CancellationToken cancellationToken)
    {
        ArgumentNullException.ThrowIfNull(context);
        ArgumentNullException.ThrowIfNull(headers);

        if (headers.Count == 0)
        {
            return;
        }

        var connection = (NpgsqlConnection)context.Database.GetDbConnection();

        await using (var writer = await _importerFactory.BeginBinaryImportAsync(
            connection, $"COPY {GetTableFqn<AuditHeader>(context)} {HeaderColumns} FROM STDIN (FORMAT BINARY)", cancellationToken).ConfigureAwait(false))
        {
            foreach (var header in headers)
            {
                await writer.StartRowAsync(cancellationToken).ConfigureAwait(false);
                await WriteHeaderRowAsync(writer, header, cancellationToken).ConfigureAwait(false);
            }

            await writer.CompleteAsync(cancellationToken).ConfigureAwait(false);
        }

        await using (var writer = await _importerFactory.BeginBinaryImportAsync(
            connection, $"COPY {GetTableFqn<AuditDetail>(context)} {DetailColumns} FROM STDIN (FORMAT BINARY)", cancellationToken).ConfigureAwait(false))
        {
            foreach (var header in headers)
            {
                foreach (var detail in header.Details)
                {
                    await writer.StartRowAsync(cancellationToken).ConfigureAwait(false);
                    await WriteDetailRowAsync(writer, detail, cancellationToken).ConfigureAwait(false);
                }
            }

            await writer.CompleteAsync(cancellationToken).ConfigureAwait(false);
        }
    }



    private static void WriteHeaderRow(INpgsqlBinaryImporter writer, AuditHeader header)
    {
        writer.Write(header.HeaderId, NpgsqlDbType.Uuid);
        writer.Write(header.TransactionId, NpgsqlDbType.Uuid);
        writer.Write(header.AuditedAtUtc, NpgsqlDbType.TimestampTz);
        writer.Write(header.UserId, NpgsqlDbType.Text);
        WriteNullableText(writer, header.OnBehalfOfUserId);
        writer.Write(header.EntityType, NpgsqlDbType.Text);
        writer.Write(header.EntityTable, NpgsqlDbType.Text);
        writer.Write(header.EntityKey, NpgsqlDbType.Text);
        writer.Write(EncodeOperation(header.Operation), NpgsqlDbType.Text);
    }



    private static async Task WriteHeaderRowAsync(INpgsqlBinaryImporter writer, AuditHeader header, CancellationToken cancellationToken)
    {
        await writer.WriteAsync(header.HeaderId, NpgsqlDbType.Uuid, cancellationToken).ConfigureAwait(false);
        await writer.WriteAsync(header.TransactionId, NpgsqlDbType.Uuid, cancellationToken).ConfigureAwait(false);
        await writer.WriteAsync(header.AuditedAtUtc, NpgsqlDbType.TimestampTz, cancellationToken).ConfigureAwait(false);
        await writer.WriteAsync(header.UserId, NpgsqlDbType.Text, cancellationToken).ConfigureAwait(false);
        await WriteNullableTextAsync(writer, header.OnBehalfOfUserId, cancellationToken).ConfigureAwait(false);
        await writer.WriteAsync(header.EntityType, NpgsqlDbType.Text, cancellationToken).ConfigureAwait(false);
        await writer.WriteAsync(header.EntityTable, NpgsqlDbType.Text, cancellationToken).ConfigureAwait(false);
        await writer.WriteAsync(header.EntityKey, NpgsqlDbType.Text, cancellationToken).ConfigureAwait(false);
        await writer.WriteAsync(EncodeOperation(header.Operation), NpgsqlDbType.Text, cancellationToken).ConfigureAwait(false);
    }



    private static void WriteDetailRow(INpgsqlBinaryImporter writer, AuditDetail detail)
    {
        writer.Write(detail.HeaderId, NpgsqlDbType.Uuid);
        writer.Write(detail.ColumnName, NpgsqlDbType.Text);
        WriteNullableText(writer, detail.ValueText);
        writer.Write(detail.ValueType, NpgsqlDbType.Text);
    }



    private static async Task WriteDetailRowAsync(INpgsqlBinaryImporter writer, AuditDetail detail, CancellationToken cancellationToken)
    {
        await writer.WriteAsync(detail.HeaderId, NpgsqlDbType.Uuid, cancellationToken).ConfigureAwait(false);
        await writer.WriteAsync(detail.ColumnName, NpgsqlDbType.Text, cancellationToken).ConfigureAwait(false);
        await WriteNullableTextAsync(writer, detail.ValueText, cancellationToken).ConfigureAwait(false);
        await writer.WriteAsync(detail.ValueType, NpgsqlDbType.Text, cancellationToken).ConfigureAwait(false);
    }



    private static void WriteNullableText(INpgsqlBinaryImporter writer, string? value)
    {
        if (value is null)
        {
            writer.WriteNull();
        }
        else
        {
            writer.Write(value, NpgsqlDbType.Text);
        }
    }



    private static Task WriteNullableTextAsync(INpgsqlBinaryImporter writer, string? value, CancellationToken cancellationToken)
    {
        return value is null
            ? writer.WriteNullAsync(cancellationToken)
            : writer.WriteAsync(value, NpgsqlDbType.Text, cancellationToken);
    }



    // Mirrors the AuditOperation -> char conversion ModelBuilderExtensions configures
    // on the EF model (HasConversion), since COPY writes bypass that conversion path
    // entirely and must reproduce it manually.
    private static string EncodeOperation(AuditOperation operation) => new((char)(byte)operation, 1);



    private static string GetTableFqn<TEntity>(DbContext context)
    {
        var entityType = context.Model.FindEntityType(typeof(TEntity))
            ?? throw new InvalidOperationException(
                $"{typeof(TEntity).Name} is not part of {context.GetType().Name}'s model -- " +
                "was ModelBuilderExtensions.ApplyAuditing called from OnModelCreating?");

        var table = entityType.GetTableName()
            ?? throw new InvalidOperationException($"{typeof(TEntity).Name} has no mapped table name.");
        var schema = entityType.GetSchema();

        return schema is null
            ? $"\"{table}\""
            : $"\"{schema}\".\"{table}\"";
    }
}
