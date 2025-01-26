declare global {
    namespace NodeJS {
        interface ProcessEnv {
            VITE_EXA_API_KEY: string;
            VITE_GROQ_API_KEY: string;
            NODE_ENV: 'development';
            DATAFINITI_API_KEY: string;
            MAPBOX_API_KEY: string;
            GOOGLE_MAPS_API_KEY: string;
        }
    }
}

export {};
