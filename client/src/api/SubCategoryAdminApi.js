import axiosClient, { axiosMedia } from "./axiosClient";

const subCategoryAdminApi = {
  getPaging(pageNum, params) {
    const url = `/SubCategoryManagement/GetPaging/${pageNum}`;
    return axiosClient.get(url, { params: params });
  },
  getAll() {
    const url = `/SubCategoryManagement`;
    return axiosClient.get(url);
  },
  get(id) {
    const url = `/SubCategoryManagement/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = "/SubCategoryManagement";
    return axiosMedia.post(url, data);
  },
  update(data) {
    const url = "/SubCategoryManagement";
    return axiosMedia.put(url, data);
  },
  remove(id) {
    const url = `/SubCategoryManagement/${id}`;
    return axiosClient.delete(url);
  },
};

export default subCategoryAdminApi;
