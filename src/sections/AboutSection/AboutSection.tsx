import React from 'react';
import styles from './AboutSection.module.scss';

export const AboutSection = () => {
  return (
    <section className={styles.root}>
      <h2 className={styles.title}>О нас:</h2>
      <div className={styles.text}>
        Компания <span>IgroMir</span> молодая и стремительно растущая компания. У нас огромный
        каталог игр и каждый день мы пополняем его новыми позициями. У нас вы можете арендовать
        любые эксклюзивные игры для <span>PS4</span> и <span>PS5</span>, ААА игры и
        даже инди игры, если какой-то игры нет в нашем каталоге вы всегда можете заказать ее. Наши
        менеджеры ответят на любые вопросы связанные с прокатом или технической частью PlayStation 4
        и PlayStation 5.
      </div>
    </section>
  );
};
