import PortfolioChart from "../components/PortfolioChart";
import { StatsDisplay } from "../components/StatsDisplay";
import { PropertyTable } from "../components/PropertyTable";
import { Building, Home } from "lucide-react";
import { useState, useEffect } from "react";
import { userOperations } from "@/firebase/db";
import { useAuth } from "@/contexts/AuthContext";

interface SavedHome {
  location: string;
  currentPrice: number;
  originalPrice: number;
  size: number;
  type: string;
}

const Portfolio = () => {
  const { firebaseUser } = useAuth();
  const [portfolioData, setPortfolioData] = useState<SavedHome[]>([]);
  const [watchlistData, setWatchlistData] = useState<SavedHome[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchUserData = async () => {
    if (firebaseUser) {
      const result = await userOperations.getUserData(firebaseUser.uid);
      if (result.success) {
        if (result.data) {
          setPortfolioData(result.data.portfolio as SavedHome[]);
          setWatchlistData(result.data.watchlist as SavedHome[]);
        }
      } else {
        console.error("Error fetching user data:", result.error);
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [firebaseUser]);

  const [selectedView, setSelectedView] = useState<string | null>("portfolio");

  if (loading) {
    return <div>Loading...</div>;
  }

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
            <PropertyTable
              data={
                portfolioData.length > 0
                  ? portfolioData
                  : [
                      {
                        location: "Empty",
                        currentPrice: 0,
                        originalPrice: 0,
                        size: 0,
                        type: "",
                      },
                    ]
              }
            />
          )}
          {selectedView === "watchlist" && (
            <PropertyTable
              data={
                watchlistData.length > 0
                  ? watchlistData
                  : [
                      {
                        location: "Empty",
                        currentPrice: 0,
                        originalPrice: 0,
                        size: 0,
                        type: "",
                      },
                    ]
              }
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
