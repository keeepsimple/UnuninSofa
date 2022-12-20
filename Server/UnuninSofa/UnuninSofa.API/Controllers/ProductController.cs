using Microsoft.AspNetCore.Mvc;
using UnuninSofa.BusinessLayer.IServices;

namespace UnuninSofa.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productService;

        public ProductController(IProductService productService)
        {
            _productService = productService;
        }

        [HttpGet("{subId}")]
        public async Task<IActionResult> GetBySubCate(int subId, int take = 3)
        {
            var products = await _productService.TakeProductInSubCateAsync(subId, take);
            return Ok(products);
        }
    }
}
