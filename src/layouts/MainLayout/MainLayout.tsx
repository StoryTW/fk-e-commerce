import React, { PropsWithChildren } from 'react';
import styles from './MainLayout.module.scss';

export const MainLayout = ({ children }: PropsWithChildren) => {
  return <main className={styles.root}>{children}</main>;
};
