using UnuninSofa.Models.BaseEntities;

namespace UnuninSofa.Models
{
    public class Order : BaseEntity
    {
        public string Address { get; set; }

        public int Status { get; set; }

        public decimal TotalPrice { get; set; }

        public string UserId { get; set; }

        public string PhoneNumber { get; set; }

        public string FullName { get; set; }

        public virtual User User { get; set; }

        public virtual ICollection<Transaction> Transactions { get; set; }

        public virtual ICollection<OrderDetail> OrderDetails { get; set; }
    }
}
