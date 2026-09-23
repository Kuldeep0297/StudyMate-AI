
import { GoogleGenAI } from "@google/genai";
import { auth } from "@/auth";

export async function POST(request) {
  try {
    // Check login authentication
    const session = await auth();

    if (!session) {
      return Response.json(
        { error: "Unauthorized. Please login first." },
        { status: 401 }
      );
    }

    const { topic } = await request.json();

    if (!topic || !topic.trim()) {
      return Response.json(
        { error: "Topic is required" },
        { status: 400 }
      );
    }

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-lite",
      contents: `Explain the following topic for a beginner student:

${topic}

Include:
1. Simple explanation
2. Important concepts
3. Practical examples
4. Five practice questions`,
    });

    return Response.json({
      result: response.text,
    });
  } catch (error) {
    console.error("Gemini API Error:", error);

    return Response.json(
      { error: error.message || "Failed to generate study material" },
      { status: 500 }
    );
  }
}