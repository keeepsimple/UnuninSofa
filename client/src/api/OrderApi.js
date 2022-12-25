import axiosClient from "./axiosClient";

const orderApi = {
  create(data) {
    const url = "/Order";
    return axiosClient.post(url, data);
  },
};

export default orderApi;
