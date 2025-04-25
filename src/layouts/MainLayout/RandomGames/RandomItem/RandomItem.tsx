import React, { FC } from 'react';
import styles from './RandomItem.module.scss';
import { IRandomGame } from '../RandomGames.data';

export const RandomItem: FC<IRandomGame> = ({ name, opacity, position }) => {
  return (
    <span
      className={styles.root}
      style={{
        opacity: opacity,
        top: position.top ?? 'unset',
        left: position.left ?? 'unset',
        bottom: position.bottom ?? 'unset',
        right: position.right ?? 'unset',
      }}
    >
      {name}
    </span>
  );
};
