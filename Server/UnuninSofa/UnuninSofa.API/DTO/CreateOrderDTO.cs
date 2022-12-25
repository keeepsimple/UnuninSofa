namespace UnuninSofa.API.DTO
{
    public class CreateOrderDTO
    {
        public OrderDTO Order { get; set; }

        public List<OrderDetailDTO> OrderDetails { get; set; }

        public TransactionDTO Transaction { get; set; }
    }
}
