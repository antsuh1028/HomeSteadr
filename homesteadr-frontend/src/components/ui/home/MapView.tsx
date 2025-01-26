"use client"

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api"
import { useMemo, useCallback } from "react"
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
    googleMapsApiKey: "AIzaSyCmG5duD8Zc43a_LihR7IwUI0KnsBS_F74",
  })

  const mapCenter = useMemo(() => center, [center])

  const onLoad = useCallback(
    (map: google.maps.Map) => {
      console.log("Map loaded:", map)
      // Fit bounds to markers if needed
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
        {markers.map((marker, index) => (
          <Marker
            key={`marker-${index}`}
            position={marker.position}
            icon={{
              path: google.maps.SymbolPath.CIRCLE,
              scale: 10,
              fillColor: "#3B82F6",
              fillOpacity: 1,
              strokeWeight: 2,
              strokeColor: "#FFFFFF",
            }}
            label={{
              text: marker.label,
              color: "#FFFFFF",
              fontSize: "14px",
              fontWeight: "bold",
              className: "marker-label",
            }}
          />
        ))}
      </GoogleMap>
      <div className="absolute bottom-4 right-4">
        <Button onClick={() => setShowMetrics(true)}>Show Metrics</Button>
      </div>
    </div>
  )
}

