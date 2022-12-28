import axiosClient from "./axiosClient";

const dashboardApi = {
    rateSuccess() {
        const url = '/Dashboard/RateSuccess'
        return axiosClient.get(url);
    },
    revenueAndOrder(timeFiler) {
        const url = `/Dashboard/RevenueAndOrder/${timeFiler}`
        return axiosClient.get(url);
    },
    numOfProductSale() {
        const url = '/Dashboard/NumOfProductSale'
        return axiosClient.get(url);
    },
    newestOrder() {
        const url = '/Dashboard/NewestOrder'
        return axiosClient.get(url);
    }
}

export default dashboardApi;