'use client';

import { Play, Clock } from 'lucide-react';
import Image from 'next/image';

interface WorkoutCardProps {
  title: string;
  category: string;
  duration: string;
  image: string;
}

const WorkoutCard = ({ title, category, duration, image }: WorkoutCardProps) => {
  return (
    <div className="group relative bg-zinc-800 rounded-md overflow-hidden hover:bg-zinc-700 transition cursor-pointer">
      <div className="relative aspect-square w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent h-1/2" />
        <button className="absolute bottom-4 right-4 p-4 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition transform translate-y-2 group-hover:translate-y-0">
          <Play fill="white" className="w-4 h-4 text-white" />
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-white font-semibold truncate">{title}</h3>
        <p className="text-sm text-gray-400 mt-1">{category}</p>
        <div className="flex items-center mt-2 text-gray-400 text-sm">
          <Clock className="w-4 h-4 mr-1" />
          <span>{duration}</span>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard; 