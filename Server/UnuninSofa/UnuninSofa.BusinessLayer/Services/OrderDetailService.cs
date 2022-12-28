using Microsoft.EntityFrameworkCore;
using UnuninSofa.BusinessLayer.BaseServices;
using UnuninSofa.BusinessLayer.IServices;
using UnuninSofa.Data.Infrastructure;
using UnuninSofa.Models;

namespace UnuninSofa.BusinessLayer.Services
{
    public class OrderDetailService : BaseService<OrderDetail>, IOrderDetailService
    {
        public OrderDetailService(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
        }

        public async Task<IEnumerable<OrderDetail>> GetOrderDetailAsync(int orderId)
        {
            return await _unitOfWork.OrderDetailRepository.GetQuery(x => x.OrderId == orderId).ToListAsync();
        }
    }
}
