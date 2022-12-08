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
    }
}
