#if NET8_0_OR_GREATER
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Wolfgang.AuditTrail.Entities;

namespace Wolfgang.AuditTrail.Schema;



/// <summary>
/// The names an upgrade step needs in order to target the right tables.
/// Resolved from the live EF model rather than from constants, so a consumer
/// who renamed the audit tables through <see cref="AuditOptions"/> gets their
/// own tables altered instead of the defaults.
/// </summary>
internal sealed class AuditSchemaUpgradeContext
{
    /// <summary>The design-time model the upgrade is being generated against.</summary>
    public IModel Model { get; }



    /// <summary>Table name backing <see cref="AuditHeader"/>.</summary>
    public string HeaderTable { get; }



    /// <summary>Table name backing <see cref="AuditDetail"/>.</summary>
    public string DetailTable { get; }



    /// <summary>Schema the audit tables live in, or <c>null</c> for the provider default.</summary>
    public string? Schema { get; }



    private AuditSchemaUpgradeContext(IModel model, string headerTable, string detailTable, string? schema)
    {
        Model       = model;
        HeaderTable = headerTable;
        DetailTable = detailTable;
        Schema      = schema;
    }



    /// <summary>
    /// Reads the audit table and schema names out of <paramref name="model"/>.
    /// </summary>
    /// <param name="model">The design-time model of the migrations context.</param>
    /// <exception cref="ArgumentNullException">If <paramref name="model"/> is <c>null</c>.</exception>
    /// <exception cref="InvalidOperationException">
    /// If the model does not map the audit entities to tables, which would mean
    /// the migrations context was built without <c>ApplyAuditing</c>.
    /// </exception>
    public static AuditSchemaUpgradeContext FromModel(IModel model)
    {
        ArgumentNullException.ThrowIfNull(model);

        var header = FindTable(model, typeof(AuditHeader));
        var detail = FindTable(model, typeof(AuditDetail));

        return new AuditSchemaUpgradeContext
        (
            model,
            header.Table,
            detail.Table,
            header.Schema
        );
    }



    private static (string Table, string? Schema) FindTable(IModel model, Type clrType)
    {
        var entityType = model.FindEntityType(clrType)
            ?? throw new InvalidOperationException
            (
                $"The audit migrations model does not contain an entity type for {clrType.Name}. " +
                "The model must be built through ApplyAuditing.");

        var table = entityType.GetTableName()
            ?? throw new InvalidOperationException
            (
                $"The audit migrations model maps {clrType.Name} to no table.");

        return (table, entityType.GetSchema());
    }
}
#endif
