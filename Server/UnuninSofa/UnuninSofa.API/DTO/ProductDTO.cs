using UnuninSofa.Models;

namespace UnuninSofa.API.DTO
{
    public class ProductDTO
    {
        public int Id { get; set; }

        public string Code { get; set; }

        public string Name { get; set; }

        public string? Description { get; set; }

        public decimal Rate { get; set; }

        public int RateCount { get; set; }

        public decimal Price { get; set; }

        public int View { get; set; }

        public int Status { get; set; }

        public int SubCategoryId { get; set; }
    }
}
