using brewery.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace brewery.Services
{
    public class BreweryService
    {

        private readonly HttpClient _httpClient;

        public BreweryService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<BreweryInfo[]> SearchBreweries(string searchTerm)
        {
            var apiUrl = $"https://api.openbrewerydb.org/breweries/search?query={searchTerm}";
            var response = await _httpClient.GetStringAsync(apiUrl);

            // Deserialize the JSON response
            var breweries = JsonConvert.DeserializeObject<BreweryInfo[]>(response);

            return breweries;
        }

        public async Task<BreweryInfo> GetBrewery(string Id)
        {
            var apiUrl = $"https://api.openbrewerydb.org/v1/breweries/{Id}";
            var response = await _httpClient.GetStringAsync(apiUrl);

            var brewery = JsonConvert.DeserializeObject<BreweryInfo>(response);

            return brewery;
        }

        public async Task<BreweryInfo[]> GetBreweryIntial()
        {
            var apiUrl = $"https://api.openbrewerydb.org/v1/breweries?per_page=10";
            var response = await _httpClient.GetStringAsync(apiUrl);

            // Deserialize the JSON response
            var breweries = JsonConvert.DeserializeObject<BreweryInfo[]>(response);

            return breweries;
        }


    }
}
