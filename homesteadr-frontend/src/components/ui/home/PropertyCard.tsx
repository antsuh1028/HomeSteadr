import type React from "react";
// import saveIcon from "../../../assets/saveicon.jpg";
import houseIcon from "../../../assets/houseicon.png";
import { BaselineAddLocation } from "../../../assets/BaselineAddLocation";
// import { useToast } from "@/hooks/use-toast";
import { XCircle } from "@/assets/XCircle";
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { DocumentReference } from "firebase/firestore";
import { SavedHome } from "@/firebase/db";
interface PropertyCardProps {
    uid: string | undefined;
    pictureUrl?: string;
    price: number;
    squareFeet: number;
    address: string;
    geolocation: {
        lat: string;
        long: string;
    };
    type?: string;
    onClick: () => void;
    isSelected: boolean;

}

export const PropertyCard: React.FC<PropertyCardProps> = ({
    pictureUrl,
    price,
    squareFeet,
    address,
    type,
    onClick,
}) => {
    // const { toast } = useToast();
    const { firebaseUser, userData, watchlist, addHome, deleteHome } =
        useAuth();
    // const [onWatchList, setOnWatchList] = useState(false);
    // const [watchlistIndex, setWatchlistIndex] = useState<number | null>(null);

    // Calculate if the home is on watchlist directly from the watchlist prop
    const isOnWatchlist = watchlist?.some(home => home.location === address) ?? false;
    const watchlistIndex = watchlist?.findIndex(home => home.location === address) ?? -1;

    // useEffect(() => {
    //     if (userData && watchlist) {
    //         const index = watchlist.findIndex(
    //             (home) => home.location === address
    //         );
    //         if (index !== -1) {
    //             setOnWatchList(true);
    //             setWatchlistIndex(index);
    //         } else {
    //             setOnWatchList(false);
    //             setWatchlistIndex(null);
    //         }
    //     }
    // }, [firebaseUser, userData, address, watchlist]);

    // export interface SavedHome {
    //     uid: string | null;
    //     location: string;
    //     currentPrice: number;
    //     originalPrice: number;
    //     size: number;
    //     type: string;
    //     sqft: number;
    //   }
    // const handleAddToWatchList = async () => {
    //     if (firebaseUser) {
    //         try {
    //             const response = await addHome(
    //                 firebaseUser?.uid,
    //                 {
    //                     location: address,
    //                     currentPrice: price,
    //                     originalPrice: price,
    //                     size: squareFeet,
    //                     type: type || "normal",
    //                     sqft: squareFeet,
    //                 },
    //                 true
    //             );
    //             setOnWatchList(true);
    //             console.log("added house:", response);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }
    // };

    // const handleRemovingHouse = async () => {
    //     if (firebaseUser && watchlistIndex) {
    //         try {
    //             const response = await deleteHome(
    //                 firebaseUser.uid,
    //                 userData?.watchlist[
    //                     watchlistIndex
    //                 ] as DocumentReference<SavedHome>,
    //                 true
    //             );
    //             setOnWatchList(false);
    //             console.log("remove hosue:", response);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }
    // };

    const handleAddToWatchList = async () => {
        if (firebaseUser) {
            try {
                await addHome(
                    firebaseUser?.uid,
                    {
                        location: address,
                        currentPrice: price,
                        originalPrice: price,
                        size: squareFeet,
                        type: type || "normal",
                        sqft: squareFeet,
                    },
                    true
                );
            } catch (error) {
                console.error(error);
            }
        }
    };

    const handleRemovingHouse = async () => {
        if (firebaseUser && watchlistIndex !== -1) {
            try {
                await deleteHome(
                    firebaseUser.uid,
                    userData?.watchlist[watchlistIndex] as DocumentReference<SavedHome>,
                    true
                );
            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <div
            className={`mb-4 p-4 border rounded-lg cursor-pointer transition-colors ${
                pictureUrl ? "bg-blue-100 border-blue-500" : "hover:bg-gray-50"
            }`}
            onClick={onClick}
        >
            {pictureUrl ? (
                <img
                    src={pictureUrl}
                    alt="Property"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                />
            ) : (
                <img
                    src={houseIcon}
                    alt="Property placeholder"
                    className="w-full h-48 object-cover rounded-lg mb-4 bg-gray-200"
                />
            )}
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">
                    {address.split(",")[0]}
                </h2>
                <button
            className={`ml-2 p-2 rounded-full cursor-pointer ${
                isOnWatchlist ? "bg-red-700" : "hover:bg-gray-900"
            }`}
            onClick={(e) => {
                e.stopPropagation(); // Prevent event bubbling
                isOnWatchlist ? handleRemovingHouse() : handleAddToWatchList();
            }}
        >
            {isOnWatchlist ? (
                <XCircle className="text-white m-auto" />
            ) : (
                <BaselineAddLocation className="text-white m-auto" />
            )}
        </button>
            </div>
            <p>{address}</p>
            <p className="text-gray-800 font-medium">
                ${price.toLocaleString()}
            </p>
            <p className="text-gray-600">{squareFeet} sqft</p>
            <p className="text-gray-600">{type}</p>
        </div>
    );
};
