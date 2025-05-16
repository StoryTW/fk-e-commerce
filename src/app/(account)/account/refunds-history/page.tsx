import { AccountPageLayout } from '@/layouts/AccountPageLayout/AccountPageLayout';
import { RefundsHistoryPage } from '@/pageComponents/RefundsHistoryPage/RefundsHistoryPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Игромир - История возвратов',
  description: 'Игромир',
};

export default function RefundsHistory() {
  return (
    <AccountPageLayout title='История возвратов'>
      <RefundsHistoryPage />
    </AccountPageLayout>
  );
}
