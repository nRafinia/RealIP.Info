namespace Business.Providers;

public class RequestHeaderHandler : DelegatingHandler
{
    protected override async Task<HttpResponseMessage> SendAsync(HttpRequestMessage request,
        CancellationToken cancellationToken)
    {
        //request.Headers.Add("Cache-Control", "no-cache");

        /*#if DEBUG
                Console.WriteLine("---->" + request.RequestUri.PathAndQuery);
                if (request.RequestUri.PathAndQuery.StartsWith("/api/service/v1.0/charge/GetSpecialOffer"))
                {
                    var builder = new UriBuilder(request.RequestUri)
                    {
                        Scheme = "https",
                        Host = "testpanel.eways.co",
                        Port = 443
                    };
                    request.RequestUri = builder.Uri;
                }
        #endif*/

        return await base.SendAsync(request, cancellationToken);
    }
}