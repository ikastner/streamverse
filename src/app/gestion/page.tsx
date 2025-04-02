'use client';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Player from '../components/Player';
import ManageSection from '../components/ManageSection';

export default function GestionPage() {
  return (
    <main className="bg-zinc-900 min-h-screen pb-24">
      <Navbar />
      <Sidebar />
      <div className="pl-64 pt-16">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white">Gestion de la bibliothèque</h1>
            <p className="text-gray-400 mt-2">
              Ajoutez, modifiez ou supprimez des artistes et des albums
            </p>
          </div>
          
          <ManageSection />
        </div>
      </div>
      <Player />
    </main>
  );
} 