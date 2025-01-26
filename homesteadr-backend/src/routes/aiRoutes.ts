import express from "express";
import { exaSearch, queryGroq } from "../services/aiQuery";
import {
    ArticlesResponse,
    EnvironmentalRisks,
    CitiesRiskResponse,
    PropertyData,
    CityResult,
} from "../../types/types";

const router = express.Router();

router.get("/", async (req, res) => {
    const data = await queryGroq("hello groq"); // <----------
    // res.json({
    //     success: true,
    //     data: 'hello this is a route!!!!'
    // });
    res.json({ data: data });
});

router.get("/articles", async (req, res) => {
    // Get current date in YYYY-MM-DD format
    const today = new Date().toISOString().split("T")[0];

    // Craft a search query that combines relevance and recency
    const searchQuery = `
        (data center OR datacenter OR "digital infrastructure") 
        AND (news OR announcement OR update OR development)
        after:${today}
        sort:date
    `.trim();

    const exaResults = await exaSearch(searchQuery);
    if (!exaResults || !exaResults.results) throw Error("no exa results");
    const articlesResponse: ArticlesResponse = {
        newsArticles: exaResults.results.map((result, index) => ({
            articleId: index + 1, // or extract ID from result.id if needed
            headline: result.title,
            url: result.url,
            Image_url: result.image,
            publishedDate: result.publishedDate,
            affectedCities: [], // You'll need to determine how to extract this
            highlights: result.highlights,
        })),
    };

    res.send(articlesResponse);
});

router.post("/customarticles", async (req, res) => {
    const { query } = req.body();

    if (!query || typeof query !== 'string') {
        res.status(400).json({ error: "Invalid query parameter" });
        return;
    }
    // Get current date in YYYY-MM-DD format
    const today = new Date().toISOString().split("T")[0];



    const exaResults = await exaSearch(query);
    if (!exaResults || !exaResults.results) throw Error("no exa results");
    const articlesResponse: ArticlesResponse = {
        newsArticles: exaResults.results.map((result, index) => ({
            articleId: index + 1, // or extract ID from result.id if needed
            headline: result.title,
            url: result.url,
            Image_url: result.image,
            publishedDate: result.publishedDate,
            affectedCities: [], // You'll need to determine how to extract this
            highlights: result.highlights,
        })),
    };

    res.send(articlesResponse);
});

// Environmental risk will have a formula to return risk score + highest risk factor
// 1-3, 4-6, 7 -10
// Formula : InsuranceRisk = (floodRisk *floodFactor )  + (fireRisk *fireFactor ) + (heatRisk *heatFactor )  (floodRisk *floodFactor )
// Insurance Risk = (Flood Risk * Flood Weight [0.3]) + (Fire Risk * Fire Weight [0.3]) + (Heat Risk * Heat Weight [0.2]) + (Wind Risk * Wind Weight [0.15]) + (Air Risk * Air Weight [0.05])

/*
convo with nathan

- backend determines location in responses
- but add abilty to query param type of location(zip or city) and retrieve resutls from those areas


*/

const RISK_WEIGHTS = {
    flood: 0.3,
    fire: 0.3,
    heat: 0.2,
    wind: 0.15,
    air: 0.05,
};

const calculateRiskScore = (
    risks: EnvironmentalRisks
): {
    score: number;
    highestRiskFactor: string;
} => {
    const { floodFactor, fireFactor, heatFactor, windFactor, airFactor } =
        risks;

    const score =
        floodFactor * RISK_WEIGHTS.flood +
        fireFactor * RISK_WEIGHTS.fire +
        heatFactor * RISK_WEIGHTS.heat +
        windFactor * RISK_WEIGHTS.wind +
        airFactor * RISK_WEIGHTS.air;

    const riskFactors = [
        { name: "flood", value: floodFactor },
        { name: "fire", value: fireFactor },
        { name: "heat", value: heatFactor },
        { name: "wind", value: windFactor },
        { name: "air", value: airFactor },
    ];

    const highestRisk = riskFactors.reduce((prev, current) =>
        prev.value > current.value ? prev : current
    );

    return {
        score: Number(score.toFixed(2)),
        highestRiskFactor: highestRisk.name,
    };
};

