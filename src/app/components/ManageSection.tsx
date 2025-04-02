'use client';

import { useState } from 'react';
import { useMedia } from '../context/MediaContext';
import ArtistForm from './modals/ArtistForm';
import AlbumForm from './modals/AlbumForm';

const ManageSection = () => {
  const { artists, albums, deleteArtist, deleteAlbum } = useMedia();
  const [showArtistForm, setShowArtistForm] = useState(false);
  const [showAlbumForm, setShowAlbumForm] = useState(false);
  const [editArtist, setEditArtist] = useState<{id: string, name: string, image: string} | undefined>();
  const [editAlbum, setEditAlbum] = useState<{id: string, title: string, artist: string, year: string, image: string} | undefined>();
  const [activeTab, setActiveTab] = useState<'artists' | 'albums'>('artists');

  const handleAddArtist = () => {
    setEditArtist(undefined);
    setShowArtistForm(true);
  };

  const handleEditArtist = (artist: {id: string, name: string, image: string}) => {
    setEditArtist(artist);
    setShowArtistForm(true);
  };

  const handleAddAlbum = () => {
    setEditAlbum(undefined);
    setShowAlbumForm(true);
  };

  const handleEditAlbum = (album: {id: string, title: string, artist: string, year: string, image: string}) => {
    setEditAlbum(album);
    setShowAlbumForm(true);
  };

  return (
    <section className="bg-zinc-800 rounded-lg p-4 mb-8">
      <h2 className="text-xl font-bold text-white mb-4">Gérer la bibliothèque</h2>
      
      <div className="border-b border-zinc-700 mb-4">
        <div className="flex">
          <button 
            onClick={() => setActiveTab('artists')}
            className={`py-2 px-4 font-medium ${activeTab === 'artists' ? 'text-white border-b-2 border-white' : 'text-gray-400 hover:text-white'}`}
          >
            Artistes
          </button>
          <button 
            onClick={() => setActiveTab('albums')}
            className={`py-2 px-4 font-medium ${activeTab === 'albums' ? 'text-white border-b-2 border-white' : 'text-gray-400 hover:text-white'}`}
          >
            Albums
          </button>
        </div>
      </div>
      
      {activeTab === 'artists' && (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-white font-medium">Liste des artistes</h3>
            <button
              onClick={handleAddArtist}
              className="bg-green-600 hover:bg-green-500 text-white py-1 px-3 rounded text-sm"
            >
              + Ajouter un artiste
            </button>
          </div>
          
          <div className="overflow-y-auto max-h-64">
            <table className="w-full text-left text-white">
              <thead className="bg-zinc-700 text-xs uppercase">
                <tr>
                  <th className="py-2 px-4">Nom</th>
                  <th className="py-2 px-4">Image</th>
                  <th className="py-2 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {artists.map((artist) => (
                  <tr key={artist.id} className="border-b border-zinc-700">
                    <td className="py-2 px-4">{artist.name}</td>
                    <td className="py-2 px-4">
                      <div className="w-8 h-8 rounded-full overflow-hidden">
                        <img src={artist.image} alt={artist.name} className="w-full h-full object-cover" />
                      </div>
                    </td>
                    <td className="py-2 px-4">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEditArtist(artist)}
                          className="text-blue-400 hover:text-blue-300"
                        >
                          Modifier
                        </button>
                        <button
                          onClick={() => deleteArtist(artist.id)}
                          className="text-red-400 hover:text-red-300"
                        >
                          Supprimer
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      
      {activeTab === 'albums' && (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-white font-medium">Liste des albums</h3>
            <button
              onClick={handleAddAlbum}
              className="bg-green-600 hover:bg-green-500 text-white py-1 px-3 rounded text-sm"
            >
              + Ajouter un album
            </button>
          </div>
          
          <div className="overflow-y-auto max-h-64">
            <table className="w-full text-left text-white">
              <thead className="bg-zinc-700 text-xs uppercase">
                <tr>
                  <th className="py-2 px-4">Titre</th>
                  <th className="py-2 px-4">Artiste</th>
                  <th className="py-2 px-4">Année</th>
                  <th className="py-2 px-4">Image</th>
                  <th className="py-2 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {albums.map((album) => (
                  <tr key={album.id} className="border-b border-zinc-700">
                    <td className="py-2 px-4">{album.title}</td>
                    <td className="py-2 px-4">{album.artist}</td>
                    <td className="py-2 px-4">{album.year}</td>
                    <td className="py-2 px-4">
                      <div className="w-8 h-8 overflow-hidden">
                        <img src={album.image} alt={album.title} className="w-full h-full object-cover" />
                      </div>
                    </td>
                    <td className="py-2 px-4">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEditAlbum(album)}
                          className="text-blue-400 hover:text-blue-300"
                        >
                          Modifier
                        </button>
                        <button
                          onClick={() => deleteAlbum(album.id)}
                          className="text-red-400 hover:text-red-300"
                        >
                          Supprimer
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      
      {showArtistForm && (
        <ArtistForm onClose={() => setShowArtistForm(false)} editArtist={editArtist} />
      )}
      
      {showAlbumForm && (
        <AlbumForm onClose={() => setShowAlbumForm(false)} editAlbum={editAlbum} />
      )}
    </section>
  );
};

export default ManageSection; 