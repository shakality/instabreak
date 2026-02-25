import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const generateBioIdeas = async (prompt: string) => {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Generate 5 aesthetic Instagram bio ideas based on this theme: ${prompt}. Each bio should be formatted with line breaks.`,
  });
  return response.text;
};
