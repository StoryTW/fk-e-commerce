'use client';
import React from 'react';
import styles from './AccountIcons.module.scss';
import IconCart from '@/assets/images/icon-cart.svg?react';
import IconProfile from '@/assets/images/icon-profile.svg?react';

export const AccountIcons = () => {
  const handleOpenCart = () => {
    console.log('open cart');
  };

  const handleOpenProfile = () => {
    console.log('open profile');
  };

  return (
    <div className={styles.root}>
      <button tabIndex={-1} type='button' className={styles.btn} onClick={handleOpenProfile}>
        <IconProfile />
      </button>

      <button tabIndex={-1} type='button' className={styles.btn} onClick={handleOpenCart}>
        <IconCart />
      </button>
    </div>
  );
};
