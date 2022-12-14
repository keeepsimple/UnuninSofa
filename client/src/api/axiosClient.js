import axios from "axios";
import { baseApiUrl } from "../configs/serverUrl";
import StorageKeys from "../configs/storageKey";

const token = localStorage.getItem(StorageKeys.TOKEN);
const axiosClient = axios.create({
  baseURL: `${baseApiUrl}`,
  headers: {
    "Content-Type": "application/json",
    "Authorization": `bearer ${token}`,
  },
});

export const axiosMedia = axios.create({
  baseURL: `${baseApiUrl}`,
  headers: {
    "Authorization": `bearer ${token}`,
    "content-type": "multipart/form-data",
  },
})

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    if (error.response.data.mess !== undefined) {
      return Promise.reject(error.response.data.mess);
    } else {
      return Promise.reject(error.response.data.title);
    }
  }
);

// Add a request interceptor
axiosMedia.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosMedia.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    if (error.response.data.mess !== undefined) {
      return Promise.reject(error.response.data.mess);
    } else {
      return Promise.reject(error.response.data.title);
    }
  }
);

export default axiosClient;
