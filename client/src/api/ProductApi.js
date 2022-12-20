import axiosClient from "./axiosClient";

const productApi = {
    getBySubCate(subId) {
        const url = `Product/${subId}`;
        return axiosClient.get(url);
    }
}

export default productApi;