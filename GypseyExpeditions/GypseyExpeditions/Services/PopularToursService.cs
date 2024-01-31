using System.Text.Json;
using GypseyExpeditions.Models;

namespace GypseyExpeditions.Services
{
    public class PopularToursService
    {
        public PopularToursService(IWebHostEnvironment webHostEnvironment) => WebHostEnvironment = webHostEnvironment;
        public IWebHostEnvironment WebHostEnvironment { get; }
        private string JsonFileName
        {
            get { return Path.Combine(WebHostEnvironment.WebRootPath, "data", "ToursList.json"); }
        }
        public IEnumerable<PopularTours> GetPopularTours()
        {
            using (var jsonFileReader = File.OpenText(JsonFileName))
            {
                return JsonSerializer.Deserialize<PopularTours[]>(jsonFileReader.ReadToEnd(),
                    new JsonSerializerOptions
                    {
                        PropertyNameCaseInsensitive = true
                    });
            }
        }
        public PopularTours GetPopularToursById(int postId)
        {
            var PopularToursId = GetPopularTours();
            return PopularToursId.FirstOrDefault(post => post.Id == postId);
        }

        public PopularTours GetPopularToursByTitle(string postTitle)
        {
            var PopularToursTitle = GetPopularTours();
            return PopularToursTitle.FirstOrDefault(post => post.Title == postTitle);
        }

        public PopularTours GetPopularToursByPage(string postName)
        {
            var PopularToursTitle = GetPopularTours();
            return PopularToursTitle.FirstOrDefault(post => post.PageName == postName);
        }
    }
}
