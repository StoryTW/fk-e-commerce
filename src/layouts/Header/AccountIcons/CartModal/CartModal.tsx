'use client';
import { CartCard } from '@/pageComponents/CartPage/CartCard/CartCard';
import { CartOrder } from '@/pageComponents/CartPage/CartOrder/CartOrder';
import { useCartStore } from '@/store/useCartStore';
import React from 'react';
import styles from './CartModal.module.scss';

export const CartModal = () => {
  const items = useCartStore((state) => state.items);

  return (
    <div className={styles.root}>
      <div className={styles.title}>Моя корзина</div>
      {!!items.length ? (
        <>
          {items.map((item, index) => {
            return (
              <CartCard
                key={index}
                id={item.id}
                image={item.image}
                name={item.title}
                price={item.price}
              />
            );
          })}
          <CartOrder modal />
        </>
      ) : (
        <div className={styles.noItems}>Ваша корзина пуста</div>
      )}
    </div>
  );
};
