using UnuninSofa.BusinessLayer.BaseServices;
using UnuninSofa.BusinessLayer.IServices;
using UnuninSofa.Data.Infrastructure;
using UnuninSofa.Models;

namespace UnuninSofa.BusinessLayer.Services
{
    public class SaleService : BaseService<Sale>, ISaleService
    {
        public SaleService(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
        }
    }
}
