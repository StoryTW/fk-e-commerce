'use client';
import React from 'react';
import styles from './CookiesPopup.module.scss';
import { useEffect, useState } from 'react';
import { COOKIES_POPUP_NAME } from '@/utils/constants';
import { Button } from '../ui/Buttons/Button/Button';

export const CookiesPopup = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const handleAcceptCookies = () => {
    localStorage.setItem(COOKIES_POPUP_NAME, 'accepted');
    setVisible(false);
  };

  useEffect(() => {
    const cookiesStorage = localStorage.getItem(COOKIES_POPUP_NAME);

    if (cookiesStorage !== 'accepted') {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.textWrapper}>
          <div className={styles.title}>Мы используем cookies!</div>
          <div className={styles.description}>Они помогают нам сделать сервис лучше</div>
        </div>
        <Button onClick={handleAcceptCookies} variant='primary' size='s'>
          Принять
        </Button>
      </div>
    </div>
  );
};
