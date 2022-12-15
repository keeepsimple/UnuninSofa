using UnuninSofa.Models.BaseEntities;

namespace UnuninSofa.Models
{
    public class Image : BaseEntity
    {
        public int ProductDetailId { get; set; }

        public virtual ProductDetail ProductDetail { get; set; }

        public string ImageUrl { get; set; }
    }
}
