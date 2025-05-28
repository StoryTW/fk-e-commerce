import React from 'react';
import styles from './NewGamesSection.module.scss';
import { NewGamesSwiper } from './NewGamesSwiper/NewGamesSwiper';
import { GamesServerService } from '@/services/games/games.service';

export default async function NewGamesSection() {
  const { data } = await GamesServerService.popularGamesMock();

  if (!data?.games) {
    return null;
  }
  
  return (
    <section className={styles.root}>
      <h2 className={styles.title}>Новинки на сайте:</h2>
      <NewGamesSwiper data={data?.games} />
    </section>
  );
}
