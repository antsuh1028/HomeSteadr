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
import { properties1,properties10,properties2, properties3,properties5,properties6,properties8,properties9} from "@/assets/properties"
import extractMarkers from "@/utils/getMarkers";

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

type Marker = {
  position: {
    lat: number;
    lng: number;
  };
  label: string;
};

const propertiesArray: CityResult[][] = [
  properties1 || {},
  properties2 || {},
  properties3 || {},
  [],
  properties5 || {},
  properties6 || {},
  [],
  properties8 || {},
  properties9 || {},
  properties10 || {}
];
console.log(properties1);





const mapCenter = {
  lat: 33.6213,
  lng: -117.9278,
}

 

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
  const [selectedArticle, setSelectedArticle] = useState(0)
  const [selectedCities, setSelectedCities] = useState<CityResult[]>([]);
  const [markers, setMarkers] = useState<Marker[]>([])

  useEffect(() => {
    if (selectedCities?.length) {
      const newMarkers = extractMarkers(selectedCities);
      setMarkers(newMarkers);
    }
  }, [selectedCities]);



  useEffect(() => {
    setSelectedCities(propertiesArray[selectedArticle]);
  }, [selectedArticle]);

  useEffect(() => {
    if (!selectedCities?.length) return;
    
    const allProperties = selectedCities.flatMap(cityResult => 
      Object.values(cityResult.data).map(property => ({
        ...property,
        cityName: cityResult.city
      }))
    );
    
    setPropertyList(allProperties);
  }, [selectedCities]);



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


  return (
    <div className="flex h-screen overflow-hidden">
      {/* Map Section */}
      <div className="w-3/5 relative h-screen">
      <MapView 
          key={mapKey} 
          center={mapCenter} 
          zoom={13} 
          markers={markers} 
          allProperties={propertyList} 
          setSelectedHouse={(property: Property) => setSelectedHouse(property)}
          setShowMetrics={setShowMetrics} 
        />
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
            <div className="flex-1 p-4 overflow-y-auto">
            <div className="flex-1 p-4 overflow-y-auto">
  {propertyList.map((property, index) => (
    <PropertyCard
      key={index}
      pictureUrl={property.pictureUrl}
      price={property.price}
      squareFeet={property.squareFeet} 
      address={`${property.address}`}
      geolocation={property.geolocation}
      onClick={() => handlePropertyClick(property)}
      isSelected={selectedHouse === property}
    />
  ))}
</div>
</div>
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
                      // onClick={() => window.open(article.url, "_blank")}
                      onClick={() => {
                        setSelectedArticle(index);
                        setShowNewsModal(false);
                      }}
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

