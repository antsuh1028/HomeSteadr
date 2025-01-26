interface Stat {
    label: string
    value: string
    color?: string
  }
  
  const stats: Stat[] = [
    { label: "Portfolio Value", value: "$36.0M", color: "text-green-400" },
    { label: "Monthly Income", value: "$292K", color: "text-green-400" },
    { label: "Avg. Occupancy", value: "91%" , color: "text-green-400" },
    { label: "Properties", value: "3" , color: "text-green-400"},
  ]
  
  export function StatsDisplay() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-lg border bg-card p-6 shadow-sm">
            <p className="text-sm text-gray-400">{stat.label}</p>
            <p className={`text-2xl font-bold mt-2 ${stat.color || "text-white"}`}>{stat.value}</p>
          </div>
        ))}
      </div>
    )
  }
  
  