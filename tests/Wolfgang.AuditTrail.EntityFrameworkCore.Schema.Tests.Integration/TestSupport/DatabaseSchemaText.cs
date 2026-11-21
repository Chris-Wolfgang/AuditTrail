using System.Globalization;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.EntityFrameworkCore.Scaffolding;
using Microsoft.EntityFrameworkCore.Scaffolding.Metadata;
using Microsoft.Extensions.DependencyInjection;

namespace Wolfgang.AuditTrail.EntityFrameworkCore.Schema.Tests.Integration.TestSupport;



/// <summary>
/// Reverse-engineers a database with the provider's own scaffolding and renders
/// the result as one canonical, line-per-fact string, so two databases can be
/// compared with a single <c>Assert.Equal</c> whose failure output is a
/// readable diff.
/// </summary>
/// <remarks>
/// <para>
/// Uses EF Core's <see cref="IDatabaseModelFactory"/>, the same component
/// <c>dotnet ef dbcontext scaffold</c> runs, rather than hand-written
/// <c>INFORMATION_SCHEMA</c> queries: it already knows each provider's catalog,
/// and it reports exactly the facets the migrator's DDL can get wrong on that
/// provider -- store types with their lengths and precision, nullability,
/// defaults, key and index names, and delete behaviour.
/// </para>
/// <para>
/// Order-insensitive on purpose. Columns, indexes and keys are sorted by name
/// before rendering, because a column added by <c>ALTER TABLE</c> lands last
/// while the same column in a fresh <c>CREATE TABLE</c> sits wherever the model
/// puts it, and that is not a schema difference. A table's schema is rendered
/// only when it differs from the database's default schema, so two MySQL
/// databases (where the schema <em>is</em> the database) compare equal.
/// </para>
/// </remarks>
public static class DatabaseSchemaText
{
    /// <summary>
    /// Scaffolds the database behind <paramref name="context"/> and renders it.
    /// </summary>
    /// <exception cref="ArgumentNullException">If either argument is <c>null</c>.</exception>
    public static string Describe(DbContext context, IDesignTimeServices designTimeServices)
    {
        ArgumentNullException.ThrowIfNull(context);
        ArgumentNullException.ThrowIfNull(designTimeServices);

        var services = new ServiceCollection();
        designTimeServices.ConfigureDesignTimeServices(services);
        new EntityFrameworkRelationalDesignServicesBuilder(services).TryAddCoreServices();

        using var provider = services.BuildServiceProvider();
        var factory = provider.GetRequiredService<IDatabaseModelFactory>();

        // The connection overload, not the connection-string one: for an
        // in-memory SQLite database a new connection would be a new, empty
        // database. The factory opens a closed connection and closes it again,
        // and leaves an open one alone.
        var model = factory.Create(context.Database.GetDbConnection(), new DatabaseModelFactoryOptions());

        return Render(model);
    }



    private static string Render(DatabaseModel model)
    {
        var text = new StringBuilder();

        foreach (var table in model.Tables.OrderBy(t => t.Schema, StringComparer.Ordinal).ThenBy(t => t.Name, StringComparer.Ordinal))
        {
            var schema = string.Equals(table.Schema, model.DefaultSchema, StringComparison.Ordinal)
                ? null
                : table.Schema;

            text.Append("table ").Append(Qualified(schema, table.Name)).AppendLine();

            foreach (var column in table.Columns.OrderBy(c => c.Name, StringComparer.Ordinal))
            {
                text.Append("  column ")
                    .Append(column.Name)
                    .Append(' ').Append(column.StoreType)
                    .Append(column.IsNullable ? " null" : " not null")
                    .Append(" default=").Append(column.DefaultValueSql ?? Invariant(column.DefaultValue))
                    .Append(" computed=").Append(column.ComputedColumnSql)
                    .Append(" generated=").Append(column.ValueGenerated)
                    .AppendLine();
            }

            if (table.PrimaryKey is { } primaryKey)
            {
                text.Append("  pk ").Append(primaryKey.Name).Append(' ').Append(Columns(primaryKey.Columns)).AppendLine();
            }

            foreach (var unique in table.UniqueConstraints.OrderBy(u => u.Name, StringComparer.Ordinal))
            {
                text.Append("  unique ").Append(unique.Name).Append(' ').Append(Columns(unique.Columns)).AppendLine();
            }

            foreach (var index in table.Indexes.OrderBy(i => i.Name, StringComparer.Ordinal))
            {
                text.Append("  index ")
                    .Append(index.Name)
                    .Append(' ').Append(Columns(index.Columns))
                    .Append(" unique=").Append(index.IsUnique)
                    .Append(" filter=").Append(index.Filter)
                    .AppendLine();
            }

            foreach (var foreignKey in table.ForeignKeys.OrderBy(f => f.Name, StringComparer.Ordinal))
            {
                var principalSchema = string.Equals(foreignKey.PrincipalTable.Schema, model.DefaultSchema, StringComparison.Ordinal)
                    ? null
                    : foreignKey.PrincipalTable.Schema;

                text.Append("  fk ")
                    .Append(foreignKey.Name)
                    .Append(' ').Append(Columns(foreignKey.Columns))
                    .Append(" -> ").Append(Qualified(principalSchema, foreignKey.PrincipalTable.Name))
                    .Append(' ').Append(Columns(foreignKey.PrincipalColumns))
                    .Append(" ondelete=").Append(foreignKey.OnDelete)
                    .AppendLine();
            }
        }

        return text.ToString();
    }



    private static string Qualified(string? schema, string name)
    {
        return schema is null ? name : $"{schema}.{name}";
    }



    private static string Columns(IEnumerable<DatabaseColumn> columns)
    {
        return "(" + string.Join(", ", columns.Select(c => c.Name)) + ")";
    }



    private static string? Invariant(object? value)
    {
        return Convert.ToString(value, CultureInfo.InvariantCulture);
    }
}
