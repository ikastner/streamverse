'use client';

import MusicCard from './WorkoutCard';

interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  image: string;
}

interface Playlist {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface Album {
  id: string;
  title: string;
  artist: string;
  year: string;
  image: string;
}

interface Artist {
  id: string;
  name: string;
  image: string;
}

interface CategorySectionProps {
  title: string;
  items: Track[] | Playlist[] | Album[] | Artist[];
  type: 'tracks' | 'playlists' | 'albums' | 'artists';
}

const CategorySection = ({ title, items, type }: CategorySectionProps) => {
  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <button className="text-sm text-gray-400 hover:text-white transition">
          Voir tout
        </button>
      </div>
      {type === 'artists' ? (
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {items.map((item) => (
            <div key={item.id} className="flex flex-col items-center text-center">
              <div className="rounded-full overflow-hidden w-24 h-24 mb-2">
                <img 
                  src={(item as Artist).image} 
                  alt={(item as Artist).name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-white font-semibold text-sm">{(item as Artist).name}</p>
              <p className="text-gray-400 text-xs">Artiste</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {items.map((item) => (
            <MusicCard
              key={item.id}
              title={
                'name' in item 
                  ? (item as Artist).name 
                  : (item as Track | Playlist | Album).title
              }
              category={
                type === 'tracks' 
                  ? (item as Track).artist 
                  : type === 'playlists' 
                    ? (item as Playlist).description 
                    : `${(item as Album).year} • ${(item as Album).artist}`
              }
              duration={type === 'tracks' ? (item as Track).duration : ''}
              image={item.image}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default CategorySection; 