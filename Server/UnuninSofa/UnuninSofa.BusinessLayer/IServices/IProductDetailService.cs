using UnuninSofa.BusinessLayer.BaseServices;
using UnuninSofa.Models;

namespace UnuninSofa.BusinessLayer.IServices
{
    public interface IProductDetailService : IBaseService<ProductDetail> {
        Task<ProductDetail> GetProductDetailByProductAsync(int productId);
    }

}
