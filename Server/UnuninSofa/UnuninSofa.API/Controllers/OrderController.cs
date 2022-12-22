using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UnuninSofa.BusinessLayer.IServices;

namespace UnuninSofa.API.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderService _orderService;
        private readonly IOrderDetailService _orderDetailService;
        private readonly ITransactionService _transactionService;

        public OrderController(IOrderService orderService, IOrderDetailService orderDetailService, ITransactionService transactionService)
        {
            _orderService = orderService;
            _orderDetailService = orderDetailService;
            _transactionService = transactionService;
        }


    }
}
