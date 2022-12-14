import axiosClient from "./axiosClient";

const subCategoryApi = {
  getAll() {
    const url = "/Subcategory";
    return axiosClient.get(url);
  },
  get(id) {
    const url = `/SubCategory/${id}`;
    return axiosClient.get(url);
  },
  getByCate(cateId) {
    const url = `/SubCategory/GetByCateId/${cateId}`
    return axiosClient.get(url);
  }
};

export default subCategoryApi;
