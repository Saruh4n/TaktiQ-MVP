import { GoogleGenerativeAI, GenerativeModel } from '@google/generative-ai';
import { promptEngine } from './promptEngine';

// Validate API key
const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
if (!API_KEY) {
  throw new Error('Missing Gemini API key. Please add NEXT_PUBLIC_GEMINI_API_KEY to your .env.local file.');
}

// Initialize the API
const genAI = new GoogleGenerativeAI(API_KEY);

// Define the model name
const MODEL_NAME = 'gemini-1.5-flash';

// Get the model with error handling
let model: GenerativeModel;
try {
  model = genAI.getGenerativeModel({ model: MODEL_NAME });
} catch (error) {
  console.error('Error initializing Gemini model:', error);
  throw new Error('Failed to initialize Gemini model. Please check your API key and try again.');
}

// Helper function to generate text
export async function generateText(prompt: string) {
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating text:', error);
    throw error;
  }
}

// Function to generate chat responses
export async function generateChat(messages: { role: string; content: string }[]) {
  try {
    const lastUserMessage = messages.findLast(msg => msg.role === 'user');

    if (!lastUserMessage) {
      throw new Error("No user message found in chat history.");
    }

    // Generate prompt using PromptEngine
    const generatedPrompt = promptEngine.generatePrompt({
      question: lastUserMessage.content,
      // You can add more context from userProfile or season here if needed
    });

    console.log('Generated Prompt:', generatedPrompt);

    // Format messages for the API (only use the generated prompt for the current turn)
    const formattedMessages = [
      { role: 'user', parts: [{ text: generatedPrompt }] }
    ];

    // Start a chat session (if needed, otherwise just send content)
    const chat = model.startChat({
      history: messages.slice(0, -1).map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }]
      })),
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 2048,
      },
    });

    // Send the generated prompt and get the response
    const result = await chat.sendMessage(generatedPrompt);
    const response = await result.response;
    const responseText = response.text();
    console.log('Gemini API Response:', responseText);
    return responseText;
  } catch (error) {
    console.error('Error in chat generation (gemini.ts):', error);
    if (error instanceof Error) {
      throw new Error(`Chat generation failed: ${error.message}`);
    }
    throw new Error('An unexpected error occurred during chat generation');
  }
} 