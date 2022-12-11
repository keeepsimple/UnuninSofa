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

        public async Task<IEnumerable<Image>> GetImagesSlider()
        {
            return await _unitOfWork.ImageRepository.GetQuery(x => x.ImageCategoryId == 1).ToListAsync();
        }
    }
}
