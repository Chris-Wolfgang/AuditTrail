using System;
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
    /// .UseAuditing</c> resolves <see cref="IAuditBulkWriter"/> from the service provider
    /// once registered; an <c>AuditingDbContext</c>-derived context receives it when its
    /// own constructor declares an <see cref="IAuditBulkWriter"/> parameter and passes it
    /// to the base constructor. This call must run before either constructs its context. Has no effect on its own -- also set
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
