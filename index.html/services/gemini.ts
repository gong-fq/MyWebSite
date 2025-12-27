
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

export const chatWithAIStream = async (
  message: string, 
  history: { role: 'user' | 'assistant', content: string }[],
  onChunk: (text: string) => void,
  onComplete: (sources: {title: string, uri: string}[]) => void
) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const stream = await ai.models.generateContentStream({
      model: 'gemini-3-pro-preview',
      contents: [
        ...history.map(h => ({ 
          role: h.role === 'user' ? 'user' : 'model' as any, 
          parts: [{ text: h.content }] 
        })),
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: `You are the specialized AI Grammar Consultant for "Prof. Gong's English Learning Hub". 
        Your goal is to provide wholesome, professional, and encouraging English grammar, phonetics, and syntax advice to students.
        
        Guidelines:
        1. Use Google Search to verify complex grammar rules or dictionary definitions.
        2. Always provide bilingual (English/Chinese) explanations.
        3. Break down complex linguistic concepts into "child-friendly" metaphors.
        4. If a user asks for a dictionary definition, provide the Merriam-Webster or Oxford style definition.
        5. Be professional yet warm, like an assistant to an English Professor.`,
        tools: [{ googleSearch: {} }],
        temperature: 0.7,
      },
    });

    let fullText = "";
    let finalSources: {title: string, uri: string}[] = [];

    for await (const chunk of stream) {
      const response = chunk as GenerateContentResponse;
      const text = response.text;
      if (text) {
        fullText += text;
        onChunk(fullText);
      }

      // Extract grounding metadata if available in the final chunks
      const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
      if (chunks) {
        chunks.forEach((c: any) => {
          if (c.web) {
            finalSources.push({
              title: c.web.title,
              uri: c.web.uri
            });
          }
        });
      }
    }

    // Remove duplicate sources
    const uniqueSources = Array.from(new Set(finalSources.map(s => s.uri)))
      .map(uri => finalSources.find(s => s.uri === uri)!);

    onComplete(uniqueSources);
  } catch (error) {
    console.error("Gemini Streaming Error:", error);
    onChunk("Sorry, I encountered an error. Please check your connection or try again. (抱歉，系统出现错误，请检查网络后重试。)");
    onComplete([]);
  }
};
