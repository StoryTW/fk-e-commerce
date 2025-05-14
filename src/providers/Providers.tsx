'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { FC, PropsWithChildren } from 'react';
import ToastProvider from './ToastProvider/ToastProvider';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ToastProvider />
    </QueryClientProvider>
  );
};
