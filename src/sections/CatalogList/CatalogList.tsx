import React from 'react';
import styles from './CatalogList.module.scss';
import { CatalogContent } from './CatalogContent/CatalogContent';
import { GamesServerService } from '@/services/games/games.service';

export default async function CatalogList() {
  const { data, error } = await GamesServerService.gameList(
    {
      page: '1',
      per_page: '12',
    },
    3600,
  );

  console.log(data, 'data');

  if (error || !data?.games) {
    return null;
  }

  return (
    <section className={styles.root}>
      <h2 className={styles.title}>Игры:</h2>
      <CatalogContent serverData={data} />
    </section>
  );
}
