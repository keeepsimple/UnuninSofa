import axiosClient from "./axiosClient";

const userApi = {
    getUser(username) {
        const url = `/User/${username}`;
        return axiosClient.get(url);
    },
    changePassword(data) {
        const url = `User/ChangePassword`
        return axiosClient.post(url, data);
    },
    changeInfomation(data) {
        const url = `/User/ChangeInfomation`
        return axiosClient.put(url, data);
    },
    orderHistory(pageNum, params) {
        const url = `/User/OrderHistory/${pageNum}`
        return axiosClient.get(url, { params: params });
    }
}

export default userApi;