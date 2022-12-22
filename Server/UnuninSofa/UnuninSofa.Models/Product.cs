using UnuninSofa.Models.BaseEntities;

namespace UnuninSofa.Models
{
    public class Product : BaseEntity
    {
        public string Code { get; set; }

        public string Name { get; set; }

        public string? Description { get; set; }

        public decimal Rate { get; set; }

        public int RateCount { get; set; }

        public decimal Price { get; set; }

        public int Status { get; set; }

        public int SubCategoryId { get; set; }

        public virtual SubCategory SubCategory { get; set; }

        public virtual ProductDetail ProductDetail { get; set; }

        public virtual ICollection<Review> Reviews { get; set; }
    }
}
