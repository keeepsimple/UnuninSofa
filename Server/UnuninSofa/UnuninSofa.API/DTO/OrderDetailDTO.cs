namespace UnuninSofa.API.DTO
{
    public class OrderDetailDTO
    {
        public int Id { get; set; }

        public string ProductName { get; set; }

        public string ProductCode { get; set; }

        public string MaterialName { get; set; }

        public string ColorName { get; set; }

        public decimal Price { get; set; }

        public int Quantity { get; set; }
    }
}
