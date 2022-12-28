import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import dashboardApi from "../../api/DashboardApi";

ChartJS.register(ArcElement, Tooltip, Legend);

export const NumOfProductSale = () => {
  const [products, setProducts] = useState({});
  useEffect(() => {
    const fetchNumOfProductSale = async () => {
      const data = await dashboardApi.numOfProductSale();
      setProducts(data);
    };
    fetchNumOfProductSale();
  }, []);

  const randomColor = () => {
    var o = Math.round,
      r = Math.random,
      s = 255;
    return (
      "rgba(" +
      o(r() * s) +
      "," +
      o(r() * s) +
      "," +
      o(r() * s) +
      "," +
      0.2 +
      ")"
    );
  };

  const labels = Object.keys(products).map((key) => String(key));
  const numProduct = Object.keys(products).map((key) => products[key]);
  const colors = labels.map((index) => {
    return randomColor();
  });
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Số lượng bán",
        data: numProduct,
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 1,
      },
    ],
  };
  return <Pie data={data} />;
};
