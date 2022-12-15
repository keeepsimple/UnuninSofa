using AutoMapper;
using Microsoft.AspNetCore.Authorization;
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
    [Authorize(Roles ="Admin")]
    [ApiController]
    public class SliderManagementController : ControllerBase
    {
        private readonly ISliderService _sliderService;
        private readonly IMapper _mapper;
        private IWebHostEnvironment _webHost;

        public SliderManagementController(ISliderService sliderService, IMapper mapper, IWebHostEnvironment webHost)
        {
            _sliderService = sliderService;
            _mapper = mapper;
            _webHost = webHost;
        }

        [HttpGet("GetPaging/{pageNum}")]
        public async Task<IActionResult> Get(string? searchString, int? pageNum = 1, int pageSize = 5)
        {
            Expression<Func<Slider, bool>> filter = null;
            if (!string.IsNullOrEmpty(searchString))
            {
                filter = f => f.Name.Contains(searchString);
            }

            Func<IQueryable<Slider>, IOrderedQueryable<Slider>> orderBy = o => o.OrderByDescending(x => x.CreatedAt);
            var categories = await _sliderService.GetAsync(filter, orderBy, pageNum ?? 1, pageSize);
            var count = await _sliderService.Count(filter);
            var paging = new PagingModel<Slider> { Count = count, List = categories };
            return Ok(paging);
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var cate = await _sliderService.GetAllAsync();
            return Ok(cate);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var cate = await _sliderService.GetByIdAsync(id);
            if (cate == null) return NotFound(cate);
            return Ok(cate);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromForm]SliderDTO model)
        {
            if (!ModelState.IsValid) return BadRequest(model);
            string folderPath = _webHost.WebRootPath + "\\images\\Sliders\\";
            if (!Directory.Exists(folderPath))
            {
                Directory.CreateDirectory(folderPath);
            }
            var file = Path.Combine(_webHost.WebRootPath, folderPath, model.ImageUrl.FileName);
            using (var fileStream = new FileStream(file, FileMode.Create))
            {
                await model.ImageUrl.CopyToAsync(fileStream);
            }
            var slider = _mapper.Map<Slider>(model);
            slider.ImageUrl = model.ImageUrl.FileName;
            slider.IsPublished = true;
            var result = await _sliderService.AddAsync(slider);

            if (result > 0) return Ok("Create success");
            else return BadRequest(slider);
        }

        [HttpPut]
        public async Task<IActionResult> Edit([FromForm] SliderDTO model)
        {
            var slider = await _sliderService.GetByIdAsync(model.Id);
            var image = "";
            if (slider == null) return NotFound(model);
            if (model.ImageUrl != null)
            {
                string folderPath = _webHost.WebRootPath + "\\images\\Sliders\\";
                var file = Path.Combine(_webHost.WebRootPath, folderPath, model.ImageUrl.FileName);
                using (var fileStream = new FileStream(file, FileMode.Create))
                {
                    await model.ImageUrl.CopyToAsync(fileStream);
                }
                image = model.ImageUrl.FileName;
            }
            else
            {
                image = slider.ImageUrl;
            }
            _mapper.Map(model, slider);
            slider.ImageUrl = image;
            var result = await _sliderService.UpdateAsync(slider);
            if (result) return Ok("Update success");
            else return BadRequest(result);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var cate = await _sliderService.GetByIdAsync(id);
            if (cate == null) return NotFound(cate);

            var result = await _sliderService.DeleteAsync(cate);
            if (result) return Ok("Delete success");
            else return BadRequest(result);
        }
    }
}
