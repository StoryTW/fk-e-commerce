import { ReactNode } from 'react';

type PublicLayoutType = Readonly<{
  children: ReactNode;
}>;

export default function PublicLayoutPage({ children }: PublicLayoutType) {
  return <main>{children}</main>;
}
