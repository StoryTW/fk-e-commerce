import React from 'react';
import styles from './FaqPage.module.scss';
import { FaqItem } from '@/components/FaqItem/FaqItem';
import { AboutSection } from '@/sections/AboutSection/AboutSection';

const FAQ_DATA = [
  {
    question: 'Смогу ли я играть по сети в купленые игры?',
    answer: (
      <span className={styles.answerText}>
        Да. На <span style={{ color: 'var(--white)' }}>Playstation 3</span> после установки игр вы
        сможете использовать все функции игр, включая игру по сети. На{' '}
        <span style={{ color: 'var(--white)' }}>Playstation 4</span> игра по сети доступна{' '}
        <span style={{ color: 'var(--red)' }}>ТОЛЬКО</span> при наличии подписки{' '}
        <span style={{ color: 'var(--white)' }}>Playstation Plus</span> или же если установлен
        аккаунт с уже купленной подпиской.
      </span>
    ),
  },
  {
    question: 'Как купить и нужно ли регистрироваться на сайте для совершения покупки?',
    answer: (
      <span className={styles.answerText}>
        Регистрация не нужна, все ваша покупки привязываются к вашему email при оплате.
      </span>
    ),
  },
  {
    question: 'Я не нашел в списке нужной игры, Когда она будет? Как часто появляются ассортимент?',
    answer: (
      <span className={styles.answerText}>
        Ассортимент пополняется ежедневно: 2-3 раза в сутки добавляются новые игры.
      </span>
    ),
  },
  {
    question: 'Могу ли я обменять оплаченій товар на любой другой?',
    answer: (
      <span className={styles.answerText}>
        Если товар робочий и полностью соотвествует описанию, то такой товар обмену и возврату не
        подлежит. Обменять можнотолько в случае не работающего аккаунта или которій не соотвествует
        описанию.
      </span>
    ),
  },
  {
    question: 'Как долго ждать оплаченный товар?',
    answer: (
      <span className={styles.answerText}>
        После оплаты товара система автоматически выдаст вам ваш товар в автоматическом режиме,
        моментально на указаный вами email при оплате.
      </span>
    ),
  },
  {
    question: 'Возможно ли бан консоли за использование аккаунтов?',
    answer: (
      <>
        <span>Бан получают за:</span>
        <ol className={styles.answerList}>
          <li>
            1.За смену данных на аккаунте - за это бан на 3 месяца, повторное нарушение на веки
            вечные.
          </li>
          <br />
          <li>2.За трату средств с баланса аккаунта- за это точно такое же наказание от SONY.</li>
          <br />
          Недобросовестные покупатели всегда получат бан. Если покупатель четко следует инструкции и
          не нарушает условия то играет спокойно и всегда без проблем.
        </ol>
      </>
    ),
  },
];

export const FaqPage = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.faq}>
          <h1 className={styles.title}>Часто задаваемые вопросы, FAQ</h1>
          <div className={styles.content}>
            <div className={styles.divider} />
            <div className={styles.list}>
              {FAQ_DATA.map((item, index) => {
                return <FaqItem key={index} answer={item.answer} question={item.question} />;
              })}
            </div>
          </div>
          <AboutSection />
        </div>
      </div>
    </div>
  );
};
