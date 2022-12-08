using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System.Linq.Expressions;
using UnuninSofa.API.DTO;
using UnuninSofa.BusinessLayer.IServices;
using UnuninSofa.Models;

namespace UnuninSofa.API.Admin
{
    [Route("api/[controller]")]
    [ApiController]
    public class ColorManagementController : ControllerBase
    {
        private readonly IColorService _colorService;
        private readonly IMapper _mapper;

        public ColorManagementController(IColorService colorService, IMapper mapper)
        {
            _colorService = colorService;
            _mapper = mapper;
        }

        [HttpGet("GetPaging/{pageNum}")]
        public async Task<IActionResult> Get(string? searchString, int? pageNum = 1, int pageSize = 5)
        {
            Expression<Func<Color, bool>> filter = null;
            if (!string.IsNullOrEmpty(searchString))
            {
                filter = f => f.Name.Contains(searchString);
            }

            Func<IQueryable<Color>, IOrderedQueryable<Color>> orderBy = o => o.OrderByDescending(x => x.CreatedAt);
            var colors = await _colorService.GetAsync(filter, orderBy, pageNum ?? 1, pageSize);
            var count = await _colorService.Count(filter);
            var paging = new PagingModel<Color> { Count = count, List = colors };
            return Ok(paging);
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var colors = await _colorService.GetAllAsync();
            return Ok(colors);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var color = await _colorService.GetByIdAsync(id);
            if (color == null) return NotFound(color);
            return Ok(color);
        }

        [HttpPost]
        public async Task<IActionResult> Create(ColorDTO model)
        {
            if (!ModelState.IsValid) return BadRequest(model);
            var color = _mapper.Map<Color>(model);
            var result = await _colorService.AddAsync(color);

            if (result > 0) return Ok("Create success");
            else return BadRequest(color);
        }

        [HttpPut]
        public async Task<IActionResult> Edit(ColorDTO model)
        {
            var color = await _colorService.GetByIdAsync(model.Id);
            if (color == null) return NotFound(model);
            _mapper.Map(model, color);

            var result = await _colorService.UpdateAsync(color);
            if (result) return Ok("Update success");
            else return BadRequest(result);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var color = await _colorService.GetByIdAsync(id);
            if (color == null) return NotFound(color);

            var result = await _colorService.DeleteAsync(color);
            if (result) return Ok("Delete success");
            else return BadRequest(result);
        }
    }
}
