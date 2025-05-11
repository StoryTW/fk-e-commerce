import React from 'react';
import styles from './ReviewCard.module.scss';
import Image from 'next/image';

interface IReviewCard {
  name: string;
  image: string;
  text: string;
}

export const ReviewCard = ({ image, name, text }: IReviewCard) => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.mainInfo}>
          <Image src={image} width={52} height={52} alt='img' />
          <div className={styles.name}>{name}</div>
        </div>
        <div className={styles.stars}>
          <Image src={'/images/stars_icon.png'} width={78} height={16} alt='stars' />
        </div>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
};
