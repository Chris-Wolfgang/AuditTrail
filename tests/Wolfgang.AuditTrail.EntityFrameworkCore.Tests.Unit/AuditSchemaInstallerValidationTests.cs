using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using Wolfgang.AuditTrail.Schema;
using Wolfgang.AuditTrail.Serializers;
using Xunit;

namespace Wolfgang.AuditTrail.Tests.Unit;



/// <summary>
/// Pins <see cref="AuditSchemaInstaller"/> identifier handling that mutation
/// testing left under-asserted: the null-provider ANSI quoting fallback and the
/// exact identifier-validation error messages (triggered through
/// <c>DropTablesAsync</c>, which validates the configured names before touching
/// the database).
/// </summary>
public sealed class AuditSchemaInstallerValidationTests : IDisposable
{
    private readonly SqliteConnection _connection;

    public AuditSchemaInstallerValidationTests()
    {
        _connection = new SqliteConnection("DataSource=:memory:");
        _connection.Open();
    }

    public void Dispose() => _connection.Dispose();

    private AuditMigrationsDbContext Context(AuditOptions options)
    {
        var builder = new DbContextOptionsBuilder<AuditMigrationsDbContext>().UseSqlite(_connection);
        return new AuditMigrationsDbContext(builder.Options, options);
    }

    private static AuditOptions Options(string headerTable = "AuditHeader", string detailTable = "AuditDetail") => new()
    {
        HeaderTableName = headerTable,
        DetailTableName = detailTable,
        ValueSerializer = new StringAuditValueSerializer(),
        EntityKeySerializer = new PipeDelimitedEntityKeySerializer(),
    };



    [Fact]
    public void QuoteIdentifier_null_provider_falls_back_to_ansi_double_quotes()
    {
        Assert.Equal("\"T\"", AuditSchemaInstaller.QuoteIdentifier(null, null, "T"));
        Assert.Equal("\"s\".\"T\"", AuditSchemaInstaller.QuoteIdentifier(null, "s", "T"));
    }



    [Fact]
    public void QuoteIdentifier_sql_server_uses_brackets()
    {
        Assert.Equal("[s].[T]", AuditSchemaInstaller.QuoteIdentifier("Microsoft.EntityFrameworkCore.SqlServer", "s", "T"));
    }



    [Fact]
    public void QuoteIdentifier_mysql_uses_backticks()
    {
        Assert.Equal("`s`.`T`", AuditSchemaInstaller.QuoteIdentifier("Pomelo.EntityFrameworkCore.MySql", "s", "T"));
    }



    [Fact]
    public async Task DropTables_rejects_whitespace_table_name()
    {
        await using var ctx = Context(Options());
        var installer = new AuditSchemaInstaller(Options(detailTable: "   "));
        var ex = await Assert.ThrowsAsync<ArgumentException>(() => installer.DropTablesAsync(ctx));
        Assert.Contains("cannot be null or whitespace", ex.Message, StringComparison.Ordinal);
    }



    [Fact]
    public async Task DropTables_rejects_identifier_starting_with_a_digit()
    {
        await using var ctx = Context(Options());
        var installer = new AuditSchemaInstaller(Options(detailTable: "1bad"));
        var ex = await Assert.ThrowsAsync<InvalidOperationException>(() => installer.DropTablesAsync(ctx));
        Assert.Contains("cannot start with a digit", ex.Message, StringComparison.Ordinal);
    }



    [Fact]
    public async Task DropTables_rejects_identifier_with_illegal_characters()
    {
        await using var ctx = Context(Options());
        var installer = new AuditSchemaInstaller(Options(detailTable: "bad-name"));
        var ex = await Assert.ThrowsAsync<InvalidOperationException>(() => installer.DropTablesAsync(ctx));
        Assert.Contains("only letters, digits, and underscores", ex.Message, StringComparison.Ordinal);
    }
}
