using Business.Models.IP;
using Refit;

namespace Business.Services.Dns;

public interface IDnsResolverService
{
    [Get("/resolve?name={dns}&type={type}")]
    Task<GoogleDnsResponse> Resolve(string dns, RecordType type);
}