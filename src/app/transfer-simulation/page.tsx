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
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Background Video (old style) */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/vd1.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Header */}
      <div className="border-b border-green-900 bg-black/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-green-700 to-green-500 rounded-lg flex items-center justify-center transform hover:scale-110 transition-transform">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-xl text-white">Sanal Transfer Simülasyonu</span>
              </Link>
              <Badge variant="secondary" className="bg-green-900/30 text-green-300 border-green-700/30">
                <Construction className="w-4 h-4 mr-2" />
                Yapım Aşamasında
              </Badge>
            </div>
            <Link href="/">
              <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-green-900/60">
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
            <div className="w-32 h-32 bg-gradient-to-r from-green-700 to-green-500 rounded-full flex items-center justify-center mx-auto mb-8 transform hover:scale-110 transition-transform duration-500 shadow-lg shadow-green-900/40">
              <Construction className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-gradient-to-r from-green-400 to-green-600 bg-clip-text">
                Sanal Transfer
              </span>
              <br />
              <span className="text-transparent bg-gradient-to-r from-green-600 to-green-400 bg-clip-text">
                Simülasyonu
              </span>
            </h1>
            <p className="text-xl text-green-100 mb-10 leading-relaxed max-w-3xl mx-auto">
              Futbolcuları 3D ortamda analiz edin, transfer değerlerini hesaplayın ve takım uyumluluğunu simüle edin.<br />
              Halı saha atmosferinde futbolun geleceği burada başlıyor.
            </p>
          </div>

          {/* 3D Player Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* 3D Player Card 1 */}
            <div className="group perspective-1000">
              <div className="relative transform transition-all duration-500 group-hover:rotate-y-12">
                <div className="bg-gradient-to-br from-green-800/40 to-green-600/30 backdrop-blur-sm rounded-2xl p-8 border border-green-700/40 shadow-2xl hover:shadow-green-500/40 transition-all duration-500">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-700 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform">
                    <DollarSign className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white mb-4">Transfer Değeri Analizi</CardTitle>
                  <CardDescription className="text-green-100 text-lg">
                    Oyuncuların gerçekçi transfer değerlerini 3D ortamda hesaplayın
                  </CardDescription>
                  <div className="mt-6 flex justify-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-700 rounded-full flex items-center justify-center transform group-hover:scale-125 transition-transform">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3D Player Card 2 (Blue Themed) */}
            <div className="group perspective-1000">
              <div className="relative transform transition-all duration-500 group-hover:rotate-y-12">
                <div className="bg-gradient-to-br from-blue-900/40 to-blue-700/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-700/40 shadow-2xl hover:shadow-blue-500/40 transition-all duration-500">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-700 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform">
                    <Building className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white mb-4">Takım Uyumluluğu</CardTitle>
                  <CardDescription className="text-blue-100 text-lg">
                    Oyuncuların takıma uyumunu 3D simülasyonda test edin
                  </CardDescription>
                  <div className="mt-6 flex justify-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full flex items-center justify-center transform group-hover:scale-125 transition-transform">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3D Player Card 3 */}
            <div className="group perspective-1000 md:col-span-2 lg:col-span-1">
              <div className="relative transform transition-all duration-500 group-hover:rotate-y-12">
                <div className="bg-gradient-to-br from-green-900/40 to-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-green-900/40 shadow-2xl hover:shadow-green-500/40 transition-all duration-500">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-700 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform">
                    <User className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white mb-4">3D Oyuncu Analizi</CardTitle>
                  <CardDescription className="text-green-100 text-lg">
                    Futbolcuları 3D ortamda detaylı olarak inceleyin
                  </CardDescription>
                  <div className="mt-6 flex justify-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-700 to-green-500 rounded-full flex items-center justify-center transform group-hover:scale-125 transition-transform">
                      <BarChart3 className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coming Soon Features */}
          <div className="bg-gradient-to-r from-green-900/60 to-blue-900/60 backdrop-blur-sm rounded-3xl p-10 mb-12 border border-green-800/30">
            <h2 className="text-3xl font-bold text-white mb-8">Yakında Gelecek 3D Özellikler</h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex items-center space-x-4 p-4 bg-black/30 rounded-xl border border-green-700/20">
                <Globe className="w-6 h-6 text-green-400" />
                <span className="text-green-100">Gerçek zamanlı 3D transfer haberleri</span>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-black/30 rounded-xl border border-blue-500/20">
                <Target className="w-6 h-6 text-blue-300" />
                <span className="text-blue-100">3D transfer hedefleri belirleme</span>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-black/30 rounded-xl border border-blue-400/20">
                <BarChart3 className="w-6 h-6 text-blue-200" />
                <span className="text-blue-100">3D transfer istatistikleri</span>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-black/30 rounded-xl border border-green-600/20">
                <Wrench className="w-6 h-6 text-green-400" />
                <span className="text-green-100">3D transfer stratejisi simülasyonu</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-700 to-green-500 hover:from-green-800 hover:to-green-600 text-white px-10 py-4 text-lg transform hover:scale-105 transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Ana Sayfaya Dön
              </Button>
            </Link>
            <Link href="/ai-chat">
              <Button
                size="lg"
                variant="outline"
                className="border-blue-500 text-blue-300 hover:bg-blue-900/20 px-10 py-4 text-lg transform hover:scale-105 transition-all duration-300"
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