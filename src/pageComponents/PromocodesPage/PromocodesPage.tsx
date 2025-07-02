'use client';
import React from 'react';
import styles from './PromocodesPage.module.scss';
import { PromocodeCard } from './PromocodeCard/PromocodeCard';
import { useGetPromocodes } from '@/hooks/query/account/useGetPromocodes';

export const PromocodesPage = () => {
  const { data, isLoading, error } = useGetPromocodes();

  if (isLoading || error) {
    return null;
  }

  return (
    <div className={styles.root}>
      {data?.promocodes.length ? (
        data?.promocodes.map((item, index) => {
          return (
            <PromocodeCard
              key={index}
              image={'/images/promocode_image.png'}
              promocode={item.name}
              value={item.percent}
            />
          );
        })
      ) : (
        <div className={styles.noItems}>У вас нет промокодов</div>
      )}
    </div>
  );
};
