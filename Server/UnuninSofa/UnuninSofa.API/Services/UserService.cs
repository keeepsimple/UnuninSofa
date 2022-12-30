using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;
using UnuninSofa.API.IServices;
using UnuninSofa.Common;
using UnuninSofa.Models;

namespace UnuninSofa.API.Services
{
    public class UserService : IUserService
    {
        private readonly UserManager<User> _userManager;

        public UserService(UserManager<User> userManager)
        {
            _userManager = userManager;
        }

        public async Task<int> Count(Expression<Func<User, bool>> filter = null)
        {
            var query = _userManager.Users.AsQueryable();
            if (filter != null) query = query.Where(filter);

            return await query.CountAsync();
        }

        public async Task<Paginated<User>> GetAsync(Expression<Func<User, bool>> filter = null,
            int pageIndex = 1, int pageSize = 10)
        {
            var query = _userManager.Users.AsQueryable();
            if (filter != null) query = query.Where(filter);

            return await Paginated<User>.CreateAsync(query, pageIndex, pageSize);
        }

        public async Task<User> GetUserByIdAsync(string userId)
        {
            return await _userManager.FindByIdAsync(userId);
        }

        public async Task<bool> LockUser(string userId)
        {
            var user = await _userManager.FindByIdAsync(userId);
            var lockoutDate = new DateTime(9999, 01, 01);
            var result = await _userManager.SetLockoutEnabledAsync(user, true);
            await _userManager.SetLockoutEndDateAsync(user, lockoutDate);
            if (result.Succeeded)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public async Task<bool> UnlockUser(string userId)
        {
            var user = await _userManager.FindByIdAsync(userId);
            var result = await _userManager.SetLockoutEnabledAsync(user, false);
            await _userManager.SetLockoutEndDateAsync(user, null);

            if (result.Succeeded)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
