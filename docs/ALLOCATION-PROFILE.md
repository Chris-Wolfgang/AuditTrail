# Allocation profile & zero-alloc policy

**Decision:** this library does **not** ship zero-allocation hot-path enforcement
(no `GC.GetAllocatedBytesForCurrentThread` / `MemoryDiagnoser` gate). This document
is the snapshot that records *why*, per the thorough-review guidance that a library
with no method intended to be zero-alloc should carry a rationale rather than a
half-implemented enforcement harness.

Tracks issue #57.

## Why no method here is zero-alloc

`Wolfgang.AuditTrail.EntityFrameworkCore` exists to **materialize an audit record
graph** on every `SaveChanges`. Allocation is intrinsic to that job at every stage
of the hot path — there is no call site whose contract is "must not allocate":

| Hot-path stage | Source | Why it allocates (by design) |
| --- | --- | --- |
| Change capture | `Internal/AuditCapture.cs` | `ChangeTracker.Entries().ToList()`, `new List<PendingAuditEntry>(...)`, `keyProperties.Select(...).ToList()`, `new List<PendingAuditValue>()` — one pass over the tracked graph, sized to the change set. |
| Entity materialization | `Internal/AuditCapture.cs` | Builds `new AuditHeader` + `new AuditDetail` per changed value and calls `context.Add(header)` — these objects are the library's *output*; they must exist to be persisted. |
| Value serialization | `Serializers/StringAuditValueSerializer.cs` | `Encode` returns `string` (`value.ToString(...)`, `Convert.ToBase64String(...)`) — the audit column stores text, so a string must be produced. |
| Key serialization | `Serializers/PipeDelimitedEntityKeySerializer.cs` | `new StringBuilder()` + `sb.ToString()` to join composite key parts — output is a string. |

None of these use a pooled buffer, `Span<T>`/`stackalloc` fast path, or a
guard-only short-circuit that a consumer would rely on being allocation-free. The
allocations scale with the size of the change set (expected and correct), and they
are dwarfed by the database round-trip they precede.

## What would change this decision

Add targeted zero-alloc tests **only if** a future change introduces a method with
an explicit zero-alloc contract, e.g.:

- A `Span<char>` / `stackalloc`-based serializer fast path for small primitive values.
- A pooled-buffer (`ArrayPool<T>`) capture path for high-frequency saves.
- A guard-only short-circuit (e.g. "nothing changed → return without allocating")
  that is documented as allocation-free and perf-critical.

At that point, add a focused test that measures `GC.GetAllocatedBytesForCurrentThread()`
before/after the specific call and asserts the delta is zero (or below a documented
threshold for async-state-machine overhead on `netstandard2.0`), naming the call site
in the failure message. Do **not** add broad "the interceptor allocates < N bytes"
assertions — those measure the change-set size, not a regression, and would be flaky.

## Related

- Throughput (not allocation) is tracked by the benchmark suite
  (`benchmarks/`) and the per-PR benchmark alert — see issue #64.
- PostgreSQL bulk-insert performance work: [`POSTGRES-PERFORMANCE.md`](POSTGRES-PERFORMANCE.md).
