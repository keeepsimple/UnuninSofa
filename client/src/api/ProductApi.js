import axiosClient from "./axiosClient";

const productApi = {
    getPaging(pageNum, params) {
        const url = `Product/GetPaging/${pageNum}`;
        return axiosClient.get(url, { params: params });
    },
    get(id) {
        const url = `Product/${id}`;
        return axiosClient.get(url)
    }
}

export default productApi;