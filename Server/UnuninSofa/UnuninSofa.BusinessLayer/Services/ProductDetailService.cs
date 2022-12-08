using UnuninSofa.BusinessLayer.BaseServices;
using UnuninSofa.BusinessLayer.IServices;
using UnuninSofa.Data.Infrastructure;
using UnuninSofa.Models;

namespace UnuninSofa.BusinessLayer.Services
{
    public class ProductDetailService : BaseService<ProductDetail>, IProductDetailService
    {
        public ProductDetailService(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
        }
    }
}
