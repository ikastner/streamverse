'use client';

import { Search, Bell, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-black/95 h-16 flex items-center justify-between px-6 z-50">
      <div className="flex items-center bg-white/10 rounded-full w-96 p-3">
        <Search className="w-5 h-5 text-white" />
        <input
          type="text"
          placeholder="Rechercher des entraînements, exercices..."
          className="bg-transparent text-white border-none outline-none ml-2 w-full"
        />
      </div>
      
      <div className="flex items-center gap-4">
        <button className="text-white hover:scale-105 transition">
          <Bell className="w-6 h-6" />
        </button>
        <button className="bg-white/10 p-1 rounded-full hover:scale-105 transition">
          <User className="w-6 h-6 text-white" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 