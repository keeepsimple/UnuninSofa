using UnuninSofa.BusinessLayer.BaseServices;
using UnuninSofa.Models;

namespace UnuninSofa.BusinessLayer.IServices
{
    public interface IOrderDetailService : IBaseService<OrderDetail>
    {
        Task<IEnumerable<OrderDetail>> GetOrderDetailAsync(int orderId);
    }

}
