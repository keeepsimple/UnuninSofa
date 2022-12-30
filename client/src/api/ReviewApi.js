import axiosClient from "./axiosClient";

const reviewApi = {
    get(productId) {
        const url = `/Review/${productId}`
        return axiosClient.get(url);
    },
    add(data) {
        const url = "/Review"
        return axiosClient.post(url, data);
    }
}

export default reviewApi;