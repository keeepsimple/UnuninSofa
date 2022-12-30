using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Linq.Expressions;
using UnuninSofa.API.DTO;
using UnuninSofa.BusinessLayer.IServices;
using UnuninSofa.Models;

namespace UnuninSofa.API.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserManager<User> _userManager;
        private readonly IMapper _mapper;
        private readonly IOrderService _orderService;

        public UserController(UserManager<User> userManager,
            IMapper mapper,
            IOrderService orderService)
        {
            _userManager = userManager;
            _mapper = mapper;
            _orderService = orderService;
        }

        [HttpGet("{username}")]
        public async Task<IActionResult> GetUser(string username)
        {
            var user = await _userManager.FindByNameAsync(username);
            var userDTO = _mapper.Map<UserDTO>(user);
            return Ok(userDTO);
        }

        [HttpPost("ChangePassword")]
        public async Task<IActionResult> ChangePassword(ChangePasswordDTO model)
        {
            var user = await _userManager.FindByNameAsync(model.Username);
            if (user == null) return NotFound(new { mess = "Không tìm thấy người dùng" });

            var result = await _userManager.ChangePasswordAsync(user, model.CurrentPassword, model.NewPassword);
            if (result.Succeeded)
            {
                return Ok("Change password success");
            }
            else
            {
                return BadRequest(new { mess = "Mật khẩu hiện tại không đúng!!" });
            }
        }

        [HttpPut("ChangeInfomation")]
        public async Task<IActionResult> ChangeInfomation(UserDTO model)
        {
            var user = await _userManager.FindByNameAsync(model.UserName);
            if (user == null) return NotFound(new { mess = "Không tìm thấy người dùng" });

            _mapper.Map(model, user);

            var result = await _userManager.UpdateAsync(user);

            if (result.Succeeded)
            {
                return Ok("Change Information success");
            }
            else
            {
                return BadRequest(new { mess = "Thay đổi thông tin không thành công!!" });
            }
        }

        [HttpGet("OrderHistory/{pageNum}")]
        public async Task<IActionResult> OrderHistory(string? sortOrder, string userName, int? pageNum = 1, int pageSize = 5)
        {
            var user = await _userManager.FindByNameAsync(userName);
            Expression<Func<Order, bool>> filter = f => f.UserId.Equals(user.Id);

            Func<IQueryable<Order>, IOrderedQueryable<Order>> orderBy = null;
            switch (sortOrder)
            {
                case "createdAt_asc": orderBy = o => o.OrderBy(x => x.CreatedAt); break;
                default: orderBy = o => o.OrderByDescending(x => x.CreatedAt); break;
            }

            var orders = await _orderService.GetAsync(filter, orderBy, pageNum ?? 1, pageSize);
            var count = await _orderService.Count(filter);
            var paging = new PagingModel<Order> { Count = count, List = orders };
            return Ok(paging);
        }
    }
}
