import React from 'react';
import styles from './TopPaySection.module.scss';
import { TopPaySwiper } from './TopPaySwiper/TopPaySwiper';
import { GamesServerService } from '@/services/games/games.service';

export default async function TopPaySection() {
  const { data, error } = await GamesServerService.gameList(
    {
      page: '31',
      per_page: '6',
    },
    3600,
  );

  if (error || !data?.games) {
    return null;
  }

  return (
    <section className={styles.root}>
      <h2 className={styles.title}>Топ покупок:</h2>
      <TopPaySwiper data={data.games} />
    </section>
  );
}
