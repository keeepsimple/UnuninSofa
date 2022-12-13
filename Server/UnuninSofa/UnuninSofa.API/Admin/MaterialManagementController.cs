using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Linq.Expressions;
using UnuninSofa.API.DTO;
using UnuninSofa.BusinessLayer.IServices;
using UnuninSofa.Models;

namespace UnuninSofa.API.Admin
{
    [Route("api/[controller]")]
    [Authorize(Roles = "Admin")]
    [ApiController]
    public class MaterialManagementController : ControllerBase
    {
        private readonly IMaterialService _materialService;
        private readonly IMapper _mapper;

        public MaterialManagementController(IMaterialService materialService, IMapper mapper)
        {
            _materialService = materialService;
            _mapper = mapper;
        }

        [HttpGet("GetPaging/{pageNum}")]
        public async Task<IActionResult> Get(string? searchString, int? pageNum = 1, int pageSize = 5)
        {
            Expression<Func<Material, bool>> filter = null;
            if (!string.IsNullOrEmpty(searchString))
            {
                filter = f => f.Name.Contains(searchString);
            }

            Func<IQueryable<Material>, IOrderedQueryable<Material>> orderBy = o => o.OrderByDescending(x => x.CreatedAt);
            var materials = await _materialService.GetAsync(filter, orderBy, pageNum ?? 1, pageSize);
            var count = await _materialService.Count(filter);
            var paging = new PagingModel<Material> { Count = count, List = materials };
            return Ok(paging);
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var material = await _materialService.GetAllAsync();
            return Ok(material);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var material = await _materialService.GetByIdAsync(id);
            if (material == null) return NotFound(material);
            return Ok(material);
        }

        [HttpPost]
        public async Task<IActionResult> Create(MaterialDTO model)
        {
            if (!ModelState.IsValid) return BadRequest(model);
            var material = _mapper.Map<Material>(model);
            var result = await _materialService.AddAsync(material);

            if (result > 0) return Ok("Create success");
            else return BadRequest(material);
        }

        [HttpPut]
        public async Task<IActionResult> Edit(MaterialDTO model)
        {
            var material = await _materialService.GetByIdAsync(model.Id);
            if (material == null) return NotFound(model);
            _mapper.Map(model, material);

            var result = await _materialService.UpdateAsync(material);
            if (result) return Ok("Update success");
            else return BadRequest(result);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var material = await _materialService.GetByIdAsync(id);
            if (material == null) return NotFound(material);

            var result = await _materialService.DeleteAsync(material);
            if (result) return Ok("Delete success");
            else return BadRequest(result);
        }
    }
}
