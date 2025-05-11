import React from 'react';
import styles from './SuccessOrdersPage.module.scss';
import { SuccessOrderCard } from './SuccessOrderCard/SuccessOrderCard';

const data = [
  {
    name: 'Lost Records: Bloom & Rage',
    image: '/images/promocode_image.png',
  },
  {
    name: `Sid Meier's Civilization VII`,
    image: '/images/promocode_image.png',
  },
];

export const SuccessOrdersPage = () => {
  return (
    <div className={styles.root}>
      {!!data.length ? (
        <>
          {data.map((item, index) => {
            return <SuccessOrderCard key={index} image={item.image} name={item.name} />;
          })}
        </>
      ) : (
        <div className={styles.noItems}>Вы еще ничего не купили</div>
      )}
    </div>
  );
};
