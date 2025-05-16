import React from 'react';
import styles from './GenresSection.module.scss';
// import { GamesServerService } from '@/services/games/games.service';
import { GenresContent } from './GenresContent/GenresContent';

export default function GenresSection() {
  // const { data, error } = await GamesServerService.genres(3600);

  // if (error || !data?.games) {
  //   return null;
  // }

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Жанры:</h2>
      <GenresContent />
    </div>
  );
}
