"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Construction,
  Wrench,
  Clock,
  ArrowLeft,
  BarChart3,
  Trophy,
  Users,
  Target,
  Search,
  TrendingUp,
  Check,
} from "lucide-react"
import Link from 'next/link'
import { useState } from 'react'

export default function TeamAnalysisPage() {
  const [team1, setTeam1] = useState('')
  const [team2, setTeam2] = useState('')
  const [showComparison, setShowComparison] = useState(false)

  const handleCompare = () => {
    if (team1 && team2) {
      setShowComparison(true)
    } else {
      alert('Lütfen iki takım da seçin!')
    }
  }

  const handleAnalysisClick = (type: 'stats' | 'success') => {
    alert(`${team1} vs ${team2} - ${type === 'stats' ? 'Detaylı İstatistikler' : 'Başarı Analizi'} başlatılıyor...`)
  }

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
                <span className="font-bold text-xl text-gray-900">Takım Analizi</span>
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
              Takım Analizi
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Bu özellik şu anda geliştirme aşamasında. Yakında sizlerle olacak!
            </p>
          </div>

          {/* Team Comparison Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Hangi takımları karşılaştırmak istersiniz?</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">1. Takım</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    type="text"
                    placeholder="Takım adını girin (örn: Manchester City)"
                    value={team1}
                    onChange={(e) => setTeam1(e.target.value)}
                    className="pl-10"
                  />
                  {team1 && (
                    <Check className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500 w-4 h-4" />
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">2. Takım</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    type="text"
                    placeholder="Takım adını girin (örn: Arsenal)"
                    value={team2}
                    onChange={(e) => setTeam2(e.target.value)}
                    className="pl-10"
                  />
                  {team2 && (
                    <Check className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500 w-4 h-4" />
                  )}
                </div>
              </div>
            </div>
            <Button
              onClick={handleCompare}
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-3"
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              Takımları Karşılaştır
            </Button>
          </div>

          {/* Features Preview - Now Clickable */}
          {showComparison && (
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card 
                className="bg-white/80 backdrop-blur-sm cursor-pointer hover:shadow-lg transition-all duration-300"
                onClick={() => handleAnalysisClick('stats')}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Detaylı İstatistikler</CardTitle>
                  <CardDescription>
                    Takım performansını derinlemesine analiz edin
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card 
                className="bg-white/80 backdrop-blur-sm cursor-pointer hover:shadow-lg transition-all duration-300"
                onClick={() => handleAnalysisClick('success')}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Başarı Analizi</CardTitle>
                  <CardDescription>
                    Takımın başarı faktörlerini keşfedin
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          )}

          {/* Coming Soon Features */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Yakında Gelecek Özellikler</h2>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-orange-500" />
                <span className="text-gray-700">Gerçek zamanlı takım analizi</span>
              </div>
              <div className="flex items-center space-x-3">
                <Target className="w-5 h-5 text-orange-500" />
                <span className="text-gray-700">Hedef belirleme ve takip</span>
              </div>
              <div className="flex items-center space-x-3">
                <BarChart3 className="w-5 h-5 text-orange-500" />
                <span className="text-gray-700">Gelişmiş istatistik grafikleri</span>
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