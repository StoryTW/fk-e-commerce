'use client';
import React from 'react';
import { GenresSwiper } from '../GenresSwiper/GenresSwiper';
import IconAll from '@/assets/images/genres/icon-all.svg?react';
import IconShooter from '@/assets/images/genres/icon-shooter.svg?react';
import IconRace from '@/assets/images/genres/icon-race.svg';
import IconSport from '@/assets/images/genres/icon-sport.svg';
import IconStrategy from '@/assets/images/genres/icon-strategy.svg?react';
import IconRPG from '@/assets/images/genres/icon-rpg.svg?react';
import IconHorror from '@/assets/images/genres/icon-horror.svg?react';
import IconAdventure from '@/assets/images/genres/icon-adventure.svg?react';
import IconPlaystation from '@/assets/images/genres/icon-playstation-vr.svg?react';
import IconAction from '@/assets/images/genres/icon-action.svg?react';
import IconWorld from '@/assets/images/genres/icon-world.svg?react';
import IconArcade from '@/assets/images/genres/icon-arcade.svg?react';
import IconBattleroyal from '@/assets/images/genres/icon-battleroyal.svg?react';
import IconMusic from '@/assets/images/genres/icon-music.svg?react';
import IconZomby from '@/assets/images/genres/icon-zomby.svg?react';
import IconDance from '@/assets/images/genres/icon-dance.svg?react';
// import IconGun from '@/assets/images/genres/icon-gun.svg?react';
// import IconFighter from '@/assets/images/genres/icon-fighters.svg';
// import IconSimulator from '@/assets/images/genres/icon-simulator.svg?react';
// import IconBrain from '@/assets/images/genres/icon-brain.svg?react';
// import IconLego from '@/assets/images/genres/icon-lego.svg?react';
// import IconRole from '@/assets/images/genres/icon-rolegame.svg?react';
// import IconKids from '@/assets/images/genres/icon-kids.svg';
// import IconQuest from '@/assets/images/genres/icon-quest.svg?react';
// import IconNoname from '@/assets/images/genres/icon-noname.svg?react';

export const GENRES_DATA: GenreStaticModel[] = [
  {
    id: 0,
    name: 'Все',
    img: <IconAll />,
  },
  {
    id: 1,
    name: 'PS5',
    img: <IconPlaystation />,
  },
  {
    id: 2,
    name: 'Боевики',
    img: <IconAction />,
  },
  {
    id: 3,
    name: 'Гонки',
    img: <IconRace />,
  },
  {
    id: 4,
    name: 'Игры на двоих',
    img: <IconWorld />,
  },
  {
    id: 5,
    name: 'Платформеры',
    img: <IconArcade />,
  },
  {
    id: 6,
    name: 'Приключения',
    img: <IconAdventure />,
  },
  {
    id: 7,
    name: 'РПГ',
    img: <IconRPG />,
  },
  {
    id: 8,
    name: 'Спорт и файтинги',
    img: <IconSport />,
  },
  {
    id: 9,
    name: 'Стратегия',
    img: <IconStrategy />,
  },
  {
    id: 10,
    name: 'Хоррор',
    img: <IconHorror />,
  },
  {
    id: 11,
    name: 'Шутер',
    img: <IconShooter />,
  },
  {
    id: 13,
    name: 'VR',
    img: <IconPlaystation />,
  },
  {
    id: 100,
    name: 'Зомби',
    img: <IconZomby />,
  },
  {
    id: 101,
    name: 'Музыкальные',
    img: <IconMusic />,
  },
  {
    id: 102,
    name: 'Королевская битва',
    img: <IconBattleroyal />,
  },
  {
    id: 103,
    name: 'Танцевальные',
    img: <IconDance />,
  }
];

// interface IGenresContent {
//   data: GetGenresModel;
// }

export const GenresContent = () => {
  return <GenresSwiper data={GENRES_DATA} />;
};
