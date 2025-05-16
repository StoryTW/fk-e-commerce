import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Header } from '@/layouts/Header/Header';
import { Providers } from '@/providers/Providers';
import { ReactNode } from 'react';
import { Footer } from '@/layouts/Footer/Footer';
import { Container } from '@/components/ui/Container/Container';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import '@/assets/styles/index.scss';
// import FaviconPng from '/public/favicon.png';

export const metadata: Metadata = {
  title: 'Игромир',
  description: 'Игромир',
  // icons: {
  //   icon: FaviconPng.src,
  //   apple: FaviconPng.src,
  // },
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
            <Header />
            {children}
            <Footer />
          </Container>
        </Providers>
      </body>
    </html>
  );
}
