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
        label: 'Courses',
        data: [5,3,1,1],
        backgroundColor: ["#2196F3", "#6A1B9A", "#FBC02D", "#FF6D00"],
        borderWidth: 3,
      },
    ],
  };

  return (
    <>
        <Doughnut data={data} options={{ cutout: "80%" }} />

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
    </>
  );
};

export default GrowthChart;
