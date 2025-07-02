import React from 'react';
import styles from './CartCard.module.scss';
import Image from 'next/image';
import { useCartStore } from '@/store/useCartStore';

interface ICartCard {
  image: string;
  name: string;
  price: string;
  id: string;
}

export const CartCard = ({ image, name, price, id }: ICartCard) => {
  const removeItem = useCartStore((state) => state.removeItem);

  const handleDelete = () => {
    removeItem(id);
  };

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.imgWrapper}>
          <Image
            src={image}
            alt='img'
            fill
          />
        </div>                        
        <div className={styles.content}>
          <div className={styles.name}>{name}</div>
          <div className={styles.description}>
            При заказе игры все инструкции будут отпрвалены на почту
          </div>
        </div>
      </div>
      <button className={styles.delete} onClick={handleDelete}>
        <div className={styles.delImg}>
          <Image src={'/images/delete_icon.png'} alt='success_icon' fill />
        </div>
      </button>
      <div className={styles.price}>{`${price} руб`}</div>
    </div>
  );
};
