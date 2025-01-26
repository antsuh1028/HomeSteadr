"use client"

import { GoogleMap, Marker, InfoWindow, useLoadScript } from "@react-google-maps/api"
import { useMemo, useCallback, useState } from "react"
import { Button } from "../button"

const mapOptions = {
  disableDefaultUI: true,
  clickableIcons: false,
  scrollwheel: true,
}

interface Property {
  address: string;
  squareFeet: number;
  price: number;
  geolocation: {
    lat: string;
    long: string;
  };
  pictureUrl?: string;
  cityName?: string;
  type?: string;
}

interface MapViewProps {
  center: { lat: number; lng: number }
  zoom: number
  markers: Array<{
    position: { lat: number; lng: number }
    label: string
  }>
  allProperties: Property[] // Add this to pass all properties
  setSelectedHouse: (property: Property) => void
  setShowMetrics: (show: boolean) => void
}

export function MapView({ 
  center, 
  zoom, 
  markers, 
  allProperties,
  setSelectedHouse,
  setShowMetrics 
}: MapViewProps) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  })

  const [activeMarker, setActiveMarker] = useState<{
    position: { lat: number; lng: number };
    label: string;
    property?: Property;
  } | null>(null)

  const mapCenter = useMemo(() => center, [center])

  const onLoad = useCallback(
    (map: google.maps.Map) => {
      if (markers.length > 0) {
        const bounds = new google.maps.LatLngBounds()
        markers.forEach(({ position }) => bounds.extend(position))
        map.fitBounds(bounds)
      }
    },
    [markers],
  )

  if (!isLoaded) {
    return <div className="h-full w-full bg-muted animate-pulse" />
  }

  return (
    <div className="relative w-full h-full">
      <GoogleMap
        options={mapOptions}
        zoom={zoom}
        center={mapCenter}
        mapContainerClassName="w-full h-full"
        onLoad={onLoad}
      >
        {markers.map((marker, index) => {
          const markerProperty = allProperties.find(
            prop => 
              prop.geolocation.lat === marker.position.lat.toString() && 
              prop.geolocation.long === marker.position.lng.toString()
          );

          return (
            <Marker
              key={`marker-${index}`}
              position={marker.position}
              icon={{
                url: '/path/to/your/custom-icon.png',
                scaledSize: new google.maps.Size(40, 40),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(20, 40),
              }}
              label={{
                text: marker.label,
                color: "#FFFFFF",
                fontSize: "16px",
                fontWeight: "bold",
                className: "marker-label border-2 border-white rounded-md px-1 bg-blue-500",
              }}
              onClick={() => setActiveMarker({
                ...marker,
                property: markerProperty
              })}
            />
          )
        })}

{activeMarker && (
          <InfoWindow
            position={activeMarker.position}
            onCloseClick={() => setActiveMarker(null)}
          >
            <div className="p-4 max-w-[250px]">
              <h3 className="font-bold text-lg mb-2">{activeMarker.property?.address}</h3>
              {activeMarker.property && (
                <div className="space-y-2">
                  {activeMarker.property.pictureUrl && (
                    <img 
                      src={activeMarker.property.pictureUrl} 
                      alt="Property" 
                      className="w-full h-40 object-cover rounded-md mb-2"
                    />
                  )}
                  <p className="text-sm font-semibold">{activeMarker.label}</p>
                  <p className="text-sm">Square Feet: {activeMarker.property.squareFeet}</p>
                  <p className="text-sm">Price: ${activeMarker.property.price.toLocaleString()}</p>
                  {activeMarker.property.type && (
                    <p className="text-sm">Type: {activeMarker.property.type}</p>
                  )}
                  
                </div>
              )}
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
      <div className="absolute bottom-4 right-4">
        <Button onClick={() => setShowMetrics(true)}>Show Metrics</Button>
      </div>
    </div>
  )
}