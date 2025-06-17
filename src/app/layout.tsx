import type { Metadata } from 'next';
import localFont from 'next/font/local';
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

export const metadata: Metadata = {
  title: 'Игромир',
  description: 'Игромир',
  icons: {
    icon: Favicon.src,
    apple: Favicon.src,
  },
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

type RootLayoutType = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutType) {
  return (
    <html lang='ru'>
      <body className={geometria.className}>
        <Providers>
          <Container>
            <Menu />
            <Header />
            {children}
            <Socials />
          </Container>
        </Providers>
      </body>
    </html>
  );
}
