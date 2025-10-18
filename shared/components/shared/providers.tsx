'use client';

import * as React from 'react';
import { SessionProvider } from 'next-auth/react';
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from 'react-hot-toast';

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <SessionProvider>{children}</SessionProvider>
      <NextTopLoader color="#8e51ff" showSpinner={false} easing="ease-in-out" />
      <Toaster />
    </>
  );
};
