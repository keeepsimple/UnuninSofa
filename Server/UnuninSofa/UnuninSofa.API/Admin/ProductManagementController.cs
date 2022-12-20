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
    [Authorize(Roles = "Admin")]
    [ApiController]
    public class ProductManagementController : ControllerBase
    {
        private readonly IProductService _productService;
        private readonly IProductDetailService _productDetailService;
        private readonly IColorService _colorService;
        private readonly IMaterialService _materialService;
        private readonly IMapper _mapper;
        private readonly IImageService _imageService;

        public ProductManagementController(IProductService productService,
            IProductDetailService productDetailService,
            IColorService colorService,
            IMaterialService materialService,
            IMapper mapper,
            IImageService imageService)
        {
            _productService = productService;
            _productDetailService = productDetailService;
            _colorService = colorService;
            _materialService = materialService;
            _mapper = mapper;
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
        public async Task<IActionResult> Create(MainProductDTO model)
        {
            var product = _mapper.Map<Product>(model.Product);
            var productDetail = _mapper.Map<ProductDetail>(model.ProductDetail);
            productDetail.Materials = await AddMaterialsToProduct(model.ProductDetail.MaterialIds);
            productDetail.Colors = await AddColorsToProduct(model.ProductDetail.ColorIds);

            var resultProduct = await _productService.AddAsync(product);
            productDetail.ProductId = product.Id;
            var resultPDetail = await _productDetailService.AddAsync(productDetail);

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

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var product = await _productService.GetByIdAsync(id);
            await _productDetailService.GetProductDetailByProductAsync(id);
            var images = await _imageService.GetImageByProductCode(product.Code);

            return Ok(new { product, images });
        }

        [HttpPut]
        public async Task<IActionResult> Edit(MainProductDTO model)
        {
            var product = await _productService.GetByIdAsync(model.Product.Id);
            if (product == null) return NotFound(new { mess = "Không tìm thấy sản phẩm nào" });

            var productDetail = await _productDetailService.GetByIdAsync(model.ProductDetail.Id);
            _mapper.Map(model.Product, product);
            _mapper.Map(model.ProductDetail, productDetail);
            await UpdateMaterials(model.ProductDetail.MaterialIds, productDetail);
            await UpdateColors(model.ProductDetail.ColorIds, productDetail);

            var resultProduct = await _productService.UpdateAsync(product);
            var resultPDetail = await _productDetailService.UpdateAsync(productDetail);

            if (resultProduct && resultPDetail)
            {
                return Ok("Update success");
            }
            else
            {
                return BadRequest(new { mess = "Sửa sản phẩm thất bại!" });
            }
        }

        private async Task UpdateMaterials(List<int> materialIds, ProductDetail productDetail)
        {
            var materials = productDetail.Materials;
            foreach (var item in materials)
            {
                productDetail.Materials.Remove(item);
            }

            productDetail.Materials = await AddMaterialsToProduct(materialIds);
        }

        private async Task UpdateColors(List<int> colorIds, ProductDetail productDetail)
        {
            var colors = productDetail.Colors;
            foreach (var item in colors)
            {
                productDetail.Colors.Remove(item);
            }

            productDetail.Colors = await AddColorsToProduct(colorIds);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var product = await _productService.GetByIdAsync(id);
            if (product == null) return BadRequest(new { mess = "Không tìm thấy sản phẩm" });
            var result = await _productService.DeleteAsync(product);
            if (result)
            {
                return Ok("Delete success");
            }
            else
            {
                return BadRequest(new { mess = "Xoá không thành công" });
            }
        }
    }
}
