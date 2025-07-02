import React from 'react';
import styles from './PromocodeCard.module.scss';
import Image from 'next/image';

interface IPromocodeCard {
  promocode: string;
  value: string;
  image: string;
}

export const PromocodeCard = ({ promocode, value, image }: IPromocodeCard) => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.imgWrapper}>
          <Image src={image} fill alt='promocode_image' />
        </div>
        <div className={styles.info}>
          <div className={styles.promocode}>{promocode}</div>
          <div className={styles.description}>
            Промокодом можно воспользоватся в отдельном поле в форме для оплаты
          </div>
        </div>
      </div>
      <div className={styles.promocodeValue}>{value}%</div>
    </div>
  );
};
