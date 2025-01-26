// baseUrl is probably: http://localhost:3005

// GET {baseUrl}/api/articles
// AND
// POST {baseUrl}/api/customarticles
export type ArticlesResponse = {
    newsArticles: {
        articleId: number;
        headline: string | null;
        url: string | null;
        Image_url: string | undefined;
        publishedDate: string | undefined;
        affectedCities: string[];
        highlights: string[];
    }[];
};

// GET {baseUrl}/api/neighborhood-risk
export type EnvironmentalRisks = {
    floodFactor: number;
    fireFactor: number;
    heatFactor: number;
    windFactor: number;
    airFactor: number;
};
export type CitiesRiskResponse = {
    cities: {
        name: string;
        // educationScore: number;
        environmentalRisks: EnvironmentalRisks;
        // crimeRate: number;
        riskScore: number;
    }[];
};

// POST {baseUrl}/api/datafiniti
export interface Geolocation {
    lat: string;
    long: string;
}

export interface PropertyData {
    pictureUrl: string;
    price: number;
    squareFeet: number;
    address: string;
    geolocation: Geolocation;
    type?: string; // Optional since it's not present in all properties
}

interface CityData {
    [key: number]: PropertyData; // Using number instead of string for numeric indices
  }

export interface CityResult {
    city: string;
    data: CityData;
}

export interface DatafinitiResponse {
    results: CityResult[];
}
