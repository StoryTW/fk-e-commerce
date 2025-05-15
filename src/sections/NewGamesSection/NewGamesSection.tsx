import React, { Suspense } from 'react';
import styles from './NewGamesSection.module.scss';
import { NewGamesSwiper } from './NewGamesSwiper/NewGamesSwiper';
import { GamesServerService } from '@/services/games/games.service';

export default async function NewGamesSection() {
  const { data, error } = await GamesServerService.popularGames(3600);

  if (error || !data?.games) {
    return null;
  }

  const slicedGames = data.games.slice(0, 3).map((game) => ({
    name: game.title,
    img: game.preview,
    href: game.id,
  }));

  return (
    <section className={styles.root}>
      <h2 className={styles.title}>Новинки на сайте:</h2>
      <NewGamesSwiper data={slicedGames} />
    </section>
  );
}
