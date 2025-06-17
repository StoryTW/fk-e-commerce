import React from 'react';
import styles from './Socials.module.scss';
import IconTg from '@/assets/images/icon-tg.svg?react';
import IconMail from '@/assets/images/icon-mail.svg?react';
import IconPhone from '@/assets/images/icon-phone.svg?react';

const DATA = [
  {
    name: 'tg',
    icon: <IconTg />,
    link: 'https://t.me/IgromirSup',
  },
  {
    name: 'mail',
    icon: <IconMail />,
    link: 'mailto:igro_mirsupp@mail.ru',
  },
  {
    name: 'phone',
    icon: <IconPhone />,
    link: '/asd',
  },
];

export const Socials = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        {DATA.map((item, index) => {
          if (item.name === 'phone') {
            return <div key={index}>{item.icon}</div>;
          }

          return (
            <a key={index} href={item.link} target='_blank'>
              {item.icon}
            </a>
          );
        })}
      </div>
    </div>
  );
};
