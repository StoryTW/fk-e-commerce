import React from 'react';
import styles from './CatalogSkeleton.module.scss';
import { Skeleton } from '@/components/ui/Skeleton/Skeleton';

const SKELETON_ITEMS = Array(12).fill('');

export const CatalogSkeleton = () => {
  return (
    <div className={styles.content}>
      {SKELETON_ITEMS.map((_, index) => {
        return <Skeleton key={index} width={305} height={264} />;
      })}
    </div>
  );
};
