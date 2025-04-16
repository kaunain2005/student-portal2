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

// Replace this with your real course data
const data = [
  { course: "Python", students: 120 },
  { course: "ReactJS", students: 200 },
  { course: "Data Science", students: 150 },
  { course: "Machine Learning", students: 180 },
  { course: "Web Dev", students: 220 },
  { course: "Java", students: 160 },
  { course: "C++", students: 140 },
];

const StudentChart = () => {
  return (
    <div className="w-full h-full bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-2">Course Enrollment Stats</h2>
      <p className="text-green-500 font-semibold">Total Students: 1,170</p>
      <div className="w-full h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="course" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="students"
              stroke="#4CAF50"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StudentChart;
