declare global {
    namespace NodeJS {
        interface ProcessEnv {
            VITE_EXA_API_KEY: string;
            VITE_GROQ_API_KEY: string;
            NODE_ENV: 'development';
        }
    }
}

export {};
