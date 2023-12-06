using Microsoft.EntityFrameworkCore;

namespace brewery.Models
{
    public class BreweryDbContext : DbContext
    {
        public BreweryDbContext(DbContextOptions<BreweryDbContext> options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<BreweryRating> BreweryRatings { get; set;}

    }
}
