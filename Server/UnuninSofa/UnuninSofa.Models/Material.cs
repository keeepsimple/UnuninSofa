using UnuninSofa.Models.BaseEntities;

namespace UnuninSofa.Models
{
    public class Material : BaseEntity
    {
        public string Name { get; set; }

        public string Description { get; set; }

        public virtual ICollection<ProductDetail> ProductDetails { get; set;}
    }
}
