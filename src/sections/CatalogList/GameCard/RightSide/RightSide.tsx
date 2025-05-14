import React from 'react';
import styles from './RightSide.module.scss';
import { motion } from 'motion/react';
import { animateHelper } from '@/utils/helpers/animation.helper';
import { Button } from '@/components/ui/Buttons/Button/Button';

const data = {
  genre: 'Стратегия',
  locale: 'Русский(интерфейс, субтитры)',
};

interface IRightSide {
  data: GameModel;
}

export const RightSide = ({ data }: IRightSide) => {
  const handleAddToCart = () => {
    console.log('add');
  };

  return (
    <motion.div
      variants={animateHelper('cardRight')}
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
          <div className={styles.categoryText}>Жанр:</div>
          <div className={styles.valueText}>{data.genre_id}</div>
        </div>

        <div className={styles.item}>
          <div className={styles.categoryText}>Аренда для:</div>
          <div className={styles.valueText}>PS4 / PS5</div>
        </div>

        <Button variant='primary' size='l' onClick={handleAddToCart}>
          Добавить в корзину
        </Button>
      </div>
    </motion.div>
  );
};
