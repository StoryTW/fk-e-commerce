import React from 'react';
import styles from './RightSide.module.scss';
import { motion } from 'motion/react';
import { animateHelper } from '@/utils/helpers/animation.helper';
import { Button } from '@/components/ui/Buttons/Button/Button';
import { useCartStore } from '@/store/useCartStore';
import { GENRES_DATA } from '@/sections/GenresSection/GenresContent/GenresContent';

interface IRightSide {
  data: GameModel;
}

export const RightSide = ({ data }: IRightSide) => {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
    item: GameModel,
  ) => {
    e.preventDefault();
    addItem({
      id: String(item.id),
      image: item.preview,
      price: String(item.price),
      title: item.title,
    });
  };

  const genreName = GENRES_DATA.find((item) => item.id === data.genre_id);

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
          <div className={styles.valueText}>{genreName?.name ?? 'Приключения'}</div>
        </div>

        <div className={styles.item}>
          <div className={styles.categoryText}>Аренда для:</div>
          <div className={styles.valueText}>PS4 / PS5</div>
        </div>

        <Button variant='primary' size='l' onClick={(e) => handleAddToCart(e, data)}>
          Добавить в корзину
        </Button>
      </div>
    </motion.div>
  );
};
