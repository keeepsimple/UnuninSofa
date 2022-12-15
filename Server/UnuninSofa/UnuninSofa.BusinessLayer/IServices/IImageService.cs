using UnuninSofa.BusinessLayer.BaseServices;
using UnuninSofa.Models;

namespace UnuninSofa.BusinessLayer.IServices
{
    public interface IImageService : IBaseService<Image> {
        Task<IEnumerable<Image>> GetImagesByProductDetailIdAsync(int productDetailId);
    }
}
