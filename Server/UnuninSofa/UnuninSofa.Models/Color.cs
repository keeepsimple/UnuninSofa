using UnuninSofa.Models.BaseEntities;

namespace UnuninSofa.Models
{
    public class Color: BaseEntity
    {
        public string Name { get; set; }

        public virtual ICollection<ProductDetail> ProductDetails { get; set; }
    }
}
