using UnuninSofa.Models;

namespace UnuninSofa.API.DTO
{
    public class ProductDetailDTO
    {
        public int Id { get; set; }

        //public int ProductId { get; set; }

        public string Detail { get; set; }

        public string Size { get; set; }

        public List<int> MaterialIds { get; set; }

        public List<int> ColorIds { get; set; }
    }
}
