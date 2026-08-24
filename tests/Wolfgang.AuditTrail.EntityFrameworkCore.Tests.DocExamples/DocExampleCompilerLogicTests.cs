namespace Wolfgang.AuditTrail.Tests.DocExamples;

/// <summary>
/// Direct unit tests for <see cref="DocExampleCompiler"/>'s wrapper-shape selection and
/// word-boundary matching. None of the currently-documented examples are yield-/await-
/// shaped (they're all type declarations, or the one plain synchronous statement), so
/// the <see cref="DocExampleCompilationTests"/> theory alone never reaches those
/// branches -- exercised directly here instead.
/// </summary>
public sealed class DocExampleCompilerLogicTests
{
    [Fact]
    public void WrapperSignature_when_code_contains_yield_returns_async_iterator_signature()
    {
        var signature = DocExampleCompiler.WrapperSignature("yield return \"x\";");

        Assert.Equal("async IAsyncEnumerable<string> Run()", signature);
    }



    [Fact]
    public void WrapperSignature_when_code_contains_await_returns_async_task_signature()
    {
        var signature = DocExampleCompiler.WrapperSignature("await Task.Delay(1);");

        Assert.Equal("async Task Run()", signature);
    }



    [Fact]
    public void WrapperSignature_when_code_contains_neither_returns_void_signature()
    {
        var signature = DocExampleCompiler.WrapperSignature("var x = 1;");

        Assert.Equal("void Run()", signature);
    }



    [Fact]
    public void ContainsWord_matches_whole_word_only()
    {
        // "awaiting" contains "await" as a substring but is not the word "await" --
        // the trailing 'i' fails the word-boundary check.
        Assert.False(DocExampleCompiler.ContainsWord("awaiting the response", "await"));
        Assert.True(DocExampleCompiler.ContainsWord("await the response", "await"));
    }



    [Fact]
    public void ContainsWord_finds_a_later_occurrence_after_a_boundary_mismatch()
    {
        // The first "await" occurrence (inside "awaiting") fails the boundary check, so
        // ContainsWord must advance and keep scanning to find the real, later occurrence.
        Assert.True(DocExampleCompiler.ContainsWord("awaiting; then await it", "await"));
    }



    [Fact]
    public void ContainsWord_returns_false_when_word_never_appears()
    {
        Assert.False(DocExampleCompiler.ContainsWord("var x = 1;", "yield"));
    }
}
