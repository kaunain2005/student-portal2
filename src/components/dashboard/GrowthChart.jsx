import React from "react";
import { Doughnut } from "react-chartjs-2";
import { motion } from "framer-motion";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const GrowthChart = () => {
  const data = {
    labels: ["Total Courses", "Ongoing Courses", "Completed", "Upcoming"],
    datasets: [
      {
        label: 'My First Dataset',
        data: [55, 25, 15, 5],
        backgroundColor: ["#2196F3", "#6A1B9A", "#FBC02D", "#FF6D00"],
        borderWidth: 3,
      },
    ],
  };

  return (
    <div className="flex flex-col items-center">
      {/* Larger Chart Container */}
      <div className="relative flex w-90 h-80"> {/* Set width & height */}
        <Doughnut data={data} options={{ cutout: "80%", maintainAspectRatio: false }} />
        
        {/* Percentage Text Inside */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-xl font-bold">Available Courses</h2>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 text-gray-700 text-base space-y-2">
        <p className="flex items-center">
          <span className="w-4 h-4 bg-blue-500 rounded-full mr-2"></span> Social Media - 55%
        </p>
        <p className="flex items-center">
          <span className="w-4 h-4 bg-purple-700 rounded-full mr-2"></span> Purchased Visitors - 25%
        </p>
        <p className="flex items-center">
          <span className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></span> Affiliate Visitors - 15%
        </p>
        <p className="flex items-center">
          <span className="w-4 h-4 bg-orange-500 rounded-full mr-2"></span> Advertisement - 5%
        </p>
      </div>
    </div>
  );
};

export default GrowthChart;
