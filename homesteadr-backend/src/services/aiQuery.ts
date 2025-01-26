import Groq from "groq-sdk";
import Exa from "exa-js";

const VITE_GROQ_API_KEY =
    (process.env.VITE_GROQ_API_KEY as string) || undefined;
const VITE_EXA_API_KEY =
    (process.env.VITE_EXA_API_KEY as string) || undefined;

if (!VITE_GROQ_API_KEY || !VITE_EXA_API_KEY) {
    throw new Error("API keys for Groq or Exa are missing");
}

const groq = new Groq({
    apiKey: VITE_GROQ_API_KEY,
});

const exa = new Exa(VITE_EXA_API_KEY);

export const queryGroq = async (query: string, model:string="llama3-70b-8192", temperature: number = 1, json:boolean = false) => {
    try {
        const groqCompletion = await groq.chat.completions.create({
            messages: [{ role: "user", content: query }],
            model,
            temperature,
            response_format: { type: json ? 'json_object' : 'text' },
        });

        return groqCompletion.choices[0]?.message?.content;
    } catch (error) {
        console.error("Error:", error);
    }
};
type exaOptions = {
    numResults: number;
    startPublishedDate: Date | undefined;
    endPublishedDate: Date | undefined;
};
const defaultExaOptions: exaOptions = {
    numResults: 10,
    startPublishedDate: undefined,
    endPublishedDate: undefined,
};
export const exaSearch = async(query: string, options: exaOptions = defaultExaOptions) => {
    const finalOptions = { ...defaultExaOptions, ...options };

    const startPublishedDate = finalOptions.startPublishedDate ? finalOptions.startPublishedDate.toISOString() : undefined;
    const endPublishedDate = finalOptions.endPublishedDate ? finalOptions.endPublishedDate.toISOString() : undefined;
    try {
        const exaSearch = await exa.searchAndContents(query, {
            category: 'news',
            numResults: finalOptions.numResults,
            startPublishedDate: startPublishedDate,
            endPublishedDate: endPublishedDate,
            highlights: true,
        });
        return exaSearch;
    } catch (error) {
        console.error("Error:", error);
    }
};
