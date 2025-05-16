import { AccountPageLayout } from "@/layouts/AccountPageLayout/AccountPageLayout";
import { CartPage } from "@/pageComponents/CartPage/CartPage";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Игромир - Корзина',
  description: 'Игромир',
};

export default function Cart() {
  return (
    <AccountPageLayout title='Моя корзина'>
      <CartPage />
    </AccountPageLayout>
  );
}
