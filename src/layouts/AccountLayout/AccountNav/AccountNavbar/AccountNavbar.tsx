'use client';
import React from 'react';
import styles from './AccountNavbar.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const DATA = [
  {
    href: '/account/cart',
    name: 'Моя корзина',
  },
  {
    href: '/account/success-orders',
    name: 'Успешные заказы',
  },
  {
    href: '/account/refunds-history',
    name: 'История возвратов',
  },
  {
    href: '/account/change-password',
    name: 'Изменить пароль',
  },
  {
    href: '/account/lucky-wheel',
    name: 'Испытать удачу',
  },
  {
    href: '/account/promocodes',
    name: 'Промокоды',
  },
  {
    href: '/account/cashback',
    name: 'Cashback',
  },
];

export const AccountNavbar = () => {
  const pathname = usePathname();

  return (
    <ul className={styles.root}>
      {DATA.map((item, index) => {
        return (
          <li
            key={index}
            className={clsx(styles.item, {
              [styles.active]: pathname === item.href,
            })}
          >
            <Link href={item.href} className={styles.link}>{item.name}</Link>
          </li>
        );
      })}
      <li className={styles.logout}>Выход</li>
    </ul>
  );
};
