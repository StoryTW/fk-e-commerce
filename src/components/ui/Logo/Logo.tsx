import Link from 'next/link';
import React from 'react';
import styles from './Logo.module.scss';
import IconLogo from '/public/images/logo.png';
import Image from 'next/image';
import { ROUTER } from '@/utils/router';

export const Logo = () => {
  return (
    <Link href={ROUTER.MAIN} className={styles.root}>
      <Image src={IconLogo} alt='logo' width={117} height={66} quality={100}/>
    </Link>
  );
};
