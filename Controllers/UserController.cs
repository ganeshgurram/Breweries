using brewery.Models;
using brewery.Services;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Runtime.CompilerServices;
using System.Security.Claims;

namespace brewery.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    [EnableCors("CorsPolicy")]
    public class UserController : ControllerBase
    {
        private readonly BreweryDbContext _dbContext;
        private readonly UserService _userService;
        public UserController(BreweryDbContext dbcontext,UserService userService) {
            _dbContext = dbcontext;
            _userService = userService;
        }

        [HttpPost]
        public async Task<IActionResult> Register(User user)
        {
            User u = new User();
            var user1 = await _dbContext.Users.Where(x => x.UserName == user.UserName).FirstOrDefaultAsync();
            if(user1 != null) {
                return BadRequest("User is already Present");
            }
            u.PhoneNumber = user.PhoneNumber;
            u.UserName = user.UserName;
            u.Name = user.Name;
            u.Password = user.Password;

            await _dbContext.Users.AddAsync(u);
            await _dbContext.SaveChangesAsync();
            return Ok("Registered");
        }

        [HttpGet]
        public async Task<IActionResult> User()
        {
            return Ok();
        }


        [HttpPost]
        public async Task<IActionResult> Login([FromBody] Logger logger)
        {
            var user = await _dbContext.Users.Where(x=> x.UserName==logger.UserName).FirstOrDefaultAsync();
            if(user == null )
            {
                return BadRequest("No User Found");
            }
            if(user.Password != logger.Password)
            {
                return BadRequest("Wrong Password");
            }



            /*
            var userAuthDate = DateTime.UtcNow;
            var claimsNew = new List<Claim>
        {
            new(ClaimTypes.Sid, user.UserName),
            new(ClaimTypes.Email,user.UserName),
            new("LastChanged", userAuthDate.ToString()),
        };

            var claimsIdentity = new ClaimsIdentity(
                claimsNew, "Identity.Application");

            await HttpContext.SignInAsync(
                "Identity.Application",
                new ClaimsPrincipal(claimsIdentity),
                new AuthenticationProperties
                {
                    AllowRefresh = true,
                    ExpiresUtc = DateTime.UtcNow.AddDays(2),
                    IsPersistent = true,
                    IssuedUtc = DateTime.UtcNow,
                });

            var s = _userService.UserEmail;
            */

            return Ok(user.UserName);
        }
    }
}
