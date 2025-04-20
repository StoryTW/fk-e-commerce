import clsx from 'clsx';
import { AnimatePresence, motion } from 'motion/react';
import { FC, ReactNode } from 'react';

import styles from './ValidationHint.module.scss';
import { animateHelper } from '@/utils/helpers/animation.helper';

interface IValidationHint {
  errorMsg: string;
}

export const ValidationHint: FC<IValidationHint> = ({ errorMsg }) => {
  return (
    <AnimatePresence mode='wait'>
      {errorMsg && (
        <motion.div
          variants={animateHelper('heightWithOpacity')}
          initial='hide'
          animate='show'
          exit='hide'
          transition={{ duration: 0.15 }}
        >
          <div className={styles.error}>{errorMsg}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
