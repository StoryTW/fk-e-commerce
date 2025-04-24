import { MainLayout } from '@/layouts/MainLayout/MainLayout';
import { ReactNode } from 'react';

type LayoutType = Readonly<{
  children: ReactNode;
}>;

export default function AccountLayoutPage({ children }: LayoutType) {
  return <MainLayout>{children}</MainLayout>;
}
