using Microsoft.EntityFrameworkCore;
using Wolfgang.AuditTrail.Entities;
using Wolfgang.AuditTrail.Npgsql.Tests.Unit.TestSupport;
using Wolfgang.AuditTrail.Serializers;
using Xunit;

namespace Wolfgang.AuditTrail.Npgsql.Tests.Unit;

public sealed class NpgsqlCopyAuditBulkWriterTests
{
    private static TestDbContext CreateNpgsqlContext()
    {
        var options = new DbContextOptionsBuilder<TestDbContext>()
            .UseNpgsql("Host=unused;Database=unused;Username=unused;Password=unused")
            .Options;
        var auditOptions = new AuditOptions
        {
            ValueSerializer = new StringAuditValueSerializer(),
            EntityKeySerializer = new PipeDelimitedEntityKeySerializer(),
        };
        return new TestDbContext(options, new StaticAuditUserProvider("unit-tests@example.com"), auditOptions);
    }



    private static TestDbContext CreateSqliteContext()
    {
        var options = new DbContextOptionsBuilder<TestDbContext>()
            .UseSqlite("Filename=:memory:")
            .Options;
        var auditOptions = new AuditOptions
        {
            ValueSerializer = new StringAuditValueSerializer(),
            EntityKeySerializer = new PipeDelimitedEntityKeySerializer(),
        };
        return new TestDbContext(options, new StaticAuditUserProvider("unit-tests@example.com"), auditOptions);
    }



    private static AuditHeader NewHeader(string? onBehalfOfUserId = null, AuditOperation operation = AuditOperation.Insert)
    {
        var header = new AuditHeader
        {
            HeaderId = Guid.NewGuid(),
            TransactionId = Guid.NewGuid(),
            AuditedAtUtc = new DateTime(2026, 8, 27, 12, 0, 0, DateTimeKind.Utc),
            UserId = "unit-tests@example.com",
            OnBehalfOfUserId = onBehalfOfUserId,
            EntityType = "Customer",
            EntityTable = "Customers",
            EntityKey = "1",
            Operation = operation,
        };
        header.Details.Add(new AuditDetail
        {
            HeaderId = header.HeaderId,
            ColumnName = "Name",
            ValueText = "Widget",
            ValueType = "String",
        });
        return header;
    }



    [Fact]
    public void CanHandle_throws_on_null_context()
    {
        var writer = new NpgsqlCopyAuditBulkWriter();
        Assert.Throws<ArgumentNullException>(() => writer.CanHandle(context: null!));
    }



    [Fact]
    public void CanHandle_returns_true_for_Npgsql_context()
    {
        using var context = CreateNpgsqlContext();
        var writer = new NpgsqlCopyAuditBulkWriter();

        Assert.True(writer.CanHandle(context));
    }



    [Fact]
    public void CanHandle_returns_false_for_non_Npgsql_context()
    {
        using var context = CreateSqliteContext();
        var writer = new NpgsqlCopyAuditBulkWriter();

        Assert.False(writer.CanHandle(context));
    }



    [Fact]
    public void Write_throws_on_null_context()
    {
        var writer = new NpgsqlCopyAuditBulkWriter();
        Assert.Throws<ArgumentNullException>(() => writer.Write(context: null!, [NewHeader()]));
    }



    [Fact]
    public void Write_throws_on_null_headers()
    {
        using var context = CreateNpgsqlContext();
        var writer = new NpgsqlCopyAuditBulkWriter();

        Assert.Throws<ArgumentNullException>(() => writer.Write(context, headers: null!));
    }



    [Fact]
    public async Task WriteAsync_throws_on_null_context()
    {
        var writer = new NpgsqlCopyAuditBulkWriter();
        await Assert.ThrowsAsync<ArgumentNullException>(() => writer.WriteAsync(context: null!, [NewHeader()], CancellationToken.None));
    }



    [Fact]
    public async Task WriteAsync_throws_on_null_headers()
    {
        using var context = CreateNpgsqlContext();
        var writer = new NpgsqlCopyAuditBulkWriter();

        await Assert.ThrowsAsync<ArgumentNullException>(() => writer.WriteAsync(context, headers: null!, CancellationToken.None));
    }



    [Fact]
    public void Write_with_empty_headers_never_touches_the_importer_factory()
    {
        using var context = CreateNpgsqlContext();
        var factory = new FakeNpgsqlBinaryImporterFactory();
        var writer = new NpgsqlCopyAuditBulkWriter(factory);

        writer.Write(context, []);

        Assert.Empty(factory.CopyCommands);
    }



    [Fact]
    public async Task WriteAsync_with_empty_headers_never_touches_the_importer_factory()
    {
        using var context = CreateNpgsqlContext();
        var factory = new FakeNpgsqlBinaryImporterFactory();
        var writer = new NpgsqlCopyAuditBulkWriter(factory);

        await writer.WriteAsync(context, [], CancellationToken.None);

        Assert.Empty(factory.CopyCommands);
    }



    [Fact]
    public void Write_issues_one_COPY_command_for_headers_and_one_for_details_against_the_correct_tables()
    {
        using var context = CreateNpgsqlContext();
        var factory = new FakeNpgsqlBinaryImporterFactory();
        var writer = new NpgsqlCopyAuditBulkWriter(factory);

        writer.Write(context, [NewHeader()]);

        Assert.Equal(2, factory.CopyCommands.Count);
        Assert.Contains("COPY \"AuditHeader\"", factory.CopyCommands[0], StringComparison.Ordinal);
        Assert.Contains("COPY \"AuditDetail\"", factory.CopyCommands[1], StringComparison.Ordinal);
        Assert.Contains("FORMAT BINARY", factory.CopyCommands[0], StringComparison.Ordinal);
    }



