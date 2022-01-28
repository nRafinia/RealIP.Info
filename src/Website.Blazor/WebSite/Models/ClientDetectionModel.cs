namespace WebSite.Models;

public class ClientDetectionModel
{
    public string Browser { get; set; }
    public int BrowserMajorVersion { get; set; }
    public string BrowserVersion { get; set; }
    public string Os { get; set; }
    public string OsVersion { get; set; }
}