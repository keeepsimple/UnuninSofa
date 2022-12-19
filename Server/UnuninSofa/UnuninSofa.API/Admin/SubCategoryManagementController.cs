using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Linq.Expressions;
using UnuninSofa.API.DTO;
using UnuninSofa.BusinessLayer.IServices;
using UnuninSofa.Models;
using static System.Net.Mime.MediaTypeNames;

namespace UnuninSofa.API.Admin
{
    [Route("api/[controller]")]
    [Authorize(Roles = "Admin")]
    [ApiController]
    public class SubCategoryManagementController : ControllerBase
    {
        private readonly ISubCategoryService _subCategoryService;
        private readonly ICategoryService _categoryService;
        private IWebHostEnvironment _webHost;
        private readonly IMapper _mapper;

        public SubCategoryManagementController(ISubCategoryService subCategoryService, IMapper mapper,
            ICategoryService categoryService, IWebHostEnvironment webHost)
        {
            _subCategoryService = subCategoryService;
            _mapper = mapper;
            _categoryService = categoryService;
            _webHost = webHost;
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
            if (subCate == null) return NotFound(new { mess = "Không tìm thấy tiểu mục nào" });
            return Ok(subCate);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromForm] SubCategoryDTO model)
        {
            if (!ModelState.IsValid) return BadRequest(model);
            string folderPath = _webHost.WebRootPath + "\\images\\SubCategory\\";
            if (!Directory.Exists(folderPath))
            {
                Directory.CreateDirectory(folderPath);
            }
            var file = Path.Combine(_webHost.WebRootPath, folderPath, model.ImageUrl.FileName);
            using (var fileStream = new FileStream(file, FileMode.Create))
            {
                await model.ImageUrl.CopyToAsync(fileStream);
            }


            var cate = await _categoryService.GetByIdAsync(model.CategoryId);
            if (cate == null) return NotFound(new { mess= "Không tìm thấy danh mục nào" });

            var subCate = _mapper.Map<SubCategory>(model);
            subCate.ImageUrl = model.ImageUrl.FileName;
            var result = await _subCategoryService.AddAsync(subCate);

            if (result > 0) return Ok("Create success");
            else return BadRequest(new { mess = "Tạo tiểu mục thất bại" });
        }

        [HttpPut]
        public async Task<IActionResult> Edit([FromForm]SubCategoryDTO model)
        {
            var subCate = await _subCategoryService.GetByIdAsync(model.Id);
            var image = "";
            if (subCate == null) return NotFound(new { mess = "Không tìm thấy tiểu mục nào" });
            if(model.ImageUrl != null)
            {
                string folderPath = _webHost.WebRootPath + "\\images\\SubCategory\\";
                var deleteImage = Path.Combine(_webHost.WebRootPath, folderPath, subCate.ImageUrl);
                System.IO.File.Delete(deleteImage);

                var file = Path.Combine(_webHost.WebRootPath, folderPath, model.ImageUrl.FileName);
                using (var fileStream = new FileStream(file, FileMode.Create))
                {
                    await model.ImageUrl.CopyToAsync(fileStream);
                }
                image = model.ImageUrl.FileName;
            }
            else
            {
                image = subCate.ImageUrl;
            }

            var cate = await _categoryService.GetByIdAsync(model.CategoryId);
            if (cate == null) return NotFound(new { mess = "Không tìm thấy danh mục nào" });
            _mapper.Map(model, subCate);
            
            subCate.ImageUrl = image;
            var result = await _subCategoryService.UpdateAsync(subCate);
            if (result) return Ok("Update success");
            else return BadRequest(new { mess = "Sửa tiểu mục thất bại" });
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var subCate = await _subCategoryService.GetByIdAsync(id);
            if (subCate == null) return NotFound(new { mess = "Không tìm thấy tiểu mục nào" });
            string folderPath = _webHost.WebRootPath + "\\images\\SubCategory\\";
            var deleteImage = Path.Combine(_webHost.WebRootPath, folderPath, subCate.ImageUrl);
            System.IO.File.Delete(deleteImage);
            var result = await _subCategoryService.DeleteAsync(subCate);
            if (result) return Ok("Delete success");
            else return BadRequest(new { mess = "Xoá tiểu mục thất bại" });
        }
    }
}
