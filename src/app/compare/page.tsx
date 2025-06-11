'use client';

import { useState, useEffect } from 'react';
import { Player } from '@/types';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import Select from 'react-select'; // Assuming you install react-select or use a similar library
import { XCircle } from 'lucide-react';

// Define custom styles for react-select
const selectStyles = {
  control: (baseStyles: any, state: { isFocused: any; }) => ({
    ...baseStyles,
    backgroundColor: 'var(--background)', // Use CSS variable
    borderColor: state.isFocused ? 'var(--primary)' : 'var(--secondary)', // Use CSS variables
    boxShadow: state.isFocused ? '0 0 0 1px var(--primary)' : 'none',
    '&:hover': {
      borderColor: 'var(--primary)',
    },
    borderRadius: '0.5rem',
    padding: '0.25rem', // Reduced padding
    color: 'var(--text)', // Use CSS variable
  }),
  input: (baseStyles: any) => ({
    ...baseStyles,
    color: 'var(--text)', // Use CSS variable
  }),
  singleValue: (baseStyles: any) => ({
    ...baseStyles,
    color: 'var(--text)', // Use CSS variable
  }),
  placeholder: (baseStyles: any) => ({
    ...baseStyles,
    color: 'var(--text)', // Use CSS variable
    opacity: 0.7,
  }),
  menu: (baseStyles: any) => ({
    ...baseStyles,
    backgroundColor: 'var(--background)', // Use CSS variable
    border: '1px solid var(--secondary)', // Use CSS variable
    borderRadius: '0.5rem',
  }),
  option: (baseStyles: any, state: { isSelected: any; isFocused: any; }) => ({
    ...baseStyles,
    backgroundColor: state.isSelected
      ? 'var(--primary)'
      : state.isFocused
      ? 'var(--secondary)'
      : 'var(--background)', // Use CSS variables
    color: state.isSelected ? 'white' : 'var(--text)', // Use CSS variable
    '&:active': {
      backgroundColor: 'var(--primary)',
      color: 'white',
    },
  }),
  multiValue: (baseStyles: any) => ({
    ...baseStyles,
    backgroundColor: 'var(--secondary)', // Use CSS variable
    borderRadius: '0.25rem',
  }),
  multiValueLabel: (baseStyles: any) => ({
    ...baseStyles,
    color: 'var(--text)', // Use CSS variable
  }),
  multiValueRemove: (baseStyles: any) => ({
    ...baseStyles,
    color: 'var(--text)', // Use CSS variable
    '&:hover': {
      backgroundColor: 'var(--accent)',
      color: 'white',
    },
  }),
};



export default function ComparePage() {
  const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([]);
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch('/api/players');
        if (!response.ok) throw new Error('Failed to fetch players');
        const data = await response.json();
        setPlayers(data);
      } catch (err) {
        console.error('Error fetching players:', err);
        setError(err instanceof Error ? err.message : 'Oyuncular yüklenirken bir hata oluştu');
      } finally {
        setLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  const handlePlayerSelect = (selectedOption: any) => {
    if (selectedOption && selectedPlayers.length < 3) {
      const player = players.find(p => p._id === selectedOption.value);
      if (player && !selectedPlayers.some(p => p._id === player._id)) {
        setSelectedPlayers([...selectedPlayers, player]);
      }
    }
  };

  const handleRemovePlayer = (playerId: string) => {
    setSelectedPlayers(selectedPlayers.filter(p => p._id !== playerId));
  };

  // Prepare data for react-select
  const playerOptions = players
    .filter(player => !selectedPlayers.some(p => p._id === player._id)) // Exclude already selected players
    .map(player => ({
      value: player._id,
      label: `${player.name} (${player.team})`,
    }));

  // Prepare data for radar chart
  // Use a default structure if no players selected to keep the chart structure consistent
  const radarDataTemplate = [
    { subject: 'Gol', A: 0 },
    { subject: 'Asist', A: 0 },
    { subject: 'Maç', A: 0 },
    { subject: 'Pas %', A: 0 },
  ];

  const radarData = selectedPlayers.length > 0
    ? selectedPlayers.reduce((acc: any[], player) => {
        const playerStats = [
          { subject: 'Gol', [player.name]: player.stats.goals },
          { subject: 'Asist', [player.name]: player.stats.assists },
          { subject: 'Maç', [player.name]: player.stats.matches },
          { subject: 'Pas %', [player.name]: player.stats.passAccuracy },
        ];

        if (acc.length === 0) {
          return playerStats;
        } else {
          return acc.map((item, index) => ({
            ...item,
            ...playerStats[index],
          }));
        }
      }, [])
    : radarDataTemplate;
    
    // Determine max values for radar chart to scale correctly
    const maxStats = radarData.reduce((max, item) => {
      Object.keys(item).forEach(key => {
        if (key !== 'subject') {
          max[key] = Math.max(max[key] || 0, item[key]);
        }
      });
      return max;
    }, {});

    // Add max values to the data for consistent scaling
    const finalRadarData = radarData.map(item => ({
        ...item,
        ...maxStats
    }));


  if (loading) return <div className="text-center py-8"><div className="loading-spinner"></div></div>;
  if (error) return <div className="text-center py-8 text-red-500 dark:text-red-400">{error}</div>;


  return (
    <main className="container mx-auto px-4 py-12 md:py-16">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-gray-800 dark:text-white"
      >
        Oyuncu Karşılaştırma
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        className="mb-8 max-w-lg mx-auto"
      >
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Karşılaştırılacak Oyuncuları Seçin (Max 3)</h2>
        <Select
          options={playerOptions}
          onChange={handlePlayerSelect}
          placeholder="Oyuncu seçin..."
          isClearable={true}
          isDisabled={selectedPlayers.length >= 3 || loading}
          styles={selectStyles}
        />
      </motion.div>

      {selectedPlayers.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {selectedPlayers.map((player) => (
            <motion.div
              key={player._id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 relative"
            >
              <button
                onClick={() => handleRemovePlayer(player._id)}
                className="absolute top-3 right-3 text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors duration-200"
                aria-label="Remove player"
              >
                <XCircle size={20} />
              </button>
              <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">{player.name}</h2>
              <div className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <p><span className="font-medium">Pozisyon:</span> {player.position}</p>
                <p><span className="font-medium">Yaş:</span> {player.age}</p>
                <p><span className="font-medium">Takım:</span> {player.team}</p>
                <p><span className="font-medium">Ülke:</span> {player.country}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {selectedPlayers.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white text-center">İstatistik Karşılaştırması</h2>
          <div className="w-full h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={finalRadarData}>
                <PolarGrid stroke="#e2e8f0" className="dark:stroke-gray-700" />
                <PolarAngleAxis dataKey="subject" stroke="#718096" tick={{ fill: 'var(--text)', fontSize: 12 }} /> {/* Use CSS variable */}
                <PolarRadiusAxis angle={30} domain={[0, 'auto']} stroke="#718096" tick={{ fill: 'var(--text)', fontSize: 12 }} /> {/* Use CSS variable */}
                {selectedPlayers.map((player, index) => (
                  <Radar
                    key={player._id}
                    name={player.name}
                    dataKey={player.name} // Use player name as dataKey
                    stroke={`hsl(${index * 100}, 70%, 50%)`}
                    fill={`hsla(${index * 100}, 70%, 50%, 0.2)`}
                    strokeWidth={2}
                    dot={true}
                    isAnimationActive={false} // Disable animation to prevent issues with dynamic data
                  />
                ))}
                <Legend wrapperStyle={{ paddingTop: '20px' }} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      )}
    </main>
  );
}
