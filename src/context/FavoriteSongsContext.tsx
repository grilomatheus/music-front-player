import React, { createContext, useState, useEffect, useContext } from 'react';

interface FavoriteSongsContextProps {
  favorites: number[];
  toggleFavorite: (id: number) => void;
}

const FavoriteSongsContext = createContext<FavoriteSongsContextProps | undefined>(undefined);

export const useFavoriteSongs = (): FavoriteSongsContextProps => {
  const context = useContext(FavoriteSongsContext);
  if (!context) {
    throw new Error('useFavoriteSongs must be used within a FavoriteSongsProvider');
  }
  return context;
};

export const FavoriteSongsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(storedFavorites);
  }, []);

  const toggleFavorite = (id: number) => {
    let updatedFavorites = [];
    if (favorites.includes(id)) {
      updatedFavorites = favorites.filter(favId => favId !== id);
    } else {
      updatedFavorites = [...favorites, id];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <FavoriteSongsContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoriteSongsContext.Provider>
  );
};
