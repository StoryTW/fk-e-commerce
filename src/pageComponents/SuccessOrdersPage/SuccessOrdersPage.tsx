import React from 'react';
import styles from './SuccessOrdersPage.module.scss';
// import { SuccessOrderCard } from './SuccessOrderCard/SuccessOrderCard';

// const data = [];

export const SuccessOrdersPage = () => {
  return (
    <div className={styles.root}>
      {/* {!!data.length ? (
        <>
          {data?.map((item, index) => {
            return <SuccessOrderCard key={index} image={item.image} name={item.name} />;
          })}
        </>
      ) : (
        <div className={styles.noItems}>Вы еще ничего не купили</div>
      )} */}
      <div className={styles.noItems}>Вы еще ничего не купили</div>
    </div>
  );
};
