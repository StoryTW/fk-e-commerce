import { AccountPageLayout } from "@/layouts/AccountPageLayout/AccountPageLayout";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Игромир - Испытать удачу',
  description: 'Игромир',
};

export default function LuckyWheel() {
  return (
    <AccountPageLayout title='Испытать удачу'>
      <div>LuckyWheel</div>
    </AccountPageLayout>
  );
}
