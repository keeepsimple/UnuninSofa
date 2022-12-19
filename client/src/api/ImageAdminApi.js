import axiosClient, { axiosMedia } from "./axiosClient";

const imageAdminApi = {
    add(data) {
        const url = "/ImageManagement"
        return axiosMedia.post(url, data)
    },
    remove(id) {
        const url = `/ImageManagement/${id}`;
        return axiosClient.delete(url);
    }
}

export default imageAdminApi;