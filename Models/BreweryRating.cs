using System.ComponentModel.DataAnnotations;

namespace brewery.Models
{
    public class BreweryRating
    {
        [Key]
        public int  Id { get; set; }
        public string BreweryId { get; set; }

        public int Rating { get; set; }

        public string Review { get; set; }
    }
}
