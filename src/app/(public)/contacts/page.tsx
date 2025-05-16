import { ContactsPage } from "@/pageComponents/ContactsPage/ContactsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Игромир - Контакты',
  description: 'Игромир',
};

export default function Contacts() {
  return <ContactsPage />;
}
