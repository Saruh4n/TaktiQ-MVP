import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ToastProvider } from '@/components/ToastProvider';
import { ThemeToggle } from '@/components/ThemeToggle';
import Link from 'next/link';
import { Trophy, BarChart3 } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TaktiQ - Futbol İstatistikleri Analiz Platformu',
  description: 'Detaylı futbolcu ve takım istatistiklerini keşfedin, karşılaştırın ve analiz edin.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ToastProvider>
            <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm">
              <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">TaktiQ</span>
                    <Link href="/team-analysis" className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors">
                      Takım Analizi
                    </Link>
                    <Link href="/player-analysis" className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors">
                      Oyuncu Analizi
                    </Link>
                    <Link href="/live-matches" className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors">
                      Canlı Maçlar
                    </Link>
                    <Link href="/breaking-news" className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors">
                      Son Dakika
                    </Link>
                  </div>
                </Link>
                <div className="flex items-center space-x-4">
                  <ThemeToggle />
                  {/* <button className="btn-secondary">Giriş Yap</button> */}
                </div>
              </div>
            </header>
            <main>{children}</main>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
} 