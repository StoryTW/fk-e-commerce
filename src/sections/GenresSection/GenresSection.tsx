import React from 'react';
import styles from './GenresSection.module.scss';
import { GenresSwiper } from './GenresSwiper/GenresSwiper';
import IconAll from '@/assets/images/genres/icon-all.svg?react';
import IconShooter from '@/assets/images/genres/icon-shooter.svg?react';
import IconAction from '@/assets/images/genres/icon-action.svg?react';
import IconRace from '@/assets/images/genres/icon-race.svg';
import IconFighter from '@/assets/images/genres/icon-fighters.svg';
import IconSport from '@/assets/images/genres/icon-sport.svg';
import IconKids from '@/assets/images/genres/icon-kids.svg';
import IconStrategy from '@/assets/images/genres/icon-strategy.svg?react';
import IconRPG from '@/assets/images/genres/icon-rpg.svg?react';
import IconHorror from '@/assets/images/genres/icon-horror.svg?react';
import IconAdventure from '@/assets/images/genres/icon-adventure.svg?react';
import IconSimulator from '@/assets/images/genres/icon-simulator.svg?react';
import IconQuest from '@/assets/images/genres/icon-quest.svg?react';
import IconDance from '@/assets/images/genres/icon-dance.svg?react';
import IconNoname from '@/assets/images/genres/icon-noname.svg?react';
import IconZomby from '@/assets/images/genres/icon-zomby.svg?react';

const GENRES_DATA = [
  {
    name: 'Все',
    img: <IconAll />,
  },
  {
    name: 'Шутеры',
    img: <IconShooter />,
  },
  {
    name: 'Экшн',
    img: <IconAction />,
  },
  {
    name: 'Гонки',
    img: <IconRace />,
  },
  {
    name: 'Драки',
    img: <IconFighter />,
  },
  {
    name: 'Спорт',
    img: <IconSport />,
  },
  {
    name: 'Детские',
    img: <IconKids />,
  },
  {
    name: 'Стратегии',
    img: <IconStrategy />,
  },
  {
    name: 'РПГ',
    img: <IconRPG />,
  },
  {
    name: 'Ужасы',
    img: <IconHorror />,
  },
  {
    name: 'Приключения',
    img: <IconAdventure />,
  },
  {
    name: 'Симуляторы',
    img: <IconSimulator />,
  },
  {
    name: 'Квест',
    img: <IconQuest />,
  },
  {
    name: 'Танцы',
    img: <IconDance />,
  },
  {
    name: 'Noname',
    img: <IconNoname />,
  },
  {
    name: 'Зомби',
    img: <IconZomby />,
  },
];

export const GenresSection = () => {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Жанры:</h2>
      <GenresSwiper data={GENRES_DATA} />
    </div>
  );
};
