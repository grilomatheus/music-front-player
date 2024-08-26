import React from "react";
import SongItem from "../SongItem/SongItem";
import styles from "./music-list.module.scss";
import { MusicListProps } from "../../types";

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