type NewsAnalysis = {
    location: {
        city: string;
        state: string;
    };
    risks: EnvironmentalRisks;
};

router.get("/neighborhood-risk", async (req, res) => {
    try {
        const today = new Date();
        const lastWeek = new Date(today);
        lastWeek.setDate(today.getDate() - 7);
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);

        // Search news without specific location
        const newsData = await exaSearch(
            "environmental risks natural disasters US",
            {
                numResults: 3,
                startPublishedDate: lastWeek,
                endPublishedDate: yesterday,
            }
        );

        if (!newsData || !newsData.results) throw new Error("no newsdata");

        // analyze articles seperately
        const articleAnalyses: NewsAnalysis[] = await Promise.all(
            newsData.results.map(async (article, i) => {
                console.log(`newdata ${i} highlights:`, article.highlights);
                const articleData = {
                    title: article.title,
                    text: article.highlights,
                };

                // Extract location from individual article
                const locationExtractionPrompt = `
            Analyze this news article and extract the main US city and state 
            mentioned in relation to environmental risks. If multiple locations are 
            mentioned, choose the most prominent one.
            
            Article:
            ${JSON.stringify(articleData)}
            
            Return only a JSON object with the following structure:
            {
              "city": "string",
              "state": "string"
            }
          `;

                const locationCompletion = await queryGroq(
                    locationExtractionPrompt,
                    "llama-3.3-70b-versatile",
                    0.5,
                    true
                );

                const locationData = JSON.parse(locationCompletion || "{}");

                // Analyze risks for the specific article and location
                const riskAnalysisPrompt = `
            Analyze this news article and provide environmental risk factors 
            for ${locationData.city}, ${locationData.state} on a scale of 1-10.
            
            Article:
            ${JSON.stringify(articleData)}
            
            Return only a JSON object with the following structure:
            {
              "floodFactor": number,
              "fireFactor": number,
              "heatFactor": number,
              "windFactor": number,
              "airFactor": number
            }
          `;

                const riskCompletion = await queryGroq(
                    riskAnalysisPrompt,
                    "llama-3.3-70b-versatile",
                    0.5,
                    true
                );

                const risks: EnvironmentalRisks = JSON.parse(
                    riskCompletion || "{}"
                );

                return {
                    location: locationData,
                    risks,
                };
            })
        );

        // Group results by location
        const locationMap = new Map<string, EnvironmentalRisks[]>();
        articleAnalyses.forEach((analysis) => {
            const locationKey = `${analysis.location.city}, ${analysis.location.state}`;
            if (!locationMap.has(locationKey)) {
                locationMap.set(locationKey, []);
            }
            locationMap.get(locationKey)?.push(analysis.risks);
        });

        // Calculate average risks and final scores for each location
        const cities = Array.from(locationMap.entries()).map(
            ([location, riskArrays]) => {
                // Calculate average risk factors
                const averageRisks: EnvironmentalRisks = {
                    floodFactor:
                        riskArrays.reduce(
                            (sum, risk) => sum + risk.floodFactor,
                            0
                        ) / riskArrays.length,
                    fireFactor:
                        riskArrays.reduce(
                            (sum, risk) => sum + risk.fireFactor,
                            0
                        ) / riskArrays.length,
                    heatFactor:
                        riskArrays.reduce(
                            (sum, risk) => sum + risk.heatFactor,
                            0
                        ) / riskArrays.length,
                    windFactor:
                        riskArrays.reduce(
                            (sum, risk) => sum + risk.windFactor,
                            0
                        ) / riskArrays.length,
                    airFactor:
                        riskArrays.reduce(
                            (sum, risk) => sum + risk.airFactor,
                            0
                        ) / riskArrays.length,
                };

                const { score, highestRiskFactor } =
                    calculateRiskScore(averageRisks);

                return {
                    name: location,
                    environmentalRisks: averageRisks,
                    riskScore: score,
                    highestRiskFactor,
                    sourceCount: riskArrays.length, // Number of articles mentioning this location
                };
            }
        );

        const endResult: CitiesRiskResponse = {
            cities: cities.map((city) => ({
                name: city.name,
                environmentalRisks: city.environmentalRisks,
                riskScore: city.riskScore,
                highestRiskFactor: city.highestRiskFactor,
            })),
        };

        res.json(endResult);
    } catch (error) {
        console.error("Error processing neighborhood risk:", error);
        res.status(500).json({ error: "Failed to process neighborhood risk" });
    }
});

