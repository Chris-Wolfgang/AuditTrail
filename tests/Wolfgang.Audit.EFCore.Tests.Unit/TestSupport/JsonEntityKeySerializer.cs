using System.Diagnostics.CodeAnalysis;
using System.Globalization;
using System.Text;

namespace Wolfgang.Audit.Tests.Unit.TestSupport;

/// <summary>
/// JSON-array-style <see cref="IAuditEntityKeySerializer"/> used to prove that
/// consumer-supplied serializers are honored by the interceptor.
/// </summary>
[ExcludeFromCodeCoverage]
public sealed class JsonEntityKeySerializer : IAuditEntityKeySerializer
{
    public string Serialize(IReadOnlyList<object?> keyValues)
    {
        ArgumentNullException.ThrowIfNull(keyValues);
        var sb = new StringBuilder("[");
        for (var i = 0; i < keyValues.Count; i++)
        {
            if (i > 0)
            {
                sb.Append(',');
            }
            sb.Append(FormatPart(keyValues[i]));
        }
        sb.Append(']');
        return sb.ToString();
    }

    private static string FormatPart(object? value)
    {
        return value switch
        {
            null => "null",
            string s => "\"" + s.Replace("\"", "\\\"", StringComparison.Ordinal) + "\"",
            IFormattable f => f.ToString(format: null, CultureInfo.InvariantCulture),
            _ => "\"" + value.ToString() + "\"",
        };
    }
}
