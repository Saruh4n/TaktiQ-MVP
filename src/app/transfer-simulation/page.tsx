"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Construction,
  Wrench,
  Clock,
  ArrowLeft,
  BarChart3,
  Trophy,
  Users,
  Target,
  User,
  TrendingUp,
  Activity,
  DollarSign,
  Building,
  Globe,
  Zap,
  Star,
} from "lucide-react"
import Link from 'next/link'

export default function TransferSimulationPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* 3D Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900 via-black to-pink-900 opacity-50"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-pink-500 rounded-full blur-2xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Header */}
      <div className="border-b border-gray-800 bg-black/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center transform hover:scale-110 transition-transform">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-xl text-white">Sanal Transfer Simülasyonu</span>
              </Link>
              <Badge variant="secondary" className="bg-orange-500/20 text-orange-300 border-orange-500/30">
                <Construction className="w-4 h-4 mr-2" />
                Yapım Aşamasında
              </Badge>
            </div>
            <Link href="/">
              <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Geri Dön
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto text-center max-w-6xl">
          <div className="mb-12">
            <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-8 transform hover:scale-110 transition-transform duration-500">
              <Construction className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                Sanal Transfer
              </span>
              <br />
              <span className="text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text">
                Simülasyonu
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              Futbolcuları 3D ortamda analiz edin, transfer değerlerini hesaplayın ve takım uyumluluğunu simüle edin.
              Futbolun geleceği burada başlıyor.
            </p>
          </div>

          {/* 3D Player Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* 3D Player Card 1 */}
            <div className="group perspective-1000">
              <div className="relative transform transition-all duration-500 group-hover:rotate-y-12">
                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 shadow-2xl hover:shadow-purple-500/50 transition-all duration-500">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform">
                    <DollarSign className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white mb-4">Transfer Değeri Analizi</CardTitle>
                  <CardDescription className="text-gray-300 text-lg">
                    Oyuncuların gerçekçi transfer değerlerini 3D ortamda hesaplayın
                  </CardDescription>
                  <div className="mt-6 flex justify-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center transform group-hover:scale-125 transition-transform">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3D Player Card 2 */}
            <div className="group perspective-1000">
              <div className="relative transform transition-all duration-500 group-hover:rotate-y-12">
                <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30 shadow-2xl hover:shadow-blue-500/50 transition-all duration-500">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform">
                    <Building className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white mb-4">Takım Uyumluluğu</CardTitle>
                  <CardDescription className="text-gray-300 text-lg">
                    Oyuncuların takıma uyumunu 3D simülasyonda test edin
                  </CardDescription>
                  <div className="mt-6 flex justify-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center transform group-hover:scale-125 transition-transform">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3D Player Card 3 */}
            <div className="group perspective-1000 md:col-span-2 lg:col-span-1">
              <div className="relative transform transition-all duration-500 group-hover:rotate-y-12">
                <div className="bg-gradient-to-br from-pink-600/20 to-red-600/20 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/30 shadow-2xl hover:shadow-pink-500/50 transition-all duration-500">
                  <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform">
                    <Globe className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white mb-4">3D Oyuncu Analizi</CardTitle>
                  <CardDescription className="text-gray-300 text-lg">
                    Futbolcuları 3D ortamda detaylı olarak inceleyin
                  </CardDescription>
                  <div className="mt-6 flex justify-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center transform group-hover:scale-125 transition-transform">
                      <User className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coming Soon Features */}
          <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-3xl p-10 mb-12 border border-purple-500/30">
            <h2 className="text-3xl font-bold text-white mb-8">Yakında Gelecek 3D Özellikler</h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex items-center space-x-4 p-4 bg-black/30 rounded-xl border border-purple-500/20">
                <Globe className="w-6 h-6 text-purple-400" />
                <span className="text-gray-200">Gerçek zamanlı 3D transfer haberleri</span>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-black/30 rounded-xl border border-pink-500/20">
                <Target className="w-6 h-6 text-pink-400" />
                <span className="text-gray-200">3D transfer hedefleri belirleme</span>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-black/30 rounded-xl border border-blue-500/20">
                <BarChart3 className="w-6 h-6 text-blue-400" />
                <span className="text-gray-200">3D transfer istatistikleri</span>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-black/30 rounded-xl border border-green-500/20">
                <Wrench className="w-6 h-6 text-green-400" />
                <span className="text-gray-200">3D transfer stratejisi simülasyonu</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-10 py-4 text-lg transform hover:scale-105 transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Ana Sayfaya Dön
              </Button>
            </Link>
            <Link href="/ai-chat">
              <Button
                size="lg"
                variant="outline"
                className="border-purple-500 text-purple-300 hover:bg-purple-500/20 px-10 py-4 text-lg transform hover:scale-105 transition-all duration-300"
              >
                AI Chat'i Dene
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 