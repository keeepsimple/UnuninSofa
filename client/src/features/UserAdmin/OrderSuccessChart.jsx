import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import React from "react";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const OrderSuccessChart = ({ report }) => {
  const data = {
    labels: ["Thành công", "Huỷ đơn"],
    datasets: [
      {
        label: "Phần trăm đơn",
        data: [report.success * 100, report.cancel * 100],
        backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };
  return <Pie data={data} />;
};
