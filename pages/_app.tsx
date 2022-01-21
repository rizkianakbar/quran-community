import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { LayoutRoot } from '../components/layout/layout-root';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutRoot>
      <Component {...pageProps} />
    </LayoutRoot>
  );
}

export default MyApp;
