import { GoogleGenerativeAI } from '@google/generative-ai';

async function testGeminiAPI() {
  const API_KEY = 'AIzaSyBBUu7PYcM3u8RX4X0lp9H9xYTvzKwjhS8';
  const genAI = new GoogleGenerativeAI(API_KEY);

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const prompt = "Merhaba, kendini tanıt.";
    
    console.log("Gemini API testi başlatılıyor...");
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log("API Yanıtı:", text);
    console.log("API anahtarı çalışıyor gibi görünüyor.");
  } catch (error) {
    console.error("API anahtarı çalışmıyor gibi görünüyor veya bir hata oluştu:", error);
  }
}

testGeminiAPI(); 