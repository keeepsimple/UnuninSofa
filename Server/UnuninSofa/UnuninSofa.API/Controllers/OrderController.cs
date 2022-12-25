﻿using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using UnuninSofa.API.DTO;
using UnuninSofa.BusinessLayer.IServices;
using UnuninSofa.Models;

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
        private readonly UserManager<User> _userManager;
        private readonly IMapper _mapper;

        public OrderController(IOrderService orderService,
            IOrderDetailService orderDetailService,
            ITransactionService transactionService,
            UserManager<User> userManager,
            IMapper mapper)
        {
            _orderService = orderService;
            _orderDetailService = orderDetailService;
            _transactionService = transactionService;
            _userManager = userManager;
            _mapper = mapper;
        }

        [HttpPost]
        public async Task<IActionResult> CreateOrder(CreateOrderDTO model)
        {
            var user = await _userManager.FindByNameAsync(model.Order.Username);
            if(user == null) return BadRequest(new {mess="Không tìm thấy khách hàng"});

            var order = _mapper.Map<Order>(model.Order);
            order.UserId = user.Id;
            order.Status = 0;
            var resultOrder = await _orderService.AddAsync(order);
            if (resultOrder < 0) return BadRequest(new { mess = "Đặt hàng không thành công! Vui lòng thử lại" });

            var listOrderDetail = new List<OrderDetail>();
            foreach(var item in model.OrderDetails)
            {
                var orderDetail = new OrderDetail
                {
                    ColorName = item.ColorName,
                    MaterialName = item.MaterialName,
                    OrderId = order.Id,
                    ProductCode = item.ProductCode,
                    ProductName = item.ProductName,
                    Price = item.Price
                };
                await _orderDetailService.AddAsync(orderDetail);
            }

            var transaction = CreateTransactionByStatus(model.Transaction);
            transaction.OrderId = order.Id;
            transaction.UserId = user.Id;
            var resultTransaction = await _transactionService.AddAsync(transaction);
            if(resultTransaction < 0) return BadRequest(new { mess = "Thanh toán không thành công! Vui lòng thử lại" });

            return Ok(new
            {
                Order = order,
                OrderDetails = listOrderDetail,
                Transaction = transaction
            });
        }

        private Transaction CreateTransactionByStatus(TransactionDTO transactionDTO)
        {
            if (transactionDTO.Mode == 0)
            {
                var transaction = _mapper.Map<Transaction>(transactionDTO);
                transaction.Status = 0;
                return transaction;
            }
            else
            {
                var transaction = _mapper.Map<Transaction>(transactionDTO);
                transaction.Status = 1;
                return transaction;
            }
        }
    }
}
