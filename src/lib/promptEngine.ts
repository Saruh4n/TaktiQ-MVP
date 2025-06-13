import { GoogleGenerativeAI } from '@google/generative-ai';

// API anahtarını kontrol et
const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
if (!apiKey) {
  throw new Error('NEXT_PUBLIC_GEMINI_API_KEY is not defined in environment variables');
}

const genAI = new GoogleGenerativeAI(apiKey);

interface PromptContext {
  question: string;
  type?: 'performance' | 'comparison' | 'tactical';
  season?: string;
  userProfile?: {
    favoriteTeam?: string;
    favoritePlayer?: string;
    preferredLeague?: string;
  };
}

// Chart.js için veri yapıları
const chartData = {
  performance: {
    shotDistribution: {
      type: 'pie',
      data: {
        labels: ['Gol', 'İsabetli Şut', 'İsabetsiz Şut'],
        datasets: [{
          label: 'Şut Dağılımı',
          data: [15, 25, 60],
          backgroundColor: [
            'rgba(34, 197, 94, 0.8)',
            'rgba(59, 130, 246, 0.8)',
            'rgba(239, 68, 68, 0.8)'
          ],
          borderColor: [
            'rgb(34, 197, 94)',
            'rgb(59, 130, 246)',
            'rgb(239, 68, 68)'
          ],
          borderWidth: 1
        }]
      }
    },
    passDistribution: {
      type: 'bar',
      data: {
        labels: ['Kısa Pas', 'Orta Pas', 'Uzun Pas'],
        datasets: [{
          label: 'Pas Dağılımı',
          data: [85, 65, 45],
          backgroundColor: 'rgba(59, 130, 246, 0.8)',
          borderColor: 'rgb(59, 130, 246)',
          borderWidth: 1
        }]
      }
    },
    defensePerformance: {
      type: 'radar',
      data: {
        labels: ['Top Kapma', 'Müdahale', 'Blok', 'Hava Hakimiyeti', 'Pozisyon'],
        datasets: [{
          label: 'Savunma Performansı',
          data: [85, 75, 65, 80, 90],
          backgroundColor: 'rgba(34, 197, 94, 0.2)',
          borderColor: 'rgb(34, 197, 94)',
          borderWidth: 2
        }]
      }
    },
    formTrend: {
      type: 'line',
      data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        datasets: [{
          label: 'Form Trendi',
          data: [7, 8, 6, 9, 8, 7, 8, 9, 8, 9],
          borderColor: 'rgb(59, 130, 246)',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          tension: 0.4
        }]
      }
    }
  },
  comparison: {
    radarComparison: {
      type: 'radar',
      data: {
        labels: ['Hız', 'Şut', 'Pas', 'Dribling', 'Fizik', 'Savunma'],
        datasets: [
          {
            label: 'Oyuncu 1',
            data: [85, 90, 80, 85, 75, 70],
            backgroundColor: 'rgba(59, 130, 246, 0.2)',
            borderColor: 'rgb(59, 130, 246)',
            borderWidth: 2
          },
          {
            label: 'Oyuncu 2',
            data: [80, 85, 85, 80, 80, 75],
            backgroundColor: 'rgba(34, 197, 94, 0.2)',
            borderColor: 'rgb(34, 197, 94)',
            borderWidth: 2
          }
        ]
      }
    }
  },
  tactical: {
    teamComparison: {
      type: 'bar',
      data: {
        labels: ['Gol', 'Şut', 'Pas Başarısı', 'Top Hakimiyeti', 'Korner'],
        datasets: [
          {
            label: 'Takım 1',
            data: [2.5, 15, 85, 55, 6],
            backgroundColor: 'rgba(59, 130, 246, 0.8)',
            borderColor: 'rgb(59, 130, 246)',
            borderWidth: 1
          },
          {
            label: 'Takım 2',
            data: [1.8, 12, 80, 45, 4],
            backgroundColor: 'rgba(34, 197, 94, 0.8)',
            borderColor: 'rgb(34, 197, 94)',
            borderWidth: 1
          }
        ]
      }
    }
  }
};

