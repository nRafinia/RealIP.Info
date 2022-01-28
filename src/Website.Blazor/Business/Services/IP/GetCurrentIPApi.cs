using Business.Models.IP;
using MediatR;

namespace Business.Services.IP;

public class GetCurrentIPApi
{
    public record Query() : IRequest<IPApiResponse>;

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
                return _ipApiService.GetIpApi();
            }
            catch
            {
                var res = new IPApiResponse()
                {
                    Error = true
                };

                return Task.FromResult(res);
            }
        }
    }
}