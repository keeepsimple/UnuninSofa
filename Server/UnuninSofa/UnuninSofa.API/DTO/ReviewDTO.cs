namespace UnuninSofa.API.DTO
{
    public class ReviewDTO
    {
        public int Id { get; set; }

        public int ProductId { get; set; }

        public string UserId { get; set; }

        public string Comment { get; set; }

        public int TotalRate { get; set; }
    }
}
