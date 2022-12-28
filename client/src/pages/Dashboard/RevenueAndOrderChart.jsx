import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import dashboardApi from "../../api/DashboardApi";
import moment from "moment/moment";
import { Typography } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const RevenueAndOrderChart = ({ timeFilter }) => {
  const [numOrder, setNumOrder] = useState({});
  const [revenue, setRevenue] = useState({});

  useEffect(() => {
    const fetchRevenueAndOrder = async () => {
      const data = await dashboardApi.revenueAndOrder(timeFilter);
      setNumOrder(data.numOrder);
      setRevenue(data.revenue);
    };

    fetchRevenueAndOrder();
  }, [timeFilter]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Doanh thu và đơn đặt hàng",
      },
    },
  };

  const labelWeek = Object.keys(revenue).map((key) =>
    moment(String(key)).format("dddd")
  );

  const labelMonthAndYear = Object.keys(revenue).map((key) => Number(key));

  const dataRevenue = Object.keys(revenue).map(
    (key) => revenue[key] / 1000000000
  );

  const totalRevenue = Object.keys(revenue)
    .map((key) => revenue[key])
    .reduce((sum, value) => sum + value, 0);

  const dataNumOrder = Object.keys(numOrder).map((key) => numOrder[key]);

  const totalOrder = dataNumOrder.reduce((sum, value) => sum + value, 0);

  const labels = timeFilter === 1 ? labelWeek : labelMonthAndYear;

  const data = {
    labels,
    datasets: [
      {
        label: "Doanh thu ( Tỷ )",
        data: dataRevenue,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Đơn đặt",
        data: dataNumOrder,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <>
      <Bar options={options} data={data} />
      <Typography
        style={{ paddingTop: 30, fontWeight: 600 }}
        textAlign="center"
      >
        Tổng doanh thu:{" "}
        {new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(totalRevenue)}{" "}
        - trong {totalOrder} đơn hàng
      </Typography>
    </>
  );
};
