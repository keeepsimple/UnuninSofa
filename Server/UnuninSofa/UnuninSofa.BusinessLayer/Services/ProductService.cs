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
    }
}
