---
_layout: landing
---

# Wolfgang.AuditTrail Documentation

Welcome to the Wolfgang.AuditTrail documentation. This site contains comprehensive guides, API reference, and examples to help you get started.

## Quick Links

- [Getting Started](docs/getting-started.md) - Learn the basics
- [API Reference](xref:Wolfgang.AuditTrail) - Complete API documentation
- [GitHub Repository](https://github.com/Chris-Wolfgang/AuditTrail) - View source code

## About Wolfgang.AuditTrail

An EF Core change-tracking library. Every Insert / Update / Delete that goes through `SaveChanges` / `SaveChangesAsync` is captured from the `ChangeTracker` and written as a row-by-row audit history (one **header** per changed entity plus per-column **detail** rows) **in the same transaction** as the save, so the data change and its audit rows commit or roll back together. Existing `SaveChangesAsync` call sites do not change.

## Installation

```bash
dotnet add package Wolfgang.AuditTrail.EntityFrameworkCore
```

`Wolfgang.AuditTrail.Abstractions` (contracts) comes along as a dependency. Optional packages: `Wolfgang.AuditTrail.EntityFrameworkCore.Npgsql` (PostgreSQL `COPY` bulk writer) and `Wolfgang.AuditTrail.TestKit.Xunit` (contract tests for custom serializers).

## Documentation Sections

### 📖 [Documentation](docs/getting-started.md)
Step-by-step guides and tutorials to help you use Wolfgang.AuditTrail effectively.

### 📚 [API Reference](xref:Wolfgang.AuditTrail)
Complete API documentation automatically generated from source code XML comments.

## Additional Resources

- [Contributing Guidelines](https://github.com/Chris-Wolfgang/AuditTrail/blob/main/CONTRIBUTING.md)
- [Code of Conduct](https://github.com/Chris-Wolfgang/AuditTrail/blob/main/CODE_OF_CONDUCT.md)
- [License](https://github.com/Chris-Wolfgang/AuditTrail/blob/main/LICENSE)

---

*Documentation built with [DocFX](https://dotnet.github.io/docfx/)*

