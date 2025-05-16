'use client';
import React, { useState } from 'react';
import styles from './PayFormPage.module.scss';
import Image from 'next/image';
import { LayoutGroup, motion } from 'motion/react';
import { FormPay } from './FormPay/FormPay';

const METHODS_DATA = [
  {
    name: 'sbp',
    img: '/images/methods/sbp.png',
    width: 71,
    height: 37,
  },
  {
    name: 'card',
    img: '/images/methods/card.png',
    width: 74,
    height: 40,
  },
  {
    name: 'sberpay',
    img: '/images/methods/sberpay.png',
    width: 81,
    height: 38,
  },
  {
    name: 'tether',
    img: '/images/methods/tether.png',
    width: 114,
    height: 32,
  },
] as const;

type PaymentMethod = (typeof METHODS_DATA)[number]['name'];

export const PayFormPage = () => {
  const [isActiveMethod, setIsActiveMethod] = useState<PaymentMethod>('card');

  const handleChangeMethod = (name: PaymentMethod) => {
    setIsActiveMethod(name);
  };

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Оплата товара</h1>
      <div className={styles.block}>
        <div className={styles.header}>
          <div className={styles.text}>Способы оплаты:</div>
          <div className={styles.tooltip}>Инструкция к получению</div>
        </div>

        <div className={styles.methods}>
          <LayoutGroup id='methodsLayoutGroup'>
            {METHODS_DATA.map((item, index) => {
              return (
                <div key={index} className={styles.cardWrapper}>
                  <button
                    type='button'
                    tabIndex={-1}
                    className={styles.card}
                    onClick={() => handleChangeMethod(item.name)}
                  >
                    <Image src={item.img} alt={item.name} width={item.width} height={item.height} />
                  </button>
                  {item.name === isActiveMethod && (
                    <motion.div layoutId='underline' className={styles.line} />
                  )}
                </div>
              );
            })}
          </LayoutGroup>
        </div>

        <FormPay />
      </div>
    </div>
  );
};
