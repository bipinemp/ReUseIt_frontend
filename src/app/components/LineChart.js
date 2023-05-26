"use client";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Legend,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler
);

const salesData = [
  { month: "January", sales: 100 },
  { month: "February", sales: 150 },
  { month: "March", sales: 200 },
  { month: "April", sales: 120 },
  { month: "May", sales: 180 },
  { month: "June", sales: 250 },
];

function LineChart() {
  const data = {
    labels: salesData.map((data) => data.month),
    datasets: [
      {
        label: "Revenue",
        data: salesData.map((data) => data.sales),
        borderColor: "#cb0c9f",
        poiontRadius: 0,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 5,
        pointHoverBackgroundColor: "#cb0c9f",
        tension: 0.5,
        fill: true,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "#f5cfec");
          gradient.addColorStop(1, "#fff");
          return gradient;
        },
      },
    ],
  };

  const options = {
    plugins: {
      legend: false,
    },
    responsive: true,
    scales: {
      y: {
        ticks: {
          font: {
            size: 12,
            // weight: "bold",
          },
        },
        title: {
          display: false,
          text: "Sales",
          padding: {
            bottom: 10,
          },
          font: {
            size: 30,
            style: "italic",
            family: "Arial",
          },
        },
        min: 50,
        grid: {
          display: true,
          drawBorder: false,
        },
        border: {
          dash: [8, 4],
        },
      },
      x: {
        ticks: {
          font: {
            size: 12,
            // weight: "bold",
          },
        },
        title: {
          display: false,
          text: "Month",
          padding: {
            top: 10,
          },
          font: {
            size: 30,
            style: "italic",
            family: "Arial",
          },
        },
        grid: {
          display: false,
        },
      },
    },
  };
  return (
    <div
      className="cursor-pointer bg-mode-extralight mt-10 shadow-lg py-7 px-5 rounded-lg"
      style={{
        height: "400px",
      }}
    >
      <Line className="w-normal" data={data} options={options}></Line>
    </div>
  );
}

export default LineChart;
