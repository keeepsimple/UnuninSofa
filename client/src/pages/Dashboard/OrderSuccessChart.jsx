import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import dashboardApi from "../../api/DashboardApi";

ChartJS.register(ArcElement, Tooltip, Legend);

export const OrderSuccessChart = () => {
  const [rate, setRate] = useState({});
  useEffect(() => {
    const fetchSuccessRate = async () => {
      const data = await dashboardApi.rateSuccess();
      setRate(data);
    };

    fetchSuccessRate();
  }, []);

  const data = {
    labels: ["Thành công", "Huỷ đơn"],
    datasets: [
      {
        label: "Phần trăm đơn",
        data: [rate.success * 100, rate.cancel * 100],
        backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };
  return <Pie data={data} />;
};
