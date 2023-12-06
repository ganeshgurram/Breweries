using System.ComponentModel.DataAnnotations;

namespace brewery.Models
{
    public class User
    {
        public string Name { get; set; }

        [Key]
        public string UserName { get; set; }
        public string PhoneNumber { get; set; }
        public string Password { get; set; }
    }
}
