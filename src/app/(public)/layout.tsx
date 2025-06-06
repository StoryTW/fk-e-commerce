import { MainLayout } from '@/layouts/MainLayout/MainLayout';
import { ReactNode } from 'react';

type LayoutType = Readonly<{
  children: ReactNode;
}>;

export default function PublicLayoutPage({ children }: LayoutType) {
  return <MainLayout>{children}</MainLayout>;
}
