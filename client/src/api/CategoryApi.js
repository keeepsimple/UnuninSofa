import axiosClient from "./axiosClient";

const categoryApi = {
  getAll() {
    const url = "/Category";
    return axiosClient.get(url);
  }
};

export default categoryApi;
