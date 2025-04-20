import { AuthLayout } from '@/layouts/AuthLayout/AuthLayout';
import { ReactNode } from 'react';

type AuthLayoutType = Readonly<{
  children: ReactNode;
}>;

export default function AuthLayoutPage({ children }: AuthLayoutType) {
  return <AuthLayout>{children}</AuthLayout>;
}
