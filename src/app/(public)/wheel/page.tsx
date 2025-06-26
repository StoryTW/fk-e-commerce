import { Footer } from '@/layouts/Footer/Footer';
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

      <div
        style={{
          marginTop: 64,
        }}
      >
        <Footer />
      </div>
    </div>
  );
}
