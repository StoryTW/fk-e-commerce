'use client';
import React from 'react';
import styles from './PromocodesPage.module.scss';
import { PromocodeCard } from './PromocodeCard/PromocodeCard';
import { useGetPromocodes } from '@/hooks/query/account/useGetPromocodes';

const data1 = [
  {
    image: '/images/promocode_image.png',
    promocode: 'IGROMIR2025',
    value: '10%',
  },
];

export const PromocodesPage = () => {
  const { data, isLoading } = useGetPromocodes();

  console.log(data, 'data');

  return (
    <div className={styles.root}>
      {data1.map((item, index) => {
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
