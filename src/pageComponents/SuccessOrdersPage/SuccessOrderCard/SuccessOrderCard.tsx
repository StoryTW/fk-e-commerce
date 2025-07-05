import React from 'react';
import styles from './SuccessOrderCard.module.scss';
import Image from 'next/image';
import { formatPrice } from '@/utils/helpers/functions.helper';

interface ISuccessOrderCard {
  games: string;
  order_id: string;
  amount: string;
}

export const SuccessOrderCard = ({ games, order_id, amount }: ISuccessOrderCard) => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.imgWrapper}>
          <Image src={'/images/promocode_image.png'} alt='img' width={292} height={176} />
        </div>
        <div className={styles.content}>
          <div className={styles.id}>
            {`ID заказа:`} <span>{order_id}</span>
          </div>
          <div className={styles.status}>
            {`Статус заказа:`} <span>Оплачен</span>
          </div>
          <div className={styles.games}>{`Список игр: ${games}`}</div>
          <div className={styles.sum}>
            {`Сумма заказа:`} <span>{formatPrice(Number(amount))}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
