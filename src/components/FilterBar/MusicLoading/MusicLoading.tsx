import React from 'react';
import styles from './music-loading.module.scss';

const MusicLoading: React.FC = () => {
  return (
    <div className={styles.equalizer}>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
    </div>
  );
};

export default MusicLoading;
