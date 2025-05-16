import { AccountPageLayout } from '@/layouts/AccountPageLayout/AccountPageLayout';
import { PromocodesPage } from '@/pageComponents/PromocodesPage/PromocodesPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Игромир - Промокоды',
  description: 'Игромир',
};

export default function Promocodes() {
  return (
    <AccountPageLayout title='Промокоды'>
      <PromocodesPage />
    </AccountPageLayout>
  );
}
