using Microsoft.EntityFrameworkCore;
using UnuninSofa.BusinessLayer.BaseServices;
using UnuninSofa.BusinessLayer.IServices;
using UnuninSofa.Data.Infrastructure;
using UnuninSofa.Models;

namespace UnuninSofa.BusinessLayer.Services
{
    public class SubCategoryService : BaseService<SubCategory>, ISubCategoryService
    {
        public SubCategoryService(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
        }

        public async Task<IEnumerable<SubCategory>> GetSubCategoriesByCateId(int cateId)
        {
            return await _unitOfWork.SubCategoryRepository.GetQuery(x => x.CategoryId == cateId && x.IsDeleted == false).ToListAsync();
        }
    }
}
