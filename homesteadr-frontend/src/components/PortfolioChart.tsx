import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { ChartTooltipContent } from "./ui/chart/ChartTooltipContent";
import ChartContainer from "./ui/chart/ChartContainer";

const data = [
  { month: "Jan", value: 5000000 },
  { month: "Feb", value: 5200000 },
  { month: "Mar", value: 5400000 },
  { month: "Apr", value: 5600000 },
  { month: "May", value: 5800000 },
  { month: "Jun", value: 6000000 },
];

const PortfolioChart: React.FC = () => (
  <div className="rounded-lg bg-[#1E1E1E] p-6 shadow-sm h-[400px] w-full">
    <ChartContainer
      config={{
        value: {
          label: "Portfolio Value",
          color: "#4CAF50",
        },
      }}
      className="h-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#333333"
            vertical={false}
          />
          <XAxis
            dataKey="month"
            stroke="#666666"
            fontSize={12}
            tickLine={false}
            axisLine={{ stroke: "#333333" }}
          />
          <YAxis
            stroke="#666666"
            fontSize={12}
            tickLine={false}
            axisLine={{ stroke: "#333333" }}
            tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
            domain={[4000000, 7000000]}
            ticks={[4000000, 5000000, 6000000, 7000000]}
          />
          <Tooltip content={ChartTooltipContent} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#4CAF50"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 8, fill: "#4 CAF50" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  </div>
);

export default PortfolioChart;
