'use client';

import { Home, Search, Library, Plus, Heart, Download } from 'lucide-react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-black p-6">
      <div className="flex flex-col h-full">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white">StreamVerse</h1>
        </div>

        <nav className="flex-1">
          <ul className="space-y-4">
            <li>
              <Link href="/" className="flex items-center text-white hover:text-green-500">
                <Home className="w-6 h-6 mr-3" />
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/search" className="flex items-center text-gray-400 hover:text-white">
                <Search className="w-6 h-6 mr-3" />
                Rechercher
              </Link>
            </li>
            <li>
              <Link href="/library" className="flex items-center text-gray-400 hover:text-white">
                <Library className="w-6 h-6 mr-3" />
                Bibliothèque
              </Link>
            </li>
          </ul>

          <div className="mt-8">
            <button className="flex items-center text-gray-400 hover:text-white mb-4">
              <Plus className="w-6 h-6 mr-3" />
              Créer une playlist
            </button>
            <button className="flex items-center text-gray-400 hover:text-white mb-4">
              <Heart className="w-6 h-6 mr-3" />
              Titres likés
            </button>
            <button className="flex items-center text-gray-400 hover:text-white">
              <Download className="w-6 h-6 mr-3" />
              Téléchargements
            </button>
          </div>

          <div className="mt-8">
            <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Playlists
            </h2>
            <ul className="space-y-2">
              <li>
                <Link href="/playlist/1" className="text-gray-400 hover:text-white text-sm">
                  Découverte de la semaine
                </Link>
              </li>
              <li>
                <Link href="/playlist/2" className="text-gray-400 hover:text-white text-sm">
                  Top 50 - France
                </Link>
              </li>
              <li>
                <Link href="/playlist/3" className="text-gray-400 hover:text-white text-sm">
                  Mix quotidien
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar; 