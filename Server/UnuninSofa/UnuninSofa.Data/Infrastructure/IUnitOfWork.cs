using UnuninSofa.Data.Infrastructure.Repositories;
using UnuninSofa.Models;
using UnuninSofa.Models.BaseEntities;

namespace UnuninSofa.Data.Infrastructure
{
    public interface IUnitOfWork : IDisposable
    {
        UnuninSofaContext DataContext { get; }

        int SaveChanges();

        Task<int> SaveChangesAsync();

        ICoreRepository<T> CoreRepository<T>() where T : BaseEntity;

        #region Master Data

        ICoreRepository<SubCategory> SubCategoryRepository { get; }

        ICoreRepository<Category> CategoryRepository { get; }

        ICoreRepository<Review> ReviewRepository { get; }

        ICoreRepository<Product> ProductRepository { get; }

        ICoreRepository<Material> MaterialRepository { get; }

        ICoreRepository<Image> ImageRepository { get; }

        ICoreRepository<Order> OrderRepository { get; }

        ICoreRepository<OrderDetail> OrderDetailRepository { get; }

        ICoreRepository<Sale> SaleRepository { get; }

        ICoreRepository<Transaction> TransactionRepository { get; }

        ICoreRepository<Color> ColorRepository { get; }

        ICoreRepository<ProductDetail> ProductDetailRepository { get; }

        #endregion
    }
}
