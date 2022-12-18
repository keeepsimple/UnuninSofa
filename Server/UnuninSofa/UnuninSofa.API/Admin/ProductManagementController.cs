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
    [Authorize(Roles = "Admin")]
    [ApiController]
    public class ProductManagementController : ControllerBase
    {
        private readonly IProductService _productService;
        private readonly IProductDetailService _productDetailService;
        private readonly IColorService _colorService;
        private readonly IMaterialService _materialService;
        private readonly ISubCategoryService _subCategoryService;
        private readonly IMapper _mapper;
        private IWebHostEnvironment _webHost;
        private readonly IImageService _imageService;

        public ProductManagementController(IProductService productService,
            IProductDetailService productDetailService,
            IColorService colorService,
            IMaterialService materialService,
            ISubCategoryService subCategoryService,
            IMapper mapper,
            IWebHostEnvironment webHost,
            IImageService imageService)
        {
            _productService = productService;
            _productDetailService = productDetailService;
            _colorService = colorService;
            _materialService = materialService;
            _subCategoryService = subCategoryService;
            _mapper = mapper;
            _webHost = webHost;
            _imageService = imageService;
        }

        [HttpGet("GetPaging/{pageNum}")]
        public async Task<IActionResult> Get(string? searchString, int? pageNum = 1, int pageSize = 5)
        {
            Expression<Func<Product, bool>> filter = null;
            if (!string.IsNullOrEmpty(searchString))
            {
                filter = f => f.Name.Contains(searchString);
            }

            Func<IQueryable<Product>, IOrderedQueryable<Product>> orderBy = o => o.OrderByDescending(x => x.CreatedAt);
            var products = await _productService.GetAsync(filter, orderBy, pageNum ?? 1, pageSize);
            var count = await _productService.Count(filter);
            var paging = new PagingModel<Product> { Count = count, List = products };
            return Ok(paging);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromForm] MainProductDTO model)
        {
            var subCate = await _subCategoryService.GetByIdAsync(model.Product.SubCategoryId);
            if (subCate == null) return BadRequest(new { mess = "Không tìm thấy tiểu mục" });

            var product = _mapper.Map<Product>(model.Product);
            var productDetail = _mapper.Map<ProductDetail>(model.ProductDetail);
            productDetail.Materials = await AddMaterialsToProduct(model.ProductDetail.MaterialIds);
            productDetail.Colors = await AddColorsToProduct(model.ProductDetail.ColorIds);

            var resultProduct = await _productService.AddAsync(product);
            productDetail.ProductId = product.Id;
            var resultPDetail = await _productDetailService.AddAsync(productDetail);

            foreach (var item in model.UploadFiles)
            {
                await AddImageToProduct(item, productDetail.Id, product.Code);
            }

            if (resultProduct > 0 && resultPDetail > 0)
            {
                return Ok("Create success");
            }
            else
            {
                return BadRequest(new { mess = "Thêm sản phẩm thất bại!" });
            }
        }

        private async Task<List<Material>> AddMaterialsToProduct(List<int> materialIds)
        {
            var listMaterial = await _materialService.GetAllAsync();
            var materials = new List<Material>();
            foreach (var item in listMaterial)
            {
                if (materialIds.Any(x => x == item.Id))
                {
                    materials.Add(item);
                }
            }

            return materials;
        }

        private async Task<List<Color>> AddColorsToProduct(List<int> colorIds)
        {
            var listColor = await _colorService.GetAllAsync();
            var colors = new List<Color>();
            foreach (var item in listColor)
            {
                if (colorIds.Any(x => x == item.Id))
                {
                    colors.Add(item);
                }
            }

            return colors;
        }

        private async Task AddImageToProduct(IFormFile upload, int productDetailId, string productCode)
        {
            string folderPath = _webHost.WebRootPath + "\\images\\Products\\" + productCode + "\\";
            if (!Directory.Exists(folderPath))
            {
                Directory.CreateDirectory(folderPath);
            }
            var file = Path.Combine(_webHost.WebRootPath, folderPath, upload.FileName);
            using (var fileStream = new FileStream(file, FileMode.Create))
            {
                await upload.CopyToAsync(fileStream);
            }
            var image = new Image
            {
                ImageUrl = upload.FileName,
                ProductDetailId = productDetailId
            };
            await _imageService.AddAsync(image);
        }
    }
}
