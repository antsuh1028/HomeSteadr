


// GET /articles
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

// GET /neighborhood-risk
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