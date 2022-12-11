using UnuninSofa.Models.BaseEntities;

namespace UnuninSofa.Models
{
    public class ImageCategory:BaseEntity
    {
        public string Name { get; set; }

        public virtual ICollection<Image> Images { get; set; }
    }
}
