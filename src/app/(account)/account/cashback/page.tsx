import { AccountPageLayout } from '@/layouts/AccountPageLayout/AccountPageLayout';
import { CashbackPage } from '@/pageComponents/CashbackPage/CashbackPage';

export default function Cashback() {
  return (
    <AccountPageLayout title='Cashback'>
      <CashbackPage />
    </AccountPageLayout>
  );
}
