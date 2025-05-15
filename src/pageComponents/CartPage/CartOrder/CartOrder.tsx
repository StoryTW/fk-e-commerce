'use client';
import React from 'react';
import styles from './CartOrder.module.scss';
import { Button } from '@/components/ui/Buttons/Button/Button';
import Link from 'next/link';
import { useCartStore } from '@/store/useCartStore';
import { formatPrice } from '@/utils/helpers/functions.helper';

export const CartOrder = () => {
  const items = useCartStore((state) => state.items);

  const sum = items.reduce((acc, item) => {
    return acc + (parseFloat(item.price) || 0);
  }, 0);

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.sumBlock}>
          <div className={styles.text}>Сумма заказа:</div>
          <div className={styles.sum}>{formatPrice(sum)}</div>
        </div>
        <div className={styles.cashbackBlock}>
          <div className={styles.text}>Доступно баллов Cashback:</div>
          <div className={styles.sum}>0</div>
        </div>
        <div className={styles.submitBlock}>
          <Button variant='primary' size='s'>
            Заказать
          </Button>
          <Link href={'/'} className={styles.link}>{`< Продолжить покупки`}</Link>
        </div>
      </div>
    </div>
  );
};
