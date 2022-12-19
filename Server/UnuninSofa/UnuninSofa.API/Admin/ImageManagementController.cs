using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UnuninSofa.BusinessLayer.IServices;
using UnuninSofa.Models;

namespace UnuninSofa.API.Admin
{
    [Route("api/[controller]")]
    [Authorize(Roles = "Admin")]
    [ApiController]
    public class ImageManagementController : ControllerBase
    {
        private readonly IImageService _imageService;
        private IWebHostEnvironment _webHost;

        public ImageManagementController(IImageService imageService, IWebHostEnvironment webHost)
        {
            _imageService = imageService;
            _webHost = webHost;
        }

        [HttpPost]
        public async Task<IActionResult> AddImageToProduct(IFormCollection data)
        {
            var images = data.Files;
            var productCode = data["productCode"];
            string folderPath = _webHost.WebRootPath + "\\images\\Products\\" + productCode + "\\";
            if (!Directory.Exists(folderPath))
            {
                Directory.CreateDirectory(folderPath);
            }

            if (images.Count() > 0)
            {
                foreach (var item in images)
                {
                    var file = Path.Combine(_webHost.WebRootPath, folderPath, item.FileName);
                    using (var fileStream = new FileStream(file, FileMode.Create))
                    {
                        await item.CopyToAsync(fileStream);
                    }
                    var image = new Image
                    {
                        ProductCode = productCode,
                        ImageUrl = item.FileName
                    };
                    await _imageService.AddAsync(image);
                }
            }
            return Ok("Create success");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var image = await _imageService.GetByIdAsync(id);
            if (image == null) return BadRequest(new { mess = "Không tìm thấy ảnh" });
            string folderPath = _webHost.WebRootPath + "\\images\\Products\\" + image.ProductCode + "\\";
            var imagePath = Path.Combine(_webHost.WebRootPath, folderPath, image.ImageUrl);
            System.IO.File.Delete(imagePath);
            await _imageService.DeleteAsync(image);

            return Ok("Delete success");
        }
    }
}
