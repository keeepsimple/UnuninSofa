import { baseApiUrl } from "../configs/serverUrl";
import axiosClient from "./axiosClient";

const colorAdminApi = {
    getPaging(pageNum, params) {
        const url = baseApiUrl + `/ColorManagement/GetPaging/${pageNum}`
        return axiosClient.get(url, { params: params })
    },
    getAll() {
        const url = `/ColorManagement`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/ColorManagement/${id}`;
        return axiosClient.get(url);
    },
    add(data) {
        const url = "/ColorManagement";
        return axiosClient.post(url, data);
    },
    update(data) {
        const url = "/ColorManagement";
        return axiosClient.put(url, data);
    },
    remove(id) {
        const url = `/ColorManagement/${id}`;
        return axiosClient.delete(url);
    },
}

export default colorAdminApi;