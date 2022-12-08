namespace UnuninSofa.API.DTO
{
    public class PagingModel<T>
    {
        public IEnumerable<T> List { get; set; }

        public int Count { get; set; }
    }
}
