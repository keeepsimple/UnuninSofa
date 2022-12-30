using Microsoft.EntityFrameworkCore;
using UnuninSofa.BusinessLayer.IServices;
using UnuninSofa.Data.Infrastructure.Repositories;
using UnuninSofa.Models;

namespace UnuninSofa.BusinessLayer.Services
{
    public class ReportService : IReportService
    {
        private readonly ICoreRepository<Order> _orderRepository;
        private readonly ICoreRepository<OrderDetail> _orderDetailRepository;
        private readonly ICoreRepository<Product> _productRepository;

        public ReportService(ICoreRepository<Order> orderRepository,
            ICoreRepository<OrderDetail> orderDetailRepository,
            ICoreRepository<Product> productRepository)
        {
            _orderRepository = orderRepository;
            _orderDetailRepository = orderDetailRepository;
            _productRepository = productRepository;
        }
        /*
         * timeFilter:
         *  - 0 : all time
         *  - 1 : this week
         *  - 2 : this month
         *  - 3 : this year
         */
        public async Task<Dictionary<string, decimal>> GetOrder(int timeFilter = 0)
        {
            switch (timeFilter)
            {
                case 1:
                    {
                        return await GetOrderOrRevenueOfThisWeek(isOrder: true);
                    }
                case 2:
                    {
                        return await GetOrderOrRevenueOfThisMonth(isOrder: true);
                    }
                case 3:
                    {
                        return await GetOrderAndRevenueOfThisYear(isOrder: true);
                    }
                default:
                    {
                        return await GetOrderOrRevenueOfAllTime(isOrder: true);
                    }
            }
        }

        private async Task<Dictionary<string, decimal>> GetOrderOrRevenueOfThisWeek(bool isOrder)
        {
            var dictionary = new Dictionary<string, decimal>();
            var firstDayOfWeek = DateTime.Now.AddDays(-6);
            var lastDayOfWeek = DateTime.Now;
            var daysOfWeek = Enumerable.Range(0, 1 + lastDayOfWeek.Subtract(firstDayOfWeek).Days)
                                 .Select(offset => firstDayOfWeek.AddDays(offset))
                                 .ToList();
            foreach (var item in daysOfWeek)
            {
                if (isOrder)
                {
                    var numOrder = await _orderRepository.GetQuery(x => x.CreatedAt.Date == item.Date
                                                                && x.Status == 3)
                                                                .CountAsync();
                    dictionary.Add(item.ToString(), numOrder);
                }
                else
                {
                    var revenue = await _orderRepository.GetQuery(x => x.CreatedAt.Date == item.Date
                                                                && x.Status == 3)
                                                                .SumAsync(x => x.TotalPrice);
                    dictionary.Add(item.ToString(), revenue);
                }
            }

            return dictionary;
        }

        private async Task<Dictionary<string, decimal>> GetOrderOrRevenueOfThisMonth(bool isOrder)
        {
            var dictionary = new Dictionary<string, decimal>();
            var month = DateTime.Now.Month;
            var year = DateTime.Now.Year;
            var days = GetDates(year, month);

            foreach (var item in days)
            {
                if (isOrder)
                {
                    var numOrder = await _orderRepository.GetQuery(x => x.CreatedAt.Date == item.Date
                                                                        && x.Status == 3).CountAsync();
                    dictionary.Add(item.Day.ToString(), numOrder);
                }
                else
                {
                    var revenue = await _orderRepository.GetQuery(x => x.CreatedAt.Date == item.Date
                                                                        && x.Status == 3)
                                                                            .SumAsync(x => x.TotalPrice);
                    dictionary.Add(item.Day.ToString(), revenue);
                }
            }

            return dictionary;
        }

        private List<DateTime> GetDates(int year, int month)
        {
            return Enumerable.Range(1, DateTime.DaysInMonth(year, month))
                             .Select(day => new DateTime(year, month, day))
                             .ToList();
        }

