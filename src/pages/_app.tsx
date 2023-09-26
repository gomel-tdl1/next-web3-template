import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Providers from "@/pages/Providers";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>Currency X</title>
        <meta name="description" content="Currency X" />
        <meta name="application-name" content="" />
        <meta name="generator" content="Next.js" />
        <meta name="keywords" content="Currency X" />
        <meta name="color-scheme" content="dark" />
        <meta name="creator" content="Currency X" />
        <meta name="publisher" content="Currency X" />
      </Head>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </>
  );
}
