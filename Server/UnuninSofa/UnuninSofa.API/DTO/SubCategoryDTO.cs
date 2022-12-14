namespace UnuninSofa.API.DTO
{
    public class SubCategoryDTO
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public IFormFile? ImageUrl { get; set; }

        public string? Description { get; set; }

        public int CategoryId { get; set; }
    }
}
