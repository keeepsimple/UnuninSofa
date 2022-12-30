using Microsoft.EntityFrameworkCore;
using UnuninSofa.BusinessLayer.BaseServices;
using UnuninSofa.BusinessLayer.IServices;
using UnuninSofa.Data.Infrastructure;
using UnuninSofa.Models;

namespace UnuninSofa.BusinessLayer.Services
{
    public class ReviewService : BaseService<Review>, IReviewService
    {
        public ReviewService(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
        }

        public async Task<IEnumerable<Review>> GetAllReviewsInProductAsync(int productId)
        {
            return await _unitOfWork.ReviewRepository.GetQuery(x => x.ProductId == productId && x.IsDeleted == false).ToListAsync();
        }

        public async Task<bool> IsCreatedReview(string userId, int productId)
        {
            var review = await _unitOfWork.ReviewRepository.GetQuery(x => x.UserId == userId && x.ProductId == productId).FirstOrDefaultAsync();
            if (review != null) return true;
            return false;
        }

        public async Task<int> GetTotalRateInProduct(int productId)
        {
            var rates = await _unitOfWork.ReviewRepository.GetQuery(x => x.ProductId == productId).SumAsync(x => x.TotalRate);
            return rates;
        }
    }
}
