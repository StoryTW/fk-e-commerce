import React from 'react';
import styles from './CashbackPage.module.scss';
import Image from 'next/image';
import { CurrentCashback } from './CurrentCashback/CurrentCashback';

export const CashbackPage = () => {
  return (
    <>
      <div className={styles.root}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <div className={styles.text}>
              Как работает <span>Cashback:</span>
            </div>
            <div className={styles.text}>
              За каждую покупку вы получаете <span>балы, 1 бал = 15 руб</span>
            </div>
            <div className={styles.text}>
              Реализовать <span>Cashback</span> возможно не боле <span>20%</span> от стоимости игры
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <Image src={'/images/cashback_image.png'} width={136} height={127} alt='cashback' />
          </div>
        </div>
      </div>
      <CurrentCashback />
    </>
  );
};
