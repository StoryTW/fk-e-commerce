'use client';
import React, { FC, Suspense } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useSwiperRef } from '@/hooks/common/useSwiperRef';
import styles from './TopPaySwiper.module.scss';
import { SwiperButtons } from './SwiperButtons/SwiperButtons';
import Image from 'next/image';
import Link from 'next/link';

interface ITopPaySwiper {
  data: GameModel[];
}

export const TopPaySwiper: FC<ITopPaySwiper> = ({ data }) => {
  const { swiperRef, handlePrev, handleNext } = useSwiperRef();

  return (
    <div className={styles.root}>
      <Swiper
        loop={true}
        modules={[Navigation]}
        slidesPerView={'auto'}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 8,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 12,
          },
        }}
        spaceBetween={12}
        className={styles.swiper}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {data.map((banner, index) => {
          return (
            <SwiperSlide key={index}>
              <Link href={`/game/${banner.id}`} className={styles.banner}>
                <Image
                  src={
                    banner?.preview.includes('https')
                      ? banner?.preview
                      : `https://404game.ru${banner?.preview}`
                  }
                  width={450}
                  height={140}
                  className={styles.image}
                  alt='image'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px'
                  quality={100}
                />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <SwiperButtons handlePrev={handlePrev} handleNext={handleNext} />
    </div>
  );
};
