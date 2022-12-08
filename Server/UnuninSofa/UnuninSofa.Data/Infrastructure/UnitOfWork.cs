using UnuninSofa.Data.Infrastructure.Repositories;
using UnuninSofa.Models;
using UnuninSofa.Models.BaseEntities;

namespace UnuninSofa.Data.Infrastructure
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly UnuninSofaContext _dbContext;

        public UnuninSofaContext DataContext => _dbContext;

        public UnitOfWork(UnuninSofaContext dbContext)
        {
            _dbContext = dbContext;
        }

        private ICoreRepository<SubCategory> _subCategoryRepository;
        public ICoreRepository<SubCategory> SubCategoryRepository => _subCategoryRepository ?? new CoreRepository<SubCategory>(_dbContext);

        private ICoreRepository<Category> _categoryRepository;
        public ICoreRepository<Category> CategoryRepository => _categoryRepository ?? new CoreRepository<Category>(_dbContext);

        private ICoreRepository<Review> _reviewRepository;
        public ICoreRepository<Review> ReviewRepository => _reviewRepository ?? new CoreRepository<Review>(_dbContext);

        private ICoreRepository<Product> _productRepository;
        public ICoreRepository<Product> ProductRepository => _productRepository ?? new CoreRepository<Product>(_dbContext);

        private ICoreRepository<Material> _materialRepository;
        public ICoreRepository<Material> MaterialRepository => _materialRepository ?? new CoreRepository<Material>(_dbContext);

        private ICoreRepository<Image> _imageRepository;
        public ICoreRepository<Image> ImageRepository => _imageRepository ?? new CoreRepository<Image>(_dbContext);

        private ICoreRepository<Order> _orderRepository;
        public ICoreRepository<Order> OrderRepository => _orderRepository ?? new CoreRepository<Order>(_dbContext);

        private ICoreRepository<OrderDetail> _orderDetailRepository;
        public ICoreRepository<OrderDetail> OrderDetailRepository => _orderDetailRepository ?? new CoreRepository<OrderDetail>(_dbContext);

        private ICoreRepository<Sale> _saleRepository;
        public ICoreRepository<Sale> SaleRepository => _saleRepository ?? new CoreRepository<Sale>(_dbContext);

        private ICoreRepository<Transaction> _transactionRepository;
        public ICoreRepository<Transaction> TransactionRepository => _transactionRepository ?? new CoreRepository<Transaction>(_dbContext);

        private ICoreRepository<Color> _colorRepository;
        public ICoreRepository<Color> ColorRepository => _colorRepository ?? new CoreRepository<Color>(_dbContext);

        private ICoreRepository<ProductDetail> _productDetailRepository;
        public ICoreRepository<ProductDetail> ProductDetailRepository => _productDetailRepository ?? new CoreRepository<ProductDetail>(_dbContext);



        #region Method

        public void Dispose()
        {
            _dbContext.Dispose();
        }

        public int SaveChanges()
        {
            return _dbContext.SaveChanges();
        }

        public async Task<int> SaveChangesAsync()
        {
            CancellationToken cancellationToken = new CancellationToken();
            return await _dbContext.SaveChangesAsync(cancellationToken);
        }

        public ICoreRepository<T> CoreRepository<T>() where T : BaseEntity
        {
            return new CoreRepository<T>(_dbContext);
        }

        #endregion
    }
}
