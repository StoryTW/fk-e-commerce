'use client';
import React, { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import { Logo } from '@/components/ui/Logo/Logo';
import { Navbar } from './Navbar/Navbar';
import { AccountIcons } from './AccountIcons/AccountIcons';
import { useBurgerStore } from '@/store/useBurgerStore';
import clsx from 'clsx';

export const Header = () => {
  const isOpen = useBurgerStore((state) => state.isOpen);
  const setIsOpen = useBurgerStore((state) => state.setIsOpen);

  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 72) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={clsx(styles.root, {
        [styles.scroll]: isScrolled,
      })}
    >
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.burgerWrapper}>
            <div className={styles.burger} onClick={setIsOpen}>
              {!isOpen ? (
                <>
                  <div className={styles.burgerLine} />
                  <div className={styles.burgerLine} />
                  <div className={styles.burgerLine} />
                </>
              ) : (
                <>
                  <div className={styles.closeLine} />
                  <div className={styles.closeLine} />
                </>
              )}
            </div>
          </div>
          <Logo />
        </div>
        <div className={styles.rightSide}>
          <Navbar />
          <AccountIcons />
        </div>
      </div>
    </header>
  );
};
