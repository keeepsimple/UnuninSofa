using UnuninSofa.Models;

namespace UnuninSofa.API.DTO
{
    public class ImageDTO
    {
        public int Id { get; set; }

        public IFormFile? ImageUrl { get; set; }
    }
}
