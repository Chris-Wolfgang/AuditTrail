using Microsoft.CodeAnalysis;
using Xunit;

namespace Wolfgang.AuditTrail.Tests.DocExamples;

/// <summary>
/// Drives the not-found and duplicate paths of <see cref="DocExampleSource"/> and
/// <see cref="DocExampleCompiler"/> that a run from inside the repository never reaches.
/// </summary>
public sealed class DocExampleSupportTests
{
    [Fact]
    public void LocateSourceDirectory_when_no_src_above_start_throws_DirectoryNotFoundException()
    {
        var start = Path.Combine(Path.GetTempPath(), Guid.NewGuid().ToString("N"));

        var ex = Assert.Throws<DirectoryNotFoundException>(() => DocExampleSource.LocateSourceDirectory(start));

        Assert.Contains(start, ex.Message, StringComparison.Ordinal);
    }



    [Fact]
    public void AddReference_when_path_was_already_added_does_not_add_it_again()
    {
        var path = typeof(AuditingDbContext).Assembly.Location;
        var references = new List<MetadataReference>();
        var seen = new HashSet<string>(StringComparer.OrdinalIgnoreCase);

        DocExampleCompiler.AddReference(references, seen, path);
        DocExampleCompiler.AddReference(references, seen, path);

        Assert.Single(references);
    }



    [Fact]
    public void AddReference_when_path_is_empty_adds_nothing()
    {
        var references = new List<MetadataReference>();
        var seen = new HashSet<string>(StringComparer.OrdinalIgnoreCase);

        DocExampleCompiler.AddReference(references, seen, string.Empty);

        Assert.Empty(references);
    }
}
