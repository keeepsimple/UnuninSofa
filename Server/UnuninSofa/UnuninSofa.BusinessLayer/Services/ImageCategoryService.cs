using UnuninSofa.BusinessLayer.BaseServices;
using UnuninSofa.BusinessLayer.IServices;
using UnuninSofa.Data.Infrastructure;
using UnuninSofa.Models;

namespace UnuninSofa.BusinessLayer.Services
{
    public class ImageCategoryService : BaseService<ImageCategory>, IImageCategoryService
    {
        public ImageCategoryService(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
        }
    }
}
