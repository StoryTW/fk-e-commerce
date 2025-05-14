import React from 'react';
import styles from './MainPage.module.scss';
import { GenresSection } from '@/sections/GenresSection/GenresSection';
import NewGamesSection from '@/sections/NewGamesSection/NewGamesSection';
import CatalogList from '@/sections/CatalogList/CatalogList';
import TopPaySection from '@/sections/TopPaySection/TopPaySection';

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
