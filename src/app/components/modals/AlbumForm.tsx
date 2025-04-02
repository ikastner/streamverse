'use client';

import { useState } from 'react';
import { useMedia } from '../../context/MediaContext';

interface AlbumFormProps {
  onClose: () => void;
  editAlbum?: {
    id: string;
    title: string;
    artist: string;
    year: string;
    image: string;
  };
}

const AlbumForm = ({ onClose, editAlbum }: AlbumFormProps) => {
  const { addAlbum, updateAlbum, artists } = useMedia();
  const [title, setTitle] = useState(editAlbum?.title || '');
  const [artist, setArtist] = useState(editAlbum?.artist || '');
  const [year, setYear] = useState(editAlbum?.year || new Date().getFullYear().toString());
  const [image, setImage] = useState(editAlbum?.image || '/images/album-placeholder.jpg');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editAlbum) {
      updateAlbum(editAlbum.id, { title, artist, year, image });
    } else {
      addAlbum({ title, artist, year, image });
    }
    
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-zinc-800 rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold text-white mb-4">
          {editAlbum ? 'Modifier un album' : 'Ajouter un nouvel album'}
        </h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-300 mb-2">
              Titre
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 bg-zinc-700 border border-zinc-600 rounded text-white"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="artist" className="block text-gray-300 mb-2">
              Artiste
            </label>
            <select
              id="artist"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
              className="w-full p-2 bg-zinc-700 border border-zinc-600 rounded text-white"
              required
            >
              <option value="">Sélectionner un artiste</option>
              {artists.map((a) => (
                <option key={a.id} value={a.name}>
                  {a.name}
                </option>
              ))}
              <option value="custom">Personnalisé...</option>
            </select>
            {artist === 'custom' && (
              <input
                type="text"
                value=""
                onChange={(e) => setArtist(e.target.value)}
                className="w-full mt-2 p-2 bg-zinc-700 border border-zinc-600 rounded text-white"
                placeholder="Nom de l'artiste"
                required
              />
            )}
          </div>
          
          <div className="mb-4">
            <label htmlFor="year" className="block text-gray-300 mb-2">
              Année
            </label>
            <input
              type="text"
              id="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="w-full p-2 bg-zinc-700 border border-zinc-600 rounded text-white"
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="image" className="block text-gray-300 mb-2">
              URL de l'image
            </label>
            <input
              type="text"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full p-2 bg-zinc-700 border border-zinc-600 rounded text-white"
              required
            />
            <div className="mt-2 flex justify-center">
              <div className="w-24 h-24 overflow-hidden">
                <img 
                  src={image} 
                  alt="Aperçu" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/album-placeholder.jpg';
                  }}
                />
              </div>
            </div>
          </div>
          
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-zinc-600 hover:bg-zinc-500 rounded text-white"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded text-white"
            >
              {editAlbum ? 'Mettre à jour' : 'Ajouter'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AlbumForm; 