import React from 'react';
import styles from './RandomGames.module.scss';
import { DATA_GAMES } from './RandomGames.data';
import { RandomItem } from './RandomItem/RandomItem';

export const RandomGames = () => {
  return (
    <div className={styles.root}>
      {DATA_GAMES.map((item) => {
        return (
          <RandomItem
            key={item.name}
            name={item.name}
            opacity={item.opacity}
            position={item.position}
          />
        );
      })}
    </div>
  );
};