export class PromptEngine {
  private genAI: GoogleGenerativeAI;

  constructor() {
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('Gemini API key is not defined');
    }
    this.genAI = new GoogleGenerativeAI(apiKey);
  }

  private detectQuestionType(question: string): 'performance' | 'comparison' | 'tactical' {
    const lowerQuestion = question.toLowerCase();

    if (lowerQuestion.includes('karşılaştır') || lowerQuestion.includes('kıyasla') || lowerQuestion.includes('fark')) {
      return 'comparison';
    }

    if (lowerQuestion.includes('taktik') || lowerQuestion.includes('strateji') || lowerQuestion.includes('oyun planı')) {
      return 'tactical';
    }

    return 'performance';
  }

  public generatePrompt(context: PromptContext): string {
    const questionType = context.type || this.detectQuestionType(context.question);
    const userProfile = context.userProfile || {};
    const season = context.season || "2024-2025";

    let prompt = `Sen bir futbol analiz uzmanısın. Aşağıdaki soruyu detaylı bir şekilde yanıtla:\n\n`;
    prompt += `Soru: ${context.question}\n\n`;

    if (userProfile.favoriteTeam) {
      prompt += `Kullanıcının favori takımı: ${userProfile.favoriteTeam}\n`;
    }
    if (userProfile.favoritePlayer) {
      prompt += `Kullanıcının favori oyuncusu: ${userProfile.favoritePlayer}\n`;
    }
    if (userProfile.preferredLeague) {
      prompt += `Kullanıcının tercih ettiği lig: ${userProfile.preferredLeague}\n\n`;
    }

    prompt += `Yanıtını Türkçe olarak ver ve aşağıdaki yönergeleri KESİNLİKLE takip et:\n\n`;
    prompt += `1. **Metinsel Analiz:** Soruyu detaylı bir şekilde analiz et ve Markdown formatında yanıtla.\n`;
    prompt += `2. **Grafik Verileri:** Lütfen grafik veri bloklarını [GRAFIK_TIPI] etiketi içine type ve data nesnesi olarak ayrı ayrı ver. Eğer ilgiliyse, metinsel analizin içine, tam olarak belirtildiği gibi, [GRAFIK_TIPI] ve [/GRAFIK_TIPI] etiketleri arasına Chart.js uyumlu JSON verilerini ekle. Bu JSON bloklarını değiştirmeden veya atlamadan çıktıya dahil et. JSON verilerindeki 'data' dizilerini ANALİZİNE UYGUN GERÇEKÇİ SAYISAL DEĞERLERLE doldur.\n\n`;

    if (questionType === 'performance') {
      prompt += `## Performans Analizi: ${context.question} ${season} Sezonu\n\n`;
      prompt += `1. **Genel Değerlendirme:** Oyuncunun/takımın genel performans özeti.\n\n`;
      prompt += `2. **Saldırı İstatistikleri:**\n`;
      prompt += `   - **Goller:** Toplam gol sayısı.\n`;
      prompt += `   - **Şutlar:** Toplam şut sayısı ve isabet oranı.\n`;
      prompt += `   - **Gol Beklentisi (xG):** Yaratılan gol pozisyonlarının kalitesi.\n\n`;
      prompt += `[GRAFIK_TIPI]pie
{
  "labels": ["Goller", "Asistler", "Beklenen Goller (xG)", "Beklenen Asistler (xA)"],
  "datasets": [{
    "label": "Hücum Katkısı",
    "data": [], // AI bu diziyi dolduracak
    "backgroundColor": ["#4CAF50", "#2196F3", "#FFC107", "#9C27B0"],
    "borderColor": ["#4CAF50", "#2196F3", "#FFC107", "#9C27B0"],
    "borderWidth": 1
  }]
}
[/GRAFIK_TIPI]

`;
      prompt += `[GRAFIK_TIPI]bar
{
  "labels": ["Maç Başına Şut", "Maç Başına İsabetli Şut", "Maç Başına Pas", "Maç Başına Anahtar Pas"],
  "datasets": [{
    "label": "Hücum İstatistikleri Ortalaması",
    "data": [], // AI bu diziyi dolduracak
    "backgroundColor": "rgba(75, 192, 192, 0.8)",
    "borderColor": "rgb(75, 192, 192)",
    "borderWidth": 1
  }]
}
[/GRAFIK_TIPI]

`;
      prompt += `3. **Pas İstatistikleri:**\n`;
      prompt += `   - **Pas Başarı Oranı:** Toplam pasların yüzde kaçı başarılı.\n`;
      prompt += `   - **Anahtar Paslar:** Golle sonuçlanabilecek paslar.\n`;
      prompt += `   - **Pas Haritası (Kısa/Orta/Uzun):** Pasların dağılımı.\n\n`;
      prompt += `[GRAFIK_TIPI]bar
{
  "labels": ["Başarılı Paslar", "Pas Başarı Oranı (%)", "Anahtar Paslar"],
  "datasets": [{
    "label": "Pas İstatistikleri",
    "data": [], // AI bu diziyi dolduracak
    "backgroundColor": "rgba(153, 102, 255, 0.8)",
    "borderColor": "rgb(153, 102, 255)",
    "borderWidth": 1
  }]
}
[/GRAFIK_TIPI]

`;
      prompt += `4. **Savunma İstatistikleri:**\n`;
      prompt += `   - **Top Kapma:** Başarılı top kapma sayısı.\n`;
      prompt += `   - **Müdahale:** Başarılı müdahale sayısı.\n`;
      prompt += `   - **Hava Topu Mücadelesi:** Hava toplarındaki başarı oranı.\n\n`;
      prompt += `[GRAFIK_TIPI]radar
{
  "labels": ["Top Kapma", "Müdahale", "Blok", "Hava Hakimiyeti", "Disiplin"],
  "datasets": [{
    "label": "Savunma Performansı",
    "data": [], // AI bu diziyi dolduracak
    "backgroundColor": "rgba(255, 99, 132, 0.2)",
    "borderColor": "rgb(255, 99, 132)",
    "pointBackgroundColor": "rgb(255, 99, 132)",
    "pointBorderColor": "#fff",
    "pointHoverBackgroundColor": "#fff",
    "pointHoverBorderColor": "rgb(255, 99, 132)"
  }]
}
[/GRAFIK_TIPI]

`;
      prompt += `5. **Form Trendi:** Son 5-10 maçtaki performansın grafiksel gösterimi.\n\n`;
      prompt += `[GRAFIK_TIPI]line
{
  "labels": ["Maç 1", "Maç 2", "Maç 3", "Maç 4", "Maç 5"],
  "datasets": [{
    "label": "Performans Puanı (1-10)",
    "data": [], // AI bu diziyi dolduracak
    "borderColor": "rgb(54, 162, 235)",
    "backgroundColor": "rgba(54, 162, 235, 0.2)",
    "tension": 0.4
  }]
}
[/GRAFIK_TIPI]

`;
      prompt += `6. **Teknik Analiz:** Oyuncunun/takımın oyun stili, yetenekleri ve sahadaki rolü hakkında detaylı yorum.\n\n`;
      prompt += `7. **Genel Yorum ve Öneriler:** Analizin genel değerlendirmesi ve gelecek performans için öneriler.\n\n`;
    } else if (questionType === 'comparison') {
      prompt += `## Karşılaştırmalı Analiz: ${context.question} ${season} Sezonu\n\n`;
      prompt += `1. **Genel Bakış:** Karşılaştırılan oyuncuların/takımların kısa tanıtımı.\n\n`;
      prompt += `2. **Temel İstatistiklerin Karşılaştırılması:** Gol, asist, şut, pas vb. ana istatistiklerin karşılaştırılması.\n\n`;
      prompt += `[GRAFIK_TIPI]bar
{
  "labels": ["Oyuncu 1 Gol", "Oyuncu 2 Gol", "Oyuncu 1 Asist", "Oyuncu 2 Asist"],
  "datasets": [
    {
      "label": "Oyuncu 1",
      "data": [], // AI bu diziyi dolduracak
      "backgroundColor": ["#4CAF50", "#2196F3", "#4CAF50", "#2196F3"],
      "borderColor": ["#4CAF50", "#2196F3", "#4CAF50", "#2196F3"],
      "borderWidth": 1
    },
    {
      "label": "Oyuncu 2",
      "data": [], // AI bu diziyi dolduracak
      "backgroundColor": ["#FFC107", "#9C27B0", "#FFC107", "#9C27B0"],
      "borderColor": ["#FFC107", "#9C27B0", "#FFC107", "#9C27B0"],
      "borderWidth": 1
    }
  ]
}
[/GRAFIK_TIPI]

`;
      prompt += `3. **Teknik ve Taktik Karşılaştırma:** Oyun stilleri, güçlü/zayıf yönleri ve sahadaki rolleri açısından detaylı karşılaştırma.\n\n`;
      prompt += `[GRAFIK_TIPI]radar
{
  "labels": ["Hız", "Şut", "Pas", "Dribling", "Fizik", "Savunma"],
  "datasets": [
    {
      "label": "Oyuncu 1",
      "data": [], // AI bu diziyi dolduracak
      "backgroundColor": "rgba(59, 130, 246, 0.2)",
      "borderColor": "rgb(59, 130, 246)",
      "pointBackgroundColor": "rgb(59, 130, 246)",
      "pointBorderColor": "#fff",
      "pointHoverBackgroundColor": "#fff",
      "pointHoverBorderColor": "rgb(59, 130, 246)"
    },
    {
      "label": "Oyuncu 2",
      "data": [], // AI bu diziyi dolduracak
      "backgroundColor": "rgba(34, 197, 94, 0.2)",
      "borderColor": "rgb(34, 197, 94)",
      "pointBackgroundColor": "rgb(34, 197, 94)",
      "pointBorderColor": "#fff",
      "pointHoverBackgroundColor": "#fff",
      "pointHoverBorderColor": "rgb(34, 197, 94)"
    }
  ]
}
[/GRAFIK_TIPI]

`;
      prompt += `4. **Detaylı Analiz:** Performans metriklerindeki önemli farklar ve benzerlikler.\n\n`;
      prompt += `5. **Sonuç ve Öngörüler:** Hangi oyuncunun/takımın belirli durumlarda daha avantajlı olduğu ve gelecekteki potansiyelleri.\n\n`;
    } else if (questionType === 'tactical') {
      prompt += `## Taktik Analiz: ${context.question} ${season} Sezonu\n\n`;
      prompt += `1. **Oyun Stratejisi ve Formasyon:** Takımın tercih ettiği oyun sistemi ve ana taktiksel yaklaşım.\n\n`;
      prompt += `2. **Güçlü Yönler:** Takımın başarılı olduğu alanlar (örn. hücum varyasyonları, topa sahip olma, savunma disiplini).\n\n`;
      prompt += `3. **Zayıf Yönler:** Takımın geliştirilmesi gereken alanlar (örn. kontralara açıklık, hava topu zaafiyeti, pas hataları).\n\n`;
      prompt += `[GRAFIK_TIPI]bar
{
  "labels": ["Topa Sahip Olma (%%)", "Atılan Gol", "Yenen Gol", "Şut İsabeti (%%)", "Pas Başarısı (%%)"],
  "datasets": [{
    "label": "Takım Performansı",
    "data": [], // AI bu diziyi dolduracak
    "backgroundColor": "rgba(255, 206, 86, 0.8)",
    "borderColor": "rgb(255, 206, 86)",
    "borderWidth": 1
  }]
}
[/GRAFIK_TIPI]

`;
      prompt += `4. **Öneriler:** Takımın performansını artırmak için taktiksel öneriler ve olası değişiklikler.\n\n`;
    }

    prompt += `Lütfen yanıtını teknik terimleri açıklayarak ve detaylı bir şekilde ver.`;

    return prompt;
  }
}

// Singleton instance
export const promptEngine = new PromptEngine(); 