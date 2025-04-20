import React, { ReactNode } from 'react';
import styles from './AuthLayout.module.scss';

type AuthLayoutType = Readonly<{
  children: ReactNode;
}>;

export const AuthLayout = ({ children }: AuthLayoutType) => {
  return (
    <main className={styles.root}>
      <div className={styles.wrapper}>{children}</div>
    </main>
  );
};
