"use client"

import { PropertyCard } from "@/components/ui/home/PropertyCard"
import { MapView } from "@/components/ui/home/MapView"
import { useState } from "react"
import { Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,} from "@/components/ui/carousel"
import { Modal } from "@/components/ui/Modal"
import { Button } from "@/components/ui/button"

interface Property {
  title: string
  location: string
  price: number
  sqft: number
  buildDate: string
  type: string
}

const properties = [
  {
    title: "Luxury Waterfront Complex",
    location: "Miami Beach, FL",
    price: 45000000,
    sqft: 120000,
    buildDate: "2019",
    type: "Multi-family Residential",
  },
  {
    title: "Downtown Office Tower",
    location: "Miami Beach, FL",
    price: 45000000,
    sqft: 120000,
    buildDate: "2019",
    type: "Multi-family Residential",
  },
  {
    title: "Luxury Waterfront Complex",
    location: "Miami Beach, FL",
    price: 45000000,
    sqft: 120000,
    buildDate: "2019",
    type: "Multi-family Residential",
  },
  {
    title: "Downtown Office Tower",
    location: "Miami Beach, FL",
    price: 45000000,
    sqft: 120000,
    buildDate: "2019",
    type: "Multi-family Residential",
  },
  {
    title: "Luxury Waterfront Complex",
    location: "Miami Beach, FL",
    price: 45000000,
    sqft: 120000,
    buildDate: "2019",
    type: "Multi-family Residential",
  },
  {
    title: "Downtown Office Tower",
    location: "Miami Beach, FL",
    price: 45000000,
    sqft: 120000,
    buildDate: "2019",
    type: "Multi-family Residential",
  },
]

const mapCenter = {
  lat: 33.6213,
  lng: -117.9278,
}

const mapMarkers = [
  {
    position: { lat: 33.6213, lng: -117.9278 },
    label: "$3.98M",
  },
]

interface NewsArticle {
  title: string
  summary: string
  imageUrl: string
  url: string
  source: string
}

const newsArticles: NewsArticle[] = [
  {
    title: "Miami Real Estate Market Heats Up",
    summary: "Luxury home sales surge in Miami Beach.",
    imageUrl:
      "https://www.politico.com/dims4/default/2e9db2f/2147483647/strip/true/crop/4838x3225+0+0/resize/630x420!/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2F0a%2F9f%2F40dce4424e8b9034599f8dff7158%2Ftrump-19601.jpg",
    url: "https://www.example.com/news1",
    source: "Miami Herald",
  },
  {
    title: "Interest Rates Rise, Impacting Housing Market",
    summary: "Higher interest rates could slow down the real estate market.",
    imageUrl:
      "https://www.politico.com/dims4/default/2e9db2f/2147483647/strip/true/crop/4838x3225+0+0/resize/630x420!/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2F0a%2F9f%2F40dce4424e8b9034599f8dff7158%2Ftrump-19601.jpg",
    url: "https://www.example.com/news2",
    source: "Wall Street Journal",
  },
  {
    title: "New Development Projects Announced",
    summary: "Major real estate developers unveil plans for ffffff ffffffffffffffffffv fffffffffff fffffffffffffff ffffffffffsssssssssss ssss ssssssssssssssssssssupcoming projects.",
    imageUrl:
      "https://www.politico.com/dims4/default/2e9db2f/2147483647/strip/true/crop/4838x3225+0+0/resize/630x420!/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2F0a%2F9f%2F40dce4424e8b9034599f8dff7158%2Ftrump-19601.jpg",
    url: "https://www.example.com/news3",
    source: "Real Estate Times",
  },
]

export default function Home() {
  const [selectedHouse, setSelectedHouse] = useState<Property | null>(null)
  const [showMetrics, setShowMetrics] = useState(false)

  const handlePropertyClick = (property: Property) => {
    console.log(property)
    setSelectedHouse(property)
  }

  return (
    <div className="flex h-screen overflow-hidden ">
      

      {/* Map Section */}
      <div className="w-3/5 relative h-100v">
        <MapView center={mapCenter} zoom={13} markers={mapMarkers} setShowMetrics={setShowMetrics} />
      </div>

      {/* Property Listings Section */}
      <div className="w-2/5 flex flex-col border-l bg-white">
        <div className="p-4 border-b">
          <div className="relative">
            <input
              type="search"
              placeholder="Search properties..."
              className="w-full px-4 py-2 border rounded-md pr-10"
            />
            <div className="absolute right-3 top-2.5 flex items-center gap-2">
              <button className="p-1 hover:bg-gray-100 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <button className="p-1 hover:bg-gray-100 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 p-4 overflow-y-auto">
          {properties.map((property, index) => (
            <PropertyCard
              key={index}
              {...property}
              onClick={() => handlePropertyClick(property)}
              isSelected={selectedHouse === property}
            />
          ))}
        </div>
      </div>

      {/* News Modal */}
      <Modal isOpen={showMetrics} onClose={() => setShowMetrics(false)}>
        <h2 className="text-2xl font-bold mb-4">Latest Real Estate News</h2>
        <div className="w-full max-w-sm mx-auto">
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {newsArticles.map((article, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2">
                  <div
                    className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden cursor-pointer h-full"
                    onClick={() => window.open(article.url, "_blank")}
                  >
                    <img
                      src={article.imageUrl || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4 flex flex-col h-[calc(100%-10rem)]">
                      <h3 className="font-semibold text-lg mb-2">{article.title}</h3>
                      <p className="text-gray-600 text-sm mb-2 line-clamp-2 flex-grow">{article.summary}</p>
                      <div className="text-xs text-gray-500">Source: {article.source}</div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </Modal>
    </div>
  )
}

