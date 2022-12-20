using Microsoft.EntityFrameworkCore;
using UnuninSofa.BusinessLayer.BaseServices;
using UnuninSofa.BusinessLayer.IServices;
using UnuninSofa.Data.Infrastructure;
using UnuninSofa.Models;

namespace UnuninSofa.BusinessLayer.Services
{
    public class ProductService : BaseService<Product>, IProductService
    {
        public ProductService(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
        }

        public async Task<IEnumerable<Product>> TakeProductInSubCateAsync(int subCateId, int take)
        {
            return await _unitOfWork.ProductRepository.GetQuery(x =>
                                                                x.SubCategoryId == subCateId
                                                                && x.IsDeleted == false)
                                                                    .Take(take)
                                                                    .ToListAsync();
        }
    }
}
