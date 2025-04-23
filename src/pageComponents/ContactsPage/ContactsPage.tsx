import React from 'react';
import styles from './ContactsPage.module.scss';
import Image from 'next/image';
import { AboutSection } from '@/sections/AboutSection/AboutSection';

export const ContactsPage = () => {
  return (
    <main className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.contacts}>
          <h1 className={styles.title}>Контакты для связи</h1>
          <div className={styles.content}>
            <div className={styles.block1}>
              <Image
                src={'/images/icon_mail.png'}
                width={186}
                height={161}
                alt='icon'
                className={styles.icon1}
              />
              <div className={styles.text1}>
                <span>Почта:</span> igro_mirsupp@mail.ru
              </div>
              <div className={styles.description}>Моментальный ответ</div>
            </div>

            <div className={styles.divider} />

            <div className={styles.block2}>
              <div className={styles.text2}>
                По указанным контактам вы можете задать любые интересующие вас вопросы касательно
                аренды или покупки игры.
              </div>
            </div>

            <div className={styles.block3}>
              <div className={styles.text2}>
                Мы рады ответить на любые ваши вопросыс 11:00 до 21:00 вт-сб
              </div>
            </div>

            <div className={styles.block4}>
              <Image
                src={'/images/icon_telegram.png'}
                width={189}
                height={163}
                alt='icon'
                className={styles.icon4}
              />
              <div className={styles.text1}>
                <span>Telegram:</span> t.me/IgromirSup
              </div>
              <div className={styles.description}>Онлайн 24/7</div>
            </div>
          </div>
        </div>

        <AboutSection />
      </div>
    </main>
  );
};
