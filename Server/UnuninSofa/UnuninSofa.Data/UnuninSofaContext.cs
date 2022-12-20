using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using UnuninSofa.Models;
using UnuninSofa.Models.BaseEntities;

namespace UnuninSofa.Data
{
    public class UnuninSofaContext : IdentityDbContext
    {
        public UnuninSofaContext(DbContextOptions<UnuninSofaContext> opt) : base(opt)
        {

        }

        public DbSet<Category> Categories { get; set; }

        public DbSet<Product> Products { get; set; }

        public DbSet<ProductDetail> ProductDetails { get; set; }

        public DbSet<Review> Reviews { get; set; }

        public DbSet<Material> Materials { get; set; }

        public DbSet<Image> Images { get; set; }

        public DbSet<Slider> Sliders { get; set; }

        public DbSet<Color> Colors { get; set; }

        public DbSet<SubCategory> SubCategories { get; set; }

        public DbSet<Sale> Sales { get; set; }

        public DbSet<Transaction> Transactions { get; set; }

        public DbSet<Order> Orders { get; set; }

        public DbSet<OrderDetail> OrderDetails { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            var adminId = "8967c0da-1606-447b-b91b-10c9f7e87418";
            var adminRoleId = "56016200-6e5a-41ae-83ba-a9759ac9e6b5";
            var userRoleId = "99e62bd0-505e-4c7c-9533-3d0177220cec";

            builder.Entity<IdentityRole>().HasData(
                    new IdentityRole
                    {
                        Id = adminRoleId,
                        Name = "Admin",
                        NormalizedName = "Admin"
                    },
                    new IdentityRole
                    {
                        Id = userRoleId,
                        Name = "User",
                        NormalizedName = "User"
                    }
                );
            var hasher = new PasswordHasher<User>();
            builder.Entity<User>().HasData(
                    new User
                    {
                        Id = adminId,
                        FullName = "Admin",
                        UserName = "admin",
                        Email = "admin@mail.com",
                        PhoneNumber = "09191991999",
                        NormalizedUserName = "admin",
                        Address = "O dau khong noi",
                        PasswordHash = hasher.HashPassword(null, "1234")
                    }
                );

            builder.Entity<IdentityUserRole<string>>().HasData(
                    new IdentityUserRole<string>
                    {
                        RoleId = adminRoleId,
                        UserId = adminId
                    }
                );

            builder.Entity<Category>().HasData(
                new Category
                {
                    Id = 1,
                    Name = "Sofa",
                    CreatedAt = DateTime.Now,
                    IsDeleted = false,
                },
                new Category
                {
                    Id = 2,
                    Name = "Phòng khách",
                    CreatedAt = DateTime.Now,
                    IsDeleted = false,
                },
                new Category
                {
                    Id = 3,
                    Name = "Phòng ăn",
                    CreatedAt = DateTime.Now,
                    IsDeleted = false,
                },
                new Category
                {
                    Id = 4,
                    Name = "Phòng ngủ",
                    CreatedAt = DateTime.Now,
                    IsDeleted = false,
                }
                );

            
        }

        public override int SaveChanges()
        {
            BeforeSaveChanges();
            return base.SaveChanges();
        }

        public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken)
        {
            BeforeSaveChanges();
            return await base.SaveChangesAsync();
        }

        private void BeforeSaveChanges()
        {
            var entities = ChangeTracker.Entries();
            foreach (var entry in entities)
            {
                if (entry.Entity is IBaseEntity entityBase)
                {
                    switch (entry.State)
                    {
                        case EntityState.Modified: entityBase.UpdatedAt = DateTime.Now; break;
                        case EntityState.Added:
                            entityBase.UpdatedAt = DateTime.Now;
                            entityBase.CreatedAt = DateTime.Now;
                            break;
                    }
                }
            }
        }
    }
}
