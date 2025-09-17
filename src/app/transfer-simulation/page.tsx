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
  const [isPanelOpen, setIsPanelOpen] = useState(true)

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
        aria-label="Paneli aç/kapat"
        onClick={() => setIsPanelOpen((p) => !p)}
        className="group absolute top-1/2 right-0 z-30 -translate-y-1/2 translate-x-full md:translate-x-0 md:right-4 bg-black/50 hover:bg-black/60 border border-white/20 backdrop-blur text-white rounded-l-full px-2 py-3 md:py-4 transition"
      >
        {isPanelOpen ? (
          <ChevronRight className="w-5 h-5" />
        ) : (
          <ChevronLeft className="w-5 h-5" />
        )}
      </button>

      {/* Right slide-in panel */}
      <aside
        className={
          "absolute right-0 top-16 md:top-20 z-20 h-[calc(100vh-80px)] w-full sm:w-[480px] max-w-full " +
          "bg-black/60 backdrop-blur-xl border-l border-white/10 shadow-2xl transition-transform duration-500 " +
          (isPanelOpen ? "translate-x-0" : "translate-x-full")
        }
      >
        <div className="h-full overflow-y-auto p-6 space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Sanal Transfer</h1>
            <p className="text-white/80 mt-2">
              Arka planda video oynarken, buradan özellikleri yönetebilirsin. Ok tuşuyla paneli açıp kapat.
            </p>
          </div>

          <div className="grid gap-4">
            <Card className="bg-white/10 border-white/10">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-3">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Transfer Değeri Analizi</CardTitle>
                <CardDescription className="text-white/80">
                  Oyuncuların gerçekçi transfer değerlerini hesaplayın
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/10 border-white/10">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-3">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Takım Uyumluluğu</CardTitle>
                <CardDescription className="text-white/80">
                  Oyuncuların takıma uyumunu simüle edin
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/10 border-white/10">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mb-3">
                  <User className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Bireysel Profil</CardTitle>
                <CardDescription className="text-white/80">
                  Oyuncu özellikleri ve potansiyel gelişimi
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="flex gap-3 pt-2">
            <Link href="/">
              <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/20">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Ana Sayfaya Dön
              </Button>
            </Link>
          </div>
        </div>
      </aside>

      {/* Left info text (optional)*/}
      <div className="relative z-10 pointer-events-none">
        <div className="container mx-auto px-4">
          <div className="max-w-xl py-16 md:py-24">
            <div className="inline-flex items-center gap-3 bg-black/40 border border-white/20 rounded-full px-4 py-2 mb-4">
              <Construction className="w-4 h-4 text-white" />
              <span className="text-white/80">Yapım Aşamasında</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow">
              Sanal Transfer
              <br />
              <span className="text-white/90">Simülasyonu</span>
            </h2>
            <p className="text-white/80 mt-4 text-lg max-w-prose">
              Ok butonuna basarak sağdaki paneli açabilir, özellikleri keşfedebilirsin. Arka planda video oynatılır.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 