using Microsoft.AspNetCore.Identity;

namespace UnuninSofa.Models
{
    public class User : IdentityUser
    {
        public string Address { get; set; }

        public string FullName { get; set; }

        public string? RefreshToken { get; set; }

        public DateTime RefreshTokenExpiryTime { get; set; }

        public virtual ICollection<Review> Reviews { get; set; }

        public virtual ICollection<Order> Orders { get; set; }

        public virtual ICollection<Transaction> Transactions { get; set; }
    }
}
