import { AccountPageLayout } from '@/layouts/AccountPageLayout/AccountPageLayout';
import { RefundsHistoryPage } from '@/pageComponents/RefundsHistoryPage/RefundsHistoryPage';

export default function RefundsHistory() {
  return (
    <AccountPageLayout title='История возвратов'>
      <RefundsHistoryPage />
    </AccountPageLayout>
  );
}
