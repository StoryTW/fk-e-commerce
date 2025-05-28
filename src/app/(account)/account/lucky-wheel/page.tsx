import { AccountPageLayout } from '@/layouts/AccountPageLayout/AccountPageLayout';
import { WheelPage } from '@/pageComponents/WheelPage/WheelPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Игромир - Испытать удачу',
  description: 'Игромир',
};

export default function LuckyWheel() {
  return (
    <AccountPageLayout title='Испытать удачу'>
      <WheelPage />
    </AccountPageLayout>
  );
}
