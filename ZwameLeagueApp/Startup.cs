using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ZwameLeagueApp.Startup))]
namespace ZwameLeagueApp
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
