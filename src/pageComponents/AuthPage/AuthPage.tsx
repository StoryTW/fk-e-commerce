'use client';
import React, { useState } from 'react';
import styles from './AuthPage.module.scss';
import { AuthFrameEnum } from '@/utils/helpers/enums';
import { LoginFrame } from '@/pageComponents/AuthPage/LoginFrame/LoginFrame';
import { RegisterFrame } from '@/pageComponents/AuthPage/RegisterFrame/RegisterFrame';
import { LayoutGroup, motion } from 'motion/react';
import clsx from 'clsx';

const frame = {
  [AuthFrameEnum.LOGIN]: <LoginFrame />,
  [AuthFrameEnum.REGISTER]: <RegisterFrame />,
};

const NAV_DATA = [
  {
    frame: AuthFrameEnum.LOGIN,
    name: 'Вход',
  },
  {
    frame: AuthFrameEnum.REGISTER,
    name: 'Регистрация',
  },
];

export const AuthPage = () => {
  const [authFrame, setAuthFrame] = useState<AuthFrameEnum>(AuthFrameEnum.LOGIN);

  const handleChangeFrame = (frame: AuthFrameEnum) => {
    setAuthFrame(frame);
  };

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.nav}>
          <LayoutGroup id='authLayoutGroup'>
            {NAV_DATA.map((item) => {
              return (
                <button
                  key={item.frame}
                  type='button'
                  tabIndex={-1}
                  onClick={() => handleChangeFrame(item.frame)}
                  className={clsx(styles.btn, {
                    [styles.active]: authFrame === item.frame,
                  })}
                >
                  {item.name}
                  {authFrame === item.frame && (
                    <motion.div layoutId='underline' className={styles.line} />
                  )}
                </button>
              );
            })}
          </LayoutGroup>
        </div>

        <div className={styles.frameBlock}>{frame[authFrame]}</div>
      </div>
    </div>
  );
};
