'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

export default function PlayerSearch() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log('Searching for:', searchTerm);
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-md mx-auto mb-8">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Oyuncu adı veya takımı ile arama yapın..."
          className="w-full px-5 py-3 pl-12 pr-4 text-gray-800 bg-white border border-gray-300 rounded-full shadow-sm dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <Search className="w-5 h-5 text-gray-400 dark:text-gray-400" />
        </div>
      </div>
    </form>
  );
} 