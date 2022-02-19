using Business.Models.IP;
using Refit;

namespace Business.Services.IP;

public interface IIpApiService
{
    [Get("/{ip}/json?d={date}")]
    Task<IPApiResponse> GetIpApi(string ip, long date);

    [Get("/json?d={date}")]
    Task<IPApiResponse> GetIpApi(long date);
}