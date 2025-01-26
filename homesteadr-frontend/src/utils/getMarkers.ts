import { CityResult } from "../../../homesteadr-backend/types/types";

type Marker = {
    position: {
      lat: number;
      lng: number;
    };
    label: string;
  };

  function extractMarkers(properties: CityResult[]): Marker[] {
    const markers: Marker[] = [];
  
    properties.forEach(cityData => {
      Object.values(cityData.data).forEach(property => {
        // Convert price to millions format with one decimal place
        const priceInMillions = (property.price / 1000000).toFixed(2);
        
        markers.push({
          position: { 
            lat: parseFloat(property.geolocation.lat), 
            lng: parseFloat(property.geolocation.long) 
          },
          label: `$${priceInMillions}M`
        });
      });
    });
  
    return markers;
  }


  export default extractMarkers;