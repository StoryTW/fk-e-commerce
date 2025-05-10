'use client';
import React, { PropsWithChildren } from 'react';
import styles from './AccountNav.module.scss';
import Image from 'next/image';
import { AccountNavbar } from './AccountNavbar/AccountNavbar';

const data = {
  rigesterDate: '03.05.2025',
  email: 'example@example.ru',
};

export const AccountNav = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.account}>
          <div className={styles.leftTitle}>Личный кабинет</div>
          <div className={styles.leftContent}>
            <div className={styles.profileIcon}>
              <Image src={'/images/profile.png'} alt='profile_icon' width={138} height={148} />
            </div>
            <div className={styles.email}>{data.email}</div>
            <div className={styles.rigisterDate}>{`Дата регистрации: ${data.rigesterDate}`}</div>
            <AccountNavbar />
          </div>
        </div>
        <div className={styles.divider} />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};
