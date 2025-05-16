import { AccountPageLayout } from '@/layouts/AccountPageLayout/AccountPageLayout';
import { CashbackPage } from '@/pageComponents/CashbackPage/CashbackPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Игромир - Cashback',
  description: 'Игромир',
};

export default function Cashback() {
  return (
    <AccountPageLayout title='Cashback'>
      <CashbackPage />
    </AccountPageLayout>
  );
}
