import '../styles/globals.css';
import 'nprogress/nprogress.css';

import type { AppProps } from 'next/app';
import { Layout } from '../components/layout/layout';
import Head from 'next/head';
import nProgress from 'nprogress';
import { useEffect } from 'react';
import { SessionProvider } from 'next-auth/react';

export const progress = nProgress.configure({
  showSpinner: true,
});

function MyApp({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    const handleStart = (_: string, { shallow }: { shallow: boolean }) => {
      if (!shallow) {
        progress.set(0.4);
      }
    };
    const handleStop = () => {
      progress.done();
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

  return (
    <Layout>
      <Head>
        <title>QuranMemo</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Menghafal Al-Quran di era digital" />
        <meta content="#5EEAD3" name="theme-color" />
      </Head>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Layout>
  );
}

export default MyApp;
