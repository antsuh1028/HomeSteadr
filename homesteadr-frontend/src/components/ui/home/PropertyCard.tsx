import type React from "react";
import saveIcon from "../../../assets/saveicon.jpg";
import houseIcon from "../../../assets/houseicon.png";

interface PropertyCardProps {
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
  isSelected,
}) => {
  return (
    <div
      className={`mb-4 p-4 border rounded-lg cursor-pointer transition-colors ${
        isSelected ? "bg-blue-100 border-blue-500" : "hover:bg-gray-50"
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
        <h2 className="text-lg font-semibold">{address.split(",")[0]}</h2>
        <button className="ml-2 p-2 rounded-full hover:bg-gray-200">
          <img src={saveIcon} alt="Property" className="w-6 h-6" />
        </button>
      </div>
      <p>{address}</p>
      <p className="text-gray-800 font-medium">${price.toLocaleString()}</p>
      <p className="text-gray-600">{squareFeet} sqft</p>
      <p className="text-gray-600">{type}</p>
    </div>
  );
};
