using Microsoft.Extensions.DependencyInjection;
using Xunit;

namespace Wolfgang.AuditTrail.Npgsql.Tests.Unit;

public sealed class ServiceCollectionExtensionsTests
{
    [Fact]
    public void AddNpgsqlAuditBulkWriter_throws_on_null_services()
    {
        Assert.Throws<ArgumentNullException>(() =>
            ServiceCollectionExtensions.AddNpgsqlAuditBulkWriter(services: null!));
    }



    [Fact]
    public void AddNpgsqlAuditBulkWriter_registers_NpgsqlCopyAuditBulkWriter_as_IAuditBulkWriter()
    {
        var services = new ServiceCollection();

        services.AddNpgsqlAuditBulkWriter();
        var provider = services.BuildServiceProvider();

        var writer = provider.GetRequiredService<IAuditBulkWriter>();
        Assert.IsType<NpgsqlCopyAuditBulkWriter>(writer);
    }



    [Fact]
    public void AddNpgsqlAuditBulkWriter_registers_a_singleton()
    {
        var services = new ServiceCollection();

        services.AddNpgsqlAuditBulkWriter();
        var provider = services.BuildServiceProvider();

        var first = provider.GetRequiredService<IAuditBulkWriter>();
        var second = provider.GetRequiredService<IAuditBulkWriter>();
        Assert.Same(first, second);
    }



    [Fact]
    public void AddNpgsqlAuditBulkWriter_returns_the_same_service_collection_for_chaining()
    {
        var services = new ServiceCollection();

        var result = services.AddNpgsqlAuditBulkWriter();

        Assert.Same(services, result);
    }
}
