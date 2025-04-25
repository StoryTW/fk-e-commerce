import React, { PropsWithChildren } from 'react';
import styles from './MainLayout.module.scss';
import { RandomGames } from './RandomGames/RandomGames';

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className={styles.root}>
      <RandomGames />
      {children}
    </main>
  );
};
