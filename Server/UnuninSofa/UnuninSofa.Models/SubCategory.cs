using UnuninSofa.Models.BaseEntities;

namespace UnuninSofa.Models
{
    public class SubCategory: BaseEntity
    {
        public string Name { get; set; }

        public string? Description { get; set; }

        public string? ImageUrl { get; set; }

        public int CategoryId { get; set; }

        public virtual Category Category { get; set; }

        public virtual ICollection<Product> Products { get; set;}
    }
}
