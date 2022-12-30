import axiosClient from "./axiosClient";

const searchApi = {
    search(params) {
        const url = "/Search"
        return axiosClient.get(url, { params: params })
    }
}

export default searchApi;