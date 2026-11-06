using System;

namespace Wolfgang.AuditTrail.Tests.Smoke.TestSupport;



/// <summary>
/// A <see cref="TimeProvider"/> whose clock advances by a fixed step on every
/// read, so consecutive saves get strictly increasing, deterministic timestamps.
/// </summary>
public sealed class SteppingTimeProvider : TimeProvider
{
    private readonly TimeSpan _step;
    private DateTimeOffset _next;



    public SteppingTimeProvider(DateTimeOffset start, TimeSpan step)
    {
        _next = start;
        _step = step;
    }



    public override DateTimeOffset GetUtcNow()
    {
        var now = _next;
        _next = _next.Add(_step);
        return now;
    }
}
