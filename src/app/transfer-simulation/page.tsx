"use client"

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
} from "lucide-react"
import Link from 'next/link'

export default function TransferSimulationPage() {

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


      {/* Right positioned title - centered vertically */}
      <div className="absolute right-20 top-1/2 transform -translate-y-1/2 z-20 max-w-sm">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-black/40 border border-white/20 rounded-full px-4 py-2 mb-6">
            <Construction className="w-4 h-4 text-white" />
            <span className="text-white/80">Yapım Aşamasında</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow mb-6 text-center">
            Sanal Transfer
            <br />
            <span className="text-white/90">Simülasyonu</span>
          </h1>
          
          <p className="text-white/80 text-lg max-w-xs mx-auto text-center">
            Futbolcuları 3D ortamda analiz edin, transfer değerlerini hesaplayın ve takım uyumluluğunu simüle edin.
          </p>
        </div>
      </div>

      {/* Left content area */}
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl py-16 md:py-24">

            {/* Feature cards - left aligned with equal spacing */}
            <div className="flex flex-col justify-center min-h-[60vh] gap-6 max-w-md">
              <div className="bg-gradient-to-r from-green-500 to-blue-600 backdrop-blur-sm rounded-3xl p-6 border border-white/20 shadow-xl">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-lg">Transfer Değeri Analizi</h3>
                </div>
                <p className="text-white/90 text-sm">Oyuncuların gerçekçi transfer değerlerini hesaplayın</p>
              </div>

              <div className="bg-gradient-to-r from-green-500 to-blue-600 backdrop-blur-sm rounded-3xl p-6 border border-white/20 shadow-xl">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-lg">Takım Uyumluluğu</h3>
                </div>
                <p className="text-white/90 text-sm">Oyuncuların takıma uyumunu simüle edin</p>
              </div>

              <div className="bg-gradient-to-r from-green-500 to-blue-600 backdrop-blur-sm rounded-3xl p-6 border border-white/20 shadow-xl">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-lg">3D Oyuncu Analizi</h3>
                </div>
                <p className="text-white/90 text-sm">Futbolcuları 3D ortamda detaylı olarak inceleyin</p>
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