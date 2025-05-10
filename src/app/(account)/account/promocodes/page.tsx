import { AccountPageLayout } from '@/layouts/AccountPageLayout/AccountPageLayout';
import { PromocodesPage } from '@/pageComponents/PromocodesPage/PromocodesPage';

export default function Promocodes() {
  return (
    <AccountPageLayout title='Промокоды'>
      <PromocodesPage />
    </AccountPageLayout>
  );
}
