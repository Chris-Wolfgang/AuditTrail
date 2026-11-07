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



    // AdventureWorks2022 .bak is published as a release asset on the SQL Server
    // samples repo.
    private const string DefaultUrl =
        "https://github.com/Microsoft/sql-server-samples/releases/download/adventureworks/AdventureWorks2022.bak";



    private static readonly HttpClient Http = new();



    internal static Uri Url
    {
        get
        {
            var configured = Environment.GetEnvironmentVariable(UrlVariable);
            return new Uri(string.IsNullOrWhiteSpace(configured) ? DefaultUrl : configured);
        }
    }



    internal static Task<byte[]> DownloadAsync()
    {
        return Http.GetByteArrayAsync(Url);
    }
}
