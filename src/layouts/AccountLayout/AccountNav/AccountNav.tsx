'use client';
import React, { PropsWithChildren } from 'react';
import styles from './AccountNav.module.scss';
import Image from 'next/image';
import { AccountNavbar } from './AccountNavbar/AccountNavbar';
import { useGetUser } from '@/hooks/query/account/useGetUser';
import dayjs from 'dayjs';

export const AccountNav = ({ children }: PropsWithChildren) => {
  const { data, isLoading } = useGetUser();

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.account}>
          <div className={styles.leftTitle}>Личный кабинет</div>
          <div className={styles.leftContent}>
            <div className={styles.profileIcon}>
              <Image src={'/images/profile.png'} alt='profile_icon' width={138} height={148} />
            </div>
            <div className={styles.email}>{isLoading ? 'Загрузка...' : data?.email}</div>
            <div
              className={styles.rigisterDate}
            >{`Дата регистрации: ${isLoading ? 'Загрузка...' : dayjs(data?.created_at).format('DD.MM.YYYY')}`}</div>
            <AccountNavbar />
          </div>
        </div>
        <div className={styles.divider} />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};
