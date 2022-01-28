using Business.Models.IP;
using Mapster;

namespace Business.Providers;

public static class MapperConfig
{
    public static void Run()
    {
        Ip();
    }

    private static void Ip()
    {
        TypeAdapterConfig<IPApiResponse, GetIPResponse>
            .NewConfig();
    }
}