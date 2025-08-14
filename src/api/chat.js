// Using Google's Gemini API for career guidance
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export default async function handler(req, res) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const { message, context } = req.body;

    const prompt = `You are a career guidance specialist. User context: ${JSON.stringify(context)}. Question: ${message}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;

    res.json({ response: response.text() });
  } catch (error) {
    res.status(500).json({ error: 'Gemini API request failed' });
  }
}
