import { useRef } from 'react';
import { SwiperClass } from 'swiper/react';

export const useSwiperRef = () => {
  const swiperRef = useRef<SwiperClass>(null);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return { swiperRef, handlePrev, handleNext };
};
