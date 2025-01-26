import type React from "react"

interface PropertyCardProps {
  title: string
  location: string
  price: number
  sqft: number
  buildDate: string
  type: string
  onClick: () => void
  isSelected: boolean
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  title,
  location,
  price,
  sqft,
  buildDate,
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
      <div className="flex justify-between items-center"> 
        <h2 className="text-lg font-semibold">{title} test</h2>
        <button className="ml-2 p-2 rounded-full hover:bg-gray-200">
          <img src="/path/to/logo.png" alt="Logo" className="w-6 h-6" />
        </button>
      </div>
      <p className="text-gray-600">{location}</p>
      <p className="text-gray-800 font-medium">${price.toLocaleString()}</p>
      <p className="text-gray-600">
        {sqft} sqft • Built {buildDate}
      </p>
      <p className="text-gray-600">{type}</p>
    </div>
  )
}

