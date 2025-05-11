import { AccountPageLayout } from "@/layouts/AccountPageLayout/AccountPageLayout";
import { CartPage } from "@/pageComponents/CartPage/CartPage";

export default function Cart() {
  return (
    <AccountPageLayout title='Моя корзина'>
      <CartPage />
    </AccountPageLayout>
  );
}
