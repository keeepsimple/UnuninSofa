using UnuninSofa.BusinessLayer.BaseServices;
using UnuninSofa.BusinessLayer.IServices;
using UnuninSofa.Data.Infrastructure;
using UnuninSofa.Models;

namespace UnuninSofa.BusinessLayer.Services
{
    public class CategoryService : BaseService<Category>, ICategoryService
    {
        public CategoryService(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
        }
    }
}
