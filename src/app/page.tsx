import { MainLayout } from '@/layouts/MainLayout/MainLayout';
import { MainPage } from '@/pageComponents/MainPage/MainPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Игромир - Главная',
  description: 'Игромир',
};

export default function Main() {
  return (
    <MainLayout>
      <MainPage />
    </MainLayout>
  );
}
