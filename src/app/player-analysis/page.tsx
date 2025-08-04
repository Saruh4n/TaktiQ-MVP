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
} from "lucide-react"
import Link from 'next/link'

export default function PlayerAnalysisPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50/30">
      {/* Header */}
      <div className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <BarChart3 className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-xl text-gray-900">TaktiQ</span>
              </Link>
              <Badge variant="secondary" className="bg-orange-50 text-orange-700 border-orange-200">
                <Construction className="w-4 h-4 mr-2" />
                Yapım Aşamasında
              </Badge>
            </div>
            <Link href="/">
              <Button variant="ghost" className="text-gray-600 hover:text-emerald-600">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Geri Dön
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Construction className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Oyuncu Analizi
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Bu özellik şu anda geliştirme aşamasında. Yakında sizlerle olacak!
            </p>
          </div>

          {/* Features Preview */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <User className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Bireysel Performans</CardTitle>
                <CardDescription>
                  Oyuncuların detaylı performans analizini inceleyin
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Gelişim Takibi</CardTitle>
                <CardDescription>
                  Oyuncuların zaman içindeki gelişimini takip edin
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Coming Soon Features */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Yakında Gelecek Özellikler</h2>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center space-x-3">
                <Activity className="w-5 h-5 text-orange-500" />
                <span className="text-gray-700">Gerçek zamanlı oyuncu istatistikleri</span>
              </div>
              <div className="flex items-center space-x-3">
                <Target className="w-5 h-5 text-orange-500" />
                <span className="text-gray-700">Hedef belirleme ve takip</span>
              </div>
              <div className="flex items-center space-x-3">
                <BarChart3 className="w-5 h-5 text-orange-500" />
                <span className="text-gray-700">Gelişmiş performans grafikleri</span>
              </div>
              <div className="flex items-center space-x-3">
                <Wrench className="w-5 h-5 text-orange-500" />
                <span className="text-gray-700">Özelleştirilebilir raporlar</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-3"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Ana Sayfaya Dön
              </Button>
            </Link>
            <Link href="/ai-chat">
              <Button
                size="lg"
                variant="outline"
                className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 px-8 py-3"
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