using UnuninSofa.BusinessLayer.BaseServices;
using UnuninSofa.Models;

namespace UnuninSofa.BusinessLayer.IServices
{
    public interface IOrderService : IBaseService<Order>
    {
        Task<IEnumerable<Order>> GetNewest();
    }

}
