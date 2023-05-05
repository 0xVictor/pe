import { globalStyles } from '@/styles/Global';
import type { AppProps } from 'next/app';
import { SessionProvider as AuthProvider } from 'next-auth/react';

import '@blocknote/core/style.css';

import { NextUIProvider } from '@nextui-org/react';
import Layout from '@/components/Layout';

globalStyles();

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <NextUIProvider>
      <AuthProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </NextUIProvider>
  );
}
