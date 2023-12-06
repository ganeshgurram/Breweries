using System.Security.Claims;

namespace brewery.Services
{
    public class UserService
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly IConfiguration _configuration;

        public UserService(IHttpContextAccessor httpContextAccessor,
            IConfiguration configuration)
        {
            _httpContextAccessor = httpContextAccessor;
            _configuration = configuration;
        }

        public string UserEmail
        {
            get
            {
                if (string.IsNullOrWhiteSpace(_httpContextAccessor.HttpContext?.User?.FindFirstValue(ClaimTypes.Email)))
                {
                    throw new ArgumentNullException("Email is missing");
                }
                string email = _httpContextAccessor.HttpContext?.User?.FindFirstValue(ClaimTypes.Email);
                return email;
            }
        }
    }
}
