using Business.Models.IP;
using Refit;

namespace Business.Services.IP;

public interface IIpApiService
{
    [Get("/{ip}/json")]
    Task<IPApiResponse> GetIpApi(string ip);

    [Get("/json")]
    Task<IPApiResponse> GetIpApi();
}