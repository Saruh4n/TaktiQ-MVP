"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  ArrowLeft,
  Play,
  Users,
  Target,
  TrendingUp,
  Zap,
  Search,
  X,
  Trophy,
  BarChart3,
  Settings,
} from "lucide-react"
import Link from 'next/link'

export default function TransferSimulationPage() {
  const [selectedPlayers, setSelectedPlayers] = useState<string[]>([])
  const [selectedTeam, setSelectedTeam] = useState("")
  const [simulationStep, setSimulationStep] = useState<'setup' | 'analyzing' | 'results'>('setup')

  const popularPlayers = [
    "Erling Haaland", "Kylian Mbappé", "Jude Bellingham", "Vinicius Jr.",
    "Luka Modrić", "Kevin De Bruyne", "Mohamed Salah", "Harry Kane",
    "Neymar Jr.", "Robert Lewandowski", "Virgil van Dijk", "Manuel Neuer"
  ]

  const teams = [
    "Real Madrid", "Manchester City", "Barcelona", "PSG", 
    "Bayern Munich", "Liverpool", "Arsenal", "Chelsea"
  ]

  const addPlayer = (player: string) => {
    if (!selectedPlayers.includes(player) && selectedPlayers.length < 5) {
      setSelectedPlayers([...selectedPlayers, player])
    }
  }

  const removePlayer = (player: string) => {
    setSelectedPlayers(selectedPlayers.filter(p => p !== player))
  }

  const startSimulation = () => {
    if (selectedPlayers.length >= 3 && selectedTeam) {
      setSimulationStep('analyzing')
      setTimeout(() => setSimulationStep('results'), 3000)
    }
  }

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
      {/* Enhanced overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />

      {/* Header */}
      <div className="relative z-20 border-b border-white/10 bg-black/50 backdrop-blur-md sticky top-0">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <Trophy className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-xl text-white">Transfer Simülasyonu</span>
              </Link>
              <Badge variant="secondary" className="bg-gradient-to-r from-green-500/20 to-blue-500/20 text-white border-white/20">
                <Zap className="w-4 h-4 mr-2" />
                Canlı Simülasyon
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

      {/* Main Simulation Interface */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Panel - Setup */}
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow mb-4">
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Transfer
                </span>
                <br />
                <span className="text-white">Simülasyonu</span>
              </h1>
              <p className="text-white/80 text-lg max-w-md mx-auto">
                Futbolcuları seçin, takımınızı belirleyin ve başarı potansiyelini keşfedin
              </p>
            </div>

            {/* Player Selection */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Oyuncu Seçimi ({selectedPlayers.length}/5)
                </CardTitle>
                <CardDescription className="text-white/70">
                  En fazla 5 oyuncu seçebilirsiniz
                </CardDescription>
              </CardHeader>
              <div className="space-y-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
                  <Input
                    placeholder="Oyuncu ara..."
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2 max-h-32 overflow-y-auto">
                  {popularPlayers.map((player) => (
                    <button
                      key={player}
                      onClick={() => addPlayer(player)}
                      disabled={selectedPlayers.includes(player) || selectedPlayers.length >= 5}
                      className="text-left p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                      {player}
                    </button>
                  ))}
                </div>
              </div>
            </Card>

            {/* Selected Players */}
            {selectedPlayers.length > 0 && (
              <Card className="bg-green-500/20 backdrop-blur-md border-green-400/30 p-4">
                <CardTitle className="text-white text-sm mb-3">Seçilen Oyuncular</CardTitle>
                <div className="flex flex-wrap gap-2">
                  {selectedPlayers.map((player) => (
                    <div key={player} className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1">
                      <span className="text-white text-sm">{player}</span>
                      <button
                        onClick={() => removePlayer(player)}
                        className="text-white/70 hover:text-white"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* Team Selection */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Hedef Takım
                </CardTitle>
              </CardHeader>
              <div className="grid grid-cols-2 gap-2">
                {teams.map((team) => (
                  <button
                    key={team}
                    onClick={() => setSelectedTeam(team)}
                    className={`p-3 rounded-lg transition-all ${
                      selectedTeam === team
                        ? 'bg-gradient-to-r from-green-500/30 to-blue-500/30 border border-green-400/50 text-white'
                        : 'bg-white/5 hover:bg-white/10 text-white/80 hover:text-white border border-white/10'
                    }`}
                  >
                    {team}
                  </button>
                ))}
              </div>
            </Card>

            {/* Start Simulation Button */}
            <Button
              onClick={startSimulation}
              disabled={selectedPlayers.length < 3 || !selectedTeam}
              className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Play className="w-5 h-5 mr-2" />
              Simülasyonu Başlat
            </Button>
          </div>

          {/* Right Panel - Results/Preview */}
          <div className="space-y-6">
            {simulationStep === 'setup' && (
              <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8 text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Trophy className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Simülasyon Hazır</h3>
                <p className="text-white/70 mb-6">
                  Oyuncuları seçin ve takımınızı belirleyin. AI algoritmamız başarı potansiyelini analiz edecek.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-white/5 rounded-lg p-4">
                    <Users className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <p className="text-white/80 text-sm">Oyuncu Analizi</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <BarChart3 className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <p className="text-white/80 text-sm">Takım Uyumu</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <TrendingUp className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                    <p className="text-white/80 text-sm">Başarı Tahmini</p>
                  </div>
                </div>
              </Card>
            )}

            {simulationStep === 'analyzing' && (
              <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8 text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                  <Settings className="w-16 h-16 text-white animate-spin" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Analiz Ediliyor...</h3>
                <p className="text-white/70 mb-6">
                  AI algoritmamız oyuncu performansını ve takım uyumunu analiz ediyor.
                </p>
                <div className="space-y-2">
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-white/80">⚡ Oyuncu istatistikleri hesaplanıyor...</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-white/80">🎯 Takım uyumluluğu analiz ediliyor...</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-white/80">📊 Başarı potansiyeli tahmin ediliyor...</p>
                  </div>
                </div>
              </Card>
            )}

            {simulationStep === 'results' && (
              <Card className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-md border-green-400/30 p-8">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 bg-gradient-to-r from-green-500/30 to-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="w-16 h-16 text-yellow-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Simülasyon Tamamlandı!</h3>
                  <p className="text-white/70">{selectedTeam} takımı için analiz sonuçları</p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-medium">Başarı Potansiyeli</span>
                      <span className="text-green-400 font-bold">87%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full" style={{width: '87%'}}></div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-medium">Takım Uyumu</span>
                      <span className="text-blue-400 font-bold">92%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full" style={{width: '92%'}}></div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-medium">Transfer Değeri</span>
                      <span className="text-purple-400 font-bold">€245M</span>
                    </div>
                  </div>
                </div>
                
                <Button
                  onClick={() => setSimulationStep('setup')}
                  className="w-full mt-6 bg-white/20 hover:bg-white/30 text-white border border-white/20"
                >
                  Yeni Simülasyon
                </Button>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 