        private async Task<Dictionary<string, decimal>> GetOrderAndRevenueOfThisYear(bool isOrder)
        {
            var dictionary = new Dictionary<string, decimal>();
            var months = await _orderRepository.GetQuery().Select(x => x.CreatedAt.Month).Distinct().ToListAsync();
            foreach (var item in months)
            {
                if (isOrder)
                {
                    var numOrder = await _orderRepository.GetQuery(x => x.CreatedAt.Month == item
                                                                && x.CreatedAt.Year == DateTime.Now.Year
                                                                && x.Status == 3).CountAsync();
                    dictionary.Add(item.ToString(), numOrder);
                }
                else
                {
                    var revenue = await _orderRepository.GetQuery(x => x.CreatedAt.Month == item
                                                                && x.CreatedAt.Year == DateTime.Now.Year
                                                                && x.Status == 3)
                                                                    .SumAsync(x => x.TotalPrice);
                    dictionary.Add(item.ToString(), revenue);
                }
            }

            return dictionary;
        }

        private async Task<Dictionary<string, decimal>> GetOrderOrRevenueOfAllTime(bool isOrder)
        {
            var dictionary = new Dictionary<string, decimal>();
            var months = await _orderRepository.GetQuery().Select(x => x.CreatedAt.Month).Distinct().ToListAsync();
            var years = await _orderRepository.GetQuery().Select(x => x.CreatedAt.Year).Distinct().ToListAsync();
            foreach (var year in years)
            {
                foreach (var month in months)
                {
                    if (isOrder)
                    {
                        var numOrder = await _orderRepository.GetQuery(x => x.CreatedAt.Month == month
                                                                    && x.CreatedAt.Year == year
                                                                    && x.Status == 3).CountAsync();
                        dictionary.Add(month.ToString() + "/" + year, numOrder);
                    }
                    else
                    {
                        var revenue = await _orderRepository.GetQuery(x => x.CreatedAt.Month == month
                                                                    && x.CreatedAt.Year == year
                                                                    && x.Status == 3)
                                                                        .SumAsync(x => x.TotalPrice);
                        dictionary.Add(month.ToString() + "/" + year, revenue);
                    }
                }
            }
            return dictionary;
        }

        public async Task<Dictionary<string, decimal>> GetRevenue(int timeFilter = 0)
        {
            switch (timeFilter)
            {
                case 1:
                    {
                        return await GetOrderOrRevenueOfThisWeek(isOrder: false);
                    }
                case 2:
                    {
                        return await GetOrderOrRevenueOfThisMonth(isOrder: false);
                    }
                case 3:
                    {
                        return await GetOrderAndRevenueOfThisYear(isOrder: false);
                    }
                default:
                    {
                        return await GetOrderOrRevenueOfAllTime(isOrder: false);
                    }
            }
        }

        public async Task<Dictionary<string, int>> NumOfProductSale()
        {
            var dictionary = new Dictionary<string, int>();
            var productName = await _productRepository.GetQuery(x => x.IsDeleted == false).Select(x => x.Name).ToListAsync();
            foreach (var item in productName)
            {
                var quantity = await _orderDetailRepository.GetQuery(x => x.ProductName.Equals(item) && x.Order.Status == 3).SumAsync(x => x.Quantity);
                dictionary.Add(item, quantity);
            }

            return dictionary;
        }

        public async Task<Dictionary<string, decimal>> RateSuccess()
        {
            var total = await _orderRepository.GetQuery().CountAsync();
            var success = await _orderRepository.GetQuery(x => x.Status == 3).CountAsync();
            var cancel = await _orderRepository.GetQuery(x => x.Status < 0).CountAsync();
            var dictionary = new Dictionary<string, decimal>();
            dictionary.Add("success", (decimal)success / (decimal)total);
            dictionary.Add("cancel", (decimal)cancel / (decimal)total);
            return dictionary;
        }

        public async Task<Dictionary<string, decimal>> RateSuccessOfUser(string userId)
        {
            var total = await _orderRepository.GetQuery(x => x.UserId == userId).CountAsync();
            var success = await _orderRepository.GetQuery(x => x.Status == 3 && x.UserId == userId).CountAsync();
            var cancel = await _orderRepository.GetQuery(x => x.Status < 0 && x.UserId == userId).CountAsync();
            var dictionary = new Dictionary<string, decimal>();
            dictionary.Add("success", (decimal)success / (decimal)total);
            dictionary.Add("cancel", (decimal)cancel / (decimal)total);
            return dictionary;
        }
    }
}
