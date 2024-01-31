using GypseyExpeditions.Models;
using GypseyExpeditions.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace GypseyExpeditions.Controllers
{
    public class _HeaderModel : BasePageModel
    {
        private readonly PopularToursService _PopularToursService;

        public _HeaderModel(PopularToursService PopularToursService)
        {
            _PopularToursService = PopularToursService;
        }
        public void OnGet()
        {
            PopularTours = _PopularToursService.GetPopularTours();
        }
    }
}
