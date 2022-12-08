using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Linq.Expressions;
using UnuninSofa.API.DTO;
using UnuninSofa.BusinessLayer.IServices;
using UnuninSofa.BusinessLayer.Services;
using UnuninSofa.Models;

namespace UnuninSofa.API.Admin
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubCategoryManagementController : ControllerBase
    {
        private readonly ISubCategoryService _subCategoryService;
        private readonly ICategoryService _categoryService;
        private readonly IMapper _mapper;

        public SubCategoryManagementController(ISubCategoryService subCategoryService, IMapper mapper, ICategoryService categoryService)
        {
            _subCategoryService = subCategoryService;
            _mapper = mapper;
            _categoryService = categoryService;
        }

        [HttpGet("GetPaging/{pageNum}")]
        public async Task<IActionResult> Get(string? searchString, int? pageNum = 1, int pageSize = 5)
        {
            Expression<Func<SubCategory, bool>> filter = null;
            if (!string.IsNullOrEmpty(searchString))
            {
                filter = f => f.Name.Contains(searchString);
            }

            Func<IQueryable<SubCategory>, IOrderedQueryable<SubCategory>> orderBy = o => o.OrderByDescending(x => x.CreatedAt);
            var subCategories = await _subCategoryService.GetAsync(filter, orderBy, pageNum ?? 1, pageSize);
            var count = await _subCategoryService.Count(filter);
            var paging = new PagingModel<SubCategory> { Count = count, List = subCategories };
            return Ok(paging);
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var subCate = await _subCategoryService.GetAllAsync();
            return Ok(subCate);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var subCate = await _subCategoryService.GetByIdAsync(id);
            if (subCate == null) return NotFound(subCate);
            return Ok(subCate);
        }

        [HttpPost]
        public async Task<IActionResult> Create(SubCategoryDTO model)
        {
            if (!ModelState.IsValid) return BadRequest(model);
            var cate = await _categoryService.GetByIdAsync(model.CategoryId);
            if (cate == null) return NotFound(cate);

            var subCate = _mapper.Map<SubCategory>(model);
            var result = await _subCategoryService.AddAsync(subCate);

            if (result > 0) return Ok("Create success");
            else return BadRequest(subCate);
        }

        [HttpPut]
        public async Task<IActionResult> Edit(SubCategoryDTO model)
        {
            var subCate = await _subCategoryService.GetByIdAsync(model.Id);
            if (subCate == null) return NotFound(model);
            var cate = await _categoryService.GetByIdAsync(model.CategoryId);
            if (cate == null) return NotFound(cate);
            _mapper.Map(model, subCate);

            var result = await _subCategoryService.UpdateAsync(subCate);
            if (result) return Ok("Update success");
            else return BadRequest(result);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var subCate = await _subCategoryService.GetByIdAsync(id);
            if (subCate == null) return NotFound(subCate);

            var result = await _subCategoryService.DeleteAsync(subCate);
            if (result) return Ok("Delete success");
            else return BadRequest(result);
        }
    }
}
