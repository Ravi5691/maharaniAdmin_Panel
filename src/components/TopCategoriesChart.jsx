import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

const TopCategoriesChart = () => {
  const data = {
    labels: ["Electronics", "Laptops", "Phones"],
    datasets: [
      {
        data: [6200, 2300, 800],
        backgroundColor: ["#4caf50", "#2196f3", "#ff9800"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
      },
    },
  };

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default TopCategoriesChart;
