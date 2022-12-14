import axiosClient from "./axiosClient";

const sliderApi = {
    getAll() {
        const url = "/Slider";
        return axiosClient.get(url);
    }
}

export default sliderApi