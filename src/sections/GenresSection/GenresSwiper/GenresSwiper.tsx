'use client';
import React from 'react';
import styles from './GenresSwiper.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useSwiperRef } from '@/hooks/common/useSwiperRef';
import { GenresSwiperButtons } from './GenresSwiperButtons/GenresSwiperButtons';

interface IGenresSwiper {
  data: any[];
}

export const GenresSwiper = ({ data }: IGenresSwiper) => {
  const { swiperRef, handlePrev, handleNext } = useSwiperRef();

  return (
    <div className={styles.root}>
      <Swiper
        modules={[Navigation, Pagination]}
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
              <div className={styles.genre}>
                <div className={styles.imgWrapper}>
                  <div className={styles.img}>{genre.img}</div>
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
