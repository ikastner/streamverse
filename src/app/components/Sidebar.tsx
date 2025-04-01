'use client';

import { Home, Dumbbell, Heart, Trophy, Calendar } from 'lucide-react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-black p-6">
      <div className="flex flex-col h-full">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white">SportVerse</h1>
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
              <Link href="/workouts" className="flex items-center text-gray-400 hover:text-white">
                <Dumbbell className="w-6 h-6 mr-3" />
                Entraînements
              </Link>
            </li>
            <li>
              <Link href="/favorites" className="flex items-center text-gray-400 hover:text-white">
                <Heart className="w-6 h-6 mr-3" />
                Favoris
              </Link>
            </li>
            <li>
              <Link href="/challenges" className="flex items-center text-gray-400 hover:text-white">
                <Trophy className="w-6 h-6 mr-3" />
                Défis
              </Link>
            </li>
            <li>
              <Link href="/planning" className="flex items-center text-gray-400 hover:text-white">
                <Calendar className="w-6 h-6 mr-3" />
                Planning
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar; 