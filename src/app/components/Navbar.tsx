'use client';

import { ChevronLeft, ChevronRight, Search, Bell, User, BookOpen } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-black/95 h-16 flex items-center justify-between px-6 z-50">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-full bg-black/70 hover:bg-black/90 transition">
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button className="p-2 rounded-full bg-black/70 hover:bg-black/90 transition">
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
        <div className="flex items-center bg-white/10 rounded-full w-96 p-3">
          <Search className="w-5 h-5 text-white" />
          <input
            type="text"
            placeholder="Artistes, titres ou podcasts"
            className="bg-transparent text-white border-none outline-none ml-2 w-full placeholder-gray-400"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <Link href="/gestion" className="flex items-center gap-2 bg-black/70 hover:bg-black/90 px-3 py-2 rounded-full transition">
          <BookOpen className="w-5 h-5 text-white" />
          <span className="text-white text-sm">Bibliothèque</span>
        </Link>
        <button className="text-white hover:scale-105 transition">
          <Bell className="w-6 h-6" />
        </button>
        <button className="flex items-center gap-2 bg-black/70 hover:bg-black/90 px-2 py-1 rounded-full transition">
          <User className="w-6 h-6 text-white" />
          <span className="text-white text-sm">Profil</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 