'use client';

import { useEffect, useState } from 'react';
import { Player } from '@/types';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function PlayerList() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch('/api/players');
        if (!response.ok) {
          throw new Error('Oyuncular yüklenirken bir hata oluştu');
        }
        const data = await response.json();
        setPlayers(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Bir hata oluştu');
      } finally {
        setLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  if (loading) return <div className="text-center py-8"><div className="loading-spinner"></div></div>;
  if (error) return <div className="text-center py-8 text-red-500 dark:text-red-400">{error}</div>;
  if (players.length === 0) return <div className="text-center py-8 text-gray-600 dark:text-gray-400">Hiç oyuncu bulunamadı.</div>;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      {players.map((player) => (
        <motion.div key={player._id} variants={itemVariants}>
          <Link
            href={`/players/${player._id}`}
            className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{player.name}</h2>
            <div className="text-gray-600 dark:text-gray-400 text-sm">
              <p><span className="font-medium">Pozisyon:</span> {player.position}</p>
              <p><span className="font-medium">Yaş:</span> {player.age}</p>
              <p><span className="font-medium">Takım:</span> {player.team}</p>
              <p><span className="font-medium">Ülke:</span> {player.country}</p>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold mb-3 text-gray-700 dark:text-gray-300">İstatistikler</h3>
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-700 dark:text-gray-300">
                <p><span className="font-medium">Gol:</span> {player.stats.goals}</p>
                <p><span className="font-medium">Asist:</span> {player.stats.assists}</p>
                <p><span className="font-medium">Maç:</span> {player.stats.matches}</p>
                <p><span className="font-medium">Pas %:</span> {player.stats.passAccuracy}</p>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
} 