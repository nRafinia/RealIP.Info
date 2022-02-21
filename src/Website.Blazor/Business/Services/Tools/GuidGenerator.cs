using Business.Models.DI;
using Business.Models.Tools;

namespace Business.Services.Tools;

public class GuidGenerator : ISingleton
{
    public string Generate(GuidGeneratorModel model)
    {
        var g = Guid.NewGuid().ToString();
        if (model.Uppercase)
            g = g.ToUpper();
        if (model.Braces)
            g = "{" + g + "}";
        if (!model.Hyphens)
            g = g.Replace("-", "");

        return g;
    }
}
