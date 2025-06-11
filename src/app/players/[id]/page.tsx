'use client';

import { useEffect, useState } from 'react';
import { Player } from '@/types';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function PlayerDetailPage() {
  const params = useParams();
  const [player, setPlayer] = useState<Player | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const response = await fetch(`/api/players/${params.id}`);
        if (!response.ok) {
          throw new Error('Oyuncu bilgileri yüklenirken bir hata oluştu');
        }
        const data = await response.json();
        setPlayer(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Bir hata oluştu');
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchPlayer();
    }
  }, [params.id]);

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!player) return <div>Oyuncu bulunamadı</div>;

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/players" className="text-blue-500 hover:text-blue-700">
            ← Oyuncu Listesine Dön
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6">{player.name}</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Genel Bilgiler</h2>
              <div className="space-y-2">
                <p><span className="font-medium">Pozisyon:</span> {player.position}</p>
                <p><span className="font-medium">Yaş:</span> {player.age}</p>
                <p><span className="font-medium">Ülke:</span> {player.country}</p>
                <p><span className="font-medium">Takım:</span> {player.team}</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Fiziksel Özellikler</h2>
              <div className="space-y-2">
                <p><span className="font-medium">Boy:</span> {player.physical.height} cm</p>
                <p><span className="font-medium">Kilo:</span> {player.physical.weight} kg</p>
                <p><span className="font-medium">Tercih Ettiği Ayak:</span> {player.physical.preferredFoot}</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">İstatistikler</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold">{player.stats.goals}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Gol</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold">{player.stats.assists}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Asist</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold">{player.stats.matches}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Maç</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold">{player.stats.passAccuracy}%</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Pas İsabeti</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 