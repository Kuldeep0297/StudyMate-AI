
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
      contents: `Create 5 multiple choice quiz questions
for the topic: ${topic}.

Return ONLY valid JSON in this format:
[
  {
    "question": "Question text",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "answer": 0
  }
]

The answer must be the index of the correct option (0 to 3).
Do not include markdown or any extra text.`,
    });

    let text = response.text.trim();

    text = text
      .replace(/^```json\s*/, "")
      .replace(/^```\s*/, "")
      .replace(/\s*```$/, "")
      .trim();

    const quiz = JSON.parse(text);

    return Response.json({ quiz });
  } catch (error) {
    console.error("Quiz API Error:", error);

    return Response.json(
      { error: "Failed to generate quiz" },
      { status: 500 }
    );
  }
}