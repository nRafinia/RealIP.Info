using Business.Providers;
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
builder.Services
    .AddRefitClient<IIpApiService>()
    .ConfigureHttpClient(c => c.BaseAddress = new Uri("https://ipapi.co"));

//Services
builder.Services.AddScoped<IPLogic>();

//Mapster
MapperConfig.Run();

await builder.Build().RunAsync();
