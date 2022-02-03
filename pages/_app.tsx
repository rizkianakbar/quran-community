import '../styles/globals.css';
import 'nprogress/nprogress.css';

import type { AppProps } from 'next/app';
import { LayoutRoot } from '../components/layout/layout-root';
import Head from 'next/head';
import nProgress from 'nprogress';
import { useEffect } from 'react';

export const progress = nProgress.configure({
  showSpinner: false,
});

function MyApp({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    const handleStart = (_: string, { shallow }: { shallow: boolean }) => {
      if (!shallow) {
        progress.start();
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
    <LayoutRoot>
      <Head>
        <title>QuranMemo</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Menghafal Al-Quran di era digital" />
        <meta content="#5EEAD3" name="theme-color" />
      </Head>
      <Component {...pageProps} />
    </LayoutRoot>
  );
}

export default MyApp;
