namespace UnuninSofa.API.DTO
{
    public class OrderDTO
    {
        public int Id { get; set; }

        public string Address { get; set; }

        public int Status { get; set; }

        public decimal TotalPrice { get; set; }

        public string Username { get; set; }
    }
}
