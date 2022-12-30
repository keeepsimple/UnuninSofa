import axios from "axios";
import jwtDecode from "jwt-decode";
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
axiosClient.interceptors.response.use(res => res.data, async error => {
  if (error.response.status === 401) {
    const data = {
      accessToken: localStorage.getItem(StorageKeys.TOKEN),
      refreshToken: localStorage.getItem(StorageKeys.REFRESHTOKEN)
    }
    try {
      const response = await axiosClient.post("/Token/refresh", data)

      localStorage.setItem(StorageKeys.TOKEN, response.token);
      localStorage.setItem(StorageKeys.REFRESHTOKEN, response.refreshToken);
      const decoded = jwtDecode(response.token);
      localStorage.setItem(
        StorageKeys.ROLE,
        decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
      );
      return axiosClient(error.config)
    } catch (err) {
      return Promise.reject(err);
    }
  }

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
axiosMedia.interceptors.response.use(res => res.data, async error => {
  if (error.response.status === 401) {
    const data = {
      accessToken: localStorage.getItem(StorageKeys.TOKEN),
      refreshToken: localStorage.getItem(StorageKeys.REFRESHTOKEN)
    }
    try {
      const response = await axiosClient.post("/Token/refresh", data)
      localStorage.setItem(StorageKeys.TOKEN, response.token);
      localStorage.setItem(StorageKeys.REFRESHTOKEN, response.refreshToken);
      const decoded = jwtDecode(response.token);
      localStorage.setItem(
        StorageKeys.ROLE,
        decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
      );
      return axiosClient(error.config)
    }
    catch (err) {
      return Promise.reject(err);
    }
  }

  if (error.response.data.mess !== undefined) {
    return Promise.reject(error.response.data.mess);
  } else {
    return Promise.reject(error.response.data.title);
  }
}
);

export default axiosClient;
