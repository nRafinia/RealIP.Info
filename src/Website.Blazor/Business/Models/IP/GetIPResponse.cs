namespace Business.Models.IP;

public class GetIPResponse
{
    public string Ip { get; set; }
    public string Version { get; set; }
    public string City { get; set; }
    public string Region { get; set; }
    public string RegionCode { get; set; }
    public string Country { get; set; }
    public string CountryName { get; set; }
    public string CountryCode { get; set; }
    public string CountryCodeIso3 { get; set; }
    public string CountryCapital { get; set; }
    public string CountryTld { get; set; }
    public string ContinentCode { get; set; }
    public bool InEu { get; set; }
    public string Postal { get; set; }
    public float Latitude { get; set; }
    public float Longitude { get; set; }
    public string Timezone { get; set; }
    public string UtcOffset { get; set; }
    public string CountryCallingCode { get; set; }
    public string Currency { get; set; }
    public string Currency_name { get; set; }
    public string Languages { get; set; }
    public float CountryArea { get; set; }
    public int CountryPopulation { get; set; }
    public string Asn { get; set; }
    public string Org { get; set; }

}