const DATAFINITI_API_KEY = process.env.DATAFINITI_API_KEY as string | undefined;
if (!DATAFINITI_API_KEY) throw Error("no datafinity key");
const format = "JSON";
// const query = "country:US";
const num_records = 5;
const download = false;

interface RequestOptions {
    query: string;
    format: "JSON";
    num_records: number;
    download: boolean;
}

const MAPBOX_API_KEY = process.env.MAPBOX_API_KEY as string | undefined;
if (!MAPBOX_API_KEY) throw Error("no MAPBOX_API_KEY key");

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY as
    | string
    | undefined;
if (!GOOGLE_MAPS_API_KEY) throw Error("no GOOGLE_MAPS_API_KEY key");

const getMapboxImage = (lat: string, long: string) => {
    return `https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/${long},${lat},17,0/400x300?access_token=${MAPBOX_API_KEY}`;
};

const getGoogleStreetViewImage = (address: string) => {
    const encodedAddress = encodeURIComponent(address);
    const metadataUrl = `https://maps.googleapis.com/maps/api/streetview/metadata?location=${encodedAddress}&key=${GOOGLE_MAPS_API_KEY}`;
    const imageUrl = `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=${encodedAddress}&key=${GOOGLE_MAPS_API_KEY}&fov=60&pitch=0`;

    return { metadataUrl, imageUrl };
};

interface CitiesRequestBody {
    cities: string[] | undefined;
}

// router.post("/datafiniti", async (req, res) => {
//     try {
//         const requestBody: RequestOptions = {
//             query,
//             format,
//             num_records,
//             download,
//         };

//         const response = await fetch(
//             "https://api.datafiniti.co/v4/properties/search",
//             {
//                 method: "POST",
//                 headers: {
//                     Authorization: `Bearer ${DATAFINITI_API_KEY}`,
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(requestBody),
//             }
//         );

//         const data = await response.json();

//         const transformApiResponse = async (apiResponse: any) => {
//             const property = apiResponse.records[0];

//             const { cities } = req.body as CitiesRequestBody;
//             if (!Array.isArray(cities) || cities.length === 0) {
//               return res.status(400).json({ success: false, error: "Please provide an array of cities" });
//             }

//             let pictureUrl;
//             try {
//                 const { metadataUrl, imageUrl } = getGoogleStreetViewImage(
//                     property.address
//                 );
//                 console.log('google maps stuff:', {
//                     metadataUrl: metadataUrl,
//                     imageUrl: imageUrl
//                 })

//                 const metadataResponse = await fetch(metadataUrl);
//                 type MetadataType = {
//                     copyright: string,
//                     date: string,
//                     location: { lat: number, lng: number },
//                     pano_id: string,
//                     status: string
//                   }
//                 const metadata: MetadataType = await metadataResponse.json();

//                 console.log('Metadata response:', metadata);

