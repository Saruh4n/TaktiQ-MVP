'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, ChevronDown, ChevronUp, Loader2 } from 'lucide-react';
import { useTheme } from 'next-themes';
import { toast } from 'react-hot-toast';
import { ChartsRenderer } from './ChartsRenderer';
import { promptEngine } from '../lib/promptEngine';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { generateChat } from '@/lib/gemini';

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || '');

interface Message {
  role: 'user' | 'assistant';
  content: string;
  charts?: Array<{
    type: 'pie' | 'bar' | 'line' | 'radar';
    data: any;
  }>;
}

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const parseMessage = (message: string) => {
    let content = message;
    const charts: Array<{
      type: 'pie' | 'bar' | 'line' | 'radar';
      data: any;
    }> = [];

    // Etiket içinde: [GRAFIK_TIPI]bar { "labels": [...], "datasets": [...] }[/GRAFIK_TIPI]
    const chartRegex = /\[GRAFIK_TIPI\](\w+)\s*\{([\s\S]*?)\}\s*\[\/GRAFIK_TIPI\]/g;
    let match;

    while ((match = chartRegex.exec(message)) !== null) {
      try {
        const chartType = match[1].trim() as 'pie' | 'bar' | 'line' | 'radar';
        const chartBody = '{' + match[2].trim() + '}';
        const chartData = JSON.parse(chartBody);

        charts.push({ type: chartType, data: chartData });

        content = content.replace(match[0], '');
      } catch (error) {
        console.error('Grafik verisi parse edilemedi:', error);
      }
    }

    return { content, charts };
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      role: 'user',
      content: input
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Generate response using Gemini
      const aiResponse = await generateChat(messages.concat(userMessage));

      const { content, charts } = parseMessage(aiResponse);
      
      console.log('Parsed content:', content);
      console.log('Parsed charts:', charts);

      const assistantMessage: Message = {
        role: 'assistant',
        content,
        charts
      };

      setMessages(prev => [...prev, assistantMessage]);
      toast.success('Yanıt başarıyla alındı!');
    } catch (error) {
      console.error('Mesaj gönderilirken hata oluştu:', error);
      const errorMessage = error instanceof Error ? error.message : 'Bir hata oluştu';
      toast.error(`Mesaj gönderilirken bir hata oluştu: ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  };

  const renderMessage = (message: Message) => {
    const isUser = message.role === 'user';

    console.log('Message charts:', message.charts);

    return (
      <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
        <div className={`max-w-[80%] ${isUser ? 'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-800'} rounded-lg p-4`}>
          <div className="prose dark:prose-invert max-w-none">
            {message.content.split('\n').map((line, index) => (
              <div key={index} className="whitespace-pre-wrap">{line}</div>
            ))}
          </div>
          {message.charts && message.charts.length > 0 && (
            <div className="mt-4">
              <ChartsRenderer charts={message.charts} />
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div key={index}>
            {renderMessage(message)}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="border-t p-4">
        <div className="flex space-x-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Mesajınızı yazın..."
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
          />
          <button
            onClick={handleSend}
            disabled={isLoading}
            className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          >
            {isLoading ? <Loader2 className="animate-spin" /> : <Send />}
          </button>
        </div>
      </div>
    </div>
  );
} 