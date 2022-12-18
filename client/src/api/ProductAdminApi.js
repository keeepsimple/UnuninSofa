import { baseApiUrl } from "../configs/serverUrl";
import axiosClient, { axiosMedia } from "./axiosClient";

const productAdminApi = {
  getPaging(pageNum, params) {
    const url = baseApiUrl + `/ProductManagement/GetPaging/${pageNum}`;
    return axiosClient.get(url, { params: params });
  },
  getAll() {
    const url = `/ProductManagement`;
    return axiosClient.get(url);
  },
  get(id) {
    const url = `/ProductManagement/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = "/ProductManagement";
    return axiosMedia.post(url, data);
  },
  update(data) {
    const url = "/ProductManagement";
    return axiosMedia.put(url, data);
  },
  remove(id) {
    const url = `/ProductManagement/${id}`;
    return axiosClient.delete(url);
  },
};

export default productAdminApi;
