import { PaymentInfoPage } from '@/pageComponents/PaymentInfoPage/PaymentInfoPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Игромир - Информация по оплате',
  description: 'Игромир',
};

export default function PaymentInfo() {
  return <PaymentInfoPage />;
}
