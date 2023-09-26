import { Head, Html, Main, NextScript } from 'next/document';

import ResetCSS from '@/styles/ResetCSS';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <ResetCSS />
      </body>
    </Html>
  );
}
