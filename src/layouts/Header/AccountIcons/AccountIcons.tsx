'use client';
import React from 'react';
import styles from './AccountIcons.module.scss';
import IconCart from '@/assets/images/icon-cart.svg?react';
import IconProfile from '@/assets/images/icon-profile.svg?react';
import { getToken } from '@/utils/token';
import { useRouter } from 'next/navigation';
import { openModal } from '@/store/useModalStore';
import { CartModal } from './CartModal/CartModal';

export const AccountIcons = () => {
  const router = useRouter();

  const token = getToken();

  const handleOpenCart = () => {
    openModal(<CartModal />);
  };

  const handleOpenProfile = () => {
    if (token) {
      router.push('/account/cart');
    } else {
      router.push('/auth');
    }
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
