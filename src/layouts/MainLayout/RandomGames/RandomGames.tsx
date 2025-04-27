import React, { FC } from 'react';
import styles from './RandomGames.module.scss';
import { IRandomGame } from './RandomGames.data';
import { RandomItem } from './RandomItem/RandomItem';
import clsx from 'clsx';

interface IRandomGames {
  data: IRandomGame[];
  isLeft?: boolean;
}

export const RandomGames: FC<IRandomGames> = ({ data, isLeft = false }) => {
  return (
    <div
      className={clsx(styles.root, {
        [styles.left]: isLeft,
      })}
    >
      {data.map((item) => {
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
