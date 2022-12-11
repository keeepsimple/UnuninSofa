import { baseApiUrl } from "../configs/serverUrl";
import axiosClient from "./axiosClient";

const subCategoryApi = {
  getAll() {
    const url = baseApiUrl + "/Subcategory";
    return axiosClient.get(url);
  },
};

export default subCategoryApi;
