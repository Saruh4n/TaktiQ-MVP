'use client';

import { useEffect, useState } from 'react';
import { Team } from '@/types';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function TeamsPage() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch('/api/teams');
        if (!response.ok) {
          throw new Error('Takımlar yüklenirken bir hata oluştu');
        }
        const data = await response.json();
        setTeams(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Bir hata oluştu');
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
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
  if (teams.length === 0) return <div className="text-center py-8 text-gray-600 dark:text-gray-400">Hiç takım bulunamadı.</div>;

  return (
    <main className="container mx-auto px-4 py-12 md:py-16">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-gray-800 dark:text-white"
      >
        Tüm Takımlar
      </motion.h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {teams.map((team) => (
          <motion.div key={team._id} variants={itemVariants}>
            <Link
              href={`/teams/${team._id}`}
              className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">{team.name}</h2>
              <div className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <p><span className="font-medium">Lig:</span> {team.league}</p>
                <p><span className="font-medium">Kuruluş:</span> {team.founded}</p>
                <p><span className="font-medium">Stadyum:</span> {team.stadium}</p>
                <p><span className="font-medium">Antrenör:</span> {team.coach}</p>
              </div>
              {/* Takım logosu veya diğer görseller buraya eklenebilir */}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
} 