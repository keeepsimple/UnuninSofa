using AutoMapper;
using UnuninSofa.API.DTO;
using UnuninSofa.Models;

namespace UnuninSofa.API.Helper
{
    public class MappingProfile:Profile
    {
        public MappingProfile()
        {
            CreateMap<CategoryDTO, Category>().ForMember(des=>des.CreatedAt, act => act.Ignore()).ReverseMap();
            CreateMap<SubCategoryDTO, SubCategory>().ForMember(des=>des.CreatedAt, act => act.Ignore()).ReverseMap();
            CreateMap<MaterialDTO, Material>().ForMember(des=>des.CreatedAt, act => act.Ignore()).ReverseMap();
            CreateMap<ColorDTO, Color>().ForMember(des=>des.CreatedAt, act => act.Ignore()).ReverseMap();
        }
    }
}
