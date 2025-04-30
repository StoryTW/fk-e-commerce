import React, { FC } from 'react';
import IconArrow from '@/assets/images/chevron-right.svg';
import styles from './GenresSwiperButtons.module.scss';
import clsx from 'clsx';

interface ISwiperButtons {
  handlePrev: () => void;
  handleNext: () => void;
  className?: string;
}

export const GenresSwiperButtons: FC<ISwiperButtons> = ({
  handlePrev,
  handleNext,
  className,
}) => {
  return (
    <>
      <button className={clsx(styles.btn, styles.prev, className)} onClick={handlePrev}>
        <IconArrow />
      </button>
      <button className={clsx(styles.btn, styles.next, className)} onClick={handleNext}>
        <IconArrow />
      </button>
    </>
  );
};
