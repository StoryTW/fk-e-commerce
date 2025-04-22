import React from 'react';
import styles from './FaqItem.module.scss';

interface IFaqItem {
  question: string;
  answer: string;
}

export const FaqItem = ({ answer, question }: IFaqItem) => {
  return (
    <div className={styles.root}>
      <div className={styles.test}/>
      <div className={styles.wrapper}>
        <div className={styles.question}>
          <span>Вопрос:</span> {question}
        </div>
        <div className={styles.answer}>
          <span>Ответ:</span> {answer}
        </div>
      </div>
    </div>
  );
};
