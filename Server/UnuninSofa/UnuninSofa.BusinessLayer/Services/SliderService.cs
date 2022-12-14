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
    }
}
