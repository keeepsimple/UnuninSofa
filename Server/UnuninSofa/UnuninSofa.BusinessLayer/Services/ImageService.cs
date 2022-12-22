using Microsoft.EntityFrameworkCore;
using UnuninSofa.BusinessLayer.BaseServices;
using UnuninSofa.BusinessLayer.IServices;
using UnuninSofa.Data.Infrastructure;
using UnuninSofa.Models;

namespace UnuninSofa.BusinessLayer.Services
{
    public class ImageService : BaseService<Image>, IImageService
    {
        public ImageService(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
        }

        public async Task<IEnumerable<Image>> GetImageByProductCode(string productCode)
        {
            return await _unitOfWork.ImageRepository.GetQuery(x => x.ProductCode.Equals(productCode) && x.IsDeleted == false).ToListAsync();
        }

        public async Task<Image> GetImageThumbByProductCode(string productCode)
        {
            return await _unitOfWork.ImageRepository
                .GetQuery(x => x.ProductCode.Equals(productCode) && x.IsDeleted == false)
                .OrderBy(x => x.ImageUrl)
                .FirstOrDefaultAsync();
        }
    }
}
