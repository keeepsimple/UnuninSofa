using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using UnuninSofa.API.DTO;
using UnuninSofa.BusinessLayer.IServices;
using UnuninSofa.Models;

namespace UnuninSofa.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewController : ControllerBase
    {
        private readonly IReviewService _reviewService;
        private readonly IMapper _mapper;
        private readonly IOrderService _orderService;
        private readonly IProductService _productService;
        private readonly UserManager<User> _userManager;

        public ReviewController(IReviewService reviewService,
            IMapper mapper,
            IProductService productService,
            IOrderService orderService,
            UserManager<User> userManager)
        {
            _reviewService = reviewService;
            _mapper = mapper;
            _productService = productService;
            _orderService = orderService;
            _userManager = userManager;
        }

        [HttpGet("{productId}")]
        public async Task<IActionResult> Get(int productId)
        {
            var reviews = await _reviewService.GetAllReviewsInProductAsync(productId);

            return Ok(reviews);
        }

        [HttpPost, Authorize]
        public async Task<IActionResult> Create(ReviewDTO model)
        {
            var user = await _userManager.FindByIdAsync(model.UserId);
            if (user == null) return NotFound(new { mess = "Người dùng không khả dụng!!" });

            var product = await _productService.GetByIdAsync(model.ProductId);
            var isOrdered = await _orderService.IsOrderedProduct(model.UserId, product.Code);
            var isCreatedReview = await _reviewService.IsCreatedReview(model.UserId, model.ProductId);

            if (isCreatedReview) return BadRequest(new { mess = "Bạn không thể viết thêm nhận xét!!" });
            if (!isOrdered) return BadRequest(new { mess = "Bạn không thể viết nhận xét vì chưa mua sản phẩm!!" });

            var review = _mapper.Map<Review>(model);
            review.FullName = user.FullName;
            var result = await _reviewService.AddAsync(review);

            var totalRate = await _reviewService.GetTotalRateInProduct(product.Id);
            product.Rate = product.RateCount > 0 ? totalRate / (decimal)product.RateCount : 0;
            product.RateCount += 1;
            await _productService.UpdateAsync(product);

            if (result > 0)
            {
                return Ok("Create success");
            }
            else
            {
                return BadRequest(new { mess = "Không thể tạo nhận xét! Vui lòng thử lại!!" });
            }

        }
    }
}
