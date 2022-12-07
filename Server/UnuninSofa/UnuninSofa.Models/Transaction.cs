using UnuninSofa.Models.BaseEntities;

namespace UnuninSofa.Models
{
    public class Transaction : BaseEntity
    {
        public string UserId { get; set; }

        public virtual User User { get; set; }

        public int? OrderId { get; set; }

        public virtual Order Order { get; set; }

        public int Status { get; set; }

        public string Mode { get; set; }

        public string? CreditCard { get; set; }
    }
}
