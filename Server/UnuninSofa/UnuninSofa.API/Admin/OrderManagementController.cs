using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
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
    public class OrderManagementController : ControllerBase
    {
        private readonly IOrderService _orderService;
        private readonly IOrderDetailService _orderDetailService;
        private readonly ITransactionService _transactionService;
        private readonly UserManager<User> _userManager;
        private readonly IMapper _mapper;

        public OrderManagementController(IOrderService orderService,
            IOrderDetailService orderDetailService,
            ITransactionService transactionService,
            UserManager<User> userManager,
            IMapper mapper)
        {
            _orderService = orderService;
            _orderDetailService = orderDetailService;
            _transactionService = transactionService;
            _userManager = userManager;
            _mapper = mapper;
        }

        [HttpGet("GetPaging/{pageNum}")]
        public async Task<IActionResult> Get(string? searchString, int? pageNum = 1, int pageSize = 5)
        {
            Expression<Func<Order, bool>> filter = null;
            if (!string.IsNullOrEmpty(searchString))
            {
                filter = f => f.FullName.Contains(searchString);
            }

            Func<IQueryable<Order>, IOrderedQueryable<Order>> orderBy = o => o.OrderByDescending(x => x.CreatedAt);
            var orders = await _orderService.GetAsync(filter, orderBy, pageNum ?? 1, pageSize);
            var count = await _orderService.Count(filter);
            var paging = new PagingModel<Order> { Count = count, List = orders };
            return Ok(paging);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var order = await _orderService.GetByIdAsync(id);
            if (order == null) return BadRequest(new { mess = "Không tìm thấy đơn hàng!" });
            await _orderDetailService.GetOrderDetailAsync(order.Id);
            await _transactionService.GetByOrderAsync(order.Id);

            return Ok(order);
        }

        [HttpPut("Cancel/{id}")]
        public async Task<IActionResult> CancelOrder(int id)
        {
            var order = await _orderService.GetByIdAsync(id);
            if (order == null) return BadRequest(new { mess = "Không tìm thấy đơn hàng" });

            if (order.Status < 0)
            {
                return BadRequest(new { mess = "Không thể huỷ đơn hàng" });
            }
            order.Status = -1;
            var result = await _orderService.UpdateAsync(order);
            if (result)
            {
                return Ok("Huỷ đơn thành công");
            }
            else
            {
                return BadRequest(new { mess = "Huỷ đơn thất bại! Vui lòng thử lại!!" });
            }
        }

        [HttpPut("ChangeStatus/{id}")]
        public async Task<IActionResult> EditStatus(int id)
        {
            var order = await _orderService.GetByIdAsync(id);
            if (order == null) return BadRequest(new { mess = "Không tìm thấy đơn hàng" });

            if (order.Status < 0)
            {
                return BadRequest(new { mess = "Không thể cập nhật trạng thái đơn hàng" });
            }

            var transaction = await _transactionService.GetByOrderAsync(order.Id);
            order.Status = order.Status == 0 ? 1 : order.Status == 1 ? 2 : 3;
            if (order.Status == 1) transaction.Status = 1;

            await _transactionService.UpdateAsync(transaction);
            var result = await _orderService.UpdateAsync(order);
            if (result)
            {
                return Ok("Cập nhập đơn thành công");
            }
            else
            {
                return BadRequest(new { mess = "Cập nhật đơn thất bại! Vui lòng thử lại!!" });
            }
        }
    }
}
