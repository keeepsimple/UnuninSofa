using Microsoft.AspNetCore.Mvc;
using System.Linq.Expressions;
using UnuninSofa.API.DTO;
using UnuninSofa.BusinessLayer.IServices;
using UnuninSofa.Models;

namespace UnuninSofa.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productService;
        private readonly IProductDetailService _productDetailService;
        private readonly IImageService _imageService;

        public ProductController(IProductService productService,
            IProductDetailService productDetailService,
            IImageService imageService)
        {
            _productService = productService;
            _productDetailService = productDetailService;
            _imageService = imageService;
        }

        [HttpGet("GetPaging/{pageNum}")]
        public async Task<IActionResult> Get(string? searchString, int? subCateId, int? pageNum = 1, int pageSize = 5)
        {
            Expression<Func<Product, bool>> filter = null;

            if (!string.IsNullOrEmpty(searchString))
            {
                filter = f => f.Name.Contains(searchString);
            }

            if (subCateId != null)
            {
                filter = f => f.SubCategoryId == subCateId;
            }

            if (subCateId != null && !string.IsNullOrEmpty(searchString))
            {
                filter = f => f.SubCategoryId == subCateId && f.Name.Contains(searchString);
            }

            Func<IQueryable<Product>, IOrderedQueryable<Product>> orderBy = o => o.OrderByDescending(x => x.CreatedAt);
            var products = await _productService.GetAsync(filter, orderBy, pageNum ?? 1, pageSize);
            var count = await _productService.Count(filter);
            var paging = new PagingModel<Product> { Count = count, List = products };
            return Ok(paging);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var product = await _productService.GetByIdAsync(id);
            if (product == null) return NotFound(new { mess = "Không tìm thấy sản phẩm" });
            await _productDetailService.GetProductDetailByProductAsync(product.Id);
            var images = await _imageService.GetImageByProductCode(product.Code);

            return Ok(new { product, images });
        }
    }
}
