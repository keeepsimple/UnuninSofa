using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using UnuninSofa.BusinessLayer.IServices;

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
        private readonly IImageService _imageService;

        public ProductManagementController(IProductService productService,
            IProductDetailService productDetailService,
            IColorService colorService,
            IMaterialService materialService,
            ISubCategoryService subCategoryService,
            IImageService imageService)
        {
            _productService = productService;
            _productDetailService = productDetailService;
            _colorService = colorService;
            _materialService = materialService;
            _subCategoryService = subCategoryService;
            _imageService = imageService;
        }
    }
}
