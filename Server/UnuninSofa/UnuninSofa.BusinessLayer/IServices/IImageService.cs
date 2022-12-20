using UnuninSofa.BusinessLayer.BaseServices;
using UnuninSofa.Models;

namespace UnuninSofa.BusinessLayer.IServices
{
    public interface IImageService : IBaseService<Image>
    {
        Task<Image> GetImageThumbByProductCode(string productCode);

        Task<IEnumerable<Image>> GetImageByProductCode(string productCode);
    }
}
