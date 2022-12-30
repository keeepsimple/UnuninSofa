using UnuninSofa.BusinessLayer.BaseServices;
using UnuninSofa.Models;

namespace UnuninSofa.BusinessLayer.IServices
{
    public interface IReviewService : IBaseService<Review>
    {
        Task<IEnumerable<Review>> GetAllReviewsInProductAsync(int productId);

        Task<bool> IsCreatedReview(string userId, int productId);

        Task<int> GetTotalRateInProduct(int productId);
    }

}
