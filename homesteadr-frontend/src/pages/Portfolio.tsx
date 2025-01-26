import PortfolioChart from "../components/PortfolioChart";
import { StatsDisplay } from "../components/StatsDisplay";
import { PropertyTable } from "../components/PropertyTable";
import { Building, Home } from "lucide-react";
import { useState } from "react";

const portfolioData = [
  { id: 1, name: "Property 1", location: "Location 1", type: "Residential", sqFt: 1000, value: "$100,000", monthlyIncome: "$1,000", occupancy: "90%", yearBuilt: 2000 },
  { id: 2, name: "Property 2", location: "Location 2", type: "Commercial", sqFt: 2000, value: "$200,000", monthlyIncome: "$2,000", occupancy: "80%", yearBuilt: 2010 },
  { id: 3, name: "Property 3", location: "Location 3", type: "Residential", sqFt: 1500, value: "$150,000", monthlyIncome: "$1,500", occupancy: "85%", yearBuilt: 2005 },
  { id: 4, name: "Property 4", location: "Location 4", type: "Commercial", sqFt: 2500, value: "$250,000", monthlyIncome: "$2,500", occupancy: "75%", yearBuilt: 2015 },
  { id: 5, name: "Property 5", location: "Location 5", type: "Residential", sqFt: 1200, value: "$120,000", monthlyIncome: "$1,200", occupancy: "95%", yearBuilt: 2018 },
  { id: 6, name: "Property 6", location: "Location 6", type: "Commercial", sqFt: 3000, value: "$300,000", monthlyIncome: "$3,000", occupancy: "70%", yearBuilt: 2020 },
  { id: 7, name: "Property 7", location: "Location 7", type: "Residential", sqFt: 1800, value: "$180,000", monthlyIncome: "$1,800", occupancy: "88%", yearBuilt: 2012 },
  { id: 8, name: "Property 8", location: "Location 8", type: "Commercial", sqFt: 3500, value: "$350,000", monthlyIncome: "$3,500", occupancy: "65%", yearBuilt: 2016 },
  { id: 9, name: "Property 9", location: "Location 9", type: "Residential", sqFt: 1400, value: "$140,000", monthlyIncome: "$1,400", occupancy: "92%", yearBuilt: 2019 },
  { id: 10, name: "Property 10", location: "Location 10", type: "Commercial", sqFt: 4000, value: "$400,000", monthlyIncome: "$4,000", occupancy: "60%", yearBuilt: 2021 },
  { id: 11, name: "Property 11", location: "Location 11", type: "Residential", sqFt: 1600, value: "$160,000", monthlyIncome: "$1,600", occupancy: "89%", yearBuilt: 2014 },
  { id: 12, name: "Property 12", location: "Location 12", type: "Commercial", sqFt: 4500, value: "$450,000", monthlyIncome: "$4,500", occupancy: "55%", yearBuilt: 2017 },
  { id: 13, name: "Property 13", location: "Location 13", type: "Residential", sqFt: 2000, value: "$200,000", monthlyIncome: "$2,000", occupancy: "87%", yearBuilt: 2011 },
  { id: 14, name: "Property 14", location: "Location 14", type: "Commercial", sqFt: 5000, value: "$500,000", monthlyIncome: "$5,000", occupancy: "50%", yearBuilt: 2013 },
  { id: 15, name: "Property 15", location: "Location 15", type: "Residential", sqFt: 2200, value: "$220,000", monthlyIncome: "$2,200", occupancy: "93%", yearBuilt: 2010 },
  { id: 16, name: "Property 16", location: "Location 16", type: "Commercial", sqFt: 5500, value: "$550,000", monthlyIncome: "$5,500", occupancy: "45%", yearBuilt: 2018 },
  { id: 17, name: "Property 17", location: "Location 17", type: "Residential", sqFt: 2400, value: "$240,000", monthlyIncome: "$2,400", occupancy: "91%", yearBuilt: 2008 },
];

const watchlistData = [
  { id: 3, name: "Property 3", location: "Location 3", type: "Residential", sqFt: 3000, value: "$300,000", monthlyIncome: "$3,000", occupancy: "70%", yearBuilt: 2020 },
  { id: 4, name: "Property 4", location: "Location 4", type: "Commercial", sqFt: 4000, value: "$400,000", monthlyIncome: "$4,000", occupancy: "60%", yearBuilt: 2030 },
];

export default function Portfolio() {
  const [selectedView, setSelectedView] = useState<string | null>('portfolio');

  return (
    <div className="flex gap-4">
      <div className="flex-col">
        <PortfolioChart />
        <StatsDisplay />
      </div>
      <div>
        <div className="flex gap-4 w-full">
          <button
            className={`flex-grow inline-flex items-center px-4 py-2 rounded-md ${
              selectedView === 'portfolio' ? 'bg-green-700 text-white' : 'bg-gray-200 text-black'
            } hover:bg-green-700 transition-colors`}
            onClick={() => setSelectedView('portfolio')}
          >
            <Building className="mr-2 h-4 w-4" />
            Portfolio
          </button>
          <button
            className={`flex-grow inline-flex items-center px-4 py-2 rounded-md ${
              selectedView === 'watchlist' ? 'bg-green-700 text-white' : 'bg-gray-200 text-black'
            } hover:bg-green-700 transition-colors`}
            onClick={() => setSelectedView('watchlist')}
          >
            <Home className="mr-2 h-4 w-4" />
            Watchlist
          </button>
        </div>
        <div className="w-full">
          {selectedView === 'portfolio' && <PropertyTable data={portfolioData} />}
          {selectedView === 'watchlist' && <PropertyTable data={watchlistData} />}
        </div>
      </div>

    </div>

  );
}


    // <div className="min-h-screen p-6 space-y-6">
    //   <div className="w-full">
    //     <PortfolioChart />
    //   </div>
    //   <div className="w-full">
    //     <StatsDisplay />
    //   </div>
      // <div className="flex gap-4 w-full">
      //   <button
      //     className={`flex-grow inline-flex items-center px-4 py-2 rounded-md ${
      //       selectedView === 'portfolio' ? 'bg-green-700 text-white' : 'bg-gray-200 text-black'
      //     } hover:bg-green-700 transition-colors`}
      //     onClick={() => setSelectedView('portfolio')}
      //   >
      //     <Building className="mr-2 h-4 w-4" />
      //     Portfolio
      //   </button>
      //   <button
      //     className={`flex-grow inline-flex items-center px-4 py-2 rounded-md ${
      //       selectedView === 'watchlist' ? 'bg-green-700 text-white' : 'bg-gray-200 text-black'
      //     } hover:bg-green-700 transition-colors`}
      //     onClick={() => setSelectedView('watchlist')}
      //   >
      //     <Home className="mr-2 h-4 w-4" />
      //     Watchlist
      //   </button>
      // </div>
      // <div className="w-full">
      //   {selectedView === 'portfolio' && <PropertyTable data={portfolioData} />}
      //   {selectedView === 'watchlist' && <PropertyTable data={watchlistData} />}
      // </div>
    // </div>