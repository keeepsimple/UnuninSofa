using System.ComponentModel.DataAnnotations;

namespace UnuninSofa.API.DTO
{
    public class RegisterDTO
    {
        public string Username { get; set; }

        [EmailAddress]
        public string Email { get; set; }

        [Phone]
        public string PhoneNumber { get; set; }

        public string Address { get; set; }

        public string Password { get; set; }
    }
}
