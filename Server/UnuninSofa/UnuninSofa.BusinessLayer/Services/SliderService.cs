using Microsoft.EntityFrameworkCore;
using UnuninSofa.BusinessLayer.BaseServices;
using UnuninSofa.BusinessLayer.IServices;
using UnuninSofa.Data.Infrastructure;
using UnuninSofa.Models;

namespace UnuninSofa.BusinessLayer.Services
{
    public class SliderService : BaseService<Slider>, ISliderService
    {
        public SliderService(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
        }

        public async Task<IEnumerable<Slider>> GetPublishedSliderAsync()
        {
            return await _unitOfWork.SliderRepository.GetQuery(x=>x.IsPublished == true && x.IsDeleted == false).ToListAsync();
        }
    }
}
