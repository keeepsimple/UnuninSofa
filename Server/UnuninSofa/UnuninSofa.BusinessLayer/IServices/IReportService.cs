namespace UnuninSofa.BusinessLayer.IServices
{
    public interface IReportService
    {
        Task<Dictionary<string, decimal>> RateSuccess();

        Task<Dictionary<string, decimal>> GetRevenue(int timeFilter = 0);

        Task<Dictionary<string, decimal>> GetOrder(int timeFilter = 0);

        Task<Dictionary<string, int>> NumOfProductSale();

        Task<Dictionary<string, decimal>> RateSuccessOfUser(string userId);
    }
}
