import { baseApiUrl } from "../configs/serverUrl";
import axiosClient from "./axiosClient";

const categoryAdminApi = {
    getPaging(pageNum, params) {
        const url = baseApiUrl + `/CategoryManagement/GetPaging/${pageNum}`
        return axiosClient.get(url, { params: params })
    },
    getAll() {
        const url = `/CategoryManagement`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/CategoryManagement/${id}`;
        return axiosClient.get(url);
    },
    add(data) {
        const url = "/CategoryManagement";
        return axiosClient.post(url, data);
    },
    update(data) {
        const url = "/CategoryManagement";
        return axiosClient.put(url, data);
    },
    remove(id) {
        const url = `/CategoryManagement/${id}`;
        return axiosClient.delete(url);
    },
}

export default categoryAdminApi;