'use client';

import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Maximize2, Heart} from 'lucide-react';
import { useState } from 'react';


const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 right-0 h-24 bg-zinc-900 border-t border-zinc-800 px-4 flex items-center justify-between">
      {/* Track Info */}
      <div className="flex items-center w-1/3">
        <div className="w-14 h-14 bg-zinc-800 rounded-md mr-4"></div>
        <div>
          <h3 className="text-white text-sm font-medium">Titre de la chanson</h3>
          <p className="text-gray-400 text-xs">Nom de l'artiste</p>
        </div>
        <button className="ml-4 text-gray-400 hover:text-white">
          <Heart className="w-4 h-4" />

        </button>
      </div>

      {/* Player Controls */}
      <div className="flex flex-col items-center w-1/3">
        <div className="flex items-center gap-4">
          <button className="text-gray-400 hover:text-white">
            <SkipBack className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 rounded-full bg-white hover:scale-105 transition"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-black" />
            ) : (
              <Play className="w-5 h-5 text-black" />
            )}
          </button>
          <button className="text-gray-400 hover:text-white">
            <SkipForward className="w-5 h-5" />
          </button>
        </div>
        <div className="flex items-center gap-2 w-full mt-4">
          <span className="text-xs text-gray-400">0:00</span>
          <div className="flex-1 h-1 bg-zinc-700 rounded-full">
            <div className="w-1/3 h-full bg-white rounded-full"></div>
          </div>
          <span className="text-xs text-gray-400">3:45</span>
        </div>
      </div>

      {/* Volume Controls */}
      <div className="flex items-center justify-end w-1/3 gap-4">
        <button 
          onClick={() => setIsMuted(!isMuted)}
          className="text-gray-400 hover:text-white"
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5" />
          ) : (
            <Volume2 className="w-5 h-5" />
          )}
        </button>
        <div className="w-24 h-1 bg-zinc-700 rounded-full">
          <div className="w-1/2 h-full bg-white rounded-full"></div>
        </div>
        <button className="text-gray-400 hover:text-white">
          <Maximize2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Player; 