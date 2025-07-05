import React from 'react';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.address}>
          Общество с ограниченной
          <br />
          ответственностью «Ай Ти Пэй»
          <br />
          дата регистрации: 29.01.2025
          <br />
          инн / кпп: 9909724350 / 770387001
          <br />
          БИН 02901202510182
          <br />
          адрес регистрации: Бишкек, Ленинский район,
          <br />
          проспект Ч. Айтметова дом 29, офис Nº15
        </div>
        <div className={styles.docs}>
          <a
            href='/docs/refund_rules.pdf'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.link}
          >
            Правила возврата
          </a>

          <a
            href='/docs/privacy_policy.pdf'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.link}
          >
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </section>
  );
};
