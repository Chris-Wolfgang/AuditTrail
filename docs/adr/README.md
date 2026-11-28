# Architecture Decision Records

This folder records the **non-obvious design decisions** behind
`Wolfgang.AuditTrail.*`, so the reasoning survives the PR that introduced it.

Each record is a short, immutable document: it captures the context, the
decision, and the consequences at a point in time. When a decision is later
reversed, we add a **new** ADR that supersedes the old one rather than editing
history.

Format: [MADR](https://adr.github.io/madr/) (lightweight). Start a new record by
copying [`TEMPLATE.md`](TEMPLATE.md) and giving it the next number.

See [index.md](index.md) for every record and its status, starting with
[ADR 0000](0000-record-architecture-decisions.md), which describes the practice.
