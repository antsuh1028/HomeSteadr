"use client"

import { PropertyCard } from "@/components/ui/home/PropertyCard"
import { MapView } from "@/components/ui/home/MapView"
import { useState, useCallback, useEffect } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Modal } from "@/components/ui/Modal"
import { Button } from "@/components/ui/button"
import getArticles from "@/utils/getArticles"
import newsIcon from '../assets/newsicon.png';

// import { ArticlesResponse } from '../../../../../types/types.ts'

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

const markers = [
  { position: { lat: 33.6213, lng: -117.9278 }, label: "$3.98M" },
  { position: { lat: 33.6157, lng: -117.9331 }, label: "$2.85M" },
  { position: { lat: 33.6189, lng: -117.9245 }, label: "$4.2M" },
  { position: { lat: 33.6278, lng: -117.9312 }, label: "$3.15M" },
  { position: { lat: 33.6145, lng: -117.9289 }, label: "$2.95M" },
  { position: { lat: 33.6234, lng: -117.9256 }, label: "$3.75M" },
  { position: { lat: 33.6198, lng: -117.9367 }, label: "$3.45M" },
  { position: { lat: 33.6167, lng: -117.9234 }, label: "$2.65M" },
  { position: { lat: 33.6289, lng: -117.9278 }, label: "$4.5M" },
  { position: { lat: 33.6123, lng: -117.9345 }, label: "$3.25M" }
 ];

interface NewsArticle {
  headline: string
  highlights: Array<string>
  Image_url: string | null
  url: string
  publishedDate: string
}





export default function Home() {
  const [selectedHouse, setSelectedHouse] = useState<Property | null>(null)
  const [showNewsModal, setShowNewsModal] = useState(false)
  const [mapKey, setMapKey] = useState(0)
  const [showMetrics, setShowMetrics] = useState(false)
  const [newsList, setNewsList] = useState<NewsArticle[]>([])

  const refreshMap = useCallback(() => {
    setMapKey((prevKey) => prevKey + 1)
  }, [])

  const handlePropertyClick = (property: Property) => {
    console.log(property)
    setSelectedHouse(property)
  }

  useEffect(() => {
    getArticles()
      .then(data => {setNewsList(data.newsArticles);})
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    console.log(newsList);
  }, [newsList]);


  return (
    <div className="flex h-screen overflow-hidden">
      {/* Map Section */}
      <div className="w-3/5 relative h-screen">
        <MapView key={mapKey} center={mapCenter} zoom={13} markers={markers} setShowMetrics={setShowMetrics} />
        <div className="absolute top-4 right-4 z-10">
          <Button onClick={refreshMap} variant="secondary" size="sm">
            Refresh Map
          </Button>
        </div>
        <Button className="absolute bottom-4 right-4 z-10" onClick={() => setShowNewsModal(true)}>
          Show News
        </Button>
      </div>

      {/* Right Side Section */}
      <div className="w-2/5 flex flex-col border-l bg-white">
        
          <>
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
          </>
        
      </div>

      {/* News Modal */}
      <Modal isOpen={showNewsModal} onClose={() => setShowNewsModal(false)}>
      <div className="text-left">
        <h2 className="text-2xl font-bold mb-4">Latest Real Estate News</h2>
        <div className="w-full max-w-lg ">
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {newsList.map((article, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2">
                  <div
                    className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden cursor-pointer h-full"
                    onClick={() => window.open(article.url, "_blank")}
                  >
                    <img
                      src={article?.Image_url ?? newsIcon}
                      alt={article.headline}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4 flex flex-col h-[calc(100%-10rem)]">
                      <h3 className="font-semibold text-lg mb-2">{article.headline}</h3>
                      <p className="text-gray-600 text-sm mb-2 line-clamp-2 flex-grow">{article.highlights}</p>
                      <div className="text-xs text-gray-500">Date: {article.publishedDate}</div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 z-10" />
            <CarouselNext className="right-0 z-10" />
          </Carousel>
        </div>
        </div>
      </Modal>
    </div>
  )
}

