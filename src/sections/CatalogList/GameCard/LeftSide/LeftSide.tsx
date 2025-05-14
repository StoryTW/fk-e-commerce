import React from 'react';
import styles from './LeftSide.module.scss';
import { motion } from 'motion/react';
import { animateHelper } from '@/utils/helpers/animation.helper';

interface ILeftSide {
  data: GameModel;
}

export const LeftSide = ({ data }: ILeftSide) => {
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
          <div className={styles.valueText}>{data.date_exit}</div>
        </div>

        <div className={styles.item}>
          <div className={styles.categoryText}>Локализация:</div>
          <div className={styles.valueText}>{data.language}</div>
        </div>
      </div>
    </motion.div>
  );
};
