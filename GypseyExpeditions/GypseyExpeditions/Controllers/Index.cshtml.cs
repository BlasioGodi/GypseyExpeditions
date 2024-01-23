using GypseyExpeditions.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace GypseyExpeditions.Controllers
{
    public class IndexModel : BasePageModel
    {
        private readonly ILogger<IndexModel> _logger;

        public IndexModel(ILogger<IndexModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
            Theme = "dark"; // Set the theme to light for this index page
            base.GetTheme(Theme);
        }
    }
}