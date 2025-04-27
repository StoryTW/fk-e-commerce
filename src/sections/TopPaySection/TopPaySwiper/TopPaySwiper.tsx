'use client';
import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useSwiperRef } from '@/hooks/common/useSwiperRef';
import styles from './TopPaySwiper.module.scss';
import { SwiperButtons } from './SwiperButtons/SwiperButtons';

interface ITopPaySwiper {
  data: any[];
}

export const TopPaySwiper: FC<ITopPaySwiper> = ({ data }) => {
  const { swiperRef, handlePrev, handleNext } = useSwiperRef();

  return (
    <div className={styles.root}>
      <Swiper
        loop={true}
        modules={[Navigation]}
        slidesPerView={3}
        spaceBetween={16}
        className={styles.swiper}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {data.map((banner, index) => {
          return (
            <SwiperSlide key={index}>
              <div className={styles.banner}>
                {banner.name}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <SwiperButtons handlePrev={handlePrev} handleNext={handleNext} />
    </div>
  );
};
