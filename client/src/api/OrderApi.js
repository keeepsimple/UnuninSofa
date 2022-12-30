import axiosClient from "./axiosClient";

const orderApi = {
  create(data) {
    const url = "/Order";
    return axiosClient.post(url, data);
  },
  get(id, params) {
    const url = `/Order/${id}`
    return axiosClient.get(url, { params: params });
  },
  cancel(id, params) {
    const url = `/Order/Cancel/${id}`;
    return axiosClient.put(url, { params: params });
  },
};

export default orderApi;
