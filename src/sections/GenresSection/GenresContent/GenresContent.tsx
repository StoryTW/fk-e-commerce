'use client';
import React from 'react';
import { GenresSwiper } from '../GenresSwiper/GenresSwiper';
import IconAll from '@/assets/images/genres/icon-all.svg?react';
import IconShooter from '@/assets/images/genres/icon-shooter.svg?react';
import IconAction from '@/assets/images/genres/icon-action.svg?react';
import IconRace from '@/assets/images/genres/icon-race.svg';
import IconFighter from '@/assets/images/genres/icon-fighters.svg';
import IconSport from '@/assets/images/genres/icon-sport.svg';
import IconStrategy from '@/assets/images/genres/icon-strategy.svg?react';
import IconRPG from '@/assets/images/genres/icon-rpg.svg?react';
import IconHorror from '@/assets/images/genres/icon-horror.svg?react';
import IconAdventure from '@/assets/images/genres/icon-adventure.svg?react';
import IconSimulator from '@/assets/images/genres/icon-simulator.svg?react';
import IconBrain from '@/assets/images/genres/icon-brain.svg?react';
import IconLego from '@/assets/images/genres/icon-lego.svg?react';
import IconPlaystation from '@/assets/images/genres/icon-playstation-vr.svg?react';
import IconBattleroyal from '@/assets/images/genres/icon-battleroyal.svg?react';
import IconWorld from '@/assets/images/genres/icon-world.svg?react';
import IconArcade from '@/assets/images/genres/icon-arcade.svg?react';
import IconMusic from '@/assets/images/genres/icon-music.svg?react';
import IconRole from '@/assets/images/genres/icon-rolegame.svg?react';
// import IconKids from '@/assets/images/genres/icon-kids.svg';
// import IconQuest from '@/assets/images/genres/icon-quest.svg?react';
// import IconDance from '@/assets/images/genres/icon-dance.svg?react';
// import IconNoname from '@/assets/images/genres/icon-noname.svg?react';
// import IconZomby from '@/assets/images/genres/icon-zomby.svg?react';

export const GENRES_DATA: GenreStaticModel[] = [
  {
    id: 0,
    name: 'Все',
    img: <IconAll />,
  },
  {
    id: 1,
    name: 'Playstation VR',
    img: <IconPlaystation />,
  },
  {
    id: 3,
    name: 'Открытый мир',
    img: <IconWorld />,
  },
  {
    id: 4,
    name: 'Аркада',
    img: <IconArcade />,
  },
  {
    id: 7,
    name: 'Головоломки',
    img: <IconBrain />,
  },
  {
    id: 8,
    name: 'Гонки',
    img: <IconRace />,
  },
  {
    id: 9,
    name: 'Файтинги',
    img: <IconFighter />,
  },
  {
    id: 13,
    name: 'Королевская битва',
    img: <IconBattleroyal />,
  },
  {
    id: 14,
    name: 'Lego',
    img: <IconLego />,
  },
  {
    id: 16,
    name: 'Музыкальные',
    img: <IconMusic />,
  },
  {
    id: 18,
    name: 'Приключения',
    img: <IconAdventure />,
  },
  {
    id: 19,
    name: 'Ролевая игра',
    img: <IconRole />,
  },
  {
    id: 20,
    name: 'РПГ',
    img: <IconRPG />,
  },
  {
    id: 22,
    name: 'Спорт',
    img: <IconSport />,
  },
  {
    id: 24,
    name: 'Стратегия',
    img: <IconStrategy />,
  },
  {
    id: 30,
    name: 'Хоррор',
    img: <IconHorror />,
  },
  {
    id: 31,
    name: 'Шутер',
    img: <IconShooter />,
  },
  {
    id: 34,
    name: 'Экшен',
    img: <IconAction />,
  },
  {
    id: 36,
    name: 'Симуляторы',
    img: <IconSimulator />,
  },
];

// interface IGenresContent {
//   data: GetGenresModel;
// }

export const GenresContent = () => {
  return <GenresSwiper data={GENRES_DATA} />;
};
