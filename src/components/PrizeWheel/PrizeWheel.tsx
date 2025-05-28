'use client';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import styles from './PrizeWheel.module.scss';
import { Button } from '../ui/Buttons/Button/Button';
import { getToken } from '@/utils/token';
import { useRouter } from 'next/navigation';
import { useHasHydrated } from '@/hooks/common/useHasHydrated';
import { toast } from 'react-toastify';
import Image from 'next/image';
import Cookies from 'js-cookie';
import { WHEEL_STORAGE } from '@/utils/constants';

const Wheel = dynamic(() => import('react-custom-roulette').then((mod) => mod.Wheel), {
  ssr: false,
});

const data = [
  {
    option: 'Forza Horizon',
    image: {
      uri: '/images/wheel/forza_img.png',
      sizeMultiplier: 2.3,
      offsetY: -40,
      offsetX: -20,
    },
  },
  {
    option: 'Получить промокод 20%',
    image: {
      uri: '/images/wheel/gta_img.png',
      sizeMultiplier: 3,
      offsetY: 110,
      offsetX: -10,
    },
  },
  {
    option: 'Пробовать еще',
    image: {
      uri: '/images/wheel/retry.png',
      sizeMultiplier: 2.3,
      offsetX: -15,
    },
  },
  {
    option: 'Хорошая попытка',
    image: {
      uri: '/images/wheel/nt.png',
      sizeMultiplier: 2.25,
      offsetX: -15,
    },
  },
  {
    option: 'Получить промокод 10%',
    image: {
      uri: '/images/wheel/spider.png',
      sizeMultiplier: 2.8,
      offsetY: 130,
      offsetX: 15,
    },
  },
  {
    option: 'Mortal Combat',
    image: {
      uri: '/images/wheel/mortal.png',
      sizeMultiplier: 2.3,
      offsetX: -15,
    },
  },
  {
    option: 'Получить промокод 5%',
    image: {
      uri: '/images/wheel/fifa.png',
      sizeMultiplier: 3,
      offsetY: 94,
      offsetX: -6,
    },
  },
  {
    option: 'Получить промокод 5%',
    image: {
      uri: '/images/wheel/overwatch.png',
      sizeMultiplier: 2.9,
      offsetY: 128,
      offsetX: 15,
    },
  },
];

export const PrizeWheel = () => {
  const token = getToken();
  const router = useRouter();
  const hasHydrated = useHasHydrated();

  const [mustSpin, setMustSpin] = useState<boolean>(false);
  const [prizeNumber, setPrizeNumber] = useState<number>(0);

  const handleSpinClick = () => {
    const spin = Cookies.get(WHEEL_STORAGE);

    if (!mustSpin && spin === '1') {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  const handleNavigate = () => {
    router.push('/auth');
  };

  const handleToast = () => {
    if (prizeNumber === 2) {
      return;
    }

    if (prizeNumber === 3) {
      toast.success('Ничего страшного в следующий раз повезет');
      Cookies.set(WHEEL_STORAGE, '0');
      return;
    }

    toast.success(`Поздравляем! Вы выиграли: ${data[prizeNumber].option}`);
    Cookies.set(WHEEL_STORAGE, '0');
    return;
  };

  if (!hasHydrated) return null;

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.wheelWrapper}>
          <Image
            src={'/images/wheel/circle2.png'}
            alt='circle'
            width={445}
            height={500}
            className={styles.circle2}
          />
          <Image
            src={'/images/wheel/circle.png'}
            alt='circle2'
            width={160}
            height={180}
            className={styles.circle}
          />
          <div className={styles.dot} />
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            onStopSpinning={() => {
              setMustSpin(false);
              handleToast();
            }}
            radiusLineColor={'#638ac0'}
            pointerProps={{
              src: '/images/wheel/pointer.png',
              style: {
                transform: 'rotate(-48deg)',
                width: 250,
                height: 128,
                right: -50,
                top: 10,
                zIndex: 100,
              },
            }}
            outerBorderWidth={2}
            outerBorderColor={'#638ac0'}
          />
        </div>
        <Button
          variant='primary'
          size='s'
          disabled={!token || Cookies.get(WHEEL_STORAGE) === '0'}
          onClick={token ? handleSpinClick : handleNavigate}
        >
          {token ? 'Испытать удачу' : 'Зарегистрироваться'}
        </Button>
      </div>
    </div>
  );
};
