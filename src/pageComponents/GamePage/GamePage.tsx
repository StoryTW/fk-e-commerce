'use client';
import React from 'react';
import styles from './GamePage.module.scss';
import { AboutSection } from '@/sections/AboutSection/AboutSection';
import Image from 'next/image';
import { Button } from '@/components/ui/Buttons/Button/Button';
import Link from 'next/link';
import { getToken } from '@/utils/token';
import { useHasHydrated } from '@/hooks/common/useHasHydrated';

interface IGamePage {
  serverData: GameModel;
}

export const GamePage = ({ serverData }: IGamePage) => {
  const hasHydrated = useHasHydrated();

  const token = getToken();

  const handleAddToCart = () => {
    console.log('add');
  };

  if (!hasHydrated) return null;

  return (
    <div className={styles.root}>
      <div className={styles.mainInfo}>
        <h2 className={styles.title}>{serverData.title}</h2>
        <div className={styles.mainContent}>
          <div className={styles.left}>
            <div className={styles.leftContent}>
              <div className={styles.item}>
                <div className={styles.categoryText}>Дата выхода:</div>
                <div className={styles.valueText}>{serverData.date_exit}</div>
              </div>

              <div className={styles.item}>
                <div className={styles.categoryText}>Локализация:</div>
                <div className={styles.valueText}>{serverData.language}</div>
              </div>

              <div className={styles.item}>
                <div className={styles.price}>{`${serverData.price} руб`}</div>
              </div>

              <div className={styles.item}>
                <div className={styles.advice}>
                  Перед заказом игры уточните у наших менеджеров о прокате а так же технической
                  части совместимости вашей PS
                </div>
              </div>
            </div>
          </div>
          <div className={styles.imgWrapper}>
            <Image
              src={
                serverData?.preview.includes('https')
                  ? serverData?.preview
                  : `https://404game.ru${data?.preview}`
              }
              alt='img'
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px'
              fill
            />
          </div>
          <div className={styles.right}>
            <div className={styles.rightContent}>
              <div className={styles.item}>
                <div className={styles.categoryText}>Аренда для:</div>
                <div className={styles.valueText}>PS4 / PS5</div>
              </div>

              <div className={styles.item}>
                <Button variant='primary' size='l' onClick={handleAddToCart}>
                  Добавить в корзину
                </Button>
              </div>

              <div className={styles.item}>
                <Link href={token ? '/account/cart' : '/auth'} className={styles.cashback}>
                  Доступен <span>Cashback</span> для пользователей
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.descriptionInfo}>
        <h2 className={styles.title}>Описание:</h2>
        <div className={styles.descriptionContent}>{serverData.description}</div>
      </div>

      <AboutSection />
    </div>
  );
};
