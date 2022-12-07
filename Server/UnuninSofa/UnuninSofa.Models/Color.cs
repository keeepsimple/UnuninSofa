using UnuninSofa.Models.BaseEntities;

namespace UnuninSofa.Models
{
    public class Color: BaseEntity
    {
        public int ProductDetailId { get; set; }

        public virtual ProductDetail ProductDetail { get; set; }

        public string Name { get; set; }
    }
}
