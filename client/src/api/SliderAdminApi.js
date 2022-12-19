import axiosClient, { axiosMedia } from "./axiosClient";

const sliderAdminApi = {
    getPaging(pageNum, params) {
        const url = `/SliderManagement/GetPaging/${pageNum}`
        return axiosClient.get(url, { params: params })
    },
    get(id) {
        const url = `/SliderManagement/${id}`;
        return axiosClient.get(url);
    },
    add(data) {
        const url = "/SliderManagement";
        return axiosMedia.post(url, data);
    },
    update(data) {
        const url = "/SliderManagement";
        return axiosMedia.put(url, data);
    },
    remove(id) {
        const url = `/SliderManagement/${id}`;
        return axiosClient.delete(url);
    },
}

export default sliderAdminApi;