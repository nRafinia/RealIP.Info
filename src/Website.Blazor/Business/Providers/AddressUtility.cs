using System.Net;

namespace Business.Providers;

public class AddressUtility
{
    public string NormalizeAndIp(string address)
    {
        if (string.IsNullOrWhiteSpace(address))
            return address;

        return address
            .Replace("http://", "")
            .Replace("https://", "")
            .Replace("ftp://", "")
            .Split("/", StringSplitOptions.RemoveEmptyEntries)
                .FirstOrDefault();
    }

    public bool IsIpAddressValid(string address, out IPAddress ipAddress)
    {
        return IPAddress.TryParse(address, out ipAddress);
    }
}