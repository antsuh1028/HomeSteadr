import {
  doc,
  setDoc,
  getDoc,
  collection,
  updateDoc,
  DocumentReference,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { db } from "./config";

export interface SavedHome {
  uid: string | null;
  location: string;
  currentPrice: number;
  originalPrice: number;
  size: number;
  type: string;
  sqft: number;
}

export interface User {
  email: string;
  name: string;
  portfolio: DocumentReference<SavedHome>[];
  watchlist: DocumentReference<SavedHome>[];
}

export const userOperations = {
  createUser: async (
    userId: string,
    userData: Omit<User, "portfolio" | "watchlist">
  ) => {
    try {
      const userRef = doc(db, "users", userId);
      await setDoc(userRef, {
        ...userData,
        portfolio: [],
        watchlist: [],
      });
      return { success: true, userId };
    } catch (error) {
      console.error("Error creating user:", error);
      return { success: false, error };
    }
  },

  // Get user by ID
  getUserById: async (userId: string) => {
    try {
      const userRef = doc(db, "users", userId);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        return { success: true, data: userSnap.data() as User };
      } else {
        return { success: false, error: "User not found" };
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      return { success: false, error };
    }
  },

  getUserData: async (userId: string) => {
    try {
      const userRef = doc(db, "users", userId);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const userData = userSnap.data() as User;

        const portfolioData = await Promise.all(
          userData.portfolio.map(async (homeRef) => {
            const homeSnap = await getDoc(homeRef);
            return homeSnap.data() as SavedHome;
          })
        );

        const watchlistData = await Promise.all(
          userData.watchlist.map(async (homeRef) => {
            const homeSnap = await getDoc(homeRef);
            return homeSnap.data() as SavedHome;
          })
        );

        return {
          success: true,
          data: {
            portfolio: portfolioData,
            watchlist: watchlistData,
          },
        };
      } else {
        return { success: false, error: "User not found" };
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      return { success: false, error };
    }
  },

  getHouses: async (userId: string) => {
    try {
      const userRef = doc(db, "users", userId);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        const userData = userSnap.data() as User;

        const portfolioData = await Promise.all(
          userData.portfolio.map(async (homeRef) => {
            const homeSnap = await getDoc(homeRef);
            return homeSnap.data() as SavedHome;
          })
        );

        const watchlistData = await Promise.all(
          userData.watchlist.map(async (homeRef) => {
            const homeSnap = await getDoc(homeRef);
            return homeSnap.data() as SavedHome;
          })
        );
        return {
          success: true,
          data: {
            portfolio: portfolioData,
            watchlist: watchlistData,
          },
        };
      } else {
        throw new Error("User not found");
      }
    } catch (error) {
      console.error("Error getting portfolios and watchlists:", error);
      return { success: false, error };
    }
  },

  addHome: async (
    userId: string,
    homeData: Omit<SavedHome, 'uid'>,
    isWatchlist: boolean
  ) => {
    try {
      // const homesCollectionRef = collection(db, "homes");
      // const newHomeRef = (await addDoc(
      //   homesCollectionRef,
      //   {...homeData, uid: newHomesRef}
      // )) as DocumentReference<SavedHome>;

      const homesCollectionRef = collection(db, "homes");
      const newHomeRef = doc(homesCollectionRef); // Create a new document reference with a unique ID
      const newHomeId = newHomeRef.id; // Get the unique ID

      // const userRef = doc(db, "users", userId);
      // const userSnap = await getDoc(userRef);

      await setDoc(newHomeRef, { ...homeData, uid: newHomeId }); 

      const userRef = doc(db, "users", userId);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        if (isWatchlist) {
          await updateDoc(userRef, {
            watchlist: arrayUnion(newHomeRef),
          });
        } else {
          await updateDoc(userRef, {
            portfolio: arrayUnion(newHomeRef),
          });
        }
        return { success: true, homeRef: newHomeRef };
      } else {
        return { success: false, error: "User not found" };
      }
    } catch (error) {
      console.error("Error adding saved home:", error);
      return { success: false, error };
    }
  },

  updateHome: async (
    userId: string,
    homeRef: DocumentReference<SavedHome>,
    updatedHomeData: Partial<SavedHome>,
    isWatchlist: boolean
  ) => {
    try {
      const userRef = doc(db, "users", userId);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        return { success: false, error: "User not found" };
      }

      const userData = userSnap.data() as User;
      const homesList = isWatchlist ? userData.watchlist : userData.portfolio;

      // Check if the home reference exists in the user's list
      const homeExists = homesList.some((ref) => ref.path === homeRef.path);

      if (!homeExists) {
        return {
          success: false,
          error:
            "Home not found in user's " +
            (isWatchlist ? "watchlist" : "portfolio"),
        };
      }

      // Update the home document
      await updateDoc(homeRef, updatedHomeData);

      return { success: true, homeRef };
    } catch (error) {
      console.error("Error updating home:", error);
      return { success: false, error };
    }
  },

  deleteHome: async (
    userId: string,
    homeRef: DocumentReference<SavedHome>,
    fromWatchlist: boolean
  ) => {
    try {
      const userRef = doc(db, "users", userId);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        if (fromWatchlist) {
          await updateDoc(userRef, {
            watchlist: arrayRemove(homeRef),
          });
        } else {
          await updateDoc(userRef, {
            portfolio: arrayRemove(homeRef),
          });
        }
        return { success: true };
      } else {
        return { success: false, error: "User not found" };
      }
    } catch (error) {
      console.error("Error deleting home:", error);
      return { success: false, error };
    }
  },

  // New function to edit the originalPrice of a home
  editHomeOriginalPrice: async (
    userId: string,
    homeRef: DocumentReference<SavedHome>,
    newOriginalPrice: number,
    isWatchlist: boolean
  ) => {
    try {
      const updatedHomeData = { originalPrice: newOriginalPrice };
      const result = await userOperations.updateHome(
        userId,
        homeRef,
        updatedHomeData,
        isWatchlist
      );
      return result;
    } catch (error) {
      console.error("Error editing home original price:", error);
      return { success: false, error };
    }
  },

  // New function to move a home from watchlist to portfolio
  moveHomeToPortfolio: async (
    userId: string,
    homeRef: DocumentReference<SavedHome>
  ) => {
    try {
      const userRef = doc(db, "users", userId);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        // Remove home from watchlist
        await updateDoc(userRef, {
          watchlist: arrayRemove(homeRef),
        });

        // Add home to portfolio
        await updateDoc(userRef, {
          portfolio: arrayUnion(homeRef),
        });

        return { success: true };
      } else {
        return { success: false, error: "User not found" };
      }
    } catch (error) {
      console.error("Error moving home to portfolio:", error);
      return { success: false, error };
    }
  },

  // New function to get the sum of the current price of the portfolio
  getPortfolioCurrentPriceSum: async (userId: string) => {
    try {
      const userRef = doc(db, "users", userId);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const userData = userSnap.data() as User;

        const portfolioData = await Promise.all(
          userData.portfolio.map(async (homeRef) => {
            const homeSnap = await getDoc(homeRef);
            return homeSnap.data() as SavedHome;
          })
        );

        const totalCurrentPrice = portfolioData.reduce(
          (sum, home) => sum + home.currentPrice,
          0
        );

        return { success: true, totalCurrentPrice };
      } else {
        return { success: false, error: "User not found" };
      }
    } catch (error) {
      console.error("Error getting portfolio current price sum:", error);
      return { success: false, error };
    }
  },

  getPortfolioProfit: async (userId: string) => {
    try {
      const userRef = doc(db, "users", userId);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const userData = userSnap.data() as User;

        const portfolioData = await Promise.all(
          userData.portfolio.map(async (homeRef) => {
            const homeSnap = await getDoc(homeRef);
            return homeSnap.data() as SavedHome;
          })
        );

        const totalCurrentPrice = portfolioData.reduce(
          (sum, home) => sum + home.currentPrice,
          0
        );
        const totalOriginalPrice = portfolioData.reduce(
          (sum, home) => sum + home.originalPrice,
          0
        );
        const profit = totalCurrentPrice - totalOriginalPrice;

        return { success: true, profit };
      } else {
        return { success: false, error: "User not found" };
      }
    } catch (error) {
      console.error("Error calculating portfolio profit:", error);
      return { success: false, error };
    }
  },
  getAverageHouseSize: async (userId: string) => {
    try {
      const userRef = doc(db, "users", userId);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const userData = userSnap.data() as User;

        const portfolioData = await Promise.all(
          userData.portfolio.map(async (homeRef) => {
            const homeSnap = await getDoc(homeRef);
            return homeSnap.data() as SavedHome;
          })
        );

        if (portfolioData.length === 0) {
          return { success: false, error: "No houses found in portfolio" };
        }

        const totalSize = portfolioData.reduce(
          (sum, home) => sum + home.size,
          0
        );
        const avgSize = totalSize / portfolioData.length;

        return { success: true, avgSize };
      } else {
        return { success: false, error: "User not found" };
      }
    } catch (error) {
      console.error("Error calculating average house size:", error);
      return { success: false, error };
    }
  },
};
