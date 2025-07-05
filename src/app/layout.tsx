import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { Onest } from 'next/font/google';
import { Header } from '@/layouts/Header/Header';
import { Providers } from '@/providers/Providers';
import { ReactNode } from 'react';
import { Container } from '@/components/ui/Container/Container';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import '@/assets/styles/index.scss';
import Menu from '@/layouts/Menu/Menu';
import Favicon from '/public/favicon.png';
import { Socials } from '@/components/Socials/Socials';
import clsx from 'clsx';
import { CookiesPopup } from '@/components/CookiesPopup/CookiesPopup';

export const metadata: Metadata = {
  title: 'Игромир',
  description: 'Игромир',
  icons: {
    icon: Favicon.src,
    apple: Favicon.src,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
};

const geometria = localFont({
  src: [
    {
      path: './fonts/geometria/geometria_bold.otf',
      weight: '700',
      style: 'bold',
    },
    {
      path: './fonts/geometria/geometria_bolditalic.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: './fonts/geometria/geometria_extrabold.otf',
      weight: '800',
      style: 'bold',
    },
    {
      path: './fonts/geometria/geometria_light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/geometria/geometria_lightitalic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: './fonts/geometria/geometria_medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/geometria/geometria_mediumitalic.otf',
      weight: '400',
      style: 'italic',
    },
  ],
});

const onestFont = Onest({
  variable: '--font-onest',
  subsets: ['cyrillic', 'latin'],
  style: ['normal'],
  preload: true,
});

type RootLayoutType = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutType) {
  return (
    <html lang='ru'>
      <body className={clsx(geometria.className, onestFont.variable)}>
        <Providers>
          <Container>
            <Menu />
            <Header />
            {children}
            <Socials />
            <CookiesPopup />
          </Container>
          <div id='tooltipPortal' />
        </Providers>
      </body>
    </html>
  );
}
