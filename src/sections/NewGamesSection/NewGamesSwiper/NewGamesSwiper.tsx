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
        // effect={'cards'}
        effect={'coverflow'}
        grabCursor={true}
        slidesPerView={1.5}
        loop={true}
        spaceBetween={30}
        className={styles.swiper}
        pagination={{
          clickableClass: styles.swiper_pagination,
          bulletClass: styles.bullet,
          bulletActiveClass: styles.activeBullet,
          clickable: true,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 2.5,
          slideShadows: false,
        }}
        centeredSlides={true}
      >
        {data.map((banner, index) => {
          return (
            <SwiperSlide key={index} className={styles.slide}>
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
