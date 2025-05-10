import React, { PropsWithChildren } from 'react';
import styles from './AccountLayout.module.scss';
import { RandomGames } from '../MainLayout/RandomGames/RandomGames';
import { DATA_GAMES_LEFT, DATA_GAMES_RIGHT } from '../MainLayout/RandomGames/RandomGames.data';
import { AccountNav } from './AccountNav/AccountNav';

export const AccountLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className={styles.root}>
      <RandomGames data={DATA_GAMES_LEFT} isLeft />
      <div className={styles.container}>
        <AccountNav>{children}</AccountNav>
      </div>
      <RandomGames data={DATA_GAMES_RIGHT} />
    </main>
  );
};
