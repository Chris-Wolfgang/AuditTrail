# Getting Started

This guide will help you quickly get up and running with Wolfgang.AuditTrail.

## Prerequisites

- .NET 6, 8 or 10 (the library targets `net6.0`, `net8.0` and `net10.0`)
- EF Core 6 or later with a relational provider (SQL Server, PostgreSQL, SQLite, ...)

## Installation

### Via .NET CLI

```bash
dotnet add package Wolfgang.AuditTrail.EntityFrameworkCore
```

### Via Package Manager Console

```powershell
Install-Package Wolfgang.AuditTrail.EntityFrameworkCore
```

## Quick Start

There are two integration models. In both, existing `SaveChangesAsync` call sites stay exactly as they are.

### Model 1 - `AuditingDbContext` base class (recommended)

```csharp
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Wolfgang.AuditTrail;

// 1. Register the audit services and your DbContext.
services.AddEfCoreAuditing<MyUserProvider>();
services.AddDbContext<AppDbContext>(opts => opts.UseSqlServer(connStr));

// 2. Derive your DbContext from AuditingDbContext.
public class AppDbContext : AuditingDbContext
{
    public AppDbContext(
        DbContextOptions<AppDbContext> options,
        IAuditUserProvider userProvider,
        AuditOptions auditOptions)
        : base(options, userProvider, auditOptions) { }

    public DbSet<Customer> Customers => Set<Customer>();
}

// 3. Save as usual. The audit rows are written in the same transaction.
ctx.Customers.Add(new Customer { Name = "Alice" });
await ctx.SaveChangesAsync();
```

### Model 2 - auto-transaction interceptor

For a context that already inherits from another base class, such as `IdentityDbContext<TUser>`:

```csharp
services.AddEfCoreAuditing<MyUserProvider>();
services.AddDbContext<AppDbContext>((sp, opts) => opts
    .UseSqlServer(connStr)
    .UseAuditing(sp));

public class AppDbContext : IdentityDbContext<AppUser>
{
    private readonly AuditOptions _auditOptions;

    public AppDbContext(DbContextOptions options, AuditOptions auditOptions)
        : base(options) => _auditOptions = auditOptions;

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.ApplyAuditing(_auditOptions);
    }
}
```

### Which one should I pick?

| Situation | Use |
|---|---|
| New `DbContext`, or one that inherits from `DbContext` only | Model 1 (`AuditingDbContext`) |
| Context inherits from `IdentityDbContext<TUser>` or another base | Model 2 (interceptor) |
| `EnableRetryOnFailure` is enabled on the connection | Model 1 (the interceptor throws at runtime with retrying strategies) |

### Create the audit tables

On .NET 8 and later, install (or upgrade) just the audit tables with:

```csharp
await ctx.MigrateAuditSchemaAsync();
```

## Next Steps

- Explore the [API Reference](../api/index.md) for detailed documentation
- Read the [Introduction](introduction.md) to learn more about Wolfgang.AuditTrail
- Check out the example projects (Console, Web API, AdventureWorks) in the [GitHub repository](https://github.com/Chris-Wolfgang/AuditTrail/tree/main/examples)

## Additional Resources

- [GitHub Repository](https://github.com/Chris-Wolfgang/AuditTrail)
- [Contributing Guidelines](https://github.com/Chris-Wolfgang/AuditTrail/blob/main/CONTRIBUTING.md)
- [Report an Issue](https://github.com/Chris-Wolfgang/AuditTrail/issues)
