using brewery.Models;
using brewery.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace brewery.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    [EnableCors("CorsPolicy")]
    public class BreweryController : ControllerBase
    {
        private readonly BreweryService _breweryService;
        private readonly BreweryDbContext _dbcontext;

        public BreweryController(BreweryService breweryService, BreweryDbContext breweryDbContext)
        {
            _breweryService = breweryService;
            _dbcontext = breweryDbContext;

        }

        [HttpGet]
        public async Task<IActionResult> SearchBreweries([FromQuery] string searchTerm)
        {
            try
            {
                var breweries = await _breweryService.SearchBreweries(searchTerm);
                return Ok(breweries);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetIntialBreweries()
        {
            try
            {
                var breweries = await _breweryService.GetBreweryIntial();
                return Ok(breweries);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }



        [HttpGet("{id}")]
        public async Task<IActionResult> GetBreweryDetails(string id)
        {
            var breweryDetails = await _breweryService.GetBrewery(id);

            var reviewsAndRatings = await _dbcontext.BreweryRatings
                .Where(x => x.BreweryId == id)
                .Select(x => new ReviewRating { Review = x.Review, Rating = x.Rating })
                .ToListAsync();

            var combinedResult = new BreweryReviews
            {
                BreweryDetails = breweryDetails,
                ReviewRatings = reviewsAndRatings
            };
            return Ok(combinedResult);
        }


        [HttpPost("{id}/review")]
        public async Task<IActionResult> AddReview(ReviewDto reviewDto)
     {
            BreweryRating breweryRating = new BreweryRating
            {
                Review = reviewDto.ReviewText,
                BreweryId = HttpContext.Request.RouteValues["id"].ToString(),
                Rating = reviewDto.Rating,

            };
            await _dbcontext.BreweryRatings.AddAsync(breweryRating);
            await _dbcontext.SaveChangesAsync();
            return Ok();
        }
    }
}
