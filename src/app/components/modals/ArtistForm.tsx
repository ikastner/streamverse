'use client';

import { useState } from 'react';
import { useMedia } from '../../context/MediaContext';

interface ArtistFormProps {
  onClose: () => void;
  editArtist?: {
    id: string;
    name: string;
    image: string;
  };
}

const ArtistForm = ({ onClose, editArtist }: ArtistFormProps) => {
  const { addArtist, updateArtist } = useMedia();
  const [name, setName] = useState(editArtist?.name || '');
  const [image, setImage] = useState(editArtist?.image || '/images/artist-placeholder.jpg');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editArtist) {
      updateArtist(editArtist.id, { name, image });
    } else {
      addArtist({ name, image });
    }
    
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-zinc-800 rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold text-white mb-4">
          {editArtist ? 'Modifier un artiste' : 'Ajouter un nouvel artiste'}
        </h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-300 mb-2">
              Nom
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img 
                  src={image} 
                  alt="Aperçu" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/artist-placeholder.jpg';
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
              {editArtist ? 'Mettre à jour' : 'Ajouter'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ArtistForm; 