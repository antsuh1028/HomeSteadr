"use client"

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api"
import { useMemo } from "react"
import { Button } from "../button"

const mapOptions = {
  disableDefaultUI: true,
  clickableIcons: false,
  scrollwheel: true,
}

interface MapViewProps {
  center: { lat: number; lng: number }
  zoom: number
  markers: Array<{
    position: { lat: number; lng: number }
    label: string
  }>
  setShowMetrics: (show: boolean) => void
  
}

export function MapView({ center, zoom, markers, setShowMetrics }: MapViewProps) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "",
  })

  const mapCenter = useMemo(() => center, [center])

  if (!isLoaded) {
    return <div className="h-full w-full bg-muted animate-pulse" />
  }

  return (
    <div className="relative w-full h-full ">
      <GoogleMap options={mapOptions} zoom={zoom} center={mapCenter} mapContainerClassName="w-full h-full">
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={marker.position}
            label={{
              text: marker.label,
              className: "font-bold text-sm",
            }}
          />
        ))}
      </GoogleMap>
      <div className="absolute bottom-4 right-4">
      <Button onClick={() => setShowMetrics(true)}>
        Show Metrics
        </Button>
      </div>
    </div>
  )
}

