using Business.Extensions;
using Business.Providers;
using Business.Services.Dns;
using Business.Services.IP;
using MediatR;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Refit;
using WebSite;

var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });

//MediatR
builder.Services.AddMediatR(typeof(IIpApiService));

//Refit
builder.Services.AddTransient<RequestHeaderHandler>();
builder.Services
    .AddRefitClient<IIpApiService>()
    .ConfigureHttpClient(c =>
    {
        c.BaseAddress = new Uri("https://ipapi.co");
    })
    .AddHttpMessageHandler<RequestHeaderHandler>();

builder.Services
    .AddRefitClient<IDnsResolverService>()
    .ConfigureHttpClient(c =>
    {
        c.BaseAddress = new Uri("https://dns.google/");
    })
    .AddHttpMessageHandler<RequestHeaderHandler>();

//Services
builder.Services.AutoRegisterAllClass();

//Mapster
MapperConfig.Run();

await builder.Build().RunAsync();
