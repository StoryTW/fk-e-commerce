import React from 'react';
import styles from './CatalogList.module.scss';
import { GameCard } from './GameCard/GameCard';

const CATALOG_DATA = [
  {
    name: 'Sid Meier`s Civilization VII',
    img: '/images/catalog/civil.png',
    price: '999',
    currency: 'руб',
    date: '',
    locale: '',
    genre: '',
  },
  {
    name: 'Alien: Rogue Incursion (PSVR2)',
    img: '/images/catalog/civil.png',
    price: '799',
    currency: 'руб',
    date: '',
    locale: '',
    genre: '',
  },
  {
    name: 'Lost Records: Bloom & Rage',
    img: '/images/catalog/civil.png',
    price: '899',
    currency: 'руб',
    date: '',
    locale: '',
    genre: '',
  },
  {
    name: 'Disorder',
    img: '/images/catalog/civil.png',
    price: '499',
    currency: 'руб',
    date: '',
    locale: '',
    genre: '',
  },
  {
    name: 'Empire of the Ants',
    img: '/images/catalog/civil.png',
    price: '899',
    currency: 'руб',
    date: '',
    locale: '',
    genre: '',
  },
  {
    name: 'Ender Magnolia: Bloom in the  Mist',
    img: '/images/catalog/civil.png',
    price: '499',
    currency: 'руб',
    date: '',
    locale: '',
    genre: '',
  },
  {
    name: 'Little Big Adventure – Twinsen’s Quest',
    img: '/images/catalog/civil.png',
    price: '799',
    currency: 'руб',
    date: '',
    locale: '',
    genre: '',
  },
  {
    name: 'Like a Dragon: Pirate Yakuza in Hawaii',
    img: '/images/catalog/civil.png',
    price: '1999',
    currency: 'руб',
    date: '',
    locale: '',
    genre: '',
  },
  {
    name: 'The Smurfs - Dreams',
    img: '/images/catalog/civil.png',
    price: '499',
    currency: 'руб',
    date: '',
    locale: '',
    genre: '',
  },
  {
    name: 'Metro Awakening',
    img: '/images/catalog/civil.png',
    price: '899',
    currency: 'руб',
    date: '',
    locale: '',
    genre: '',
  },
  {
    name: 'Atomic Heart',
    img: '/images/catalog/civil.png',
    price: '699',
    currency: 'руб',
    date: '',
    locale: '',
    genre: '',
  },
  {
    name: 'Dragon Age: The Veilguard',
    img: '/images/catalog/civil.png',
    price: '799',
    currency: 'руб',
    date: '',
    locale: '',
    genre: '',
  },
];

export const CatalogList = () => {
  return (
    <section className={styles.root}>
      <h2 className={styles.title}>Игры:</h2>
      <div className={styles.content}>
        {CATALOG_DATA.map((card, index) => {
          return <GameCard key={index} data={card} />;
        })}
      </div>
    </section>
  );
};
