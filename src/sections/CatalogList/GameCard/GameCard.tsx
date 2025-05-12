'use client';
import React, { useState } from 'react';
import styles from './GameCard.module.scss';
import Image from 'next/image';
import { AnimatePresence } from 'motion/react';
import { LeftSide } from './LeftSide/LeftSide';
import { RightSide } from './RightSide/RightSide';

interface IGameCard {
  data: any;
}

export const GameCard = ({ data }: IGameCard) => {
  const [isHoverLeft, setIsHoverLeft] = useState<boolean>(false);
  const [isHoverRight, setIsHoverRight] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHoverLeft(true);
    setIsHoverRight(true);
  };
  const handleMouseLeave = () => {
    setIsHoverLeft(false);
    setIsHoverRight(false);
  };

  return (
    <div className={styles.root} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <AnimatePresence mode='wait'>{isHoverLeft && <LeftSide />}</AnimatePresence>

      <div className={styles.wrapper}>
        <div className={styles.imgWrapper}>
          <Image src={data.img} alt='img' className={styles.img} fill />
        </div>
        <div className={styles.name}>{data.name}</div>
        <div className={styles.price}>{`${data.price} ${data.currency}`}</div>
        <button className={styles.btn} type='button' tabIndex={-1}>
          Арендовать
        </button>
      </div>

      <AnimatePresence mode='wait'>{isHoverRight && <RightSide />}</AnimatePresence>
    </div>
  );
};
