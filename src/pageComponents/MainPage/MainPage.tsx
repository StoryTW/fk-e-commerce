import React from 'react';
import styles from './MainPage.module.scss';
import NewGamesSection from '@/sections/NewGamesSection/NewGamesSection';
import CatalogList from '@/sections/CatalogList/CatalogList';
import TopPaySection from '@/sections/TopPaySection/TopPaySection';
import GenresSection from '@/sections/GenresSection/GenresSection';
import { IntroSection } from '@/sections/IntroSection/IntroSection';

export const MainPage = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <IntroSection />

        <TopPaySection />

        <NewGamesSection />

        <GenresSection />

        <CatalogList />
      </div>
    </div>
  );
};
