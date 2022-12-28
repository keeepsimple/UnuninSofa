using UnuninSofa.BusinessLayer.BaseServices;
using UnuninSofa.Models;

namespace UnuninSofa.BusinessLayer.IServices
{
    public interface ITransactionService : IBaseService<Transaction>
    {
        Task<Transaction> GetByOrderAsync(int orderId);
    }

}
