using UnuninSofa.BusinessLayer.BaseServices;
using UnuninSofa.BusinessLayer.IServices;
using UnuninSofa.Data.Infrastructure;
using UnuninSofa.Models;

namespace UnuninSofa.BusinessLayer.Services
{
    public class MaterialService : BaseService<Material>, IMaterialService
    {
        public MaterialService(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
        }
    }
}
