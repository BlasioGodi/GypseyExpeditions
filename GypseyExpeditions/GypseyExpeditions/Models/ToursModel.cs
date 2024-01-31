using System.Text.Json;
using System.Text.Json.Serialization;

namespace GypseyExpeditions.Models
{
    public class PopularTours
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string PageName { get; set; }
        public string Highlight { get; set; }
        public string Summary { get; set; }
        public DateTime TravelDate { get; set; } = DateTime.Now; // Default to current date
        public int Rating { get; set; }
        public string TourName { get; set; }
        public string CostPerPerson { get; set; }
        public int TripDays { get; set; }
        public string Destination { get; set; }

        [JsonPropertyName("img")]
        public string ImageUrl { get; set; }
        [JsonPropertyName("imgAlt")]
        public string ImageAlt { get; set; }
        public override string ToString() => JsonSerializer.Serialize<PopularTours>(this);
    }
}