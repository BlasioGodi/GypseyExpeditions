using GypseyExpeditions.Models;
using GypseyExpeditions.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace GypseyExpeditions.Controllers
{
    public class IndexModel : BasePageModel
    {
        private readonly ILogger<IndexModel> _logger;
        public PopularToursService _PopularToursService;
        public IEnumerable<PopularTours> PopularTours { get; private set; }

        public IndexModel(ILogger<IndexModel> logger, PopularToursService PopularToursService)
        {
            _logger = logger;
            _PopularToursService = PopularToursService;
        }

        public void OnGet()
        {
            Theme = "dark"; // Set the theme to light for this index page
            base.GetTheme(Theme);

            PopularTours = _PopularToursService.GetPopularTours();
        }
    }
}