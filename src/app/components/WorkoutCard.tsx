'use client';

import { Play, Pause, Heart } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface MusicCardProps {
  title: string;
  category: string;
  duration: string;
  image: string;
}

const MusicCard = ({ title, category, duration, image }: MusicCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [imageError, setImageError] = useState(false);

  const defaultImage = '/images/default-album.jpg';

  return (
    <div className="group relative bg-zinc-800/50 rounded-md p-4 hover:bg-zinc-800 transition cursor-pointer">
      <div className="relative aspect-square w-full mb-4">
        <Image
          src={imageError ? defaultImage : image}
          alt={title}
          fill
          className="object-cover rounded-md"
          onError={() => setImageError(true)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="absolute bottom-2 right-2 p-3 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition transform translate-y-2 group-hover:translate-y-0 hover:scale-105"
        >
          {isPlaying ? (
            <Pause fill="white" className="w-5 h-5 text-white" />
          ) : (
            <Play fill="white" className="w-5 h-5 text-white" />
          )}
        </button>
      </div>
      <div className="space-y-1">
        <h3 className="text-white font-semibold truncate">{title}</h3>
        <p className="text-sm text-gray-400 truncate">{category}</p>
        <div className="flex items-center justify-between">
          <button className="text-gray-400 hover:text-white transition">
            <Heart className="w-4 h-4" />
          </button>
          <span className="text-sm text-gray-400">{duration}</span>
        </div>
      </div>
    </div>
  );
};

export default MusicCard; 