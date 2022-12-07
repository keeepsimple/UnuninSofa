using UnuninSofa.Models.BaseEntities;

namespace UnuninSofa.Models
{
    public class OrderDetail : BaseEntity
    {
        public int OrderId { get; set; }

        public virtual Order Order { get; set; }

        public string ProductName { get; set; }

        public string ProductCode { get; set; }

        public string MaterialName { get; set; }

        public string ColorName { get; set; }

        public decimal Price { get; set; }

        public int SalePercent { get; set; }
    }
}
