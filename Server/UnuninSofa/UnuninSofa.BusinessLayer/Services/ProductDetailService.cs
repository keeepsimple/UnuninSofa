using Microsoft.EntityFrameworkCore;
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

        public async Task<ProductDetail> GetProductDetailByProductAsync(int productId)
        {
            return await _unitOfWork.ProductDetailRepository
                .GetQuery(x=>x.ProductId == productId)
                .Include(x=>x.Colors)
                .Include(x=>x.Materials)
                .FirstOrDefaultAsync();
        }
    }
}
