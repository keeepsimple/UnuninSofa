using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Linq.Expressions;
using UnuninSofa.API.DTO;
using UnuninSofa.BusinessLayer.IServices;
using UnuninSofa.Models;

namespace UnuninSofa.API.Admin
{
    [Route("api/[controller]")]
    [Authorize(Roles ="Admin")]
    [ApiController]
    public class CategoryManagementController : ControllerBase
    {
        private readonly ICategoryService _categoryService;
        private readonly IMapper _mapper;

        public CategoryManagementController(ICategoryService categoryService, IMapper mapper)
        {
            _categoryService = categoryService;
            _mapper = mapper;
        }

        [HttpGet("GetPaging/{pageNum}")]
        public async Task<IActionResult> Get(string? searchString, int? pageNum = 1, int pageSize = 5)
        {
            Expression<Func<Category, bool>> filter = null;
            if(!string.IsNullOrEmpty(searchString))
            {
                filter = f => f.Name.Contains(searchString);
            }

            Func<IQueryable<Category>, IOrderedQueryable<Category>> orderBy = o => o.OrderByDescending(x=>x.CreatedAt);
            var categories = await _categoryService.GetAsync(filter, orderBy, pageNum ?? 1, pageSize);
            var count = await _categoryService.Count(filter);
            var paging = new PagingModel<Category> { Count= count, List = categories };
            return Ok(paging);
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var cate = await _categoryService.GetAllAsync();
            return Ok(cate);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var cate = await _categoryService.GetByIdAsync(id);
            if (cate == null) return NotFound(cate);
            return Ok(cate);
        }

        [HttpPost]
        public async Task<IActionResult> Create(CategoryDTO model)
        {
            if (!ModelState.IsValid) return BadRequest(model);
            var cate = _mapper.Map<Category>(model);
            var result = await _categoryService.AddAsync(cate);

            if(result > 0) return Ok("Create success");
            else return BadRequest(cate);
        }

        [HttpPut]
        public async Task<IActionResult> Edit(CategoryDTO model)
        {
            var cate = await _categoryService.GetByIdAsync(model.Id);
            if(cate == null) return NotFound(model);
            _mapper.Map(model,cate);

            var result = await _categoryService.UpdateAsync(cate);
            if(result) return Ok("Update success");
            else return BadRequest(result);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var cate = await _categoryService.GetByIdAsync(id);
            if(cate == null) return NotFound(cate);

            var result = await _categoryService.DeleteAsync(cate);
            if (result) return Ok("Delete success");
            else return BadRequest(result);
        }
    }
}
