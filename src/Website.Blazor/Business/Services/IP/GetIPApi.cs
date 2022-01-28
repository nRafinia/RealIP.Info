using Business.Models.IP;
using MediatR;

namespace Business.Services.IP;

public class GetIPApi
{
    public record Query(string Ip) : IRequest<IPApiResponse>;

    public class Handler : IRequestHandler<Query, IPApiResponse>
    {
        private readonly IIpApiService _ipApiService;
        public Handler(IIpApiService ipApiService)
        {
            _ipApiService = ipApiService;
        }

        public Task<IPApiResponse> Handle(Query request, CancellationToken cancellationToken)
        {
            try
            {
                return _ipApiService.GetIpApi(request.Ip);
            }
            catch
            {
                var res = new IPApiResponse()
                {
                    Ip = request.Ip
                };

                return Task.FromResult(res);
            }
        }
    }
}