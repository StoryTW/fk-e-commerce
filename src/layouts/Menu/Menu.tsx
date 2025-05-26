'use client';

import React from 'react';
import { DATA } from '../Header/Navbar/Navbar';
import Link from 'next/link';
import clsx from 'clsx';
import styles from './Menu.module.scss';
import { usePathname } from 'next/navigation';
import { useBurgerStore } from '@/store/useBurgerStore';
import { AnimatePresence, motion } from 'motion/react';

const Menu = () => {
  const pathname = usePathname();

  const isOpen = useBurgerStore((state) => state.isOpen);

  if (!isOpen) return;

  return (
    <AnimatePresence mode='wait'>
      <motion.div className={styles.root} initial={{ x: -300 }} animate={{ x: 0 }}>
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
            </Link>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
};

export default Menu;
