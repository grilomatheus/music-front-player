import React from "react";
import SongItem from "../SongItem/SongItem";
import styles from "./music-list.module.scss";

interface Song {
  id: number;
  song: {
    title: string;
    artist: string;
    album: {
      title: string;
    };
    files: {
      coverArt: string;
    };
  };
  isFavorite?: boolean;
}

interface MusicListProps {
  songs: Song[];
  onSongSelect: (song: Song) => void;
  onToggleFavorite: (id: number) => void;
}

const MusicList: React.FC<MusicListProps> = ({
  songs,
  onSongSelect,
  onToggleFavorite,
}) => {
  return (
    <div className={styles.musicList}>
      <div className={styles.container}>
        {songs.map((song) => (
          <SongItem
            key={song.id}
            id={song.id}
            song={song.song}
            isFavorite={song.isFavorite}
            onToggleFavorite={onToggleFavorite}
            onSongSelect={onSongSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default MusicList;
