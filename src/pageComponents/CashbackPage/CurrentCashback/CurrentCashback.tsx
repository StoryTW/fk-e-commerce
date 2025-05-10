import React from 'react';
import styles from './CurrentCashback.module.scss';
import Link from 'next/link';

const data = {
  points: '0',
};

export const CurrentCashback = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.title}>Доступно балов Cashback:</div>
          <div className={styles.points}>{data.points}</div>
        </div>
        <div className={styles.navigation}>
          <Link href={'/'} className={styles.link}>{`< Продолжить покупки`}</Link>
        </div>
      </div>
    </div>
  );
};
