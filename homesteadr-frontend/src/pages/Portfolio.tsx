import PortfolioChart from "../components/PortfolioChart";
import { StatsDisplay } from "../components/StatsDisplay";
import { PropertyTable } from "../components/PropertyTable";
import { Building, Home } from "lucide-react";
import { useState } from "react";

const portfolioData = [
  {
    location: "123 Main St, Springfield, IL",
    currentPrice: 500000,
    originalPrice: 400000,
    size: 2000,
    type: "Single Family Residential",
  },
  {
    location: "456 Elm St, Springfield, IL",
    currentPrice: 600000,
    originalPrice: 450000,
    size: 2500,
    type: "Single Family Residential",
  },
  {
    location: "789 Oak St, Springfield, IL",
    currentPrice: 550000,
    originalPrice: 420000,
    size: 2200,
    type: "Single Family Residential",
  },
  {
    location: "101 Maple St, Springfield, IL",
    currentPrice: 700000,
    originalPrice: 500000,
    size: 3000,
    type: "Single Family Residential",
  },
  {
    location: "202 Pine St, Springfield, IL",
    currentPrice: 650000,
    originalPrice: 480000,
    size: 2800,
    type: "Single Family Residential",
  },
  {
    location: "303 Cedar St, Springfield, IL",
    currentPrice: 620000,
    originalPrice: 460000,
    size: 2600,
    type: "Single Family Residential",
  },
  {
    location: "404 Birch St, Springfield, IL",
    currentPrice: 580000,
    originalPrice: 440000,
    size: 2400,
    type: "Single Family Residential",
  },
  {
    location: "505 Walnut St, Springfield, IL",
    currentPrice: 560000,
    originalPrice: 430000,
    size: 2300,
    type: "Single Family Residential",
  },
  {
    location: "606 Chestnut St, Springfield, IL",
    currentPrice: 540000,
    originalPrice: 420000,
    size: 2200,
    type: "Single Family Residential",
  },
  {
    location: "707 Ash St, Springfield, IL",
    currentPrice: 520000,
    originalPrice: 410000,
    size: 2100,
    type: "Single Family Residential",
  },
];

const watchlistData = [
  {
    location: "123 Main St, Springfield, IL",
    currentPrice: 500000,
    originalPrice: 400000,
    size: 2000,
    type: "Single Family Residential",
  },
  {
    location: "456 Elm St, Springfield, IL",
    currentPrice: 600000,
    originalPrice: 450000,
    size: 2500,
    type: "Single Family Residential",
  },
];

export default function Portfolio() {
  const [selectedView, setSelectedView] = useState<string | null>("portfolio");

  return (
    <div className="h-full flex flex-col">
      <div className="flex flex-col md:flex-row gap-4 m-4">
        <div className="flex flex-col w-full md:w-1/2 gap-4">
          <PortfolioChart />
          <StatsDisplay />
        </div>
        <div className="flex flex-col w-full md:w-1/2">
          <div className="flex gap-4 mb-4">
            <button
              className={`flex-grow inline-flex items-center px-4 py-2 rounded-md ${
                selectedView === "portfolio"
                  ? "bg-green-700 text-white"
                  : "bg-gray-200 text-black"
              } hover:bg-green-700 transition-colors`}
              onClick={() => setSelectedView("portfolio")}
            >
              <Building className="mr-2 h-4 w-4" />
              Portfolio
            </button>
            <button
              className={`flex-grow inline-flex items-center px-4 py-2 rounded-md ${
                selectedView === "watchlist"
                  ? "bg-green-700 text-white"
                  : "bg-gray-200 text-black"
              } hover:bg-green-700 transition-colors`}
              onClick={() => setSelectedView("watchlist")}
            >
              <Home className="mr-2 h-4 w-4" />
              Watchlist
            </button>
          </div>
          {selectedView === "portfolio" && (
            <PropertyTable data={portfolioData} />
          )}
          {selectedView === "watchlist" && (
            <PropertyTable data={watchlistData} />
          )}
        </div>
      </div>
    </div>
  );
}
