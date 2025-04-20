import React, { FC, HTMLAttributes } from 'react';
import styles from './Spinner.module.scss';
import clsx from 'clsx';

export const Spinner: FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
  return <div className={clsx(styles.spinner, className)} {...props} />;
};
