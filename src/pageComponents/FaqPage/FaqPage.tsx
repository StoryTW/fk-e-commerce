import React from 'react';
import styles from './FaqPage.module.scss';
import { FaqItem } from '@/components/FaqItem/FaqItem';

const FAQ_DATA = [
  {
    question: 'Вопрос 1',
    answer: 'Ответ 1',
  },
  {
    question: 'Вопрос 2',
    answer: 'Ответ 2',
  },
  {
    question: 'Вопрос 2',
    answer: 'Ответ 2',
  },
  {
    question: 'Вопрос 3',
    answer: 'Ответ 3',
  },
  {
    question: 'Вопрос 4',
    answer: 'Ответ 4',
  },
  {
    question: 'Вопрос 5',
    answer: 'Ответ 5',
  },
  {
    question: 'Вопрос 6',
    answer: 'Ответ 6',
  },
  {
    question: 'Вопрос 7',
    answer: 'Ответ 7',
  },
  {
    question: 'Вопрос 8',
    answer: 'Ответ 8',
  },
];

export const FaqPage = () => {
  return (
    <main className={styles.root}>
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
        </div>
      </div>
    </main>
  );
};
