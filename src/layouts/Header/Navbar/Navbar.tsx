'use client';
import { ROUTER } from '@/utils/router';
import Link from 'next/link';
import React from 'react';
import styles from './Navbar.module.scss';
import { usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';
import { LayoutGroup, motion } from 'motion/react';

const DATA = [
  {
    name: 'Главная',
    href: ROUTER.MAIN,
  },
  {
    name: 'Отзывы клиентов',
    href: ROUTER.REVIEWS,
  },
  {
    name: 'Испытать удачу',
    href: ROUTER.WHEEL,
  },
  {
    name: 'Часто задаваемые вопросы',
    href: ROUTER.FAQ,
  },
  {
    name: 'Новинки',
    href: ROUTER.NEW,
  },
  {
    name: 'Контакты',
    href: ROUTER.CONTACS,
  },
];

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.root}>
      <LayoutGroup>
        {DATA.map((nav) => {
          return (
            <Link
              key={nav.name}
              href={nav.href}
              className={clsx(styles.link, {
                [styles.active]: pathname === nav.href,
              })}
            >
              {nav.name}
              {pathname === nav.href && <motion.div layoutId='underline' className={styles.line} />}
            </Link>
          );
        })}
      </LayoutGroup>
    </nav>
  );
};
