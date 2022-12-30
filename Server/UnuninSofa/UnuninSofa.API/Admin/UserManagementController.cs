using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Linq.Expressions;
using UnuninSofa.API.DTO;
using UnuninSofa.API.IServices;
using UnuninSofa.BusinessLayer.IServices;
using UnuninSofa.Models;

namespace UnuninSofa.API.Admin
{
    [Route("api/[controller]")]
    [Authorize(Roles = "Admin")]
    [ApiController]
    public class UserManagementController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly IReportService _reportService;

        public UserManagementController(IUserService userService, IReportService reportService)
        {
            _userService = userService;
            _reportService = reportService;
        }

        [HttpGet("GetPaging/{pageNum}")]
        public async Task<IActionResult> Get(string? searchString, int? pageNum = 1, int pageSize = 5)
        {
            Expression<Func<User, bool>> filter = null;
            if (!string.IsNullOrEmpty(searchString))
            {
                filter = f => f.UserName.Contains(searchString);
            }

            var users = await _userService.GetAsync(filter, pageNum ?? 1, pageSize);
            var count = await _userService.Count(filter);
            var paging = new PagingModel<User> { Count = count, List = users };
            return Ok(paging);
        }

        [HttpGet("{userId}")]
        public async Task<IActionResult> Get(string userId)
        {
            var user = await _userService.GetUserByIdAsync(userId);
            if (user == null) return NotFound(new { mess = "Không tìm thấy người dùng" });

            var report = await _reportService.RateSuccessOfUser(userId);

            return Ok(new
            {
                user,
                report
            });
        }

        [HttpPost("LockUser/{userId}")]
        public async Task<IActionResult> LockUser(string userId)
        {
            var result = await _userService.LockUser(userId);
            if (result) return Ok("Lock success");
            return BadRequest(new { mess = "Khoá người dùng không thành công" });
        }

        [HttpPost("UnlockUser/{userId}")]
        public async Task<IActionResult> UnlockUser(string userId)
        {
            var result = await _userService.UnlockUser(userId);
            if (result) return Ok("Unlock success");
            return BadRequest(new { mess = "Mở khoá người dùng không thành công" });
        }
    }
}
