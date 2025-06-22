// import { Close } from '@radix-ui/react-dialog';
import { motion } from 'framer-motion';
import { FC, PropsWithChildren } from 'react';
// import IconClose from '@/assets/images/ui/icon-close.svg';
import styles from './DesktopContent.module.scss';
import { animateHelper } from '@/utils/helpers/animation.helper';

export const DesktopContent: FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.div
      variants={animateHelper('modal')}
      initial='close'
      animate='open'
      exit='close'
      transition={{
        duration: 0.15,
      }}
      className={styles.contentWrapper}
    >
      <div className={styles.content}>
        {/* <Close aria-label='close' asChild>
          <div className={styles.iconClose}>
            X
          </div>
        </Close> */}
        {children}
      </div>
    </motion.div>
  );
};
