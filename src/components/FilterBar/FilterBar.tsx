import React from "react";
import styles from "./filter-bar.module.scss";
import SearchBar from "../SearchBar/SearchBar";
import { FilterBarProps } from '../../types';

const FilterBar: React.FC<FilterBarProps> = ({
  totalSongs,
  showFavorites,
  onToggleFavorites,
  onSearch,
  onSortToggle,
  isSortedAlphabetically,
  songs,
  onSearchSelect,
}) => {
  return (
    <div className={styles.filterBar}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <h3 className={styles.subtitle}>Your Library</h3>
          <p className={styles.counter}>
            You have {totalSongs} songs in your library
          </p>
          <button
            onClick={onToggleFavorites}
            className={`${styles.favoritesButton} ${showFavorites ? styles.favorited : ""}`}
          >
            <i className={`fa${showFavorites ? "s" : "r"} fa-heart ${styles.heartIcon}`} />
            {showFavorites ? "Show All" : "Favorites"}
          </button>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.switchContainer}>
            <span className={styles.switchLabel}>Sort from A-Z</span>
            <label className={styles.switch}>
              <input
                type="checkbox"
                checked={isSortedAlphabetically}
                onChange={onSortToggle}
              />
              <span className={styles.slider}></span>
            </label>
          </div>
          <SearchBar
            songs={songs}
            onSearchSelect={onSearchSelect}
            maxWidth="254px"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
