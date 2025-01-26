import express from "express";
import { exaSearch, queryGroq } from "../services/aiQuery";
import { ArticlesResponse, EnvironmentalRisks, CitiesRiskResponse } from '../../types/types';

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
    // input handled above
    const exaResults = await exaSearch("something");
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
                console.log(`newdata ${i} highlights:`, article.highlights)
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

export default router;
