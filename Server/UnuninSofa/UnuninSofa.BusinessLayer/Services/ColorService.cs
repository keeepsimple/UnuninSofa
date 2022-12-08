using UnuninSofa.BusinessLayer.BaseServices;
using UnuninSofa.BusinessLayer.IServices;
using UnuninSofa.Data.Infrastructure;
using UnuninSofa.Models;

namespace UnuninSofa.BusinessLayer.Services
{
    public class ColorService : BaseService<Color>, IColorService
    {
        public ColorService(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
        }
    }
}
