import { baseApiUrl } from "../configs/serverUrl";
import axiosClient from "./axiosClient";
const authenApi = {
  register(data) {
    const url = baseApiUrl + "/Authen/register";
    return axiosClient.post(url, data);
  },
  login(data) {
    const url = baseApiUrl + "/Authen/login";
    return axiosClient.post(url, data);
  },
};

export default authenApi;
