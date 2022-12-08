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
    }
}
