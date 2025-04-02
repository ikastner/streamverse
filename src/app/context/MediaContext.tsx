'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

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

interface MediaContextType {
  tracks: Track[];
  playlists: Playlist[];
  albums: Album[];
  artists: Artist[];
  addArtist: (artist: Omit<Artist, 'id'>) => void;
  updateArtist: (id: string, artist: Partial<Artist>) => void;
  deleteArtist: (id: string) => void;
  addAlbum: (album: Omit<Album, 'id'>) => void;
  updateAlbum: (id: string, album: Partial<Album>) => void;
  deleteAlbum: (id: string) => void;
}

const initialData = {
  tracks: [
    {
      id: '1',
      title: 'Shape of You',
      artist: 'Ed Sheeran',
      album: '÷ (Divide)',
      duration: '3:53',
      image: '/images/album-cover-1.jpg'
    },
    {
      id: '2',
      title: 'Blinding Lights',
      artist: 'The Weeknd',
      album: 'After Hours',
      duration: '3:20',
      image: '/images/album-cover-2.jpg'
    },
  ],
  playlists: [
    {
      id: '3',
      title: 'Découverte de la semaine',
      description: 'Nouveaux titres et artistes pour vous',
      image: '/images/playlist-1.jpg'
    },
    {
      id: '4',
      title: 'Top 50 - France',
      description: 'Les 50 titres les plus écoutés en France',
      image: '/images/playlist-2.jpg'
    },
  ],
  albums: [
    {
      id: '5',
      title: 'Destin',
      artist: 'Ninho',
      year: '2019',
      image: '/images/album-cover-3.jpg'
    },
    {
      id: '6',
      title: 'Dans ma paranoïa',
      artist: 'Jul',
      year: '2014',
      image: '/images/album-cover-4.jpg'
    },
    {
      id: '7',
      title: 'GOAT',
      artist: 'Ninho, Niska',
      year: '2024',
      image: '/images/album-cover-5.jpg'
    },
    {
      id: '8',
      title: 'Album gratuit',
      artist: 'Jul',
      year: '2016',
      image: '/images/album-cover-6.jpg'
    },
    {
      id: '9',
      title: 'Inarrêtable',
      artist: 'Jul',
      year: '2024',
      image: '/images/album-cover-7.jpg'
    }
  ],
  artists: [
    {
      id: '10',
      name: 'Lartiste',
      image: '/images/artist-1.jpg'
    },
    {
      id: '11',
      name: 'Fayé',
      image: '/images/artist-2.jpg'
    },
    {
      id: '12',
      name: 'Sean Paul',
      image: '/images/artist-3.jpg'
    },
    {
      id: '13',
      name: 'Damso',
      image: '/images/artist-4.jpg'
    },
    {
      id: '14',
      name: 'Dadju',
      image: '/images/artist-5.jpg'
    },
    {
      id: '15',
      name: 'Ninho',
      image: '/images/artist-6.jpg'
    },
    {
      id: '16',
      name: '2Pac',
      image: '/images/artist-7.jpg'
    }
  ]
};

const MediaContext = createContext<MediaContextType | undefined>(undefined);

export const MediaProvider = ({ children }: { children: ReactNode }) => {
  const [tracks, setTracks] = useState<Track[]>(initialData.tracks);
  const [playlists, setPlaylists] = useState<Playlist[]>(initialData.playlists);
  const [albums, setAlbums] = useState<Album[]>(initialData.albums);
  const [artists, setArtists] = useState<Artist[]>(initialData.artists);

  const addArtist = (artist: Omit<Artist, 'id'>) => {
    const newArtist = {
      ...artist,
      id: Date.now().toString(),
    };
    setArtists((prevArtists) => [...prevArtists, newArtist]);
  };

  const updateArtist = (id: string, artist: Partial<Artist>) => {
    setArtists((prevArtists) =>
      prevArtists.map((a) => (a.id === id ? { ...a, ...artist } : a))
    );
  };

  const deleteArtist = (id: string) => {
    setArtists((prevArtists) => prevArtists.filter((a) => a.id !== id));
  };

  const addAlbum = (album: Omit<Album, 'id'>) => {
    const newAlbum = {
      ...album,
      id: Date.now().toString(),
    };
    setAlbums((prevAlbums) => [...prevAlbums, newAlbum]);
  };

  const updateAlbum = (id: string, album: Partial<Album>) => {
    setAlbums((prevAlbums) =>
      prevAlbums.map((a) => (a.id === id ? { ...a, ...album } : a))
    );
  };

  const deleteAlbum = (id: string) => {
    setAlbums((prevAlbums) => prevAlbums.filter((a) => a.id !== id));
  };

  return (
    <MediaContext.Provider
      value={{
        tracks,
        playlists,
        albums,
        artists,
        addArtist,
        updateArtist,
        deleteArtist,
        addAlbum,
        updateAlbum,
        deleteAlbum,
      }}
    >
      {children}
    </MediaContext.Provider>
  );
};

export const useMedia = () => {
  const context = useContext(MediaContext);
  if (context === undefined) {
    throw new Error('useMedia must be used within a MediaProvider');
  }
  return context;
}; 