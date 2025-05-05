'use client';
import React, { useState } from 'react';
import styles from './GameCard.module.scss';
import Image from 'next/image';
import { AnimatePresence, motion } from 'motion/react';
import { animateHelper } from '@/utils/helpers/animation.helper';

interface IGameCard {
  data: any;
}

export const GameCard = ({ data }: IGameCard) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div className={styles.root} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {isHover && (
        <AnimatePresence>
          <motion.div
            variants={animateHelper('cardLeft')}
            initial='hide'
            animate='show'
            exit='hide'
            transition={{
              duration: 0.5,
            }}
            className={styles.left}
          >
            <div>left</div>
          </motion.div>
        </AnimatePresence>
      )}
      <div className={styles.wrapper}>
        <div className={styles.imgWrapper}>
          <Image src={data.img} alt='img' fill />
        </div>
        <div className={styles.name}>{data.name}</div>
        <div className={styles.price}>{`${data.price} ${data.currency}`}</div>
        <button className={styles.btn} type='button' tabIndex={-1}>
          Арендовать
        </button>
      </div>
    </div>
  );
};
