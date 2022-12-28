using Microsoft.AspNetCore.Mvc;
using UnuninSofa.BusinessLayer.IServices;

namespace UnuninSofa.API.Admin
{
    [Route("api/[controller]")]
    //[Authorize(Roles = "Admin")]
    [ApiController]
    public class DashboardController : ControllerBase
    {
        private readonly IReportService _reportService;

        public DashboardController(IReportService reportService)
        {
            _reportService = reportService;
        }

        [HttpGet("RateSuccess")]
        public async Task<IActionResult> RateSuccess()
        {
            var result = await _reportService.RateSuccess();
            return Ok(result);
        }

        [HttpGet("RevenueAndOrder/{timeFilter}")]
        public async Task<IActionResult> RevenueAndOrder(int timeFilter = 0)
        {
            var numOrder = await _reportService.GetOrder(timeFilter);
            var revenue = await _reportService.GetRevenue(timeFilter);
            return Ok(new
            {
                numOrder,
                revenue
            });
        }

        [HttpGet("NumOfProductSale")]
        public async Task<IActionResult> NumOfProductSale()
        {
            var result = await _reportService.NumOfProductSale();
            return Ok(result);
        }

    }
}
