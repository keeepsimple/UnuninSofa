using Microsoft.EntityFrameworkCore;
using UnuninSofa.BusinessLayer.BaseServices;
using UnuninSofa.BusinessLayer.IServices;
using UnuninSofa.Data.Infrastructure;
using UnuninSofa.Models;

namespace UnuninSofa.BusinessLayer.Services
{
    public class OrderService : BaseService<Order>, IOrderService
    {
        public OrderService(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
        }

        public async Task<IEnumerable<Order>> GetNewest()
        {
            return await _unitOfWork.OrderRepository
                .GetQuery(x => x.IsDeleted == false && x.Status < 2 && x.Status > -1)
                .OrderByDescending(x => x.CreatedAt)
                .ToListAsync();
        }

        public async Task<bool> IsOrderedProduct(string userId, string productCode)
        {
            var product = await _unitOfWork.OrderRepository
                .GetQuery(x => x.UserId == userId
                && x.OrderDetails.Any(o => o.ProductCode == productCode)
                && x.Status == 3)
                .FirstOrDefaultAsync();

            if (product != null)
            {
                return true;
            }
            return false;
        }
    }
}
