import axiosClient from "./axiosClient";

const categoryApi = {
  //   getPaging(id, params) {
  //     const url = `/CategoryManagement/GetPaging/${id}`;
  //     return axiosClient.get(url, { params: params });
  //   },
  getAll() {
    const url = "/Category";
    return axiosClient.get(url);
  },
  // get(id) {
  //   const url = `/CategoryManagement/${id}`;
  //   return axiosClient.get(url);
  // },
  // add(data) {
  //   const url = "/CategoryManagement";
  //   return axiosClient.post(url, data);
  // },
  // update(data) {
  //   const url = "/CategoryManagement";
  //   return axiosClient.put(url, data);
  // },
  // remove(id) {
  //   const url = `/CategoryManagement/${id}`;
  //   return axiosClient.delete(url);
  // },
};

export default categoryApi;
