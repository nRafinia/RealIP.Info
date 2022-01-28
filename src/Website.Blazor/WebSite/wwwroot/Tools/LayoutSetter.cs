using Microsoft.AspNetCore.Components;
using WebSite.Shared;

namespace WebSite.wwwroot.Tools;

public class LayoutSetter : ComponentBase
{
    [CascadingParameter]
    public MainLayout Layout { get; set; }

    [Parameter]
    public RenderFragment Header { get; set; }

    [Parameter]
    public RenderFragment PageHeader { get; set; }

    [Parameter]
    public RenderFragment Footer { get; set; }

    protected override void OnInitialized()
    {
        Layout.SetHeaderAndFooter(Header, PageHeader, Footer);
    }
}