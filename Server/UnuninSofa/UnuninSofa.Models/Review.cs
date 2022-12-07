using UnuninSofa.Models.BaseEntities;

namespace UnuninSofa.Models
{
    public class Review : BaseEntity
    {
        public int ProductId { get; set; }

        public virtual Product Product{ get; set; }

        public string UserId { get; set; }

        public virtual User User { get; set; }

        public string Comment { get; set; }
    }
}
