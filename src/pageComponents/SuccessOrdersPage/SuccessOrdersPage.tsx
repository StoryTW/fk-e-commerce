'use client';
import React from 'react';
import styles from './SuccessOrdersPage.module.scss';
import { useGetPayments } from '@/hooks/query/invoice/useGetPayments';
import { SuccessOrderCard } from './SuccessOrderCard/SuccessOrderCard';

export const SuccessOrdersPage = () => {
  const { data, isLoading, error } = useGetPayments();

  if (isLoading || error) {
    return null;
  }

  return (
    <div className={styles.root}>
      {data?.invoices.length ? (
        <>
          {data?.invoices
            .filter((invoice) => invoice.status === 'paid')
            .map((item, index) => {
              return (
                <SuccessOrderCard
                  key={index}
                  amount={item.amount}
                  order_id={item.order_id}
                  games={item.games}
                />
              );
            })}
        </>
      ) : (
        <div className={styles.noItems}>Вы еще ничего не купили</div>
      )}
    </div>
  );
};
