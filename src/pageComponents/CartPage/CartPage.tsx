'use client';
import React from 'react';
import styles from './CartPage.module.scss';
import { CartCard } from './CartCard/CartCard';
import { CartOrder } from './CartOrder/CartOrder';

const data = [
  {
    name: 'Lost Records: Bloom & Rage',
    image: '/images/promocode_image.png',
    price: '899 руб',
  },
  {
    name: `Sid Meier's Civilization VII`,
    image: '/images/promocode_image.png',
    price: '999 руб',
  },
];

export const CartPage = () => {
  return (
    <div className={styles.root}>
      {!!data.length ? (
        <>
          {data.map((item, index) => {
            return <CartCard key={index} image={item.image} name={item.name} price={item.price} />;
          })}
          <CartOrder />
        </>
      ) : (
        <div className={styles.noItems}>Ваша корзина пуста</div>
      )}
    </div>
  );
};
