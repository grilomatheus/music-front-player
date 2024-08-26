import React from "react";
import styles from "./song-item.module.scss";
import { SongItemProps } from "../../types";
import { useFavoriteSongs } from "../../context/FavoriteSongsContext";

const SongItem: React.FC<SongItemProps> = ({ id, song, onSongSelect }) => {
  const { favorites, toggleFavorite } = useFavoriteSongs();

  const isFavorite = favorites.includes(id);

  const handleClick = () => {
    onSongSelect({ id, song });
  };

  const handleFavoriteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    toggleFavorite(id);
  };

  const truncateTitle = (title: string, maxLength: number) => {
    if (title.length <= maxLength) return title;
    return `${title.slice(0, maxLength)}...`;
  };

  return (
    <div className={styles.songItem} onClick={handleClick}>
      <img
        src={`/assets/images/${song.files.coverArt}`}
        alt={`${song.title} cover`}
        className={styles.songCover}
      />
      <div className={styles.songDetails}>
        <h4 className={styles.songTitle}>
          {truncateTitle(song.title, 17)}
        </h4>
        <div className={styles.songInfo}>
          <p className={styles.songArtist}>{song.artist}</p>
          <button
            className={`${styles.favoriteButton} ${
              isFavorite ? styles.favorited : ""
            }`}
            onClick={handleFavoriteClick}
          >
            <i
              className={`fa${isFavorite ? "s" : "r"} fa-heart ${
                styles.heartIcon
              }`}
            ></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SongItem;
