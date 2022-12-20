using Microsoft.AspNetCore.Mvc;
using UnuninSofa.BusinessLayer.IServices;

namespace UnuninSofa.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubCategoryController : ControllerBase
    {
        private readonly ISubCategoryService _subCategoryService;

        public SubCategoryController(ISubCategoryService subCategoryService)
        {
            _subCategoryService = subCategoryService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var subCates = await _subCategoryService.GetAllAsync();
            return Ok(subCates);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var subCate = await _subCategoryService.GetByIdAsync(id);
            return Ok(subCate);
        }

        [HttpGet("GetByCateId/{cateId}")]
        public async Task<IActionResult> GetByCate(int cateId)
        {
            var subCategories = await _subCategoryService.GetSubCategoriesByCateId(cateId);
            return Ok(subCategories);
        }
    }
}
