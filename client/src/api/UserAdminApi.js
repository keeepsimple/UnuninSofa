import axiosClient from "./axiosClient";

const userAdminApi = {
    getPaging(pageNum, params) {
        const url = `/UserManagement/GetPaging/${pageNum}`
        return axiosClient.get(url, { params: params })
    },
    get(userId) {
        const url = `/UserManagement/${userId}`;
        return axiosClient.get(url);
    },
    lockUser(userId) {
        const url = `/UserManagement/LockUser/${userId}`;
        return axiosClient.post(url);
    },
    unlockUser(userId) {
        const url = `/UserManagement/UnlockUser/${userId}`;
        return axiosClient.post(url);
    }
}

export default userAdminApi;