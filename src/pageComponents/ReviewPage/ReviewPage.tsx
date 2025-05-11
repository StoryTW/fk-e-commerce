import React from 'react';
import styles from './ReviewPage.module.scss';
import { ReviewCard } from './ReviewCard/ReviewCard';

const data1 = [
  {
    image: '/images/review/review1.png',
    name: 'Александр Чепелев',
    text: 'ОТЛИЧНАЯ РАБОТА!!! ВСЕ ЧЕТКО, БЫСТРО, СПАСИБО!!!',
  },
  {
    image: '/images/review/review2.png',
    name: 'Дмитрий Соловьёв',
    text: 'Брал mk1 в аренду на неделю. все прекрасно, моментально. спасибо огромное!',
  },
  {
    image: '/images/review/review3.png',
    name: 'Павел Шигин',
    text: 'Самый помоему нормальный сервис продажи аккаунтов в аренду!не знаю наткнулся на него чисто ради того что с таким вопросом а дай попробую !и все нормально обьяснила команда работающая в ТО отличный выбор игр жаль только маленький выбор а так в целом все пять звезд',
  },
  {
    image: '/images/review/review4.png',
    name: 'Cristalik Yana',
    text: 'Сервис 10/10. Пользуюсь уже не первый раз, цены хорошие. Мне всё очень нравится)',
  },
];

const data2 = [
  {
    image: '/images/review/review5.png',
    name: 'Евгений Андреев',
    text: 'Брал у этого магазина много игр! А именно: Metro last light, The last of us 1 и 2 часть, а вот сейчас взял Uncharted: Насан Дрейк Collection. Не бойтесь брать у этого магазина, всё выдадут!',
  },
  {
    image: '/images/review/review6.png',
    name: 'Чоко Пай',
    text: 'Нравится сервис, только здесь заказываю игры. Все очень понятно- инструкции, ссылки- все работает. Поддержка всегда на связи. ',
  },
  {
    image: '/images/review/review7.png',
    name: 'Алексей Трифонов',
    text: 'Отличный сайт, очень нравится. Процветания парням!',
  },
  {
    image: '/images/review/review8.png',
    name: 'Виталий Гришин',
    text: 'Сервис хороший пользуюсь с удовольствием Сейчас пс5 проблем не было не разу ,бонусы скидки на личном аккаунте ,раньше помню промокод давали. РЕКОМЕНДУЮ всем своим знакомым даю этот сайт.',
  },
];

export const ReviewPage = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Отзывы клиентов</h1>
        <div className={styles.content}>
          <div className={styles.left}>
            {data1.map((item, index) => {
              return (
                <ReviewCard key={index} name={item.name} text={item.text} image={item.image} />
              );
            })}
          </div>
          <div className={styles.right}>
            {data2.map((item, index) => {
              return (
                <ReviewCard key={index} name={item.name} text={item.text} image={item.image} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
