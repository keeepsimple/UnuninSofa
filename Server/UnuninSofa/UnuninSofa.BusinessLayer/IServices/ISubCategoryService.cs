using UnuninSofa.BusinessLayer.BaseServices;
using UnuninSofa.Models;

namespace UnuninSofa.BusinessLayer.IServices
{
    public interface ISubCategoryService : IBaseService<SubCategory>
    {
        Task<IEnumerable<SubCategory>> GetSubCategoriesByCateId(int cateId);
    }

}
