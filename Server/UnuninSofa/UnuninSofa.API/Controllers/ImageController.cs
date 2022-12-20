using Microsoft.AspNetCore.Mvc;
using UnuninSofa.BusinessLayer.IServices;

namespace UnuninSofa.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImageController : ControllerBase
    {
        private readonly IImageService _imageService;

        public ImageController(IImageService imageService)
        {
            _imageService = imageService;
        }

        [HttpGet("Thumbnail/{code}")]
        public async Task<IActionResult> GetThumbnail(string code)
        {
            var image = await _imageService.GetImageThumbByProductCode(code);
            return Ok(image);
        }
    }
}
