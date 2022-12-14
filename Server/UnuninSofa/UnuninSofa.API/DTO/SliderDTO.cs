namespace UnuninSofa.API.DTO
{
    public class SliderDTO
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public IFormFile? ImageUrl { get; set; }

        public string Link { get; set; }

        public bool IsPublished { get; set; }
    }
}
