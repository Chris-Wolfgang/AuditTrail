using System.Text.RegularExpressions;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;

namespace Wolfgang.AuditTrail.Tests.DocExamples;

/// <summary>
/// Compiles an extracted doc <see cref="DocExample"/> against the real
/// <c>Wolfgang.AuditTrail</c> assemblies. The snippet is wrapped in a synthetic
/// harness that supplies the imports and the placeholder identifiers the illustrative
/// snippets reference (<c>services</c>, <c>options</c>, <c>userProvider</c>, …) while
/// the actual API (<c>AuditingDbContext</c>/<c>AddEfCoreAuditing</c>/<c>UseAuditing</c>/
/// <c>ApplyAuditing</c>/…) binds against the shipped types — so a renamed or removed
/// member turns a stale example into a compile error.
/// </summary>
public static class DocExampleCompiler
{
    /// <summary>
    /// Wraps and compiles <paramref name="example"/>, returning only the
    /// error-severity diagnostics (an empty list means the snippet is valid).
    /// </summary>
    public static IReadOnlyList<Diagnostic> Compile(DocExample example)
    {
        ArgumentNullException.ThrowIfNull(example);
        var source = BuildSource(example);

        var tree = CSharpSyntaxTree.ParseText(
            source,
            new CSharpParseOptions(LanguageVersion.Latest));

        var compilation = CSharpCompilation.Create(
            assemblyName: "DocExampleScratch",
            syntaxTrees: [tree],
            references: ReferenceAssemblies(),
            options: new CSharpCompilationOptions(
                OutputKind.DynamicallyLinkedLibrary,
                nullableContextOptions: NullableContextOptions.Disable));

        return compilation
            .GetDiagnostics()
            .Where(d => d.Severity == DiagnosticSeverity.Error)
            .ToArray();
    }


    private static string BuildSource(DocExample example)
    {
        // #line remaps compiler diagnostics onto the real doc-comment location.
        var location = example.File; // repository-relative, already forward-slashed

        var body = IsTypeDeclaration(example.Code)
            ? BuildTypeDeclarationBody(example, location)
            : BuildStatementBody(example, location);

        return $$"""
            using System;
            using System.Collections.Generic;
            using System.Threading;
            using System.Threading.Tasks;
            using Microsoft.EntityFrameworkCore;
            using Microsoft.Extensions.DependencyInjection;
            using Microsoft.AspNetCore.Identity;
            using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
            using Wolfgang.AuditTrail;
            using Wolfgang.AuditTrail.Npgsql;

            namespace DocExamples.Generated
            {
                // A sample entity type the DbContext/DI examples project over. Public: the
                // AuditingDbContext example exposes it via a public DbSet<Order> property.
                public sealed class Order { public int Id { get; set; } public string CustomerName { get; set; } = ""; }

                // The only IAuditUserProvider stub the examples reference by name without
                // defining it themselves (e.g. as a generic type argument). Examples that
                // illustrate IMPLEMENTING the interface define their own type inline instead.
                internal sealed class ExampleUserProvider : IAuditUserProvider
                {
                    public AuditUser GetCurrentUser() => new("system");
                }

                // Supplies the placeholder identifiers statement-shaped snippets reference.
                // These are scaffolding, not the API under test: they are never executed
                // (the snippets are compiled, not run), so their values are irrelevant.
                // Their TYPES are chosen so the real API calls in the snippets resolve
                // exactly as a consumer's would.
                internal abstract class DocExampleContext
                {
                    protected IServiceCollection services = null!;
                }

            {{body}}
            }
            """;
    }


    // Type-declaration snippets (a class/record definition, with nothing to execute) are
    // emitted directly as a namespace-level member rather than wrapped in a method body --
    // a type declaration is not a legal statement, so it cannot go inside Example.Run().
    private static string BuildTypeDeclarationBody(DocExample example, string location)
    {
        return $$"""
                #line {{example.Line}} "{{location}}"
            {{example.Code}}
                #line default
            """;
    }


