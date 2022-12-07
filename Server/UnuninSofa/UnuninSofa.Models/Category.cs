using UnuninSofa.Models.BaseEntities;

namespace UnuninSofa.Models
{
    public class Category : BaseEntity
    {
        public string Name { get; set; }

        public virtual ICollection<SubCategory> SubCategories { get; set; }
    }
}
