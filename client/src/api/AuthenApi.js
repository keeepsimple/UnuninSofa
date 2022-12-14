import axiosClient from "./axiosClient";
const authenApi = {
  register(data) {
    const url = "/Authen/register";
    return axiosClient.post(url, data);
  },
  login(data) {
    const url = "/Authen/login";
    return axiosClient.post(url, data);
  }
};

export default authenApi;