    private static string BuildStatementBody(DocExample example, string location)
    {
        var signature = WrapperSignature(example.Code);

        return $$"""
                internal sealed class Example : DocExampleContext
                {
                    public {{signature}}
                    {
            #line {{example.Line}} "{{location}}"
            {{example.Code}}
            #line default
                    }
                }
            """;
    }


    // Plain Regex, not [GeneratedRegex]: the source generator emits a large general-
    // purpose matching engine (RunnerFactory/Runner) into THIS assembly, which coverlet
    // then counts as this project's own untested code and drags the coverage gate down.
    private static readonly Regex TypeDeclarationStart = new(
        @"^\s*(?:public|internal|private|protected)?\s*(?:sealed\s+|abstract\s+|static\s+)?(?:partial\s+)?(?:class|record|struct|interface)\s+\w+",
        RegexOptions.Multiline | RegexOptions.Compiled,
        TimeSpan.FromMilliseconds(100));


    // Heuristic: a snippet whose first non-blank line looks like a type declaration is
    // treated as declaration content (see BuildTypeDeclarationBody), not statements.
    private static bool IsTypeDeclaration(string code)
    {
        var firstLine = code.TrimStart('\r', '\n', ' ', '\t').Split('\n')[0];
        return TypeDeclarationStart.IsMatch(firstLine);
    }


    // Chooses the wrapper method shape that lets a statement snippet compile:
    //   - a `yield` snippet must sit in an async-iterator method;
    //   - an `await` snippet needs `async Task`;
    //   - anything else (e.g. a plain call) is a synchronous `void` body, which avoids
    //     a spurious CS1998 "async method lacks await" on those.
    // Internal (not private): DocExampleCompilerLogicTests exercises this directly --
    // none of the current documented examples are yield-/await-shaped (they're all
    // type declarations, or a plain synchronous call), so those branches are otherwise
    // unreachable through the Theory alone.
    internal static string WrapperSignature(string code)
    {
        if (ContainsWord(code, "yield"))
        {
            return "async IAsyncEnumerable<string> Run()";
        }

        if (ContainsWord(code, "await"))
        {
            return "async Task Run()";
        }

        return "void Run()";
    }


    internal static bool ContainsWord(string code, string word)
    {
        var index = code.IndexOf(word, StringComparison.Ordinal);
        while (index >= 0)
        {
            var before = index == 0 || !char.IsLetterOrDigit(code[index - 1]);
            var afterIndex = index + word.Length;
            var after = afterIndex >= code.Length || !char.IsLetterOrDigit(code[afterIndex]);
            if (before && after)
            {
                return true;
            }

            index = code.IndexOf(word, index + 1, StringComparison.Ordinal);
        }

        return false;
    }


    // The compiler needs the full framework reference set plus the libraries under test.
    // The trusted-platform-assemblies list is the reference closure of the running test
    // host (net10.0), which already includes the project- and package-referenced
    // assemblies (EntityFrameworkCore, Abstractions, EF Core, ASP.NET Core Identity).
    private static IReadOnlyList<MetadataReference> ReferenceAssemblies()
    {
        var references = new List<MetadataReference>();
        var seen = new HashSet<string>(StringComparer.OrdinalIgnoreCase);

        var trusted = AppContext.GetData("TRUSTED_PLATFORM_ASSEMBLIES") as string ?? string.Empty;
        foreach (var path in trusted.Split(Path.PathSeparator, StringSplitOptions.RemoveEmptyEntries))
        {
            if (path.EndsWith(".dll", StringComparison.OrdinalIgnoreCase) && seen.Add(path))
            {
                references.Add(MetadataReference.CreateFromFile(path));
            }
        }

        // Belt-and-braces: guarantee the library under test is referenced even if it is
        // ever loaded from outside the TPA closure.
        var libraryPath = typeof(AuditingDbContext).Assembly.Location;
        if (!string.IsNullOrEmpty(libraryPath) && seen.Add(libraryPath))
        {
            references.Add(MetadataReference.CreateFromFile(libraryPath));
        }

        return references;
    }
}
