'use client';
import React, { useEffect, useState } from 'react';
import styles from './GamePage.module.scss';
import { AboutSection } from '@/sections/AboutSection/AboutSection';
import Image from 'next/image';
import { Button } from '@/components/ui/Buttons/Button/Button';
import Link from 'next/link';
import { getToken } from '@/utils/token';
import { useHasHydrated } from '@/hooks/common/useHasHydrated';
import { useCartStore } from '@/store/useCartStore';
import { AnimatePresence, motion } from 'motion/react';
import { Footer } from '@/layouts/Footer/Footer';

const scaleVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },
};

const leftVariants = {
  hidden: { opacity: 0, x: '100%' },
  visible: { opacity: 1, x: '0%' },
};

const rightVariants = {
  hidden: { opacity: 0, x: '-100%' },
  visible: { opacity: 1, x: '0' },
};

interface IGamePage {
  serverData: GameModel;
  fromSwiper?: boolean;
}

export const GamePage = ({ serverData, fromSwiper = false }: IGamePage) => {
  const [cleanHtml, setCleanHtml] = useState<string>('');

  const hasHydrated = useHasHydrated();

  const addItem = useCartStore((state) => state.addItem);

  const token = getToken();

  const handleAddToCart = (item: GameModel) => {
    addItem({
      id: String(item.id),
      image: item.preview,
      price: String(item.price),
      title: item.title,
    });
  };

  useEffect(() => {
    (async () => {
      const DOMPurify = (await import('dompurify')).default;

      setCleanHtml(
        DOMPurify.sanitize(serverData.description, {
          FORBID_ATTR: ['style'],
          FORBID_TAGS: ['style', 'hr', 'blockquote'],
        }),
      );
    })();
  }, [serverData]);

  if (!hasHydrated) return null;

  return (
    <div className={styles.root}>
      <div className={styles.mainInfo}>
        <h2 className={styles.title}>{serverData.title}</h2>
        <div className={styles.mainContent}>
          <AnimatePresence mode='wait'>
            <motion.div
              className={styles.left}
              variants={leftVariants}
              initial='hidden'
              animate='visible'
              transition={{ duration: 0.6 }}
            >
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
            </motion.div>
          </AnimatePresence>
          <div className={styles.cashbackImgWrapper}>
            <div className={styles.imgWrapper}>
              <Image
                src={serverData.preview}
                alt='img'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px'
                fill
              />
            </div>
            <Image
              src={'/images/cashback_image.png'}
              alt='cashback'
              width={96}
              height={91}
              className={styles.cashbackImg}
            />
          </div>
          <AnimatePresence mode='wait'>
            <motion.div
              className={styles.right}
              variants={rightVariants}
              initial='hidden'
              animate='visible'
              transition={{ duration: 0.6 }}
            >
              <div className={styles.rightContent}>
                <div className={styles.item}>
                  <div className={styles.categoryText}>Аренда для:</div>
                  <div className={styles.valueText}>PS4 / PS5</div>
                </div>

                <div className={styles.item}>
                  <Button variant='primary' size='l' onClick={() => handleAddToCart(serverData)}>
                    Добавить в корзину
                  </Button>
                </div>

                <div className={styles.item}>
                  <Link href={token ? '/account/cart' : '/auth'} className={styles.cashback}>
                    Доступен <span>Cashback</span> для пользователей
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className={styles.descriptionInfo}>
        <h2 className={styles.title}>Описание:</h2>
        {fromSwiper ? (
          <AnimatePresence mode='wait'>
            <motion.div
              initial='hidden'
              animate='visible'
              variants={scaleVariants}
              className={styles.descriptionContent}
              transition={{ duration: 0.6 }}
            >
              {serverData.description}
            </motion.div>
          </AnimatePresence>
        ) : (
          <AnimatePresence mode='wait'>
            <motion.div
              initial='hidden'
              animate='visible'
              variants={scaleVariants}
              className={styles.descriptionContent}
              transition={{ duration: 0.6 }}
            >
              <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      <AboutSection />

      <Footer />
    </div>
  );
};
