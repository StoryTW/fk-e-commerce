import React from 'react';
import styles from './SuccessOrderCard.module.scss';
import Image from 'next/image';

interface ISuccessOrderCard {
  image: string;
  name: string;
}

export const SuccessOrderCard = ({ image, name }: ISuccessOrderCard) => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.imgWrapper}>
          <Image src={image} alt='img' width={292} height={176} />
        </div>
        <div className={styles.content}>
          <div className={styles.name}>{name}</div>
          <div className={styles.description}>
            При заказе игры все инструкции будут отпрвалены на почту
          </div>
        </div>
      </div>
      <div className={styles.successMarker}>
        <Image
          src={'/images/success_icon_order_card.png'}
          alt='success_icon'
          width={53}
          height={52}
        />
      </div>
    </div>
  );
};
