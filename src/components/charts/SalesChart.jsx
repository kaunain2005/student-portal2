import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jun", sales: 20000 },
  { month: "Jul", sales: 40000 },
  { month: "Aug", sales: 15000 },
  { month: "Sep", sales: 30000 },
  { month: "Oct", sales: 50000 },
  { month: "Nov", sales: 35000 },
  { month: "Dec", sales: 40000 },
];

const SalesChart = () => {
  return (
    <div className="w-full h-full bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-2">Sales Statistics</h2>
      <p className="text-green-500 font-semibold">$110,854.21 +10%</p>
      <div className="w-full h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sales" stroke="#4CAF50" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesChart;
