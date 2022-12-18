namespace UnuninSofa.API.DTO
{
    public class MainProductDTO
    {
        public ProductDTO Product { get; set; }

        public ProductDetailDTO ProductDetail { get; set; }

        public IList<IFormFile> UploadFiles { get; set; }
    }
}
