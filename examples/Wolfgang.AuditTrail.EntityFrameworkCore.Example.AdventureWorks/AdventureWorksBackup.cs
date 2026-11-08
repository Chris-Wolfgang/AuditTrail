namespace Wolfgang.AuditTrail.Example.AdventureWorks;



/// <summary>
/// Where the AdventureWorks2022 backup comes from, and the one <see cref="HttpClient"/>
/// that downloads it.
/// </summary>
internal static class AdventureWorksBackup
{
    /// <summary>
    /// Environment variable that overrides the download location, for a mirror or an
    /// offline copy served locally.
    /// </summary>
    internal const string UrlVariable = "ADVENTUREWORKS_BAK_URL";



    // The default location (the release asset on the SQL Server samples repo) lives
    // in an embedded text file rather than in code, so the address is data that can
    // be changed without touching the program.
    private const string DefaultUrlResource = "adventureworks-backup-url";



    private static readonly HttpClient Http = new();



    internal static async Task<Uri> ResolveUrlAsync()
    {
        var configured = Environment.GetEnvironmentVariable(UrlVariable);
        if (!string.IsNullOrWhiteSpace(configured))
        {
            return new Uri(configured);
        }

        await using var stream = typeof(AdventureWorksBackup)
            .Assembly
            .GetManifestResourceStream(DefaultUrlResource)
            ?? throw new InvalidOperationException($"Embedded resource '{DefaultUrlResource}' is missing.");
        using var reader = new StreamReader(stream);
        var text = await reader.ReadToEndAsync();

        return new Uri(text.Trim());
    }



    internal static async Task<byte[]> DownloadAsync()
    {
        return await Http.GetByteArrayAsync(await ResolveUrlAsync());
    }
}
