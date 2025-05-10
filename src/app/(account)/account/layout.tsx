import { AccountLayout } from '@/layouts/AccountLayout/AccountLayout';
import { ReactNode } from 'react';

type LayoutType = Readonly<{
  children: ReactNode;
}>;

export default function AccountLayoutPage({ children }: LayoutType) {
  return <AccountLayout>{children}</AccountLayout>;
}
