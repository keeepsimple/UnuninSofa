using Microsoft.AspNetCore.Http;
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

        [HttpGet("GetImagesSlider")]
        public async Task<IActionResult> GetImagesSlider()
        {
            var images = await _imageService.GetImagesSlider();
            return Ok(images);
        }
    }
}
