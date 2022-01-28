using System.Text.Json.Serialization;

namespace Business.Models.IP;

public class IPApiResponse
{
    public string Ip { get; set; }
    public string Version { get; set; }
    public string City { get; set; }
    public string Region { get; set; }

    [JsonPropertyName("egion_code")]
    public string RegionCode { get; set; }
    public string Country { get; set; }

    [JsonPropertyName("country_name")]
    public string CountryName { get; set; }

    [JsonPropertyName("country_code")]
    public string CountryCode { get; set; }

    [JsonPropertyName("country_code_iso3")]
    public string CountryCodeIso3 { get; set; }

    [JsonPropertyName("country_capital")]
    public string CountryCapital { get; set; }

    [JsonPropertyName("country_tld")]
    public string CountryTld { get; set; }

    [JsonPropertyName("continent_code")]
    public string ContinentCode { get; set; }

    [JsonPropertyName("in_eu")]
    public bool InEu { get; set; }
    public string Postal { get; set; }
    public float Latitude { get; set; }
    public float Longitude { get; set; }
    public string Timezone { get; set; }

    [JsonPropertyName("utc_offset")]
    public string UtcOffset { get; set; }

    [JsonPropertyName("country_calling_code")]
    public string CountryCallingCode { get; set; }
    public string Currency { get; set; }
    public string Currency_name { get; set; }
    public string Languages { get; set; }

    [JsonPropertyName("country_area")]
    public float CountryArea { get; set; }

    [JsonPropertyName("country_population")]
    public int CountryPopulation { get; set; }
    public string Asn { get; set; }
    public string Org { get; set; }

    public bool Error { get; set; }
}
