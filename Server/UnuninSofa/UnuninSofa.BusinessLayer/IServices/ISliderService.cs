using UnuninSofa.BusinessLayer.BaseServices;
using UnuninSofa.Models;

namespace UnuninSofa.BusinessLayer.IServices
{
    public interface ISliderService:IBaseService<Slider>
    {
        Task<IEnumerable<Slider>> GetPublishedSliderAsync();
    }
}