    [Fact]
    public void Write_writes_header_columns_in_order_and_completes_the_importer()
    {
        using var context = CreateNpgsqlContext();
        var factory = new FakeNpgsqlBinaryImporterFactory();
        var writer = new NpgsqlCopyAuditBulkWriter(factory);
        var header = NewHeader();

        writer.Write(context, [header]);

        var headerImporter = factory.CreatedImporters[0];
        Assert.True(headerImporter.Completed);
        Assert.Single(headerImporter.Rows);

        var row = headerImporter.Rows[0];
        Assert.Equal(header.HeaderId, row[0]);
        Assert.Equal(header.TransactionId, row[1]);
        Assert.Equal(header.AuditedAtUtc, row[2]);
        Assert.Equal(header.UserId, row[3]);
        Assert.Null(row[4]); // OnBehalfOfUserId, not set on this header
        Assert.Equal(header.EntityType, row[5]);
        Assert.Equal(header.EntityTable, row[6]);
        Assert.Equal(header.EntityKey, row[7]);
        Assert.Equal("I", row[8]); // AuditOperation.Insert -> 'I'
    }



    [Theory]
    [InlineData(AuditOperation.Insert, "I")]
    [InlineData(AuditOperation.Update, "U")]
    [InlineData(AuditOperation.Delete, "D")]
    public void Write_encodes_every_Operation_value_as_the_matching_single_character(AuditOperation operation, string expected)
    {
        using var context = CreateNpgsqlContext();
        var factory = new FakeNpgsqlBinaryImporterFactory();
        var writer = new NpgsqlCopyAuditBulkWriter(factory);

        writer.Write(context, [NewHeader(operation: operation)]);

        Assert.Equal(expected, factory.CreatedImporters[0].Rows[0][8]);
    }



    [Fact]
    public void Write_writes_a_non_null_value_for_a_populated_OnBehalfOfUserId()
    {
        using var context = CreateNpgsqlContext();
        var factory = new FakeNpgsqlBinaryImporterFactory();
        var writer = new NpgsqlCopyAuditBulkWriter(factory);

        writer.Write(context, [NewHeader(onBehalfOfUserId: "delegate@example.com")]);

        Assert.Equal("delegate@example.com", factory.CreatedImporters[0].Rows[0][4]);
    }



    [Fact]
    public void Write_writes_one_detail_row_per_changed_column_excluding_DetailId()
    {
        using var context = CreateNpgsqlContext();
        var factory = new FakeNpgsqlBinaryImporterFactory();
        var writer = new NpgsqlCopyAuditBulkWriter(factory);
        var header = NewHeader();

        writer.Write(context, [header]);

        var detailImporter = factory.CreatedImporters[1];
        Assert.True(detailImporter.Completed);
        var row = Assert.Single(detailImporter.Rows);
        // 4 values: HeaderId, ColumnName, ValueText, ValueType -- DetailId (identity) excluded.
        Assert.Equal(4, row.Count);
        Assert.Equal(header.HeaderId, row[0]);
        Assert.Equal("Name", row[1]);
        Assert.Equal("Widget", row[2]);
        Assert.Equal("String", row[3]);
    }



    [Fact]
    public void Write_writes_null_for_a_null_ValueText()
    {
        using var context = CreateNpgsqlContext();
        var factory = new FakeNpgsqlBinaryImporterFactory();
        var writer = new NpgsqlCopyAuditBulkWriter(factory);
        var header = NewHeader();
        header.Details.Single().ValueText = null;

        writer.Write(context, [header]);

        Assert.Null(factory.CreatedImporters[1].Rows[0][2]);
    }



    [Fact]
    public void Write_batches_details_from_multiple_headers_into_the_same_COPY_session()
    {
        using var context = CreateNpgsqlContext();
        var factory = new FakeNpgsqlBinaryImporterFactory();
        var writer = new NpgsqlCopyAuditBulkWriter(factory);

        writer.Write(context, [NewHeader(), NewHeader(), NewHeader()]);

        Assert.Equal(3, factory.CreatedImporters[0].Rows.Count); // 3 header rows
        Assert.Equal(3, factory.CreatedImporters[1].Rows.Count); // 1 detail row each = 3
    }



    [Fact]
    public async Task WriteAsync_writes_the_same_shape_as_the_sync_path()
    {
        using var context = CreateNpgsqlContext();
        var factory = new FakeNpgsqlBinaryImporterFactory();
        var writer = new NpgsqlCopyAuditBulkWriter(factory);
        var header = NewHeader(onBehalfOfUserId: "delegate@example.com");

        await writer.WriteAsync(context, [header], CancellationToken.None);

        Assert.Equal(2, factory.CopyCommands.Count);
        var headerRow = factory.CreatedImporters[0].Rows[0];
        Assert.Equal(header.HeaderId, headerRow[0]);
        Assert.Equal("delegate@example.com", headerRow[4]);
        Assert.True(factory.CreatedImporters[0].Completed);
        Assert.True(factory.CreatedImporters[1].Completed);
    }
}
