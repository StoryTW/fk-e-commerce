'use client';
import React from 'react';
import styles from './NewGamesSwiper.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

interface INewGamesSwiper {
  data: {
    name: string;
    img: string;
    href: number;
  }[];
}

export const NewGamesSwiper = ({ data }: INewGamesSwiper) => {
  return (
    <div className={styles.root}>
      <Swiper
        modules={[Pagination, EffectCoverflow]}
        effect={'coverflow'}
        grabCursor
        className={styles.swiper}
        pagination={{
          clickableClass: styles.swiper_pagination,
          bulletClass: styles.bullet,
          bulletActiveClass: styles.activeBullet,
          clickable: true,
        }}
        centeredSlides
        initialSlide={1}
        slidesPerView='auto'
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 7,
          slideShadows: false,
          scale: 1,
        }}
      >
        {data.map((banner, index) => {
          return (
            <SwiperSlide key={index} className={styles.slide}>
              <Link href={`/popular/${banner.href}`} className={styles.banner}>
                <Image
                  src={
                    banner.img.includes('https') ? banner.img : `https://404game.ru${banner.img}`
                  }
                  width={817}
                  height={488}
                  className={styles.image}
                  alt='image'
                  sizes='100vw'
                  quality={100}
                />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
