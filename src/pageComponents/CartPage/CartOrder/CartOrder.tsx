import React from 'react';
import styles from './CartOrder.module.scss';
import { Button } from '@/components/ui/Buttons/Button/Button';
import Link from 'next/link';

export const CartOrder = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.sumBlock}>
          <div className={styles.text}>Сумма заказа:</div>
          <div className={styles.sum}>1898 руб</div>
        </div>
        <div className={styles.cashbackBlock}>
          <div className={styles.text}>Доступно баллов Cashback:</div>
          <div className={styles.sum}>0</div>
        </div>
        <div className={styles.submitBlock}>
          <Button variant='primary' size='s'>Заказать</Button>
          <Link href={'/'} className={styles.link}>{`< Продолжить покупки`}</Link>
        </div>
      </div>
    </div>
  );
};
