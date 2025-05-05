'use client';
import React from 'react';
import styles from './NewGamesSwiper.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCards } from 'swiper/modules';
import Image from 'next/image';

interface INewGamesSwiper {
  data: {
    name: string;
    img: string;
    href: string;
  }[];
}

export const NewGamesSwiper = ({ data }: INewGamesSwiper) => {
  return (
    <div className={styles.root}>
      <Swiper
        modules={[Pagination, EffectCards]}
        effect={'cards'}
        grabCursor={true}
        className={styles.swiper}
        // onBeforeInit={(swiper) => {
        //   swiperRef.current = swiper;
        // }}
      >
        {data.map((banner, index) => {
          return (
            <SwiperSlide key={index}>
              <div className={styles.banner}>
                <Image
                  src={banner.img}
                  width={817}
                  height={488}
                  className={styles.image}
                  alt='image'
                  sizes='100vw'
                  quality={100}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
