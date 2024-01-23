using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Collections;

namespace GypseyExpeditions.Models
{
    public class BasePageModel : PageModel
    {
        public List<string> Destinations { get; set; }
        public List<string> Packages { get; set; }
        public List<string> SocialIcons { get; set; }
        public List<string> SocialList { get; set; }
        public string Theme { get; set; } = "light"; // Default to light
        public void GetTheme(string Theme)
        {
            if (Theme == "light")
            {
                ConfigureLightTheme();
            }
            else
            {
                ConfigureDarkTheme();
            }
        }
        private void ConfigureLightTheme()
        {
            ViewData["Social-List-Light"] = ".social-list .bi , .social-list .fa, .social-list .fa-brands{color: #606060;}";
        }
        private void ConfigureDarkTheme()
        {
            ViewData["Social-List-Light"] = ".social-list .bi , .social-list .fa, .social-list .fa-brands{color: #f8f9fa;}";
        }
    }
}
