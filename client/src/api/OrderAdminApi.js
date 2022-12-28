import axiosClient from "./axiosClient";

const orderAdminApi = {
    getPaging(pageNum, params) {
        const url = `/OrderManagement/GetPaging/${pageNum}`
        return axiosClient.get(url, { params: params })
    },
    get(id) {
        const url = `/OrderManagement/${id}`;
        return axiosClient.get(url);
    },
    cancel(id) {
        const url = `/OrderManagement/Cancel/${id}`;
        return axiosClient.put(url);
    },
    changeStatus(id) {
        const url = `/OrderManagement/ChangeStatus/${id}`;
        return axiosClient.put(url);
    }
}

export default orderAdminApi;