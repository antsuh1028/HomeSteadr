"use client"

import { PropertyCard } from "@/components/ui/home/PropertyCard"
import { MapView } from "@/components/ui/home/MapView"
import { useState, useCallback, useEffect } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Modal } from "@/components/ui/Modal"
import { Button } from "@/components/ui/button"
import getArticles from "@/utils/getArticles"
import newsIcon from '../assets/newsicon.png';
import articles from "@/assets/StockArticles";
import { CityResult, DatafinitiResponse } from '../../../homesteadr-backend/types/types';

interface Property {
	pictureUrl: string | undefined,
	price: number,
	squareFeet: number,
	address: string, 
	geolocation: {
		lat: string,
		long: string, 
},
type: string | undefined,  // SingleFamilyResidence, 
}


const properties: Property[] = [
  {
    pictureUrl: "data:image/jpeg;base64,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",
    price: 450000,
    squareFeet: 2500,
    address: "123 Oak Street, Miami, FL 33101",
    geolocation: {
      lat: "25.7617",
      long: "-80.1918"
    },
    type: "SingleFamilyResidence"
  },
  {
    pictureUrl: undefined,
    price: 750000,
    squareFeet: 3200,
    address: "456 Palm Ave, Miami Beach, FL 33139",
    geolocation: {
      lat: "25.7907",
      long: "-80.1300"
    },
    type: "Condominium"
  },
  {
    pictureUrl: "data:image/jpeg;base64,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",
    price: 1200000,
    squareFeet: 4000,
    address: "789 Beach Road, Coral Gables, FL 33134",
    geolocation: {
      lat: "25.7507",
      long: "-80.2632"
    },
    type: "SingleFamilyResidence"
  }
 ];

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
  const [propertyList, setPropertyList] = useState<Property[]>([])


  const [selectedCities, setSelectedCities] = useState<CityResult[]>([]);

  useEffect(() => {
    const initMarkers = async () => {
      try {
        const cities = articles[0].affectedCities;
        // POST {baseUrl}/api/datafiniti
        const response = await fetch('http://localhost:3005/api/datafiniti', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ cities: cities }), 
        });
        const data = await response.json() as DatafinitiResponse;
        console.log(data);
        setSelectedCities(data.results);
      } catch (error) {
        console.error('error in home init: ', error);
      }
    };
    initMarkers();
  }, []);


  // // first indexed number represents city index
  // // second indexed number represents address index
  // selectedCities[0].city
  // selectedCities[0].data[0].address
  // selectedCities[0].data[0].squareFeet

  const refreshMap = useCallback(() => {
    setMapKey((prevKey) => prevKey + 1)
  }, [])

  const handlePropertyClick = (property: Property) => {
    console.log(property)
    setSelectedHouse(property)
  }

  // useEffect(() => {
  //   getArticles()
  //     .then(data => {setNewsList(data.newsArticles);})
  //     .catch(err => console.error(err));
  // }, []);

  // useEffect(() => {
  //   console.log(newsList);
  // }, [newsList]);


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
  <div className="flex flex-row items-start gap-8 w-full max-w-6xl mx-auto">
  <div className="w-full md:w-2/3 mt-10">
  <h2 className="text-2xl font-bold mb-6">Latest Metrics in:</h2>
      <Carousel className="w-full">
        <CarouselContent className="-ml-4">
          {articles.map((article, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2">
              <div
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden cursor-pointer h-full"
                onClick={() => window.open(article.url, "_blank")}
              >
                <img src={article?.Image_url ?? newsIcon} alt={article.headline} className="w-full h-40 object-cover" />
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
    <div className="w-full  mt-16 md:w-1/3 bg-white rounded-lg shadow-lg p-4 min-h-[400px]">
    here</div>
  </div>
</Modal>
    </div>
  )
}

