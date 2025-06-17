import { WheelPage } from '@/pageComponents/WheelPage/WheelPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Игромир - Испытать удачу',
  description: 'Игромир',
};

export default function Wheel() {
  return (
    <div
      style={{
        paddingTop: 120,
      }}
    >
      <WheelPage />
    </div>
  );
}
