import { FaqPage } from '@/pageComponents/FaqPage/FaqPage';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Игромир - FAQ',
  description: 'Игромир',
};

export default function Faq() {
  return <FaqPage />;
}
