'use client';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import CategorySection from './components/CategorySection';
import Player from './components/Player';
import { useMedia } from './context/MediaContext';

export default function Home() {
  const { tracks: recentlyPlayed, playlists, albums, artists } = useMedia();

  return (
    <main className="bg-zinc-900 min-h-screen pb-24">
      <Navbar />
      <Sidebar />
      <div className="pl-64 pt-16">
        <div className="p-8">
          <CategorySection
            title="Écoutés récemment"
            items={recentlyPlayed}
            type="tracks"
          />
          <CategorySection
            title="Artistes"
            items={artists}
            type="artists"
          />
          <CategorySection
            title="Albums"
            items={albums}
            type="albums"
          />
          
          <CategorySection
            title="Playlists pour vous"
            items={playlists}
            type="playlists"
          />
        </div>
      </div>
      <Player />
    </main>
  );
}
