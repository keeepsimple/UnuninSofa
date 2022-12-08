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
    }
}
