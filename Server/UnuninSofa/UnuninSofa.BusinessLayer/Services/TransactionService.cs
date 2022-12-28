using Microsoft.EntityFrameworkCore;
using UnuninSofa.BusinessLayer.BaseServices;
using UnuninSofa.BusinessLayer.IServices;
using UnuninSofa.Data.Infrastructure;
using UnuninSofa.Models;

namespace UnuninSofa.BusinessLayer.Services
{
    public class TransactionService : BaseService<Transaction>, ITransactionService
    {
        public TransactionService(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
        }

        public async Task<Transaction> GetByOrderAsync(int orderId)
        {
            return await _unitOfWork.TransactionRepository.GetQuery(x => x.OrderId == orderId).FirstOrDefaultAsync();
        }
    }
}
