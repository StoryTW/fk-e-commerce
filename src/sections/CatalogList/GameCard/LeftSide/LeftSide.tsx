import React from 'react';
import styles from './LeftSide.module.scss';
import { motion } from 'motion/react';
import { animateHelper } from '@/utils/helpers/animation.helper';

const data = {
  date: '11.02.2025',
  locale: 'Русский(интерфейс, субтитры)',
};

export const LeftSide = () => {
  return (
    <motion.div
      variants={animateHelper('cardLeft')}
      initial='hide'
      animate='show'
      exit='hide'
      transition={{
        duration: 0.5,
      }}
      className={styles.root}
    >
      <div className={styles.content}>
        <div className={styles.item}>
          <div className={styles.categoryText}>Дата выхода:</div>
          <div className={styles.valueText}>{data.date}</div>
        </div>

        <div className={styles.item}>
          <div className={styles.categoryText}>Локализация:</div>
          <div className={styles.valueText}>{data.locale}</div>
        </div>
      </div>
    </motion.div>
  );
};
