import { AccountPageLayout } from '@/layouts/AccountPageLayout/AccountPageLayout';
import { SuccessOrdersPage } from '@/pageComponents/SuccessOrdersPage/SuccessOrdersPage';

export default function SuccessOrders() {
  return (
    <AccountPageLayout title='Успешные заказы'>
      <SuccessOrdersPage />
    </AccountPageLayout>
  );
}
