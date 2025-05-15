'use client';
import React from 'react';
import styles from './CartPage.module.scss';
import { CartCard } from './CartCard/CartCard';
import { CartOrder } from './CartOrder/CartOrder';
import { useHasHydrated } from '@/hooks/common/useHasHydrated';
import { useCartStore } from '@/store/useCartStore';

export const CartPage = () => {
  const hasHydrated = useHasHydrated();

  const items = useCartStore((state) => state.items);

  if (!hasHydrated) return null;

  return (
    <div className={styles.root}>
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
          <CartOrder />
        </>
      ) : (
        <div className={styles.noItems}>Ваша корзина пуста</div>
      )}
    </div>
  );
};
