using UnuninSofa.Models.BaseEntities;

namespace UnuninSofa.Models
{
    public class Slider:BaseEntity
    {
        public string Name { get; set; }

        public string ImageUrl { get; set; }

        public string Link { get; set; }

        public bool IsPublished { get; set; }
    }
}
