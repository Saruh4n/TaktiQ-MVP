'use client';

import { Suspense } from 'react';
import PlayerList from '@/components/PlayerList';
import PlayerSearch from '@/components/PlayerSearch';
import { motion } from 'framer-motion';

export default function PlayersPage() {
  return (
    <main className="container mx-auto px-4 py-12 md:py-16">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-gray-800 dark:text-white"
      >
        Tüm Oyuncular
      </motion.h1>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        className="mb-12"
      >
        <PlayerSearch />
      </motion.div>
      
      <Suspense fallback={<div className="text-center py-8"><div className="loading-spinner"></div><p className="mt-4 text-gray-600 dark:text-gray-400">Oyuncular yükleniyor...</p></div>}>
        <PlayerList />
      </Suspense>
    </main>
  );
} 