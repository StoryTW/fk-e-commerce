import React from 'react';
import styles from './Header.module.scss';
import { Logo } from '@/components/ui/Logo/Logo';
import { Navbar } from './Navbar/Navbar';
import { AccountIcons } from './AccountIcons/AccountIcons';

export const Header = () => {
  return (
    <header className={styles.root}>
      <div className={styles.wrapper}>
        <Logo />
        <div className={styles.rightSide}>
          <Navbar />
          <AccountIcons />
        </div>
      </div>
    </header>
  );
};
