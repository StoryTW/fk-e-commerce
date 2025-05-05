import React from 'react';
import styles from './NewGamesSection.module.scss';
import { NewGamesSwiper } from './NewGamesSwiper/NewGamesSwiper';

const NEW_DATA = [
  {
    name: '1',
    img: '/images/swiper_new/jugglers.png',
    href: '/',
  },
  {
    name: '2',
    img: '/images/swiper_new/atomic.png',
    href: '/',
  },
  {
    name: '3',
    img: '/images/swiper_new/smurfs.png',
    href: '/',
  },
]

export const NewGamesSection = () => {
  return (
    <section className={styles.root}>
      <NewGamesSwiper data={NEW_DATA} />
    </section>
  );
};
