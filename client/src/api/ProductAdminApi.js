import axiosClient from "./axiosClient";

const productAdminApi = {
  getPaging(pageNum, params) {
    const url = `/ProductManagement/GetPaging/${pageNum}`;
    return axiosClient.get(url, { params: params });
  },
  get(id) {
    const url = `/ProductManagement/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = "/ProductManagement";
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = "/ProductManagement";
    return axiosClient.put(url, data);
  },
  remove(id) {
    const url = `/ProductManagement/${id}`;
    return axiosClient.delete(url);
  },
};

export default productAdminApi;
