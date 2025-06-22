'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { FC, PropsWithChildren, useEffect } from 'react';
import ToastProvider from './ToastProvider/ToastProvider';
import Modal from '@/components/ui/Modal/Modal';
import { WHEEL_STORAGE } from '@/utils/constants';
import Cookies from 'js-cookie';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    if (!Cookies.get(WHEEL_STORAGE)) {
      Cookies.set(WHEEL_STORAGE, '1', { expires: 1 });
    }
  }, [WHEEL_STORAGE])

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ToastProvider />
      <Modal />
    </QueryClientProvider>
  );
};
