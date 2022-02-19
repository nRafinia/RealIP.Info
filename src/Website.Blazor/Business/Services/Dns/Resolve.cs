using Business.Models.IP;
using MediatR;

namespace Business.Services.Dns;

public class Resolve
{
    public record Query(string Dns, RecordType Type) : IRequest<GoogleDnsResponse>;

    public class Handler : IRequestHandler<Query, GoogleDnsResponse>
    {
        private readonly IDnsResolverService _dnsResolver;
        public Handler(IDnsResolverService dnsResolver)
        {
            _dnsResolver = dnsResolver;
        }

        public async Task<GoogleDnsResponse> Handle(Query request, CancellationToken cancellationToken)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(request.Dns))
                {
                    return new()
                    {
                        Status = -2
                    };
                }

                return await _dnsResolver.Resolve(request.Dns, request.Type);
            }
            catch
            {
                return new()
                {
                    Status = -1
                };
            }
        }
    }
}