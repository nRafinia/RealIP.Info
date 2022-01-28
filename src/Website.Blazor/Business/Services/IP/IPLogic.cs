using Business.Extensions;
using Business.Models.IP;
using MediatR;

namespace Business.Services.IP;

public class IPLogic
{
    private readonly IMediator _mediator;

    public IPLogic(IMediator mediator)
    {
        _mediator = mediator;
    }

    public async Task<GetIPResponse> GetIpInfo(string ip)
    {
        var ipApiRes = string.IsNullOrWhiteSpace(ip)
            ? await _mediator.Send(new GetCurrentIPApi.Query())
            : await _mediator.Send(new GetIPApi.Query(ip));

        if (ipApiRes.Error)
        {
            return new();
        }

        var res = ipApiRes.MapTo<GetIPResponse>();

        return res;
    }
}