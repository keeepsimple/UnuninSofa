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
    }
}
