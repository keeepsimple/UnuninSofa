using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using UnuninSofa.API.DTO;
using UnuninSofa.API.IServices;
using UnuninSofa.Models;

namespace UnuninSofa.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenController : ControllerBase
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly IMapper _mapper;
        private readonly ITokenService _tokenService;

        public AuthenController(UserManager<User> userManager,
            SignInManager<User> signInManager,
            IMapper mapper,
            ITokenService tokenService)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _mapper = mapper;
            _tokenService = tokenService;
        }

        [HttpPost("Login")]
        public async Task<IActionResult> Login(LoginDTO model)
        {
            var result = await _signInManager.PasswordSignInAsync(model.Username, model.Password, false, false);
            if (result.Succeeded)
            {
                var user = await _userManager.FindByNameAsync(model.Username);

                var accessToken = _tokenService.GenerateAccessToken(await GetClaim(user));
                var refreshToken = _tokenService.GenerateRefreshToken();
                user.RefreshToken = refreshToken;
                user.RefreshTokenExpiryTime = DateTime.Now.AddMonths(2);
                await _userManager.UpdateAsync(user);

                return Ok(new AuthenResponse
                {
                    RefreshToken = refreshToken,
                    Token = accessToken,
                });
            }
            if (result.IsLockedOut)
            {
                return Ok(new { mess = "Tài khoản của bạn đã bị khoá!" });
            }
            else
            {
                return Unauthorized(new { mess = "Mật khẩu hoặc tên đăng nhập sai!" });
            }
        }

        [HttpPost("Register")]
        public async Task<IActionResult> Register(RegisterDTO model)
        {
            var userExist = await _userManager.FindByNameAsync(model.Username);
            if (userExist != null)
            {
                return BadRequest(new { mess = "Người dùng đã tồn tại vui lòng dùng tên đăng nhập khác!" });
            }

            var user = _mapper.Map<User>(model);
            var result = await _userManager.CreateAsync(user, model.Password);
            if (result.Succeeded)
            {
                await _userManager.AddToRoleAsync(user, "User");
                var userRoles = await _userManager.GetRolesAsync(user);

                var accessToken = _tokenService.GenerateAccessToken(await GetClaim(user));
                var refreshToken = _tokenService.GenerateRefreshToken();
                user.RefreshToken = refreshToken;
                user.RefreshTokenExpiryTime = DateTime.Now.AddMonths(2);
                await _userManager.UpdateAsync(user);

                return Ok(new AuthenResponse
                {
                    RefreshToken = refreshToken,
                    Token = accessToken
                });
            }
            else
            {
                return BadRequest(new { mess = "Tạo tài khoản thất bại" });
            }
        }

        [HttpGet("GetUser/{username}"), Authorize]
        public async Task<IActionResult> GetUser(string username)
        {
            var user = await _userManager.FindByNameAsync(username);
            return Ok(user);
        }

        private async Task<IEnumerable<Claim>> GetClaim(User user)
        {
            var claims = new List<Claim>
                {
                    new Claim("UserId", user.Id),
                    new Claim(ClaimTypes.Name, user.UserName),
                    new Claim("FullName", user.FullName)
                };

            var userRoles = await _userManager.GetRolesAsync(user);


            foreach (var item in userRoles)
            {
                claims.Add(new Claim(ClaimTypes.Role, item));
            }

            return claims;
        }
    }
}
