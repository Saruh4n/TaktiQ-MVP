# TaktiQ - Futbol İstatistik Karşılaştırma MVP

TaktiQ, futbol oyuncularını ve takımları karşılaştırmanıza olanak sağlayan modern bir web uygulamasıdır.

## Özellikler

- Oyuncu listesi ve detaylı istatistikler
- Oyuncu karşılaştırma (2-3 oyuncu)
- Takım listesi ve detaylar
- AI Chat ile futbol soruları sorma
- Modern ve responsive tasarım
- Dark mode desteği

## Teknolojiler

- Next.js 14
- TypeScript
- Tailwind CSS
- MongoDB + Mongoose
- Google Gemini AI
- shadcn/ui bileşenleri
- Recharts

## Kurulum

1. Repoyu klonlayın:
```bash
git clone https://github.com/yourusername/taktiq-mvp.git
cd taktiq-mvp
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. `.env.local` dosyasını oluşturun ve gerekli değişkenleri ekleyin:
```
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
```

4. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

5. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## Veritabanı Kurulumu

1. MongoDB Atlas'ta ücretsiz bir hesap oluşturun
2. Yeni bir cluster oluşturun
3. Database Access bölümünden bir kullanıcı oluşturun
4. Network Access bölümünden IP adresinizi ekleyin
5. Cluster'ınızın bağlantı dizesini alın ve `.env.local` dosyasına ekleyin

## Veri Girişi

Veritabanına örnek veriler eklemek için MongoDB Compass veya MongoDB Atlas web arayüzünü kullanabilirsiniz. Örnek veri yapısı:

```json
// Oyuncu örneği
{
  "name": "Erling Haaland",
  "position": "Forvet",
  "age": 23,
  "country": "Norveç",
  "team": "Manchester City",
  "stats": {
    "goals": 52,
    "assists": 9,
    "matches": 53,
    "minutes": 4500,
    "yellowCards": 2,
    "redCards": 0,
    "passAccuracy": 78
  },
  "physical": {
    "height": 194,
    "weight": 88,
    "preferredFoot": "Left"
  }
}

// Takım örneği
{
  "name": "Manchester City",
  "league": "Premier League",
  "founded": 1880,
  "stadium": "Etihad Stadium",
  "coach": "Pep Guardiola"
}
```

## Lisans

MIT 