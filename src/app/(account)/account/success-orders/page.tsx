import { AccountPageLayout } from '@/layouts/AccountPageLayout/AccountPageLayout';
import { SuccessOrdersPage } from '@/pageComponents/SuccessOrdersPage/SuccessOrdersPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Игромир - Успешные заказы',
  description: 'Игромир',
};

export default function SuccessOrders() {
  return (
    <AccountPageLayout title='Успешные заказы'>
      <SuccessOrdersPage />
    </AccountPageLayout>
  );
}
