import '../styles/css/erekon-pendapatan.css';
import '../styles/css/dash.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
          rel="stylesheet" 
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
          crossOrigin="anonymous" 
        />
         <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Serif:wght@400;500;600&family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
      </Head>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
      </>
  );
}

export default MyApp
