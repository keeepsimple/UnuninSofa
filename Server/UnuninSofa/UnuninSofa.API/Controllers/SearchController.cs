using Microsoft.AspNetCore.Mvc;
using System.Linq.Expressions;
using UnuninSofa.BusinessLayer.IServices;
using UnuninSofa.Models;

namespace UnuninSofa.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SearchController : ControllerBase
    {
        private readonly IProductService _productService;

        public SearchController(IProductService productService)
        {
            _productService = productService;
        }

        [HttpGet]
        public async Task<IActionResult> Search(string searchString)
        {
            Expression<Func<Product, bool>> filter = null;

            if (!string.IsNullOrEmpty(searchString))
            {
                filter = f => f.Name.Contains(searchString);
            }

            Func<IQueryable<Product>, IOrderedQueryable<Product>> orderBy = o => o.OrderByDescending(x => x.CreatedAt);
            var products = await _productService.GetAsync(filter, orderBy, 1, 10);
            return Ok(products);
        }
    }
}
