import React, { PropsWithChildren } from 'react';
import styles from './MainLayout.module.scss';
import { RandomGames } from './RandomGames/RandomGames';
import { DATA_GAMES_LEFT, DATA_GAMES_RIGHT } from './RandomGames/RandomGames.data';

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className={styles.root}>
      <RandomGames data={DATA_GAMES_LEFT} isLeft />
      {children}
      <RandomGames data={DATA_GAMES_RIGHT} />
    </main>
  );
};
