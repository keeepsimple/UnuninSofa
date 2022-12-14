import { baseApiUrl } from "../configs/serverUrl";
import axiosClient, { axiosMedia } from "./axiosClient";

const subCategoryAdminApi = {
    getPaging(pageNum, params) {
        const url = baseApiUrl + `/SubCategoryManagement/GetPaging/${pageNum}`
        return axiosClient.get(url, { params: params })
    },
    get(id) {
        const url = `/SubCategoryManagement/${id}`;
        return axiosClient.get(url);
    },
    add(data) {
        const url = "/SubCategoryManagement";
        return axiosMedia.post(url, data);
    },
    update(data) {
        const url = "/SubCategoryManagement";
        return axiosMedia.put(url, data);
    },
    remove(id) {
        const url = `/SubCategoryManagement/${id}`;
        return axiosClient.delete(url);
    },
}

export default subCategoryAdminApi;