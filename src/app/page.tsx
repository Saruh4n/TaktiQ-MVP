"use client"

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
} from "lucide-react"

export default function TaktiQHomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                TaktiQ
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                Takım Analizi
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                AI Asistan
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                İstatistikler
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                Hakkında
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-600">
                Giriş Yap
              </Button>
              <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                Başla
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-green-100 text-green-700 hover:bg-green-100">
              <Zap className="w-4 h-4 mr-2" />
              AI Destekli Futbol Analizi
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              TaktiQ
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Yapay zeka ile futbolcu performanslarını analiz edin, takımları kıyaslayın ve stratejik kararlar alın.
              Futbolun geleceği burada başlıyor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-lg px-8 py-6"
              >
                <Brain className="w-5 h-5 mr-2" />
                AI Analiz Başlat
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-green-600 text-green-600 hover:bg-green-50 text-lg px-8 py-6"
              >
                <Users className="w-5 h-5 mr-2" />
                Takım Kıyasla
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Neler Yapabilirsiniz?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              TaktiQ ile futbol analizlerinizi bir üst seviyeye taşıyın
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Comparison */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-green-50 to-green-100">
              <CardHeader>
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-800">Takım Kıyaslama</CardTitle>
                <CardDescription className="text-gray-600">
                  İki takımı detaylı olarak karşılaştırın ve güçlü-zayıf yönlerini keşfedin
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Hücum Gücü</span>
                    <div className="w-24 h-2 bg-gray-200 rounded-full">
                      <div className="w-20 h-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Savunma</span>
                    <div className="w-24 h-2 bg-gray-200 rounded-full">
                      <div className="w-16 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI Assistant */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-800">AI Asistan</CardTitle>
                <CardDescription className="text-gray-600">
                  Futbol hakkında sorularınızı sorun, detaylı analizler alın
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-white rounded-lg p-4 border">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-600">"Messi'nin bu sezonki performansı nasıl?"</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Statistics */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-purple-50 to-purple-100">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-800">Detaylı İstatistikler</CardTitle>
                <CardDescription className="text-gray-600">
                  Oyuncu ve takım performanslarını rakamlarla görün
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Gol/Maç</span>
                    <span className="font-semibold text-purple-600">2.3</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Pas Başarısı</span>
                    <span className="font-semibold text-purple-600">87%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Şut İsabeti</span>
                    <span className="font-semibold text-purple-600">65%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Comparison Demo */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Takım Kıyaslama</h2>
            <p className="text-xl text-gray-600">İki takımı seçin ve detaylı analiz alın</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="border-0 shadow-xl bg-white">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  {/* Team 1 */}
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Shield className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Manchester United</h3>
                    <div className="space-y-2">
                      <Badge variant="secondary">Premier League</Badge>
                      <div className="flex items-center justify-center space-x-1">
                        {[1, 2, 3, 4].map((i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <Star className="w-4 h-4 text-gray-300" />
                      </div>
                    </div>
                  </div>

                  {/* VS */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full mx-auto flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-lg">VS</span>
                    </div>
                    <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                      <Target className="w-4 h-4 mr-2" />
                      Analiz Et
                    </Button>
                  </div>

                  {/* Team 2 */}
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Shield className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Chelsea FC</h3>
                    <div className="space-y-2">
                      <Badge variant="secondary">Premier League</Badge>
                      <div className="flex items-center justify-center space-x-1">
                        {[1, 2, 3, 4].map((i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <Star className="w-4 h-4 text-gray-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Chat Demo */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">AI Asistanınız</h2>
            <p className="text-xl text-gray-600">Futbol hakkında merak ettiğiniz her şeyi sorun</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl bg-white">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Chat Messages */}
                  <div className="space-y-4">
                    <div className="flex justify-end">
                      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl rounded-tr-sm px-6 py-3 max-w-md">
                        Hangi oyuncu bu sezon en çok gol attı?
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-gray-100 text-gray-800 rounded-2xl rounded-tl-sm px-6 py-3 max-w-md">
                        Bu sezon en çok gol atan oyuncu Erling Haaland (23 gol). Onu Kylian Mbappé (21 gol) ve Harry
                        Kane (19 gol) takip ediyor. Detaylı istatistikleri görmek ister misiniz?
                      </div>
                    </div>
                  </div>

                  {/* Input */}
                  <div className="flex space-x-4">
                    <Input
                      placeholder="Futbol hakkında bir soru sorun..."
                      className="flex-1 border-2 border-gray-200 focus:border-green-500 rounded-xl"
                    />
                    <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 rounded-xl px-6">
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Futbol Analizlerinizi Dönüştürün</h2>
            <p className="text-xl text-green-100 mb-8">
              TaktiQ ile yapay zeka destekli futbol analizlerinin gücünü keşfedin. Hemen başlayın ve farkı görün.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-6">
                <TrendingUp className="w-5 h-5 mr-2" />
                Ücretsiz Başla
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-green-600 text-lg px-8 py-6"
              >
                Demo İzle
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold">TaktiQ</span>
              </div>
              <p className="text-gray-400">Yapay zeka ile futbol analizlerinin geleceği</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Özellikler</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Takım Analizi</li>
                <li>AI Asistan</li>
                <li>İstatistikler</li>
                <li>Kıyaslama</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Destek</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Yardım Merkezi</li>
                <li>İletişim</li>
                <li>API Dokümantasyonu</li>
                <li>Topluluk</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Şirket</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Hakkımızda</li>
                <li>Kariyer</li>
                <li>Gizlilik</li>
                <li>Şartlar</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TaktiQ. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 