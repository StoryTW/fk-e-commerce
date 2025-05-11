import React from 'react';
import styles from './CartCard.module.scss';
import Image from 'next/image';

interface ICartCard {
  image: string;
  name: string;
  price: string;
}

export const CartCard = ({ image, name, price }: ICartCard) => {
  const handleDelete = () => {
    console.log('delete');
  };

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
      <button className={styles.delete} onClick={handleDelete}>
        <Image
          src={'/images/delete_icon.png'}
          alt='success_icon'
          width={53}
          height={52}
        />
      </button>
      <div className={styles.price}>{price}</div>
    </div>
  );
};