//                 if (metadata.status === "OK") {
//                     pictureUrl = imageUrl;
//                 } else {
//                     pictureUrl = getMapboxImage(
//                         property.latitude,
//                         property.longitude
//                     );
//                 }
//                 console.log('result img url:', pictureUrl);//TESTING
//             } catch (error) {
//                 console.error("Error fetching street view:", error);
//                 pictureUrl = undefined;
//             }

//             // Extract the required fields
//             const transformedResponse = {
//                 pictureUrl: pictureUrl,
//                 price: property.mostRecentPriceAmount || 0,
//                 squareFeet: property.lotSizeValue
//                     ? property.lotSizeValue * 43560
//                     : 0, // Converting acres to sq ft
//                 address: property.address,
//                 geolocation: {
//                     lat: property.latitude,
//                     long: property.longitude,
//                 },
//                 type:
//                     property.categories?.find(
//                         (cat: string) => cat === "SINGLE FAMILY RESIDENCE"
//                     ) || undefined,
//             };

//             return transformedResponse;
//         };
//         const transformedData = await transformApiResponse(data);

//         const picture = getMapboxImage(
//             transformedData.geolocation.lat,
//             transformedData.geolocation.long
//         );

//         res.status(response.status).json({
//             before: data,
//             after: transformedData,
//             picture: picture,
//         });
//     } catch (error) {
//         console.error("Error:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// });

interface TransformedApiResponse {
    // Define the structure that comes from transformApiResponse function
    [key: string]: PropertyData;
  }
  
const transformApiResponse = async (apiResponse: any): Promise<PropertyData[]>  => {

    const transformedRecords: PropertyData[] = await Promise.all(apiResponse.records.map(async (property: any)=> {
        let pictureUrl;
        try {
            const { metadataUrl, imageUrl } = getGoogleStreetViewImage(property.address);
            console.log("google maps stuff:", { metadataUrl, imageUrl });

            const metadataResponse = await fetch(metadataUrl);
            type MetadataType = {
                copyright: string;
                date: string;
                location: { lat: number; lng: number };
                pano_id: string;
                status: string;
            };
            const metadata: MetadataType = await metadataResponse.json();

            console.log("Metadata response:", metadata);

            if (metadata.status === "OK") {
                pictureUrl = imageUrl;
            } else {
                pictureUrl = getMapboxImage(property.latitude, property.longitude);
            }
            console.log("result img url:", pictureUrl); //TESTING
        } catch (error) {
            console.error("Error fetching street view:", error);
            pictureUrl = undefined;
        }
        const propertyData: PropertyData = {
            pictureUrl: pictureUrl as string,
            price: property.mostRecentPriceAmount || 0,
            squareFeet: property.lotSizeValue ? property.lotSizeValue * 43560 : 0, // Converting acres to sq ft
            address: property.address,
            geolocation: {
                lat: property.latitude,
                long: property.longitude,
            },
            type: property.categories?.find((cat: string) => cat === "SINGLE FAMILY RESIDENCE") || undefined,
        };
        return propertyData;
    }));

    return transformedRecords;
};

router.post("/datafiniti", async (req, res) => {
    try {
        const { cities } = req.body as CitiesRequestBody;
        if (!Array.isArray(cities) || cities.length === 0) {
            res.status(400).json({
                error: "Please provide an array of cities",
            });
            return;
        }

        const results : CityResult[]= await Promise.all(
            cities.map(async (city) => {
                const requestBody: RequestOptions = {
                    query: `country:US AND city:${city}`,
                    format,
                    num_records,
                    download,
                };

                const response = await fetch(
                    "https://api.datafiniti.co/v4/properties/search",
                    {
                        method: "POST",
                        headers: {
                            Authorization: `Bearer ${DATAFINITI_API_KEY}`,
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(requestBody),
                    }
                );

                const data = await response.json();

                const transformedData= await transformApiResponse(data);

                return {
                    city,
                    data: {
                        ...transformedData,
                    },
                };
            })
        );
        
        res.status(200).json({ results });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
export default router;
