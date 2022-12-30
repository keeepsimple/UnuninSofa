using System.Linq.Expressions;
using UnuninSofa.Common;
using UnuninSofa.Models;

namespace UnuninSofa.API.IServices
{
    public interface IUserService
    {
        Task<Paginated<User>> GetAsync(Expression<Func<User, bool>> filter = null,
            int pageIndex = 1, int pageSize = 10);

        Task<int> Count(Expression<Func<User, bool>> filter = null);

        Task<User> GetUserByIdAsync(string userId);

        Task<bool> LockUser(string userId);

        Task<bool> UnlockUser(string userId);
    }
}
