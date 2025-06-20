'use client';
import React, { useState } from 'react';
import styles from './GameCard.module.scss';
import Image from 'next/image';
import { AnimatePresence } from 'motion/react';
import { LeftSide } from './LeftSide/LeftSide';
import { RightSide } from './RightSide/RightSide';
import Link from 'next/link';
import { useCartStore } from '@/store/useCartStore';
// import { getToken } from '@/utils/token';

interface IGameCard {
  data: GameModel;
}

export const GameCard = ({ data }: IGameCard) => {
  // const token = getToken();

  const [isHoverLeft, setIsHoverLeft] = useState<boolean>(false);
  const [isHoverRight, setIsHoverRight] = useState<boolean>(false);

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

  const handleMouseEnter = () => {
    setIsHoverLeft(true);
    setIsHoverRight(true);
  };

  const handleMouseLeave = () => {
    setIsHoverLeft(false);
    setIsHoverRight(false);
  };

  return (
    <Link
      href={`/game/${data.id}`}
      className={styles.root}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence mode='wait'>{isHoverLeft && <LeftSide data={data} />}</AnimatePresence>

      <div className={styles.wrapper}>
        <div className={styles.imgWrapper}>
          <Image
            src={
              data?.preview.includes('https') ? data?.preview : `https://404game.ru${data?.preview}`
            }
            alt='img'
            className={styles.img}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px'
            fill
          />
        </div>
        <div className={styles.name}>{data?.title}</div>
        <div className={styles.price}>{`${data?.price} руб`}</div>
        <button
          className={styles.btn}
          type='button'
          tabIndex={-1}
          onClick={(e) => handleAddToCart(e, data)}
          // disabled={!token}
        >
          Купить
        </button>
      </div>

      <AnimatePresence mode='wait'>{isHoverRight && <RightSide data={data} />}</AnimatePresence>
    </Link>
  );
};
