import { ReviewPage } from '@/pageComponents/ReviewPage/ReviewPage';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Игромир - Отзывы',
  description: 'Игромир',
};

export default function Reviews() {
  return <ReviewPage />;
}
