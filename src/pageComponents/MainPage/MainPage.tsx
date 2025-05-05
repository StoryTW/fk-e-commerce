import React from 'react';
import styles from './MainPage.module.scss';
import { TopPaySection } from '@/sections/TopPaySection/TopPaySection';
// import { NewGamesSection } from '@/sections/NewGamesSection/NewGamesSection';
import { GenresSection } from '@/sections/GenresSection/GenresSection';
import { CatalogList } from '@/sections/CatalogList/CatalogList';

export const MainPage = () => {
  return (
    <main className={styles.root}>
      <div className={styles.wrapper}>
        <TopPaySection />

        {/* <NewGamesSection /> */}

        <GenresSection />

        <CatalogList />
      </div>
    </main>
  );
};
