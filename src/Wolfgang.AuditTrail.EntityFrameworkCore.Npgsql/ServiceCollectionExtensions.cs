using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;

namespace Wolfgang.AuditTrail.Npgsql;

/// <summary>
/// Dependency-injection helper for registering <see cref="NpgsqlCopyAuditBulkWriter"/>.
/// </summary>
public static class ServiceCollectionExtensions
{
    /// <summary>
    /// Registers <see cref="NpgsqlCopyAuditBulkWriter"/> as <see cref="IAuditBulkWriter"/>
    /// (singleton -- the writer is stateless). <c>DbContextOptionsBuilderExtensions
    /// .UseAuditing</c> and <c>AuditingDbContext</c>'s DI constructor both resolve
    /// <see cref="IAuditBulkWriter"/> automatically once registered; this call must run
    /// before either constructs its context. Has no effect on its own -- also set
    /// <see cref="AuditOptions.BulkInsertRowThreshold"/> to opt a save path into using it.
    /// </summary>
    /// <example>
    /// <code>
    /// services.AddEfCoreAuditing&lt;ExampleUserProvider&gt;(options =&gt;
    /// {
    ///     options.BulkInsertRowThreshold = 50;
    /// });
    /// services.AddNpgsqlAuditBulkWriter();
    /// </code>
    /// </example>
    public static IServiceCollection AddNpgsqlAuditBulkWriter(this IServiceCollection services)
    {
        ArgumentNullException.ThrowIfNull(services);

        services.TryAddSingleton<IAuditBulkWriter, NpgsqlCopyAuditBulkWriter>();

        return services;
    }
}
