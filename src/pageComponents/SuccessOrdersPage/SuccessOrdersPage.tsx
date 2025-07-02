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
      {data.length ? (
        <>
          {data?.map((item, index) => {
            return <SuccessOrderCard key={index} image={item.image} name={item.name} />;
          })}
        </>
      ) : (
        <div className={styles.noItems}>Вы еще ничего не купили</div>
      )}
    </div>
  );
};
