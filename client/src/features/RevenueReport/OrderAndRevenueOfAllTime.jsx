import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import dashboardApi from "../../api/DashboardApi";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Tổng doanh thu và đơn hàng",
    },
  },
};

export const OrderAndRevenueOfAllTime = () => {
  const [numOrder, setNumOrder] = useState({});
  const [revenue, setRevenue] = useState({});

  useEffect(() => {
    const fetchRevenueAndOrder = async () => {
      const data = await dashboardApi.revenueAndOrder(0);
      setNumOrder(data.numOrder);
      setRevenue(data.revenue);
    };

    fetchRevenueAndOrder();
  }, []);

  const labels = Object.keys(revenue).map((key) => String(key));
  const dataOrder = Object.keys(numOrder).map((key) => numOrder[key]);
  const dataRevenue = Object.keys(revenue).map(
    (key) => revenue[key] / 1000000000
  );
  const data = {
    labels,
    datasets: [
      {
        label: "Đơn hàng",
        data: dataOrder,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Doanh thu ( tỷ )",
        data: dataRevenue,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return <Line options={options} data={data} />;
};
