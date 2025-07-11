'use client';
import React from 'react';
import styles from './PaymentInfoPage.module.scss';
import { usePaymentInfo } from '@/hooks/query/invoice/usePaymentInfo';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { formatPrice } from '@/utils/helpers/functions.helper';
import Link from 'next/link';
import IconSpinner from '@/assets/images/tube-spinner.svg?react';

const FIVE_SECONDS = 1000 * 5;

export const PaymentInfoPage = () => {
  const searchParams = useSearchParams();

  const order_id = searchParams.get('id');

  const { data, error, isSuccess, isLoading } = usePaymentInfo(order_id as string, {
    refetchInterval: (query) => {
      const status = query.state.data?.status;

      if (status === 'pending') return FIVE_SECONDS;

      return false;
    },
    enabled: !!order_id,
  });

  if (isLoading || data?.status === 'pending') {
    return (
      <div className={styles.root}>
        <h1 className={styles.title}>Информация по оплате</h1>
        <div className={styles.loadingWrapper}>
          <IconSpinner />
        </div>
        <div className={styles.loadingText}>Идет проверка платежа...</div>
      </div>
    );
  }

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Информация по оплате</h1>
      <div className={styles.content}>
        <div className={styles.wrapper}>
          {error && (
            <>
              <Image
                src='/images/payment/icon_error.svg'
                width={297}
                height={297}
                alt='icon_error'
                className={styles.image}
              />
              <div className={styles.text}>Ошибка операции</div>
              <div className={styles.linkWrapper}>
                <Link href={'/'} className={styles.link}>{`< Продолжить покупки`}</Link>
              </div>
            </>
          )}

          {isSuccess && data.status === 'paid' && (
            <>
              <Image
                src='/images/payment/icon_success.svg'
                width={297}
                height={297}
                alt='icon_success'
                className={styles.image}
              />
              <div className={styles.text}>Платеж успешно совершен</div>
              {data.price && (
                <>
                  <div className={styles.textPrice}>Сумма заказа</div>
                  <div className={styles.price}>{formatPrice(+data.price)}</div>
                </>
              )}
              <div className={styles.linkWrapper}>
                <Link href={'/'} className={styles.link}>{`< Продолжить покупки`}</Link>
              </div>
            </>
          )}

          {!order_id && <div>Укажите id заказа</div>}
        </div>
      </div>
    </div>
  );
};
