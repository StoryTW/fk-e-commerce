import React from 'react';
import styles from './MainPage.module.scss';
import NewGamesSection from '@/sections/NewGamesSection/NewGamesSection';
import CatalogList from '@/sections/CatalogList/CatalogList';
import TopPaySection from '@/sections/TopPaySection/TopPaySection';
import GenresSection from '@/sections/GenresSection/GenresSection';

export const MainPage = () => {
  return (
    <main className={styles.root}>
      <div className={styles.wrapper}>
        <TopPaySection />

        <NewGamesSection />

        <GenresSection />

        <CatalogList />
      </div>
    </main>
  );
};
