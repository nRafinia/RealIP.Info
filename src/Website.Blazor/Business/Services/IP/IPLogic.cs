using Business.Extensions;
using Business.Models.DI;
using Business.Models.IP;
using Business.Providers;
using MediatR;

namespace Business.Services.IP;

public class IPLogic : IScoped
{
    private readonly IMediator _mediator;
    private readonly AddressUtility _addressUtility;

    public IPLogic(IMediator mediator, AddressUtility addressUtility)
    {
        _mediator = mediator;
        _addressUtility = addressUtility;
    }

    public async Task<GetIPResponse> GetIpInfo(string ip)
    {
        if (string.IsNullOrWhiteSpace(ip))
        {
            return new();
        }

        var address = _addressUtility.NormalizeAddress(ip);
        if (!_addressUtility.IsIpAddressValid(ip, out _))
        {
            var ipAddress = await _mediator.Send(new Dns.Resolve.Query(address, RecordType.A));
            if (!ipAddress.IsOk)
            {
                return new();
            }

            if (!ipAddress.Answer.Any())
            {
                ipAddress = await _mediator.Send(new Dns.Resolve.Query(address, RecordType.AAAA));
                if (!ipAddress.IsOk)
                {
                    return new();
                }
            }

            address = ipAddress.Answer.FirstOrDefault()?.Data;
        }

        if (string.IsNullOrWhiteSpace(address))
        {
            return new();
        }

        var ipApiRes = await _mediator.Send(new GetIPApi.Query(address));

        if (ipApiRes.Error)
        {
            return new();
        }

        var res = ipApiRes.MapTo<GetIPResponse>();

        return res;
    }

    public async Task<GetIPResponse> GetCurrentIpInfo()
    {
        var ipApiRes = await _mediator.Send(new GetCurrentIPApi.Query());

        if (ipApiRes.Error)
        {
            return new();
        }

        var res = ipApiRes.MapTo<GetIPResponse>();

        return res;
    }
}