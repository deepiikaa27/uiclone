import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { TiArrowShuffle } from "react-icons/ti";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const CompareAccuracyChart = () => {
  const [timeSlot, setTimeSlot] = useState("15");

  const accuracyData = {
    10: [90, 40, 30, 50, 60, 70, 80],
    15: [100, 60, 50, 75, 80, 85, 90],
    30: [70, 50, 40, 60, 65, 70, 75],
    45: [60, 30, 20, 40, 50, 55, 60],
  };

  const data = {
    labels: ["1", "2", "3", "4", "5", "6", "7"],
    datasets: [
      {
        label: "Accuracy",
        data: accuracyData[timeSlot],
        backgroundColor: "rgba(37, 99, 235, 1)",
        borderWidth: 1,
        barThickness: 12,
        borderRadius: 10,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 25,
          callback: function (value) {
            return value + "%";
          },
        },
        title: {
          display: true,
          text: "Accuracy",
          color: "black",
        },
      },
      x: {
        title: {
          display: true,
          text: "Slots",
          color: "black",
        },
        grid: {
          drawOnChartArea: false, // Disable horizontal grid lines
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className=" bg-white border rounded-xl p-2 w-full">
      <h3 className="text-gray-600 flex">
        <TiArrowShuffle className="mt-1 mr-1" />
        Compare Accuracy
      </h3>
      {/* Time Slot Selector */}
      <div className="px-3">
        <div className="flex gap-4 justify-center ms-5  m-2">
          {["10", "15", "30", "45"].map((slot) => (
            <button
              key={slot}
              onClick={() => setTimeSlot(slot)}
              className={`text-xs px-1 py-[5px] rounded text-gray-600 ${
                timeSlot === slot ? "bg-green-500 text-white" : "bg-gray-200"
              }`}
            >
              {slot.toUpperCase()}
              <span className="text-[9px] ">MIN</span>
            </button>
          ))}
        </div>

        {/* Bar Chart */}
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default CompareAccuracyChart;
