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
    }
}
