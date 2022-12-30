using AutoMapper;
using UnuninSofa.API.DTO;
using UnuninSofa.Models;

namespace UnuninSofa.API.Helper
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<CategoryDTO, Category>().ForMember(des => des.CreatedAt, act => act.Ignore()).ReverseMap();
            CreateMap<SubCategoryDTO, SubCategory>().ForMember(des => des.CreatedAt, act => act.Ignore()).ReverseMap();
            CreateMap<MaterialDTO, Material>().ForMember(des => des.CreatedAt, act => act.Ignore()).ReverseMap();
            CreateMap<ColorDTO, Color>().ForMember(des => des.CreatedAt, act => act.Ignore()).ReverseMap();
            CreateMap<User, RegisterDTO>().ReverseMap();
            CreateMap<SliderDTO, Slider>().ForMember(des => des.CreatedAt, act => act.Ignore()).ReverseMap();
            CreateMap<ProductDTO, Product>().ForMember(des => des.CreatedAt, act => act.Ignore()).ReverseMap();
            CreateMap<ProductDetailDTO, ProductDetail>().ForMember(des => des.CreatedAt, act => act.Ignore()).ReverseMap();
            CreateMap<ProductDetail, ProductDetailDTO>()
                .ForMember(des => des.MaterialIds, act => act.Ignore())
                .ForMember(des => des.ColorIds, act => act.Ignore()).ReverseMap();
            CreateMap<OrderDTO, Order>().ForMember(des => des.CreatedAt, act => act.Ignore()).ReverseMap();
            CreateMap<OrderDetailDTO, OrderDetail>().ForMember(des => des.CreatedAt, act => act.Ignore()).ReverseMap();
            CreateMap<TransactionDTO, Transaction>().ForMember(des => des.CreatedAt, act => act.Ignore()).ReverseMap();
            CreateMap<ReviewDTO, Review>().ForMember(des => des.CreatedAt, act => act.Ignore()).ReverseMap();
            CreateMap<UserDTO, User>()
                .ForMember(des => des.Reviews, act => act.Ignore())
                .ForMember(des => des.RefreshToken, act => act.Ignore())
                .ForMember(des => des.RefreshTokenExpiryTime, act => act.Ignore())
                .ForMember(des => des.AccessFailedCount, act => act.Ignore())
                .ForMember(des => des.ConcurrencyStamp, act => act.Ignore())
                .ForMember(des => des.LockoutEnabled, act => act.Ignore())
                .ForMember(des => des.LockoutEnd, act => act.Ignore())
                .ForMember(des => des.NormalizedEmail, act => act.Ignore())
                .ForMember(des => des.NormalizedUserName, act => act.Ignore())
                .ForMember(des => des.Orders, act => act.Ignore())
                .ForMember(des => des.PasswordHash, act => act.Ignore())
                .ForMember(des => des.PhoneNumberConfirmed, act => act.Ignore())
                .ForMember(des => des.SecurityStamp, act => act.Ignore())
                .ForMember(des => des.Transactions, act => act.Ignore())
                .ForMember(des => des.TwoFactorEnabled, act => act.Ignore())
                .ReverseMap();
        }
    }
}
