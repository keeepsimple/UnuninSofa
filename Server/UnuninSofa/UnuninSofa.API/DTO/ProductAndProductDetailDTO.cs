namespace UnuninSofa.API.DTO
{
    public class ProductAndProductDetailDTO
    {
        public ProductDTO Product { get; set; }

        public ProductDetailDTO ProductDetail { get; set; }

        public List<ImageDTO> Images { get; set; }
    }
}
