using System.ComponentModel.DataAnnotations;

namespace UnuninSofa.API.DTO
{
    public class UserDTO
    {

        public string UserName { get; set; }

        public string FullName { get; set; }

        [EmailAddress]
        public string Email { get; set; }

        [Phone]
        public string PhoneNumber { get; set; }

        public string Address { get; set; }
    }
}
