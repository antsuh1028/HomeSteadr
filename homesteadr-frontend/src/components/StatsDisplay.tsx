import { useState } from "react";
import { userOperations } from "@/firebase/db";
import { useAuth } from "@/contexts/AuthContext";

interface Stat {
  label: string;
  value: string;
  color?: string;
}

const initialStats: Stat[] = [
  { label: "Portfolio Value", value: "$36.0M", color: "text-green-400" },
  { label: "Net Profit", value: "$292K", color: "text-green-400" },
  { label: "Avg. Sq Footage", value: "91%", color: "text-green-400" },
  { label: "Properties", value: "3", color: "text-green-400" },
];

export function StatsDisplay() {
  const [stats, setStats] = useState<Stat[]>(initialStats);
  const { firebaseUser,  } = useAuth(); // Assuming useAuth provides firebaseUser

  const handleRefresh = async () => {
    console.log("Refresh button clicked"); // Debugging statement
    console.log(firebaseUser);
    if (!firebaseUser) return;

    try {
      const result = await userOperations.getPortfolioCurrentPriceSum(
        firebaseUser.uid
      );
      const { profit } = await userOperations.getPortfolioProfit(
        firebaseUser.uid
      );
      const avgSizeResult = await userOperations.getAverageHouseSize(
        firebaseUser.uid
      );
      const userResult = await userOperations.getUserById(firebaseUser.uid);

      console.log(profit);

      if (result.success && result.totalCurrentPrice !== undefined) {
        setStats((prevStats) =>
          prevStats.map((stat) => {
            if (stat.label === "Portfolio Value") {
              return {
                ...stat,
                value: `$${result.totalCurrentPrice.toLocaleString()}`,
              };
            } else if (stat.label === "Net Profit") {
              return {
                ...stat,
                value: `$${(profit ?? 0).toLocaleString()}`,
              };
            } else if (
              stat.label === "Avg. Sq Footage" &&
              avgSizeResult.success &&
              avgSizeResult.avgSize !== undefined
            ) {
              return {
                ...stat,
                value: `${avgSizeResult.avgSize.toLocaleString()} sq ft`,
              };
            } else if (
              stat.label === "Properties" &&
              userResult.success &&
              userResult.data
            ) {
              return {
                ...stat,
                value: `${userResult.data.portfolio.length}`,
              };
            } else {
              return stat;
            }
          })
        );
      } else {
        console.error("Error getting current price sum:", result.error);
      }
    } catch (error) {
      console.error("Error in handleRefresh:", error);
    }
  };

  return (
    <div>
      <button
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-colors"
        onClick={handleRefresh}
      >
        Refresh
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border bg-card p-6 shadow-sm"
          >
            <p className="text-sm text-gray-400">{stat.label}</p>
            <p
              className={`text-2xl font-bold mt-2 ${
                stat.color || "text-white"
              }`}
            >
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
