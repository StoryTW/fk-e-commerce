'use client';

import React, { useState } from 'react';
import styles from './Header.module.scss';
import { Logo } from '@/components/ui/Logo/Logo';
import { Navbar } from './Navbar/Navbar';
import { AccountIcons } from './AccountIcons/AccountIcons';
import { useBurgerStore } from '@/store/useBurgerStore';
import { useShallow } from 'zustand/shallow';

export const Header = () => {
  const isOpen = useBurgerStore((state) => state.isOpen);
  const setIsOpen = useBurgerStore((state) => state.setIsOpen);

  return (
    <header className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.burgerWrapper}>
            <div className={styles.burger} onClick={setIsOpen}>
              {!isOpen ? (
                <>
                  <div className={styles.burgerLine}></div>
                  <div className={styles.burgerLine}></div>
                  <div className={styles.burgerLine}></div>
                </>
              ) : (
                <>
                  <div className={styles.closeLine}></div>
                  <div className={styles.closeLine}></div>
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
