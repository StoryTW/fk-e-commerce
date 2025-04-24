import React from 'react';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          Мы рады ответить на любые ваши вопросыс 11:00 до 21:00 вт-сб, по почте
          igro_mirsupp@mail.ru, или в Telegram{' '}
          <a href='t.me/IgromirSup' target='_blank'>
            t.me/IgromirSup
          </a>
        </div>
      </div>
    </footer>
  );
};
