using UnuninSofa.Models.BaseEntities;

namespace UnuninSofa.Models
{
    public class Sale : BaseEntity
    {
        public string Title { get; set; }

        public string Content { get; set; }

        public int Percent { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        public virtual ICollection<Product> Products { get; set; }
    }
}
