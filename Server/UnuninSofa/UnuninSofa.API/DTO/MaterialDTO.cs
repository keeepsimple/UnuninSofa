using UnuninSofa.Models;

namespace UnuninSofa.API.DTO
{
    public class MaterialDTO
    {
        public int Id { get; set; }

        public int ProductDetailId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }
    }
}
