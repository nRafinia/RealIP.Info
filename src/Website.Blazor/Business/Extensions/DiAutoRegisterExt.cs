using Business.Models.DI;
using Microsoft.Extensions.DependencyInjection;
using System.Reflection;

namespace Business.Extensions;

public static class DiAutoRegisterExt
{
    public static void AutoRegisterAllClass(this IServiceCollection services)
    {
        var assembly = typeof(ISingleton).Assembly;
        //RegisterSingletons(services, assembly);
        RegisterClass<ISingleton>(services, assembly, ServiceLifetime.Singleton);
        RegisterClass<IScoped>(services, assembly, ServiceLifetime.Scoped);
        RegisterClass<ITransient>(services, assembly, ServiceLifetime.Transient);
    }

    private static IEnumerable<Type> FindTypeChildren(Assembly assembly, Type type)
    {
        return assembly.GetTypes()
            .Where(_ => !_.IsInterface && type.IsAssignableFrom(_));
    }

    private static void RegisterSingletons(IServiceCollection services, Assembly assembly)
    {
        var classes = FindTypeChildren(assembly, typeof(ISingleton));
        foreach (var @class in classes)
        {
            services.AddSingleton(@class);
        }
    }

    private static void RegisterClass<T>(IServiceCollection services, Assembly assembly, ServiceLifetime lifetime)
    {
        var classes = FindTypeChildren(assembly, typeof(T));
        foreach (var @class in classes)
        {
            //services.AddScoped(@class);
            services.Add(new ServiceDescriptor(@class, @class, lifetime));
        }
    }
}