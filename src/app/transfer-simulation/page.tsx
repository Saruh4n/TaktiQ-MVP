"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Construction,
  ArrowLeft,
  BarChart3,
  DollarSign,
  Building,
  User,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Link from 'next/link'

export default function TransferSimulationPage() {
  const [isTextSlid, setIsTextSlid] = useState(false)

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/vd1.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Header */}
      <div className="relative z-20 border-b border-white/10 bg-black/40 backdrop-blur-sm sticky top-0">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <BarChart3 className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-xl text-white">Sanal Transfer Simülasyonu</span>
              </Link>
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
                <Construction className="w-4 h-4 mr-2" />
                Yapım Aşamasında
              </Badge>
            </div>
            <Link href="/">
              <Button variant="ghost" className="text-white hover:text-white hover:bg-white/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Geri Dön
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Slide toggle button */}
      <button
        aria-label="Yazıları kaydır"
        onClick={() => setIsTextSlid((p) => !p)}
        className="group absolute top-1/2 right-4 z-30 -translate-y-1/2 bg-black/50 hover:bg-black/60 border border-white/20 backdrop-blur text-white rounded-full px-3 py-4 transition"
      >
        {isTextSlid ? (
          <ChevronLeft className="w-5 h-5" />
        ) : (
          <ChevronRight className="w-5 h-5" />
        )}
      </button>

      {/* Left content area */}
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl py-16 md:py-24">
            {/* Fixed title section - moved to right */}
            <div className="text-right mb-12 ml-auto max-w-lg">
              <div className="inline-flex items-center gap-3 bg-black/40 border border-white/20 rounded-full px-4 py-2 mb-6 ml-auto">
                <Construction className="w-4 h-4 text-white" />
                <span className="text-white/80">Yapım Aşamasında</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow mb-6 text-right">
                Sanal Transfer
                <br />
                <span className="text-white/90">Simülasyonu</span>
              </h1>
              
              <p className="text-white/80 text-lg max-w-prose ml-auto text-right">
                Futbolcuları 3D ortamda analiz edin, transfer değerlerini hesaplayın ve takım uyumluluğunu simüle edin.
                Ok butonuna basarak özellikleri hafifçe kaydırabilirsin.
              </p>
            </div>

            {/* Sliding feature cards */}
            <div className={`grid gap-4 max-w-lg mx-auto transition-transform duration-700 ease-out ${
              isTextSlid ? 'translate-x-8' : 'translate-x-0'
            }`}>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-white font-semibold">Transfer Değeri Analizi</h3>
                </div>
                <p className="text-white/70 text-sm">Oyuncuların gerçekçi transfer değerlerini hesaplayın</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Building className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-white font-semibold">Takım Uyumluluğu</h3>
                </div>
                <p className="text-white/70 text-sm">Oyuncuların takıma uyumunu simüle edin</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-white font-semibold">3D Oyuncu Analizi</h3>
                </div>
                <p className="text-white/70 text-sm">Futbolcuları 3D ortamda detaylı olarak inceleyin</p>
              </div>
            </div>

            {/* Fixed button section */}
            <div className="text-center mt-8">
              <Link href="/">
                <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/20 backdrop-blur-sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Ana Sayfaya Dön
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 