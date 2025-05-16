import { AuthPage } from '@/pageComponents/AuthPage/AuthPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Игромир - Вход',
  description: 'Игромир',
};

export default function Auth() {
  return <AuthPage />;
}
