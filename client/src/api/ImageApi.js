import axiosClient from "./axiosClient";

const imageApi = {
    getThumb(code) {
        const url = `/Image/Thumbnail/${code}`;
        return axiosClient.get(url)
    }
}

export default imageApi;