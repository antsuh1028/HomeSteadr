import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { userOperations, SavedHome } from "@/firebase/db";
import { useState } from "react";

interface UserPort {
  portfolio: SavedHome[];
  watchlist: SavedHome[];
}

const ExampleUser = () => {
  const { firebaseUser, userData, loading } = useAuth();
  const [addingHome, setAddingHome] = useState(false);
  const [currentPriceSum, setCurrentPriceSum] = useState<number | null>(null);
  const [profit, setProfit] = useState<number | null>(null);
  const [userPort, setUserPort] = useState<UserPort | null>(null);

  const homeData = {
    location: "123 Main St, Springfield, IL",
    currentPrice: 500000,
    originalPrice: 400000,
    type: "Single Family Residential",
    size: 1500,
  };

  const fetchUserData = async () => {
    if (firebaseUser) {
      const result = await userOperations.getUserData(firebaseUser.uid);
      if (result.success) {
        if (result.data) {
          setUserPort(result.data);
        } else {
          setUserPort(null);
        }
      } else {
        console.error("Error fetching user data:", result.error);
      }
    }
  };

  const handleAddHome = async () => {
    if (!firebaseUser) return;

    setAddingHome(true);
    try {
      const result = await userOperations.addHome(
        firebaseUser.uid,
        homeData,
        false
      );
      if (result.success) {
        console.log("Home added successfully:", result.homeRef);
      } else {
        console.error("Error adding home:", result.error);
      }
    } catch (error) {
      console.error("Error in handleAddHome:", error);
    } finally {
      setAddingHome(false);
    }
  };

  const handleGetCurrentPriceSum = async () => {
    if (!firebaseUser) return;

    try {
      const result = await userOperations.getPortfolioCurrentPriceSum(
        firebaseUser.uid
      );
      if (result.success && result.totalCurrentPrice !== undefined) {
        setCurrentPriceSum(result.totalCurrentPrice);
      } else {
        console.error("Error getting current price sum:", result.error);
      }
    } catch (error) {
      console.error("Error in handleGetCurrentPriceSum:", error);
    }
  };

  const handleGetProfit = async () => {
    if (!firebaseUser) return;

    try {
      const result = await userOperations.getPortfolioProfit(firebaseUser.uid);
      if (result.success) {
        setProfit(result.profit ?? null);
      } else {
        console.error("Error getting profit:", result.error);
      }
    } catch (error) {
      console.error("Error in handleGetProfit:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!firebaseUser) {
    return <div>Please log in</div>;
  }

  return (
    <div>
      <h1>Welcome {userData?.name}</h1>
      <div>Email: {userData?.email}</div>
      <div>Saved Homes: {userPort?.portfolio.length ?? 0}</div>
      <div>Watchlist Items: {userPort?.watchlist.length ?? 0}</div>
      <Button onClick={handleAddHome} disabled={addingHome}>
        {addingHome ? "Adding Home..." : "Add Home"}
      </Button>
      <Button onClick={handleGetCurrentPriceSum}>
        Get Portfolio Current Price Sum
      </Button>
      {currentPriceSum !== null && (
        <div>Total Current Price Sum: ${currentPriceSum}</div>
      )}
      <Button onClick={handleGetProfit}>Get Portfolio Profit</Button>
      {profit !== null && <div>Total Profit: ${profit}</div>}
      <Button onClick={fetchUserData}>Fetch User Data</Button>
      {userPort && (
        <div>
          <h2>Data Object:</h2>
          <pre>{JSON.stringify(userPort, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ExampleUser;
