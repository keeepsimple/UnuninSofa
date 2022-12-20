using UnuninSofa.BusinessLayer.BaseServices;
using UnuninSofa.Models;

namespace UnuninSofa.BusinessLayer.IServices
{
    public interface IProductService : IBaseService<Product>
    {
        Task<IEnumerable<Product>> TakeProductInSubCateAsync(int subCateId, int take);
    }

}
