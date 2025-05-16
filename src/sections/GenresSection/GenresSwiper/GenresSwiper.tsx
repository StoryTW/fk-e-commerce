'use client';
import React, { useEffect } from 'react';
import styles from './GenresSwiper.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useSwiperRef } from '@/hooks/common/useSwiperRef';
import { GenresSwiperButtons } from './GenresSwiperButtons/GenresSwiperButtons';
import { useGenresStore } from '@/store/useGenresStore';
import clsx from 'clsx';

interface IGenresSwiper {
  data: GenreStaticModel[];
}

export const GenresSwiper = ({ data }: IGenresSwiper) => {
  const { swiperRef, handlePrev, handleNext } = useSwiperRef();

  const activeGenre = useGenresStore((state) => state.activeGenre);
  const changeGenre = useGenresStore((state) => state.changeGenre);

  useEffect(() => {
    changeGenre(data[0]);
  }, []);

  return (
    <div className={styles.root}>
      <Swiper
        modules={[Navigation]}
        slidesPerView={14}
        spaceBetween={12}
        className={styles.swiper}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {data.map((genre, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                className={clsx(styles.genre, {
                  [styles.active]: genre.id === activeGenre?.id,
                })}
                onClick={() => changeGenre(genre)}
              >
                <div className={styles.imgWrapper}>
                  <div
                    className={clsx(styles.img, {
                      [styles.active]: genre.id === activeGenre?.id,
                    })}
                  >
                    {genre.img}
                  </div>
                </div>
                <div className={styles.name}>{genre.name}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <GenresSwiperButtons handleNext={handleNext} handlePrev={handlePrev} />
    </div>
  );
};
