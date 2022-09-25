import '../styles/css/erekon-pendapatan.css';
import '../styles/css/dash.css'
import '../styles/css/print.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
      </>
  );
}

export default MyApp
