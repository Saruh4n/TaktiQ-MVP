import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ToastProvider } from '@/components/ToastProvider';
import Link from 'next/link';

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
                  <span className="text-xl font-bold text-primary dark:text-primary">TaktiQ</span>
                </Link>
                <nav className="flex-1 items-center space-x-4 md:space-x-6">
                  <Link href="/players" className="nav-link">Oyuncular</Link>
                  <Link href="/compare" className="nav-link">Karşılaştır</Link>
                  <Link href="/teams" className="nav-link">Takımlar</Link>
                  <Link href="/ai-chat" className="nav-link">AI Chat</Link>
                </nav>
                <div className="flex items-center space-x-4">
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