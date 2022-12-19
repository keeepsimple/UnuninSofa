using System.Collections;
using UnuninSofa.Models.BaseEntities;

namespace UnuninSofa.Models
{
    public class ProductDetail : BaseEntity
    {
        public int ProductId { get; set; }

        public virtual Product Product { get; set; }

        public string Detail { get; set; }

        public string Size { get; set; }

        public virtual ICollection<Material> Materials { get; set; }

        public virtual ICollection<Color> Colors { get; set; }
    }
}
