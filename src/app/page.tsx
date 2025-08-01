"use client"

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { generateChat } from '@/lib/gemini';
import { promptEngine } from '@/lib/promptEngine';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { toast } from 'react-hot-toast';

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Brain,
  Trophy,
  TrendingUp,
  MessageCircle,
  Star,
  ArrowRight,
  Zap,
  Target,
  BarChart3,
  Shield,
  Moon,
  Search,
} from "lucide-react"
import Link from 'next/link'

type Message = {
  role: 'user' | 'model';
  content: string;
};

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || '');

export default function TaktiQHomePage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [response, setResponse] = useState('');

  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    try {
      // Generate response using Gemini
      const response = await generateChat([
        ...messages,
        { role: 'user', content: userMessage }
      ]);

      setMessages(prev => [...prev, { role: 'model', content: response }]);
      toast.success('Yanıt başarıyla alındı!');

    } catch (error) {
      console.error('Error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Bir hata oluştu';
      toast.error('Bir hata oluştu. Lütfen tekrar deneyin.');
      setMessages(prev => [...prev, { role: 'model', content: 'Üzgünüm, bir hata oluştu. Lütfen tekrar deneyin.' }]);
    } finally {
      setLoading(false);
    }
  };

  const handleExampleQuestionClick = (question: string) => {
    setInput(question);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50/30">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-6">
            <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 border-emerald-200">
              <Brain className="w-4 h-4 mr-2" />
              AI Destekli Futbol Analizi
            </Badge>
          </div>

          <h1 className="flex items-center justify-center text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mr-4">
              <BarChart3 className="h-5 w-5 text-white" />
            </div>
            <span className="text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text">TaktiQ</span>
          </h1>

          <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Yapay zeka ile futbolcu performanslarını analiz edin, takımları kıyaslayın ve stratejik kararlar alın.
            Futbolun geleceği burada başlıyor.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ai-chat" passHref legacyBehavior>
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-3 text-lg"
              >
                <Brain className="w-5 h-5 mr-2" />
                AI Analiz Başlat
              </Button>
            </Link>
            <Link href="/team-comparison" passHref legacyBehavior>
              <Button
                size="lg"
                variant="outline"
                className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 px-8 py-3 text-lg"
              >
                <BarChart3 className="w-5 h-5 mr-2" />
                Takım Karşılaştır
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Chat Bot Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50/50 to-emerald-50/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">TaktiQ AI ile Sohbet Edin</h2>
            <p className="text-xl text-gray-600">Futbol hakkında merak ettiklerinizi sorun, anında cevap alın</p>
          </div>

          <motion.div 
            className={`bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden transition-all duration-500 ease-in-out ${
              isExpanded ? 'max-w-[90vw] mx-auto scale-125' : ''
            }`}
            onClick={() => setIsExpanded(!isExpanded)}
            style={{ cursor: 'pointer' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-6">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-white text-xl font-semibold">TaktiQ AI</h3>
                  <p className="text-white/80 text-base">Futbol analiz uzmanınız</p>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className={`p-8 space-y-6 overflow-y-auto custom-scrollbar transition-all duration-500 ${
              isExpanded ? 'max-h-[80vh]' : 'max-h-96'
            }`}>
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`inline-block p-3 rounded-lg max-w-[80%] ${
                      message.role === 'user'
                        ? 'bg-blue-600 text-white rounded-br-none'
                        : 'bg-gray-100 text-gray-800 rounded-bl-none'
                    }`}
                  >
                    {message.content}
                  </div>
                </motion.div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="inline-block p-3 rounded-lg bg-gray-100 text-gray-800"
                  >
                    <div className="loading-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </motion.div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Example Questions */}
            <div className="px-6 pb-4">
              <p className="text-sm text-gray-600 mb-3">Örnek sorular:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <button 
                  className="text-left p-3 bg-emerald-50 hover:bg-emerald-100 rounded-lg border border-emerald-200 transition-colors"
                  onClick={() => handleExampleQuestionClick("Messi'nin bu sezondaki performansı nasıl?")}
                >
                  <p className="text-sm text-emerald-700">"Messi'nin bu sezondaki performansı nasıl?"</p>
                </button>
                <button 
                  className="text-left p-3 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 transition-colors"
                  onClick={() => handleExampleQuestionClick("Manchester City'nin güçlü yanları neler?")}
                >
                  <p className="text-sm text-blue-700">"Manchester City'nin güçlü yanları neler?"</p>
                </button>
                <button 
                  className="text-left p-3 bg-teal-50 hover:bg-teal-100 rounded-lg border border-teal-200 transition-colors"
                  onClick={() => handleExampleQuestionClick("En iyi genç futbolcular kimler?")}
                >
                  <p className="text-sm text-teal-700">"En iyi genç futbolcular kimler?"</p>
                </button>
                <button 
                  className="text-left p-3 bg-cyan-50 hover:bg-cyan-100 rounded-lg border border-cyan-200 transition-colors"
                  onClick={() => handleExampleQuestionClick("Premier League'de en çok gol atan takım?")}
                >
                  <p className="text-sm text-cyan-700">"Premier League'de en çok gol atan takım?"</p>
                </button>
              </div>
            </div>

            {/* Chat Input */}
            <div className="border-t border-gray-200 p-4">
              <form onSubmit={handleChatSubmit} className="flex space-x-3">
                <input
                  type="text"
                  placeholder="Futbol hakkında bir şey sorun..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <Button 
                  type="submit"
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-6"
                  disabled={loading || !input.trim()}
                >
                  Gönder
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-emerald-50/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Neler Yapabilirsiniz?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              TaktiQ ile futbol analizlerinizi bir üst seviyeye taşıyın
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Team Comparison Card */}
            <Link href="/team-comparison" passHref legacyBehavior>
              <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200 hover:shadow-lg hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-gray-900">Takım Kıyaslama</CardTitle>
                  <CardDescription className="text-gray-600">
                    İki takımı detaylı olarak karşılaştırın ve güçlü-zayıf yönlerini keşfedin
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Hücum Gücü</span>
                      <div className="w-24 h-2 bg-emerald-200 rounded-full">
                        <div className="w-20 h-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Savunma</span>
                      <div className="w-24 h-2 bg-blue-200 rounded-full">
                        <div className="w-16 h-2 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* AI Assistant Card */}
            <Link href="/ai-chat" passHref legacyBehavior>
              <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 hover:shadow-lg hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-gray-900">AI Asistan</CardTitle>
                  <CardDescription className="text-gray-600">
                    Futbol hakkında sorularınızı sorun, detaylı analizler alın
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-white/80 rounded-lg p-3 border border-blue-200">
                    <div className="flex items-start space-x-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">AI</span>
                      </div>
                      <p className="text-sm text-gray-700 italic">"Messi'nin bu sezondaki performansı nasıl?"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Statistics Card */}
            <Link href="/statistics" passHref legacyBehavior>
              <Card className="bg-gradient-to-br from-teal-50 to-emerald-50 border-teal-200 hover:shadow-lg hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-gray-900">Detaylı İstatistikler</CardTitle>
                  <CardDescription className="text-gray-600">
                    Oyuncu ve takım performanslarını rakamlarla görün
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Gol/Maç</span>
                      <span className="text-sm font-semibold text-teal-600">2.3</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Pas Başarısı</span>
                      <span className="text-sm font-semibold text-teal-600">87%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Şut İsabeti</span>
                      <span className="text-sm font-semibold text-teal-600">65%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Team Comparison Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Takım Kıyaslama</h2>
            <p className="text-xl text-gray-600">İki takımı seçin ve detaylı analiz alın</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Manchester United */}
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-8 pb-6">
                  <div className="w-20 h-20 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Shield className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Manchester United</h3>
                  <p className="text-gray-600 mb-4">Premier League</p>
                  <div className="flex justify-center space-x-1 mb-4">
                    {[1, 2, 3, 4].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <Star className="w-4 h-4 text-gray-300" />
                  </div>
                </CardContent>
              </Card>

              {/* VS Section */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mx-auto flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">VS</span>
                </div>
                <Link href="/comparison-results" passHref legacyBehavior>
                  <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white">
                    Analiz Et
                  </Button>
                </Link>
              </div>

              {/* Chelsea FC */}
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-8 pb-6">
                  <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Shield className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Chelsea FC</h3>
                  <p className="text-gray-600 mb-4">Premier League</p>
                  <div className="flex justify-center space-x-1 mb-4">
                    {[1, 2, 3, 4].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <Star className="w-4 h-4 text-gray-300" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-500 to-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Futbol Analizinde Devrim Yaratın!</h2>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            TaktiQ ile oyuncu performanslarını, takım stratejilerini ve maç sonuçlarını derinlemesine inceleyin. Şimdi
            başlayın ve futbol dünyasına farklı bir bakış açısı kazanın.
          </p>
          <Link href="/signup" passHref legacyBehavior>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Hemen Başlayın
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link href="/" passHref legacyBehavior>
              <div className="flex items-center space-x-2 mb-4 md:mb-0 cursor-pointer">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <BarChart3 className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-xl">TaktiQ</span>
              </div>
            </Link>

            <div className="flex space-x-6 text-sm">
              <Link href="/privacy-policy" passHref legacyBehavior>
                <a className="text-gray-400 hover:text-emerald-400 transition-colors">Gizlilik Politikası</a>
              </Link>
              <Link href="/terms-of-service" passHref legacyBehavior>
                <a className="text-gray-400 hover:text-emerald-400 transition-colors">Kullanım Koşulları</a>
              </Link>
              <Link href="/contact" passHref legacyBehavior>
                <a className="text-gray-400 hover:text-emerald-400 transition-colors">İletişim</a>
              </Link>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            © 2025 Tüm Hakları Saklıdır.
          </div>
        </div>
      </footer>
    </div>
  );
} 