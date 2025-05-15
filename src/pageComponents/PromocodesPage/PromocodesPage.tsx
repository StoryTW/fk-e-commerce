'use client';
import React from 'react';
import styles from './PromocodesPage.module.scss';
import { PromocodeCard } from './PromocodeCard/PromocodeCard';

const data = [
  {
    image: '/images/promocode_image.png',
    promocode: 'IGROMIR2025',
    value: '10%',
  },
];

export const PromocodesPage = () => {
  return (
    <div className={styles.root}>
      {data.map((item, index) => {
        return (
          <PromocodeCard
            key={index}
            image={item.image}
            promocode={item.promocode}
            value={item.value}
          />
        );
      })}
    </div>
  );
};
