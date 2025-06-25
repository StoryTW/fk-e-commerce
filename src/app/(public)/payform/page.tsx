import { PayFormPage } from '@/pageComponents/PayFormPage/PayFormPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Игромир - Оплата товара',
  description: 'Игромир',
};

export default function Payform() {
  return <PayFormPage />;
}
