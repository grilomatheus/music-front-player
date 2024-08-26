import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "../src/components/Header/Header";
import MusicList from "../src/components/MusicList/MusicList";
import FilterBar from "../src/components/FilterBar/FilterBar";
import { useFavoriteSongs } from '../src/context/FavoriteSongsContext';
import { Song } from "../src/types";

const HomePage: React.FC = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [filteredSongs, setFilteredSongs] = useState<Song[]>([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [sortAlphabetically, setSortAlphabetically] = useState(false);
  const [originalOrder, setOriginalOrder] = useState<Song[]>([]);
  const router = useRouter();

  const { favorites } = useFavoriteSongs();

  useEffect(() => {
    fetch("http://localhost:3000/songs")
      .then((response) => response.json())
      .then((data) => {
        setSongs(data.songs);
        setOriginalOrder(data.songs);
        setFilteredSongs(data.songs);
      });
  }, []);

  const handleSongSelect = (song: Song) => {
    router.push(`/song/${song.id}`);
  };

  const handleToggleFavorites = () => {
    setShowFavorites(!showFavorites);
    setFilteredSongs(
      showFavorites
        ? songs
        : songs.filter((song) => favorites.includes(song.id))
    );
  };

  const handleSortToggle = () => {
    setSortAlphabetically(!sortAlphabetically);

    if (!sortAlphabetically) {
      setFilteredSongs((prevSongs) =>
        [...prevSongs].sort((a, b) => a.song.title.localeCompare(b.song.title))
      );
    } else {
      setFilteredSongs(originalOrder);
    }
  };

  return (
    <div>
      <Header showSearchBar={false} />
      <div>
        <FilterBar
          totalSongs={songs.length}
          showFavorites={showFavorites}
          onToggleFavorites={handleToggleFavorites}
          onSearch={(query) => {}}
          onSortToggle={handleSortToggle}
          isSortedAlphabetically={sortAlphabetically}
          songs={songs}
          onSearchSelect={handleSongSelect}
        />
        <MusicList
          songs={filteredSongs}
          onSongSelect={handleSongSelect}
        />
      </div>
    </div>
  );
};

export default HomePage;
