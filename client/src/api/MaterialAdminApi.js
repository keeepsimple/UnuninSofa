import axiosClient from "./axiosClient";

const materialAdminApi = {
    getPaging(pageNum, params) {
        const url = `/MaterialManagement/GetPaging/${pageNum}`
        return axiosClient.get(url, { params: params })
    },
    getAll() {
        const url = `/MaterialManagement`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/MaterialManagement/${id}`;
        return axiosClient.get(url);
    },
    add(data) {
        const url = "/MaterialManagement";
        return axiosClient.post(url, data);
    },
    update(data) {
        const url = "/MaterialManagement";
        return axiosClient.put(url, data);
    },
    remove(id) {
        const url = `/MaterialManagement/${id}`;
        return axiosClient.delete(url);
    },
}

export default materialAdminApi;