import { PaymentInfoPage } from '@/pageComponents/PaymentInfoPage/PaymentInfoPage';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Игромир - Информация по оплате',
  description: 'Игромир',
};

export default function PaymentInfo() {
  return (
    <Suspense>
      <PaymentInfoPage />
    </Suspense>
  );
}
