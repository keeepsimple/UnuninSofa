import axiosClient from "./axiosClient";

const imageApi = {
  getSliders() {
    const url = "/Image/GetImagesSlider";
    return axiosClient.get(url);
  },
};

export default imageApi;
