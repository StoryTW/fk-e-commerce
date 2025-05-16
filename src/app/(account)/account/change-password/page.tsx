import { AccountPageLayout } from '@/layouts/AccountPageLayout/AccountPageLayout';
import { ChangePasswordPage } from '@/pageComponents/ChangePasswordPage/ChangePasswordPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Игромир - Изменить пароль',
  description: 'Игромир',
};

export default function ChangePassword() {
  return (
    <AccountPageLayout title='Изменить пароль'>
      <ChangePasswordPage />
    </AccountPageLayout>
  );
}
