using System;
using Wolfgang.AuditTrail.Serializers;

// End-to-end SourceLink "step into" fixture. The debugger sets a breakpoint on the
// marked line below and issues a step-into (the F11 a consumer would press). If
// SourceLink is intact the debugger resolves the library's real source (from GitHub)
// inside PipeDelimitedEntityKeySerializer.Serialize, instead of a decompiled
// placeholder. Serialize is a plain, non-async public method with a real body, which
// makes it a clean and stable step-into target.

var serializer = new PipeDelimitedEntityKeySerializer();
var keyValues = new object?[] { 42 };
var key = serializer.Serialize(keyValues); // STEP_INTO_TARGET
Console.WriteLine(key);
